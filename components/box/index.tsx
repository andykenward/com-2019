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
  colors,
  ColorsProps,
  fontSize,
  StyledProps,
  TextTransformProps,
} from "../../lib/styled-system"
import { filterProps } from "../../lib/utils"

export interface BoxProps
  extends StyledProps,
    TextTransformProps,
    ColorsProps,
    FontSizeProps,
    SpaceProps,
    WidthProps,
    DisplayProps,
    FlexWrapProps,
    GridProps {}

export const Box = styled("div", { shouldForwardProp: filterProps })<BoxProps>`
  ${colors}
  ${fontSize}
  ${space}
  ${width}
  ${display}
  ${flexWrap}
  ${grid}
  `
