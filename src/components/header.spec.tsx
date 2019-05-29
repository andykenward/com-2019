import React from "react"

import { renderWithTheme } from "../utils"

import Header from "./header"

describe("Header", () => {
  it("renders correctly", () => {
    const { asFragment } = renderWithTheme(
      <Header siteTitle="Default Starter" />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
