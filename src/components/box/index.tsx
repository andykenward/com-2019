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
  gridRowGap,
  gridColumn,
  GridColumnProps,
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
  GridRowGapProps,
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
    GridColumnProps &
    GridGapProps &
    GridRowGapProps &
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
  ${gridRowGap}
  ${gridColumn}
`
