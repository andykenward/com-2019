import { matchers } from "jest-emotion"

import { Box } from ".."
import { emotionBreakPoints, renderWithTheme } from "../../../lib/test-utils"
import { theme } from "../../../lib/theme"

// Add the custom matchers provided by 'jest-emotion'
// https://emotion.sh/docs/jest-emotion
expect.extend(matchers)

describe("<Box />", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<Box />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("should render ColorProps", () => {
    const {
      container: { firstChild },
    } = renderWithTheme(<Box textColor="black" bg="primary" opacity={1} />)
    expect(firstChild).toHaveStyleRule("color", theme.colors.black)
    expect(firstChild).toHaveStyleRule("background-color", theme.colors.primary)
    expect(firstChild).toHaveStyleRule("opacity", "1")
    expect(firstChild).toMatchSnapshot()
  })

  it("should render ColorProps from array", () => {
    const {
      container: { firstChild },
    } = renderWithTheme(
      <Box
        textColor={["black", "primary"]}
        bg={["primary", "black"]}
        opacity={[1, 0]}
      />
    )
    expect(firstChild).toHaveStyleRule("color", theme.colors.black)
    expect(firstChild).toHaveStyleRule(
      "color",
      theme.colors.primary,
      emotionBreakPoints[0]
    )
    expect(firstChild).toHaveStyleRule("background-color", theme.colors.primary)
    expect(firstChild).toHaveStyleRule(
      "background-color",
      theme.colors.black,
      emotionBreakPoints[0]
    )
    expect(firstChild).toHaveStyleRule("opacity", "1")
    expect(firstChild).toHaveStyleRule("opacity", "0", emotionBreakPoints[0])
    expect(firstChild).toMatchSnapshot()
  })

  it("should render DisplayProps", () => {
    const {
      container: { firstChild },
    } = renderWithTheme(<Box display="flex" />)
    expect(firstChild).toHaveStyleRule("display", "flex")
    expect(firstChild).toMatchSnapshot()
  })

  it("should render DisplayProps from array", () => {
    const {
      container: { firstChild },
    } = renderWithTheme(<Box display={["flex", "block"]} />)
    expect(firstChild).toHaveStyleRule("display", "flex")
    expect(firstChild).toHaveStyleRule(
      "display",
      "block",
      emotionBreakPoints[0]
    )
    expect(firstChild).toMatchSnapshot()
  })

  it("should render FlexWrapProps", () => {
    const {
      container: { firstChild },
    } = renderWithTheme(<Box flexWrap="wrap" />)
    expect(firstChild).toHaveStyleRule("flex-wrap", "wrap")
    expect(firstChild).toMatchSnapshot()
  })

  it("should render FlexWrapProps from array", () => {
    const {
      container: { firstChild },
    } = renderWithTheme(<Box flexWrap={["wrap", "nowrap"]} />)
    expect(firstChild).toHaveStyleRule("flex-wrap", "wrap")
    expect(firstChild).toHaveStyleRule(
      "flex-wrap",
      "nowrap",
      emotionBreakPoints[0]
    )
    expect(firstChild).toMatchSnapshot()
  })

  it("should render FontSizeProps", () => {
    const {
      container: { firstChild },
    } = renderWithTheme(<Box fontSize={16} />)
    expect(firstChild).toHaveStyleRule("font-size", "1rem")
    expect(firstChild).toMatchSnapshot()
  })
  it("should render FontSizeProps from array", () => {
    const {
      container: { firstChild },
    } = renderWithTheme(<Box fontSize={[16, 28, 20]} />)
    expect(firstChild).toHaveStyleRule("font-size", "1rem")
    expect(firstChild).toHaveStyleRule(
      "font-size",
      "1.75rem",
      emotionBreakPoints[0]
    )
    expect(firstChild).toHaveStyleRule(
      "font-size",
      "1.25rem",
      emotionBreakPoints[1]
    )
    expect(firstChild).toMatchSnapshot()
  })
})
