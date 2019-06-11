import React from "react"

import { renderWithTheme } from "../../utils"

import { Box } from "."

describe("<Box />", () => {
  it("renders correctly", () => {
    const { asFragment } = renderWithTheme(<Box />)
    expect(asFragment()).toMatchSnapshot()
  })
})
