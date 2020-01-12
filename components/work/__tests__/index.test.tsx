import { useQuery } from "@apollo/react-hooks"
import { wait } from "@apollo/react-testing"
import { RenderResult } from "@testing-library/react"
import { act } from "react-dom/test-utils"

import { Work } from ".."
import { getMock, getMocksError, renderWithApp } from "../../../lib/test-utils"
import { QUERY_WORK } from "../query"
import { WORK_RESULT_DATA } from "./__fixtures__"

describe("Work", () => {
  it("handles work items query", async () => {
    const MOCKS = getMock(QUERY_WORK, WORK_RESULT_DATA)
    const Component = () => {
      const { data, loading } = useQuery(QUERY_WORK)
      if (!loading) {
        expect(data).toEqual(WORK_RESULT_DATA)
      }
      return null
    }
    act(() => {
      renderWithApp(<Component />, MOCKS)
    })
  })

  it("renders loading state", async () => {
    const MOCKS = getMock(QUERY_WORK, WORK_RESULT_DATA)

    await act(async () => {
      const {
        container: { firstChild },
      } = renderWithApp(<Work />, MOCKS)

      expect(firstChild).not.toBeNull()
      expect(firstChild).toMatchSnapshot()
    })
  })

  it("renders error state", async () => {
    const MOCKS = getMocksError(QUERY_WORK)

    await act(async () => {
      const {
        container: { firstChild },
      } = renderWithApp(<Work />, MOCKS)

      await wait(0)

      expect(firstChild).not.toBeNull()
      expect(firstChild).toMatchSnapshot()
    })
  })

  it.todo("handles null or undefined data response")

  describe("render", () => {
    it.todo("renders correct length of items")
    it.todo("shows correct title")
    it.todo("shows correct tags")
    it.todo("shows correct clients")
    it.todo("shows correct studio")
    it.todo("has correct href")
    // use srcset
    // retina images
    // media breakpoints
    // TODO: image api tests from GraphCMS, static export of the images?
    // TODO: look into checking correct image is loaded from srcset?
    // https://graphcms.com/docs/assets/transformations
    // https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
    it.todo("shows correct responsive images")

    it.todo("has :hover css")
    it.todo("has :visited css")
    it.todo("has correct tabindex")
  })
})
