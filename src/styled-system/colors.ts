import {
  backgroundColor,
  BackgroundColorProps,
  compose,
  ResponsiveValue,
  style,
  styleFn,
} from "styled-system"

import { ColorKeys } from "../theme/colors"

export interface ColorProps extends BackgroundColorProps<ColorKeys> {
  readonly color?: ResponsiveValue<ColorKeys>
  readonly c?: ResponsiveValue<ColorKeys>
}

const colorProps: ColorProps = {
  color: "primary",
  c: "primary",
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
