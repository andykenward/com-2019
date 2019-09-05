import { renderWithTheme } from "../../lib/test-utils"
import { Box } from "."

describe("<Box />", () => {
  it("renders correctly", () => {
    const { asFragment } = renderWithTheme(<Box />)
    expect(asFragment()).toMatchSnapshot()
  })
})
