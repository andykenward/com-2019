import styled, { CreateStyled } from "@emotion/styled"
import React from "react"

import { Theme } from "../theme"

/**
 * TODO: pass `as` typings down if component
 */
export interface StyledProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

export default styled as CreateStyled<Theme>
