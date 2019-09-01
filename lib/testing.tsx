import { render } from "@testing-library/react"
import { ThemeProvider } from "emotion-theming"

import { theme } from "./theme"

export const renderWithTheme = (element: React.ReactElement<any>) =>
  render(<ThemeProvider theme={theme}>{element}</ThemeProvider>)
