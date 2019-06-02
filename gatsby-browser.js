import { ThemeProvider } from "emotion-theming"
import { css, Global } from "@emotion/core"
import React from "react"
import emotionNormalize from "emotion-normalize"

import { theme } from "./src/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
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
        ${emotionNormalize}
      `}
    />
    {element}
  </ThemeProvider>
)
