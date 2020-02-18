import { Global } from "@emotion/core"
import css from "@emotion/css"
import { ThemeProvider } from "emotion-theming"
import { AppProps } from "next/app"
import Head from "next/head"

import Normalize from "../assets/normalize.css"
import { Fonts } from "../components/fonts"
import { theme } from "../lib/theme"

const MyApp = ({ Component, pageProps }: AppProps) => (
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

export default MyApp
