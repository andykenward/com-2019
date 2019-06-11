import React from "react"

import { renderWithTheme } from "../../utils"

import { Link } from "."

describe("<Link />", () => {
  it("renders correctly", () => {
    const { asFragment } = renderWithTheme(<Link to="/">Link</Link>)
    expect(asFragment()).toMatchSnapshot()
  })
})
