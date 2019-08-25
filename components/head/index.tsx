import { css, Global } from "@emotion/core"
import emotionNormalize from "emotion-normalize"
import NextHead from "next/head"

interface Props {
  title?: string
  description?: string
}

export const Head: React.FC<Props> = ({
  title = "Andy Kenward - Senior Front-End Engineer",
  description = "Andy Kenward, Senior Front-End Engineer in London, England",
}) => (
  <>
    <Global
      styles={css`
        @import "/static/fonts/index.css";
        ${emotionNormalize}
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
    <NextHead>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      ></meta>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </NextHead>
  </>
)
