import { is } from "ramda"
import {
  background,
  backgroundColor,
  color as ssColor,
  compose,
  fontFamily,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  opacity,
  style,
  system,
  textAlign,
} from "styled-system"

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

export const textColor = system({
  textColor: {
    property: "color",
    scale: "colors",
  },
})

export const color = compose(
  ssColor,
  textColor
)

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
