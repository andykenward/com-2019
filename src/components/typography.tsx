import React from "react"

import styled, { StyledProps } from "../utils/styled"
import { filterProps, FontSizeProps, fontSize } from "../styled-system"

import "../fonts/index.css"

const Text = styled("p", { shouldForwardProp: filterProps })<
  StyledProps & FontSizeProps
>`
  ${fontSize}
`

export const Body: React.FC = ({ children }) => <Text fs={16}>{children}</Text>
