module.exports = {
  corePlugins: {
    animation: false,
  },
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        "Graphik",
        "'Helvetica Neue'",
        "Helvetica",
        "Arial",
        "Verdana",
        "sans-serif",
      ],
      serif: [
        "'Cooper Light'",
        "Georgia",
        "Times",
        "'Times New Roman'",
        "serif",
      ],
    },
    colors: {
      transparent: "transparent",
      inherit: "inherit",
      black: "rgb(36,28,21)",
      background: "#fff",
      primary: "rgb(216,234,204)",
      focus: "#007c89",
      visited: "#808080",
    },
    maxWidth: {
      center: "70%",
    },
  },
  variants: {
    extend: {
      textColor: ["visited"],
    },
  },
  plugins: [],
}
