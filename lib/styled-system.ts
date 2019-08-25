import {
  CSSObject,
  InterpolationWithTheme,
  SerializedStyles,
} from "@emotion/core"
import * as CSS from "csstype"
import { is } from "ramda"
import {
  compose,
  fontFamily,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  style,
  textAlign,
} from "styled-system"

/**
 * INTERFACES
 */
export interface StyledProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any> // eslint-disable-line
  css?: CSSObject | SerializedStyles | InterpolationWithTheme<any> // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface TextTransformProps {
  textTransform?: CSS.TextTransformProperty
}

/**
 *
 * UTILS
 */
export const fontStack = (fonts: string[]): string =>
  fonts.map(font => (font.includes(" ") ? `"${font}"` : font)).join(", ")

export const convertToRem = (n: number | string): string | number =>
  is(Number, n) ? `${(n as number) / 16}rem` : n

export const propKeys = ["color", "fontSize"]

/**
 * CUSTOM styles
 */
const textTransform = style({
  prop: "textTransform",
  cssProperty: "textTransform",
})

export const fontSize = style({
  prop: "fontSize",
  cssProperty: "fontSize",
  transformValue: convertToRem,
})

/**
 * COMPOSED STYLES
 */

export const typography = compose(
  fontFamily,
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  //@ts-ignore
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textAlign,
  fontStyle,
  textTransform
)
