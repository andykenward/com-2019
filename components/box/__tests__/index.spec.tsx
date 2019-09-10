import { Box } from ".."
import { renderWithTheme } from "../../../lib/test-utils"

describe("<Box />", () => {
  it("renders correctly", () => {
    const { asFragment } = renderWithTheme(<Box />)
    expect(asFragment()).toMatchSnapshot()
  })
})
