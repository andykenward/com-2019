import { useQuery } from "@apollo/react-hooks"
import { MockedResponse, wait } from "@apollo/react-testing"
import { act, RenderResult } from "@testing-library/react"

import { Header } from ".."
import { getMocks, getMocksError, renderWithApp } from "../../../lib/test-utils"
import { QUERY_ME } from "../query"
import {
  HEADER_RESULT_DATA,
  HEADER_RESULT_DATA_NO_NAME,
  HEADER_RESULT_DATA_NO_ROLE,
} from "./__fixtures__"

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
    const MOCKS = getMocksError(QUERY_ME)
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

  it("renders null on undefined data", async () => {
    const MOCKS = getMocks(QUERY_ME)
    let root: RenderResult
    await act(async () => {
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

  it("should render when `name` is `null`", async () => {
    const MOCKS = getMocks(QUERY_ME, HEADER_RESULT_DATA_NO_NAME)
    let root: RenderResult
    await act(async () => {
      root = renderWithApp(<Header />, MOCKS)
    })
    await act(async () => {
      await wait(0)
    })
    act(() => {
      const { container, queryByTestId } = root
      expect(queryByTestId("name")).toBeNull()
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it("should render when `role` is `null`", async () => {
    const MOCKS = getMocks(QUERY_ME, HEADER_RESULT_DATA_NO_ROLE)
    let root: RenderResult
    await act(async () => {
      root = renderWithApp(<Header />, MOCKS)
    })
    await act(async () => {
      await wait(0)
    })
    act(() => {
      const { container, queryByTestId } = root
      expect(queryByTestId("role")).toBeNull()
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  // it("should render when `update` is `null`", () => {})

  // it("should render when `links` is `null`", () => {})
})
