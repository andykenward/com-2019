import styled, { CreateStyled } from "@emotion/styled"
import React from "react"

import {
  CSSObject,
  SerializedStyles,
  InterpolationWithTheme,
} from "@emotion/core"

import { Theme } from "../theme"

/**
 * TODO: pass `as` typings down if component
 */
export interface StyledProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  css?: CSSObject | SerializedStyles | InterpolationWithTheme<any>
}

export default styled as CreateStyled<Theme>
