import { SerializedStyles } from "@emotion/css"
import styled, { CreateStyled, CSSObject } from "@emotion/styled"
import React from "react"

import { Theme } from "../theme"

/**
 * TODO: pass `as` typings down if component
 */
export interface StyledProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  css?: CSSObject | SerializedStyles
}

export default styled as CreateStyled<Theme>
