import { useQuery } from "@apollo/react-hooks"
import { MockedResponse, wait } from "@apollo/react-testing"
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
    act(() => {
      renderWithApp(<Component />, MOCKS)
    })
  })

  it("renders null on loading", async () => {
    await act(async () => {
      const { container } = renderWithApp(<Footer />, MOCKS)

      expect(container.firstChild).toBeNull()
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it("renders null on error", async () => {
    const MOCKS: MockedResponse[] = [
      {
        request: { query: QUERY_FOOTER },
        error: new Error("error from server"),
      },
    ]

    await act(async () => {
      const { container } = renderWithApp(<Footer />, MOCKS)

      await wait(0)

      expect(container.firstChild).toBeNull()
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it("renders with 5 items", async () => {
    await act(async () => {
      const { getAllByTestId, container } = renderWithApp(<Footer />, MOCKS)

      await wait(0)

      expect(getAllByTestId("footer-item").length).toEqual(5)
      expect(getAllByTestId("footer-item-a").length).toEqual(5)
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
