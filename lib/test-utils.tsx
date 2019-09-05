import { MockedProvider, MockedResponse } from "@apollo/react-testing"
import { render } from "@testing-library/react"
import { InMemoryCache, IntrospectionFragmentMatcher } from "apollo-boost"
import { ThemeProvider } from "emotion-theming"

import result from "../generated/introspection-result"
import { theme } from "./theme"

export const renderWithTheme = (element: React.ReactElement<any>) =>
  render(<ThemeProvider theme={theme}>{element}</ThemeProvider>)

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: result,
})

export const renderWithApp = (
  element: React.ReactElement,
  MOCKS: MockedResponse[] = []
) => {
  const cache = new InMemoryCache({ fragmentMatcher })
  return render(
    <MockedProvider mocks={MOCKS} cache={cache}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </MockedProvider>
  )
}
