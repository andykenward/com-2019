import { useQuery } from "@apollo/react-hooks"
import { wait } from "@apollo/react-testing"
import { act, RenderResult } from "@testing-library/react"

import { Header } from ".."
import { getMock, getMocksError, renderWithApp } from "../../../lib/test-utils"
import { QUERY_ME } from "../query"
import {
  HEADER_RESULT_DATA,
  HEADER_RESULT_DATA_NO_LINKS,
  HEADER_RESULT_DATA_NO_NAME,
  HEADER_RESULT_DATA_NO_ROLE,
  HEADER_RESULT_DATA_NO_UPDATE,
} from "./__fixtures__"

describe("<Header />", () => {
  it("should handle Me query", async () => {
    const MOCKS = getMock(QUERY_ME, HEADER_RESULT_DATA)
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
    const MOCKS = getMock(QUERY_ME, HEADER_RESULT_DATA)

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
    const MOCKS = getMock(QUERY_ME)
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

  it("should render correctly", async () => {
    let root: RenderResult
    const MOCKS = getMock(QUERY_ME, HEADER_RESULT_DATA)
    await act(async () => {
      root = renderWithApp(<Header />, MOCKS)
    })
    await act(async () => {
      await wait(0)
    })
    act(() => {
      const { container, getByTestId } = root
      expect(getByTestId("name").tagName).toEqual("H1")
      expect(getByTestId("name")).toHaveTextContent("Andy Kenward")
      expect(getByTestId("role").tagName).toEqual("H2")
      expect(getByTestId("role")).toHaveTextContent("Senior Front-End Engineer")
      expect(getByTestId("update").tagName).toEqual("H3")
      expect(getByTestId("update")).toHaveTextContent("Hire Me")
      const links = getByTestId("links")
      expect(links).not.toBeNull()
      expect(links.getElementsByTagName("a").length).toEqual(1)
      expect(links.getElementsByTagName("a")[0].getAttribute("href")).toEqual(
        "/link"
      )
      expect(links.getElementsByTagName("a")[0].textContent).toEqual("Github")

      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it("should render when `name` is `null`", async () => {
    const MOCKS = getMock(QUERY_ME, HEADER_RESULT_DATA_NO_NAME)
    let root: RenderResult
    await act(async () => {
      root = renderWithApp(<Header />, MOCKS)
    })
    await act(async () => {
      await wait(0)
    })
    act(() => {
      const { container, queryByTestId, getByTestId } = root
      expect(queryByTestId("name")).toBeNull()
      expect(getByTestId("role")).toHaveTextContent("Senior Front-End Engineer")
      expect(getByTestId("update")).toHaveTextContent("Hire Me")
      expect(getByTestId("links")).not.toBeNull()
      expect(getByTestId("links").getElementsByTagName("a").length).toEqual(1)

      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it("should render when `role` is `null`", async () => {
    const MOCKS = getMock(QUERY_ME, HEADER_RESULT_DATA_NO_ROLE)
    let root: RenderResult
    await act(async () => {
      root = renderWithApp(<Header />, MOCKS)
    })
    await act(async () => {
      await wait(0)
    })
    act(() => {
      const { container, queryByTestId, getByTestId } = root
      expect(getByTestId("name")).toHaveTextContent("Andy Kenward")
      expect(queryByTestId("role")).toBeNull()
      expect(getByTestId("update")).toHaveTextContent("Hire Me")
      expect(getByTestId("links")).not.toBeNull()
      expect(getByTestId("links").getElementsByTagName("a").length).toEqual(1)

      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it("should render when `update` is `null`", async () => {
    const MOCKS = getMock(QUERY_ME, HEADER_RESULT_DATA_NO_UPDATE)
    let root: RenderResult
    await act(async () => {
      root = renderWithApp(<Header />, MOCKS)
    })
    await act(async () => {
      await wait(0)
    })
    act(() => {
      const { container, queryByTestId, getByTestId } = root
      expect(queryByTestId("update")).toBeNull()
      expect(getByTestId("name")).toHaveTextContent("Andy Kenward")
      expect(getByTestId("role")).toHaveTextContent("Senior Front-End Engineer")
      expect(getByTestId("links")).not.toBeNull()
      expect(getByTestId("links").getElementsByTagName("a").length).toEqual(1)

      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it("should render when `links` is `null`", async () => {
    const MOCKS = getMock(QUERY_ME, HEADER_RESULT_DATA_NO_LINKS)
    let root: RenderResult
    await act(async () => {
      root = renderWithApp(<Header />, MOCKS)
    })
    await act(async () => {
      await wait(0)
    })
    act(() => {
      const { container, queryByTestId, getByTestId } = root
      expect(getByTestId("name")).toHaveTextContent("Andy Kenward")
      expect(getByTestId("role")).toHaveTextContent("Senior Front-End Engineer")
      expect(getByTestId("update")).toHaveTextContent("Hire Me")
      expect(queryByTestId("links")).toBeNull()
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
