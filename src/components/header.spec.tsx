import React from "react"
import { render } from "react-testing-library"
import Header from "./header"

describe("Header", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Header siteTitle="Default Starter" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
