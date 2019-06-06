export const colors = {
  primary: "rgb(249, 224, 259)",
  black: "rgb(36, 28, 21)",
  white: "#fff",
  green: "#007c89",
} as const

export type ColorKeys = keyof typeof colors
