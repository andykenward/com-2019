import styled, { StyledProps } from "../styled"
import {
  BgProps,
  ColorProps,
  filterSsProps,
  ssBackgroundColor,
  ssColor,
} from "../styled-system"

export const Box = styled("div", { shouldForwardProp: filterSsProps })<
  StyledProps & ColorProps & BgProps
>`
  ${ssColor}
  ${ssBackgroundColor}
`
