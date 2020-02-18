import Document, { Head, Main, NextScript } from "next/document"
import React from "react"

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
