import "../public/normalize.css"
import "../public/fonts/index.css"
import "../public/index.css"

import { ThemeProvider } from "emotion-theming"
import { AppProps } from "next/app"
import { useEffect } from "react"

import { theme } from "../lib/theme"

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    // https://github.com/zeit/next.js/issues/3303
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
      const cachedScrollPositions: number[][] = []
      let shouldScrollRestore: { x: number; y: number } | null

      router.events.on("routeChangeStart", () => {
        if (!shouldScrollRestore) {
          cachedScrollPositions.push([window.scrollX, window.scrollY])
        }
      })

      router.events.on("routeChangeComplete", () => {
        if (shouldScrollRestore) {
          const { x, y } = shouldScrollRestore
          window.scrollTo(x, y)
          shouldScrollRestore = null
        }
      })

      router.beforePopState(() => {
        if (cachedScrollPositions.length > 0) {
          const [x, y] = cachedScrollPositions.pop()
          shouldScrollRestore = { x, y }
        }
        return true
      })
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
