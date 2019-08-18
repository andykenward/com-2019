import { css, Global } from "@emotion/core"
import emotionNormalize from "emotion-normalize"
export const Head: React.FC = () => (
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
  </>
)
