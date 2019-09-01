import { renderWithTheme } from "../../lib/testing"
import { Box } from "."

describe("<Box />", () => {
  it("renders correctly", () => {
    const { asFragment } = renderWithTheme(<Box />)
    expect(asFragment()).toMatchSnapshot()
  })
})
