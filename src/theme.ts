const breakpoints = ["40em", "52em", "64em", "80em"]

// const breakpoints = {
//   sm: "40em",
//   md: "52em",
//   lg: "64em",
//   xl: "80em",
// }

const colors = {
  primary: "hotpink",
  purple: "rebeccapurple",
  black: "rgb(36, 28, 21)",
  white: "#fff",
  blue: "#007ce0",
  navy: "#004175",
}

const fontStack = (fonts: string[]): string =>
  fonts.map(font => (font.includes(" ") ? `"${font}"` : font)).join(", ")

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
}
const fontSizes = [14, 16, 20, 28, 36, 44]
const fontWeights = {
  light: 300,
  regular: "normal",
  medium: 500,
}

const lineHeights = {
  condensed: 1.25,
  default: 1.5,
}

export const theme = {
  breakpoints,
  colors,
  fonts,
  fontWeights,
  lineHeights,
  fontSizes,
}

export type Theme = typeof theme
export type ColorKeys = keyof typeof colors
export interface ThemeProps {
  theme: Theme
}
