import React from "react"

import { renderWithTheme } from "../../utils"

import Header from "."

describe("<Header />", () => {
  it("renders null when data is null", () => {
    const { container } = renderWithTheme(<Header data={null} />)
    expect(container.firstChild).toBeNull()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders null when data is undefined", () => {
    const { container } = renderWithTheme(<Header data={undefined} />)
    expect(container.firstChild).toBeNull()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders when name is `null`", () => {
    const { container } = renderWithTheme(
      <Header data={{ name: null, role: "Role" }} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders when role is `null`", () => {
    const { container } = renderWithTheme(
      <Header data={{ name: "Name", role: null }} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const mockData = { name: "Andy Kenward", role: "Senior Front-End Engineer" }
    const { container } = renderWithTheme(<Header data={mockData} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
