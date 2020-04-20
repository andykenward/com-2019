import { Global } from "@emotion/core"
import css from "@emotion/css"
import { ThemeProvider } from "emotion-theming"
import { AppProps } from "next/app"
import Head from "next/head"
import { useEffect } from "react"

import Normalize from "../assets/normalize.css"
import { Fonts } from "../components/fonts"
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
    <>
      <Head>
        <link rel="stylesheet" href={`${Normalize}`} />
      </Head>
      <Fonts />
      <Global
        styles={css`
          html {
            box-sizing: border-box;
            font-family: "Open Sans", "serif";
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
