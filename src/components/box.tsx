import {
  color,
  ColorProps,
  filterProps,
  fontSize,
  FontSizeProps,
  space,
  SpaceProps,
} from "../styled-system"
import styled, { StyledProps } from "../utils/styled"

export const Box = styled("div", { shouldForwardProp: filterProps })<
  StyledProps & ColorProps & FontSizeProps & SpaceProps
>`
  ${color}
  ${fontSize}
  ${space}
`
