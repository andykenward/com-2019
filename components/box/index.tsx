import styled from "@emotion/styled"
import {
  color,
  ColorProps,
  display,
  DisplayProps,
  flexWrap,
  FlexWrapProps,
  FontSizeProps,
  grid,
  GridProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from "styled-system"

import {
  fontSize,
  StyledProps,
  TextTransformProps,
} from "../../lib/styled-system"
import { filterProps } from "../../lib/utils"

export interface BoxProps
  extends StyledProps,
    TextTransformProps,
    ColorProps,
    FontSizeProps,
    SpaceProps,
    WidthProps,
    DisplayProps,
    FlexWrapProps,
    GridProps {}

export const Box = styled("div", { shouldForwardProp: filterProps })<BoxProps>`
  ${color}
  ${fontSize}
  ${space}
  ${width}
  ${display}
  ${flexWrap}
  ${grid}
  `
