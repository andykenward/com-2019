export const space = [0, 4, 8, 16, 32, 64] as const

export type spaceKeys = typeof space[number]
