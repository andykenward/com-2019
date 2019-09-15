import {
  MockedProvider,
  MockedResponse,
  ResultFunction,
} from "@apollo/react-testing"
import { render } from "@testing-library/react"
import {
  DocumentNode,
  FetchResult,
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-boost"
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

// TODO: fix response typings
export const getMock = (
  query: DocumentNode,
  response?: unknown,
  error = false
): MockedResponse[] => [
  {
    request: { query: query },
    result: response
      ? ({ data: response } as FetchResult | ResultFunction<FetchResult>)
      : undefined,
    error: error ? new Error("error from server") : undefined,
  },
]

export const getMocksError = (query: DocumentNode) =>
  getMock(query, undefined, true)
