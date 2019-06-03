import { breakpoints } from "./breakpoints"
import { colors } from "./colors"
import { fonts, fontSizes, fontWeights, lineHeights } from "./typography"
import { space } from "./space"

export const theme = {
  name: "com-2019",
  breakpoints,
  colors,
  fonts,
  fontWeights,
  lineHeights,
  fontSizes,
  space,
} as const

export type Theme = typeof theme

export interface ThemeProps {
  theme: Theme
}
