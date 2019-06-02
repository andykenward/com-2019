import { getPx, ResponsiveValue, style } from "styled-system"

import { FontSizeKeys } from "../theme/fonts"

export interface FontSizeProps {
  fontSize?: ResponsiveValue<FontSizeKeys>
  fs?: ResponsiveValue<FontSizeKeys>
}
const fontSizeProps: FontSizeProps = {
  fontSize: 14,
  fs: 14,
}
export const fontSizePropsKeys = Object.keys(fontSizeProps)

export const fontSize = style({
  key: "fontSizes",
  prop: "fontSize",
  transformValue: getPx,
  scale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  alias: "fs",
})
