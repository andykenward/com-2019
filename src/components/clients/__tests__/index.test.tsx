import { Clients } from ".."
import { FragmentClientFragment } from "../../../../generated/graphql"
import { render } from "../../../utils/test-utils"

describe("<Clients>", () => {
  it("handles no clients array", () => {
    expect.assertions(2)
    const { container } = render(<Clients />)

    expect(container).toBeEmptyDOMElement()
    expect(container.firstChild).toMatchInlineSnapshot(`null`)
  })

  it("handles empty clients array", () => {
    expect.assertions(2)
    const { container } = render(<Clients clients={[]} />)

    expect(container).toBeEmptyDOMElement()
    expect(container.firstChild).toMatchInlineSnapshot(`null`)
  })

  it("only renders client when id & title exists", () => {
    expect.assertions(2)
    const data: FragmentClientFragment[] = [
      { id: "1", title: "client 1" },
      { id: "2" },
    ]
    const { container, getByText } = render(<Clients clients={data} />)

    expect(getByText(/client 1/i)).toBeInTheDocument()
    expect(container).toMatchInlineSnapshot(`
      <div>
        <strong
          class="css-15snz09"
        >
          client 1
        </strong>
      </div>
    `)
  })

  it("renders multiple clients", () => {
    expect.assertions(3)
    const data: FragmentClientFragment[] = [
      { id: "1", title: "client 1" },
      { id: "2", title: "client 2" },
    ]
    const { container, getByText } = render(<Clients clients={data} />)

    expect(getByText(/client 1/i)).toBeInTheDocument()
    expect(getByText(/client 2/i)).toBeInTheDocument()
    expect(container).toMatchInlineSnapshot(`
      <div>
        <strong
          class="css-15snz09"
        >
          client 1
        </strong>
        <strong
          class="css-15snz09"
        >
          client 2
        </strong>
      </div>
    `)
  })
})
