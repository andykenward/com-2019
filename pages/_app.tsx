import { ThemeProvider } from "emotion-theming"
import { AppProps } from "next/app"

import { Fonts } from "../components/fonts"
import { theme } from "../lib/theme"

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Fonts />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default MyApp
