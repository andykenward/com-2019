import { Global } from "@emotion/core"
import css from "@emotion/css"
import Document, { Head, Main, NextScript } from "next/document"
import React from "react"

import { GA_TRACKING_ID } from "../lib/gtag"

const IS_DEV = process.env.NODE_ENV === "development"

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {!IS_DEV && (
            <>
              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_TRACKING_ID}');`,
                }}
              />
            </>
          )}
          <link rel="stylesheet" href="/static/normalize.css" />
          <link rel="stylesheet" href="/static/fonts/index.css" />
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
