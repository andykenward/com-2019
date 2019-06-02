const fontStack = (fonts: string[]): string =>
  fonts.map(font => (font.includes(" ") ? `"${font}"` : font)).join(", ")

export const fonts = {
  regular: fontStack(["Open Sans", "serif"]),
  brand: fontStack(["Merriweather", "sans-serif"]),
} as const

export type FontsKeys = keyof typeof fonts

export const fontSizes = [14, 16, 20, 28, 36, 44] as const

export type FontSizeKeys = typeof fontSizes[number]

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
} as const

export type FontWeights = keyof typeof fontWeights

export const lineHeights = {
  condensed: 1.25,
  default: 1.5,
} as const

export type LineHeights = keyof typeof lineHeights
