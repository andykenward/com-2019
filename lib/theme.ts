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
  system,
  textAlign,
} from "styled-system"

const fontStack = (fonts: string[]): string =>
  fonts.map(font => (font.includes(" ") ? `"${font}"` : font)).join(", ")

export const convertToRem = (n: number | string): string | number =>
  is(Number, n) ? `${(n as number) / 16}rem` : n

const fontSizes = [14, 16, 20, 28, 36, 38, 40, 44, 46, 48, 50, 54, 64, 80]

const textTransform = style({
  prop: "textTransform",
  cssProperty: "textTransform",
})

export interface TextTransform {
  textTransform?: CSS.TextTransformProperty
}

const customFontSize = system({
  fontSize: {
    property: "fontSize",
    scale: "fontSizes",
    transform: convertToRem,
  },
  ...textTransform,
})

export const typography = compose(
  fontFamily,
  customFontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textAlign,
  fontStyle
)

const fonts = {
  regular: fontStack([
    "Graphik",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "Verdana",
    "sans-serif",
  ]),
  brand: fontStack([
    "Cooper Light",
    "Georgia",
    "Times",
    "Times New Roman",
    "serif",
  ]),
} as const

// : { [key: string]: CSS.FontWeightProperty }
const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
} as const

type FontWeightKeys = keyof typeof fontWeights

const lineHeights = {
  condensed: 1.25,
  default: 1.5,
} as const

type LineHeightKeys = keyof typeof lineHeights

const space = {
  0: 0,
  4: convertToRem(4),
  8: convertToRem(8),
  16: convertToRem(16),
  32: convertToRem(32),
  56: convertToRem(56),
  64: convertToRem(64),
  128: convertToRem(128),
} as const

export const theme = {
  fonts: fonts,
  fontWeights: fontWeights,
  fontSizes: fontSizes,
  lineHeights: lineHeights,
  space: space,
} as const
