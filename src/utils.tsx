import shouldForwardProp from "@styled-system/should-forward-prop"
import { ThemeProvider } from "emotion-theming"
import { equals, indexOf } from "ramda"
import React from "react"
import { render } from "@testing-library/react"

import { theme } from "./theme"

export const filterProps: (prop: string, propsToFilter: string[]) => boolean = (
  prop: string,
  propsToFilter: string[]
): boolean =>
  shouldForwardProp(prop) && equals(indexOf(prop, propsToFilter), -1)

export const childrenOnly: (prop: string) => boolean = (
  prop: string
): boolean => prop === "children" || prop === "data-test-id"

export const renderWithTheme = (element: React.ReactElement<any>) =>
  render(<ThemeProvider theme={theme}>{element}</ThemeProvider>)
