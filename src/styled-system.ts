import shouldForwardProp from "@styled-system/should-forward-prop"
import { equals, indexOf } from "ramda"
import { ResponsiveValue, style } from "styled-system"

import { ColorKeys } from "./theme"

export interface ColorProps {
  ssColor?: ResponsiveValue<ColorKeys>
}
type ColorPropsKeys = keyof ColorProps

const colorProps: ColorProps = {
  ssColor: "primary",
}

const colorPropsKeys = Object.keys(colorProps)

export const ssColor = style({
  key: "colors",
  cssProperty: "color",
  prop: "ssColor",
})

/**
 * BACKGROUND COLOR
 */
export interface BgProps {
  ssBg?: ResponsiveValue<ColorKeys>
}
const bgProps: BgProps = {
  ssBg: "primary",
}
const bgPropsKeys = Object.keys(bgProps)

export const ssBackgroundColor = style({
  key: "colors",
  prop: "ssBg",
  cssProperty: "background",
  alias: "bg",
})
/**
 * END
 */

const propKeys = [...colorPropsKeys, ...bgPropsKeys]

export const filterSsProps: (prop: string) => boolean = (
  prop: string
): boolean => shouldForwardProp(prop) && equals(indexOf(prop, propKeys), -1)
