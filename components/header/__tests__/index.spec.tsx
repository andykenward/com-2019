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
    act(() => {
      renderWithApp(<Component />, MOCKS)
    })
  })

  it("renders null on loading", async () => {
    const MOCKS = getMock(QUERY_ME, HEADER_RESULT_DATA)

    await act(async () => {
      const { container } = renderWithApp(<Header />, MOCKS)

      expect(container.firstChild).toBeNull()
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it("renders null on error", async () => {
    const MOCKS = getMocksError(QUERY_ME)

    await act(async () => {
      const { container } = renderWithApp(<Header />, MOCKS)

      await wait(0)

      expect(container.firstChild).toBeNull()
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it("renders null on undefined data", async () => {
    const MOCKS = getMock(QUERY_ME)
    await act(async () => {
      const { container } = renderWithApp(<Header />, MOCKS)

      await wait(0)

      expect(container.firstChild).toBeNull()
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  const TEST_ID_NAME = "name"
  const TEST_ID_ROLE = "role"
  const TEST_ID_UPDATE = "update"
  const TEST_ID_LINKS = "links"
  const TEST_ID_LINK = "link"

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
      const { container, getByTestId, getAllByTestId } = root
      expect(getByTestId(TEST_ID_NAME).tagName).toEqual("H1")
      expect(getByTestId(TEST_ID_NAME)).toHaveTextContent("Andy Kenward")
      expect(getByTestId(TEST_ID_ROLE).tagName).toEqual("H2")
      expect(getByTestId(TEST_ID_ROLE)).toHaveTextContent(
        "Senior Front-End Engineer"
      )
      expect(getByTestId(TEST_ID_UPDATE).tagName).toEqual("H3")
      expect(getByTestId(TEST_ID_UPDATE)).toHaveTextContent("Hire Me")
      const links = getByTestId(TEST_ID_LINKS)
      expect(links).not.toBeNull()
      expect(getAllByTestId(TEST_ID_LINK).length).toEqual(1)
      expect(getByTestId(TEST_ID_LINK).getAttribute("href")).toEqual("/link")
      expect(getByTestId(TEST_ID_LINK)).toHaveTextContent("Github")

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
      const { container, queryByTestId, getByTestId, getAllByTestId } = root
      expect(queryByTestId(TEST_ID_NAME)).toBeNull()
      expect(getByTestId(TEST_ID_ROLE)).toHaveTextContent(
        "Senior Front-End Engineer"
      )
      expect(getByTestId(TEST_ID_UPDATE)).toHaveTextContent("Hire Me")
      expect(getByTestId(TEST_ID_LINKS)).not.toBeNull()
      expect(getAllByTestId(TEST_ID_LINK).length).toEqual(1)

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
      const { container, queryByTestId, getByTestId, getAllByTestId } = root
      expect(getByTestId(TEST_ID_NAME)).toHaveTextContent("Andy Kenward")
      expect(queryByTestId(TEST_ID_ROLE)).toBeNull()
      expect(getByTestId(TEST_ID_UPDATE)).toHaveTextContent("Hire Me")
      expect(getByTestId(TEST_ID_LINKS)).not.toBeNull()
      expect(getAllByTestId(TEST_ID_LINK).length).toEqual(1)

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
      const { container, queryByTestId, getByTestId, getAllByTestId } = root
      expect(queryByTestId(TEST_ID_UPDATE)).toBeNull()
      expect(getByTestId(TEST_ID_NAME)).toHaveTextContent("Andy Kenward")
      expect(getByTestId(TEST_ID_ROLE)).toHaveTextContent(
        "Senior Front-End Engineer"
      )
      expect(getByTestId(TEST_ID_LINKS)).not.toBeNull()
      expect(getAllByTestId(TEST_ID_LINK).length).toEqual(1)

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
      expect(getByTestId(TEST_ID_NAME)).toHaveTextContent("Andy Kenward")
      expect(getByTestId(TEST_ID_ROLE)).toHaveTextContent(
        "Senior Front-End Engineer"
      )
      expect(getByTestId(TEST_ID_UPDATE)).toHaveTextContent("Hire Me")
      expect(queryByTestId(TEST_ID_LINKS)).toBeNull()
      expect(queryByTestId(TEST_ID_LINK)).toBeNull()
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
