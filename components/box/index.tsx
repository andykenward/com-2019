import styled from "@emotion/styled"
import {
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
  ColorProps,
  StyledProps,
  TextTransformProps,
} from "../../@types/styled-system"
import { color, fontSize } from "../../lib/styled-system"
import { filterProps } from "../../lib/utils"

export interface BoxProps
  extends ColorProps,
    DisplayProps,
    FlexWrapProps,
    FontSizeProps,
    GridProps,
    SpaceProps,
    TextTransformProps,
    WidthProps,
    StyledProps {}

export const Box = styled("div", { shouldForwardProp: filterProps })<BoxProps>`
  ${color}
  ${display}
  ${flexWrap}
  ${fontSize}
  ${grid}
  ${space}
  ${width}
  `
