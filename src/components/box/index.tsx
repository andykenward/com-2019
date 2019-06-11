import {
  display,
  DisplayProps,
  flexWrap,
  FlexWrapProps,
  width,
  WidthProps,
  gridTemplateColumns,
  gridGap,
  GridTemplateColumnsProps,
} from "styled-system"

import {
  color,
  ColorProps,
  filterProps,
  fontSize,
  FontSizeProps,
  space,
  SpaceProps,
  GridGapProps,
} from "../../styled-system"
import styled, { StyledProps } from "../../utils/styled"

export const Box = styled("div", { shouldForwardProp: filterProps })<
  StyledProps &
    ColorProps &
    FontSizeProps &
    SpaceProps &
    WidthProps &
    DisplayProps &
    FlexWrapProps &
    GridGapProps &
    GridTemplateColumnsProps
>`
  ${color}
  ${fontSize}
  ${space}
  ${width}
  ${display}
  ${flexWrap}
  ${gridTemplateColumns}
  ${gridGap}
`
