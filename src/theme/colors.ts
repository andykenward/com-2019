export const colors = {
  primary: "rgb(216,234,204)",
  black: "rgb(36, 28, 21)",
  oyster: "rgb(64,59,59)",
  white: "#fff",
  green: "#007c89",
  squash: "rgb(251,238,202)",
  cucumber: "rgb(216,234,204)",
  radish: "rgb(249,224,250)",
  visited: "#808080",
} as const

export type ColorKeys = keyof typeof colors
