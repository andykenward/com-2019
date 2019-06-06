import {
  backgroundColor,
  compose,
  ResponsiveValue,
  style,
  styleFn,
} from "styled-system"

import { ColorKeys } from "../theme/colors"

interface BackgroundColorProps {
  readonly bg?: ResponsiveValue<ColorKeys>
  readonly backgroundColor?: ResponsiveValue<ColorKeys>
}

export interface ColorProps extends BackgroundColorProps {
  readonly c?: ResponsiveValue<ColorKeys>
}

const colorProps: ColorProps = {
  c: undefined,
  bg: undefined,
  backgroundColor: undefined,
}

export const colorPropsKeys = Object.keys(colorProps)

export const textColor = style({
  prop: "color",
  key: "colors",
  alias: "c",
})

export const color = compose(
  (textColor as unknown) as styleFn,
  backgroundColor
)
