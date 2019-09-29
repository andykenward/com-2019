import React from "react"

import { ButtonExternal } from ".."
import { renderWithTheme } from "../../../lib/test-utils"

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

  it("should allow `data-testId` prop to be passed to element", () => {
    const { container, getByTestId } = renderWithTheme(
      <ButtonExternal href="http://google.com" data-testid="button-test">
        ButtonExternal
      </ButtonExternal>
    )
    expect(getByTestId("button-test")).not.toBeNull()
    expect(container.firstChild).toMatchSnapshot()
  })
})
