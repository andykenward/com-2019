import { FooterFieldsFragment } from "../../../../generated/graphql"
import { render } from "../../../utils/test-utils"
import { Footer } from ".."

describe("<Footer />", () => {
  it("handles no data", () => {
    expect.assertions(2)
    const { container } = render(<Footer />)
    expect(container).toBeEmptyDOMElement()
    expect(container.firstChild).toMatchInlineSnapshot(`null`)
  })
  it("handles null data", () => {
    expect.assertions(2)
    const { container } = render(<Footer data={null} />)
    expect(container).toBeEmptyDOMElement()
    expect(container.firstChild).toMatchInlineSnapshot(`null`)
  })
  it("handles empty links array", async () => {
    expect.assertions(2)
    const footerData: FooterFieldsFragment = { id: "1", links: [] }
    const { container } = render(<Footer data={footerData} />)
    expect(container).toBeEmptyDOMElement()
    expect(container.firstChild).toMatchInlineSnapshot(`null`)
  })

  it("renders external links", () => {
    expect.assertions(2)
    const footerData: FooterFieldsFragment = {
      id: "1",
      links: [{ id: "1", href: "https://google.com", title: "Google" }],
    }
    const { container } = render(<Footer data={footerData} />)
    expect(container).not.toBeEmptyDOMElement()
    expect(container.firstChild).toMatchInlineSnapshot(`
      <footer
        class="sm:max-w-center sm:w-full mx-8 sm:mx-auto py-8"
      >
        <ul
          class="space-y-4"
        >
          <li>
            <a
              class="font-sans text-black text-base hover:text-focus focus:text-focus visited:text-visited no-underline inline-flex "
              href="https://google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google
            </a>
          </li>
        </ul>
      </footer>
    `)
  })
})
