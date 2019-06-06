import React from "react"
import css from "@emotion/css"

import { Box } from "./box"

export const List: React.FC = ({ children }) => (
  <Box
    as="ul"
    m={0}
    p={0}
    css={css`
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(186px, 1fr));
    `}
  >
    {children}
  </Box>
)
