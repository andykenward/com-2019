import React from "react"
import { ButtonExternal } from "."
import { renderWithTheme } from "../../lib/testing"

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
