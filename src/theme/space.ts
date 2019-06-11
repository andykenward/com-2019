export const space = {
  0: 0,
  4: 4,
  8: 8,
  16: 16,
  32: 32,
  64: 64,
  128: 128,
} as const

export type spaceKeys = keyof typeof space
