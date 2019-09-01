import React from "react"

import { renderWithTheme } from "../../lib/testing"
import { ButtonExternal } from "."

describe("<ButtonExternal />", () => {
  it("renders correctly", () => {
    const { container } = renderWithTheme(
      <ButtonExternal href="http://google.com">ButtonExternal</ButtonExternal>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders `fill` correctly", () => {
    const { container } = renderWithTheme(
      <ButtonExternal fill href="http://google.com">
        ButtonExternal
      </ButtonExternal>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
