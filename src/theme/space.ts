import { convertToRem } from "../styled-system"

export const space = {
  0: 0,
  4: convertToRem(4),
  8: convertToRem(8),
  16: convertToRem(16),
  32: convertToRem(32),
  56: convertToRem(56),
  64: convertToRem(64),
  128: convertToRem(128),
} as const

export type spaceKeys = keyof typeof space
