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
    `}
  >
    {children}
  </Box>
)

export const ListItem: React.FC = ({ children }) => (
  <Box as="li" m={0} mb={16} p={0} display="list-item">
    {children}
  </Box>
)
