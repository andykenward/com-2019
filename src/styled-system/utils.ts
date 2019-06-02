import shouldForwardProp from "@styled-system/should-forward-prop"
import { equals, indexOf } from "ramda"

import { colorPropsKeys } from "./colors"
import { fontSizePropsKeys } from "./fonts"

const propKeys = [...colorPropsKeys, ...fontSizePropsKeys]

export const filterProps: (prop: string) => boolean = (prop: string): boolean =>
  shouldForwardProp(prop) && equals(indexOf(prop, propKeys), -1)
