import * as CSS from "csstype" // eslint-disable-line import/no-unresolved
import {
  getPx,
  LineHeightProps,
  ResponsiveValue,
  style,
  TextAlignProps,
  fontFamily,
  textAlign,
  compose,
  fontWeight,
  lineHeight,
  styleFn,
  letterSpacing,
  LetterSpacingProps,
  fontStyle,
  FontStyleProps,
} from "styled-system"

import {
  FontSizeKeys,
  FontsKeys,
  FontWeightKeys,
  LineHeightKeys,
} from "../theme/typography"

export interface FontSizeProps {
  fontSize?: ResponsiveValue<CSS.FontSizeProperty<FontSizeKeys>>
  fs?: ResponsiveValue<CSS.FontSizeProperty<FontSizeKeys>>
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

/**
 * TODO : PR on @types/styled-system
 *
 * interface FontFamilyProps<TLength = TLengthStyledSystem> {
 *  fontFamily?: ResponsiveValue<CSS.FontSizeProperty<TLength>>
 * }
 */
interface FontFamilyProps {
  fontFamily?: ResponsiveValue<FontsKeys>
}

interface FontWeightProps {
  fontWeight?: ResponsiveValue<FontWeightKeys>
}

export const textTransform = style({
  key: "textTransform",
  prop: "textTransform",
  alias: "tt",
})
interface TextTransform {
  textTransform?: CSS.TextTransformProperty
  tt?: CSS.TextTransformProperty
}

export interface TypographyProps
  extends FontFamilyProps,
    FontSizeProps,
    FontStyleProps,
    FontWeightProps,
    LetterSpacingProps,
    LineHeightProps<LineHeightKeys>,
    TextAlignProps,
    TextTransform {}

export const typography = compose(
  fontFamily,
  (fontSize as unknown) as styleFn,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  (textTransform as unknown) as styleFn
)
// import {
//     compose,
//     fontFamily,
//     fontSize,
//     fontWeight,
//     lineHeight,
//     space,
//     color
//   } from 'styled-system'

// export const typography = compose(
//     fontFamily,
//     fontSize,
//     fontWeight,
//     lineHeight,
//     space,
//     color
//   )
