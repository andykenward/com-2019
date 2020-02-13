import { Global } from "@emotion/core"
import css from "@emotion/css"
import Document, { Head, Main, NextScript } from "next/document"
import React from "react"

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="/static/normalize.css" />
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
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
