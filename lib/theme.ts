import { convertToRem, fontStack } from "./styled-system"

const fontSizes = [14, 16, 20, 28, 36, 38, 40, 44, 46, 48, 50, 54, 64, 80]

const fonts =
  {
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
const fontWeights =
  {
    light: 300,
    regular: 400,
    medium: 500,
  } as const

type FontWeightKeys = keyof typeof fontWeights

const lineHeights =
  {
    condensed: 1.25,
    default: 1.5,
  } as const

type LineHeightKeys = keyof typeof lineHeights

const space =
  {
    0: 0,
    4: convertToRem(4),
    8: convertToRem(8),
    16: convertToRem(16),
    32: convertToRem(32),
    56: convertToRem(56),
    64: convertToRem(64),
    128: convertToRem(128),
  } as const

const colors =
  {
    primary: "rgb(216,234,204)",
    black: "rgb(36,28,21)",
    oyster: "rgb(64,59,59)",
    white: "#fff",
    green: "#007c89",
    squash: "rgb(251,238,202)",
    cucumber: "rgb(216,234,204)",
    radish: "rgb(249,224,250)",
    visited: "#808080",
  } as const

export const theme =
  {
    colors: colors,
    fonts: fonts,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    lineHeights: lineHeights,
    space: space,
  } as const
