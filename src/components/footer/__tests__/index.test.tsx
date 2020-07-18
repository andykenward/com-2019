import { render } from "@testing-library/react"

import { Footer } from ".."

describe("<Footer />", () => {
  it("matches snapshot", () => {
    const { container } = render(<Footer />)
    expect(container).toBeEmptyDOMElement()
    expect(container.firstChild).toMatchSnapshot()
  })
})
