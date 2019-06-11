import { matchers } from "jest-emotion"
import React from "react"

import { renderWithTheme } from "../../utils"

import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  BodyBold,
  Body,
  Label,
} from "."

// Add the custom matchers provided by 'jest-emotion'
expect.extend(matchers)

describe("Typography", () => {
  describe("<HeadingOne />", () => {
    it("renders correctly", () => {
      const { asFragment, container } = renderWithTheme(
        <HeadingOne>Heading One</HeadingOne>
      )
      expect(container.firstChild).toHaveStyleRule(
        "font-family",
        `"Cooper Light",Georgia,Times,"Times New Roman",serif`
      )
      expect(container.firstChild).toHaveStyleRule("font-size", "44px")
      expect(container.firstChild).toHaveStyleRule("font-weight", "300")
      expect(container.firstChild).toHaveStyleRule("line-height", "1.090909091")
      expect(container.firstChild).toHaveStyleRule("color", "rgb(36,28,21)")
      expect(container.firstChild).toHaveStyleRule("margin", "0")
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe("<HeadingTwo />", () => {
    it("renders correctly", () => {
      const { asFragment, container } = renderWithTheme(
        <HeadingTwo>Heading Two</HeadingTwo>
      )
      expect(container.firstChild).toHaveStyleRule(
        "font-family",
        `Graphik,"Helvetica Neue",Helvetica,Arial,Verdana,sans-serif`
      )
      expect(container.firstChild).toHaveStyleRule("font-size", "36px")
      expect(container.firstChild).toHaveStyleRule("font-weight", "400")
      expect(container.firstChild).toHaveStyleRule("letter-spacing", "-0.5px")
      expect(container.firstChild).toHaveStyleRule("line-height", "1.25")
      expect(container.firstChild).toHaveStyleRule("color", "rgb(36,28,21)")
      expect(container.firstChild).toHaveStyleRule("margin", "0")
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe("<HeadingThree />", () => {
    it("renders correctly", () => {
      const { asFragment, container } = renderWithTheme(
        <HeadingThree>Heading Three</HeadingThree>
      )
      expect(container.firstChild).toHaveStyleRule(
        "font-family",
        `Graphik,"Helvetica Neue",Helvetica,Arial,Verdana,sans-serif`
      )
      expect(container.firstChild).toHaveStyleRule("font-size", "28px")
      expect(container.firstChild).toHaveStyleRule("font-weight", "400")
      expect(container.firstChild).toHaveStyleRule("letter-spacing", "-0.2px")
      expect(container.firstChild).toHaveStyleRule("line-height", "1.25")
      expect(container.firstChild).toHaveStyleRule("color", "rgb(36,28,21)")
      expect(container.firstChild).toHaveStyleRule("margin", "0")
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe("<HeadingFour />", () => {
    it("renders correctly", () => {
      const { asFragment, container } = renderWithTheme(
        <HeadingFour>Heading Four</HeadingFour>
      )
      expect(container.firstChild).toHaveStyleRule(
        "font-family",
        `Graphik,"Helvetica Neue",Helvetica,Arial,Verdana,sans-serif`
      )
      expect(container.firstChild).toHaveStyleRule("font-size", "20px")
      expect(container.firstChild).toHaveStyleRule("font-weight", "400")
      expect(container.firstChild).toHaveStyleRule("line-height", "1.25")
      expect(container.firstChild).toHaveStyleRule("color", "rgb(36,28,21)")
      expect(container.firstChild).toHaveStyleRule("margin", "0")
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe("<BodyBold />", () => {
    it("renders correctly", () => {
      const { asFragment, container } = renderWithTheme(
        <BodyBold>Body Bold</BodyBold>
      )
      expect(container.firstChild).toHaveStyleRule(
        "font-family",
        `Graphik,"Helvetica Neue",Helvetica,Arial,Verdana,sans-serif`
      )
      expect(container.firstChild).toHaveStyleRule("font-size", "16px")
      expect(container.firstChild).toHaveStyleRule("font-weight", "500")
      expect(container.firstChild).toHaveStyleRule("line-height", "1.5")
      expect(container.firstChild).toHaveStyleRule("color", "rgb(36,28,21)")
      expect(container.firstChild).toHaveStyleRule("margin", "0")
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe("<Body />", () => {
    it("renders correctly", () => {
      const { asFragment, container } = renderWithTheme(<Body>Body</Body>)
      expect(container.firstChild).toHaveStyleRule(
        "font-family",
        `Graphik,"Helvetica Neue",Helvetica,Arial,Verdana,sans-serif`
      )
      expect(container.firstChild).toHaveStyleRule("font-size", "16px")
      expect(container.firstChild).toHaveStyleRule("font-weight", "400")
      expect(container.firstChild).toHaveStyleRule("line-height", "1.5")
      expect(container.firstChild).toHaveStyleRule("color", "rgb(36,28,21)")
      expect(container.firstChild).toHaveStyleRule("margin", "0")
      expect(asFragment()).toMatchSnapshot()
    })
  })

  describe("<Label />", () => {
    it("renders correctly", () => {
      const { asFragment, container } = renderWithTheme(<Label>Label</Label>)
      expect(container.firstChild).toHaveStyleRule(
        "font-family",
        `Graphik,"Helvetica Neue",Helvetica,Arial,Verdana,sans-serif`
      )
      expect(container.firstChild).toHaveStyleRule("font-size", "14px")
      expect(container.firstChild).toHaveStyleRule("font-weight", "500")
      expect(container.firstChild).toHaveStyleRule("line-height", "1.5")
      expect(container.firstChild).toHaveStyleRule("color", "rgb(36,28,21)")
      expect(container.firstChild).toHaveStyleRule("margin", "0")
      expect(asFragment()).toMatchSnapshot()
    })
  })
})
