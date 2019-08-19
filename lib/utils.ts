import shouldForwardProp from "@styled-system/should-forward-prop"
// import { ThemeProvider } from "emotion-theming"
import { equals, indexOf } from "ramda"
import { propKeys } from "./styled-system"

export const filterProps: (prop: string) => boolean = (prop: string): boolean =>
  shouldForwardProp(prop) && equals(indexOf(prop, propKeys), -1)

export const childrenOnly: (prop: string) => boolean = (
  prop: string
): boolean => prop === "children" || prop === "data-test-id"

// export const renderWithTheme = (element: React.ReactElement<any>) =>
//   render(<ThemeProvider theme={theme}>{element}</ThemeProvider>)
