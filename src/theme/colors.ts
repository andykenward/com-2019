export const colors = {
  primary: "hotpink",
  purple: "rebeccapurple",
  black: "rgb(36, 28, 21)",
  white: "#fff",
  blue: "#007ce0",
  navy: "#004175",
} as const

export type ColorKeys = keyof typeof colors
