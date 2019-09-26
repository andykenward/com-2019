import {
  ResponsiveValue,
  BackgroundColorProps,
  OpacityProps,
  TLengthStyledSystem,
} from "styled-system"
import * as CSS from "csstype"
import {
  CSSObject,
  InterpolationWithTheme,
  SerializedStyles,
} from "@emotion/core"

export interface StyledProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any> // eslint-disable-line
  css?: CSSObject | SerializedStyles | InterpolationWithTheme<any> // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface TextTransformProps {
  textTransform?: CSS.TextTransformProperty
}

interface TextColorProps<TLength = TLengthStyledSystem> {
  textColor?: ResponsiveValue<CSS.ColorProperty<TLength>>
}

export interface ColorProps
  extends TextColorProps,
    BackgroundColorProps,
    OpacityProps {}
