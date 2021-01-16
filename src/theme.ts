import { convertToRem } from "./utils/convertToRem"
const themeObject = (items: number[]): { [k: string]: string | number } => {
  return Object.fromEntries(items.map((item) => [item, convertToRem(item)]))
}

const fontSizes = [14, 16, 20, 28, 36, 38, 40, 44, 46, 48, 50, 54, 64, 80]
const fontSizesObject = themeObject(fontSizes)

const space = [0, 4, 8, 16, 32, 56, 64, 128]
const spaceObject = themeObject(space)

// Typings are wrong for Theme from theme-ui.
export const theme = {
  fonts: {
    body: 'Graphik, "Helvetica Neue",Helvetica,Arial,Verdana,"sans-serif"',
    heading: '"Cooper Light", Georgia, Times, "Times New Roman", serif',
  },
  fontSizes: fontSizesObject,
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    heading: 300,
  },
  lineHeights: {
    condensed: 1.25,
    body: 1.5,
    heading: 1.090909091,
  },
  colors: {
    text: "rgb(36,28,21)",
    background: "#fff",
    primary: "rgb(216,234,204)",
    focus: "#007c89",
    visited: "#808080",
  },
  space: spaceObject,
  grids: {
    center: {
      gridGap: 0,
      gridTemplateColumns: [
        "32px [center-start] 1fr [center-end] 32px",
        "minmax(32px,15%) [center-start] 1fr [center-end] minmax(32px,15%)",
      ],
    },
  },
  text: {
    headingOne: {
      fontFamily: "heading",
      fontWeight: "light",
      fontSize: [44, 54],
      lineHeight: 1.090909091,
    },
    headingTwo: {
      fontFamily: "body",
      fontWeight: "regular",
      fontSize: [36, 46],
      letterSpacing: convertToRem(-0.5),
      lineHeight: "condensed",
      m: 0,
    },
    headingThree: {
      fontFamily: "body",
      fontWeight: "regular",
      fontSize: [28, 38],
      letterSpacing: convertToRem(-0.2),
      lineHeight: "condensed",
      m: 0,
      textTransform: "capitalize",
    },
    headingFour: {
      fontFamily: "body",
      fontWeight: "regular",
      fontSize: 20,
      lineHeight: "condensed",
      m: 0,
    },
    bodyBold: {
      as: "strong",
      fontFamily: "body",
      fontWeight: "medium",
      fontSize: 16,
      lineHeight: "body",
      letterSpacing: convertToRem(-0.2),
      m: 0,
    },
    body: {
      fontFamily: "body",
      fontWeight: "regular",
      fontSize: 16,
      lineHeight: "body",
      m: 0,
    },
    label: {
      fontFamily: "body",
      fontWeight: "medium",
      fontSize: 14,
      lineHeight: "body",
      m: 0,
    },
  },
  links: {
    outline: {
      color: "text",
      display: "inline-flex",
      boxShadow: "inset 0 0 0 0.0625rem rgba(36, 28, 21, 0.4)",
      justifyContent: "center",
      backgroundColor: "transparent",
      textAlign: "center",
      alignItems: "center",
      verticalAlign: "middle",
      wordBreak: "break-word",
      px: 16,
      py: 8,
      mr: 8,
      mb: 8,
      transition: "all 0.15s linear",
      textDecoration: "none",
      "&:visited:hover,&:hover,&:focus": {
        color: "inherit",
        boxShadow: "inset 0 0 0 0.0625rem rgb(216,234,204)",
        backgroundColor: "primary",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "regular",
      lineHeight: "body",
    },
    a: {
      color: "text",
      display: "inline-flex",
      transition: "all 0.15s linear",
      textDecoration: "none",
      ":visited:hover,:hover,:focus": {
        color: "focus",
      },
      ":visited": {
        color: "visited",
      },
    },
    p: {
      variant: "textStyles.body",
      fontSize: 16,
      m: 0,
    },
    h1: {
      fontFamily: "heading",
      fontWeight: "light",
      fontSize: [44, 54],
      lineHeight: 1.090909091,
      m: 0,
      textTransform: "capitalize",
    },
  },
}
