import { render } from "@testing-library/react"

import { Footer } from ".."

describe("<Footer />", () => {
  it("matches snapshot", () => {
    expect.assertions(2)
    const { container } = render(<Footer />)
    expect(container).toBeEmptyDOMElement()
    expect(container.firstChild).toMatchInlineSnapshot(`null`)
  })
})
