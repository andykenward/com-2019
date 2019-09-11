import { useQuery } from "@apollo/react-hooks"
import { MockedResponse, wait } from "@apollo/react-testing"
import { act, RenderResult } from "@testing-library/react"

import { Header } from ".."
import { renderWithApp } from "../../../lib/test-utils"
import { QUERY_ME } from "../query"
import { HEADER_RESULT_DATA } from "./__fixtures__"

describe("<Header />", () => {
  const MOCKS: MockedResponse[] = [
    {
      request: {
        query: QUERY_ME,
      },
      result: {
        data: HEADER_RESULT_DATA,
      },
    },
  ]

  it("should handle Me query", async () => {
    const Component = () => {
      const { data, loading } = useQuery(QUERY_ME)
      if (!loading) {
        expect(data).toEqual(HEADER_RESULT_DATA)
      }
      return null
    }
    await act(async () => {
      renderWithApp(<Component />, MOCKS)
    })
  })

  it("renders null on loading", async () => {
    let root: RenderResult

    act(() => {
      root = renderWithApp(<Header />, MOCKS)
    })

    act(() => {
      const { container } = root
      expect(container.firstChild).toBeNull()
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it("renders null on error", async () => {
    const MOCKS: MockedResponse[] = [
      {
        request: { query: QUERY_ME },
        error: new Error("error from server"),
      },
    ]
    let root: RenderResult

    act(() => {
      root = renderWithApp(<Header />, MOCKS)
    })

    await act(async () => {
      await wait(0)
    })

    act(() => {
      const { container } = root
      expect(container.firstChild).toBeNull()
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
