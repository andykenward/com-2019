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
  ResponsiveValue,
  style,
  textAlign,
} from "styled-system"

/**
 * INTERFACES
 */
export interface StyledProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  css?: CSSObject | SerializedStyles | InterpolationWithTheme<any>
}

export interface TextTransformProps {
  textTransform?: CSS.TextTransformProperty
}

interface BackgroundColorProps {
  readonly bg?: ResponsiveValue<CSS.BackgroundColorProperty>
  readonly backgroundColor?: ResponsiveValue<CSS.BackgroundColorProperty>
}

export interface ColorsProps extends BackgroundColorProps {
  readonly c?: ResponsiveValue<CSS.ColorProperty>
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
const textColor = style({
  prop: "c",
  cssProperty: "color",
})
const backgroundColor = style({
  prop: "backgroundColor",
  cssProperty: "background-color",
  alias: "bc",
})

export const fontSize = style({
  prop: "fontSize",
  cssProperty: "fontSize",
  transformValue: convertToRem,
})

// export const fontSize = system({
//   fontSize: {
//     property: "fontSize",
//     scale: "fontSizes",
//     transform: convertToRem,
//   },
//   ...textTransform,
// })

// const sColors = system({
//   prop: "c",
//   cssProperty: "color",
// })

/**
 * COMPOSED STYLES
 */
export const colors = compose(
  //@ts-ignore
  textColor,
  backgroundColor
)
export const typography = compose(
  fontFamily,
  //@ts-ignore
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textAlign,
  fontStyle,
  textTransform
)
