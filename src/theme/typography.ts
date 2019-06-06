// import * as CSS from "csstype" // eslint-disable-line import/no-unresolved

const fontStack = (fonts: string[]): string =>
  fonts.map(font => (font.includes(" ") ? `"${font}"` : font)).join(", ")

export const fonts = {
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

export type FontsKeys = keyof typeof fonts

export const fontSizes = [14, 16, 20, 28, 36, 40, 44, 50, 54] as const

export type FontSizeKeys = typeof fontSizes[number]

// : { [key: string]: CSS.FontWeightProperty }
export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
} as const

export type FontWeightKeys = keyof typeof fontWeights

export const lineHeights = {
  condensed: 1.25,
  default: 1.5,
} as const

export type LineHeightKeys = keyof typeof lineHeights
