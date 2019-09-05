import { useQuery } from "@apollo/react-hooks"
import { MockedResponse, wait } from "@apollo/react-testing"
import { RenderResult } from "@testing-library/react"
import { act } from "react-dom/test-utils"

import { Footer } from ".."
import { renderWithApp } from "../../../lib/test-utils"
import { QUERY_FOOTER } from "../query"
import { FOOTER_RESULT_DATA } from "./__fixtures__"

describe("<Footer />", () => {
  const MOCKS: MockedResponse[] = [
    {
      request: {
        query: QUERY_FOOTER,
      },
      result: {
        data: FOOTER_RESULT_DATA,
      },
    },
  ]

  it("should handle Footer query", async () => {
    const Component = () => {
      const { data, loading } = useQuery(QUERY_FOOTER)
      if (!loading) {
        expect(data).toEqual(FOOTER_RESULT_DATA)
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
      root = renderWithApp(<Footer />, MOCKS)
    })

    act(() => {
      const { container } = root
      expect(container.firstChild).toBeNull()
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it("renders with 5 items", async () => {
    let root: RenderResult
    await act(async () => {
      root = renderWithApp(<Footer />, MOCKS)
    })

    await act(async () => {
      await wait(0)
    })

    act(() => {
      const { getAllByTestId } = root
      expect(getAllByTestId("footer-item").length).toEqual(5)
      expect(getAllByTestId("footer-item-a").length).toEqual(5)
      expect(root.container.firstChild).toMatchSnapshot()
    })
  })
})
