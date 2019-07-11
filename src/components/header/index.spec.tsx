import React from "react"
import { omit } from "ramda"

import { renderWithTheme } from "../../utils"

import Header from "."

describe("<Header />", () => {
  const mockData = {
    name: "Andy Kenward",
    role: "Senior Front-End Engineer",
    status: "hire me",
    email: "a@a.com",
    github: "github",
  }
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

  it("renders when `name` is `null`", () => {
    const { container } = renderWithTheme(
      <Header data={omit(["name"], mockData)} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders when `role` is `null`", () => {
    const { container } = renderWithTheme(
      <Header data={omit(["role"], mockData)} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it("renders when `status` is `null`", () => {
    const { container } = renderWithTheme(
      <Header data={omit(["status"], mockData)} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it("renders when `email` is `null`", () => {
    const { container } = renderWithTheme(
      <Header data={omit(["email"], mockData)} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it("renders when `github` is `null`", () => {
    const { container } = renderWithTheme(
      <Header data={omit(["github"], mockData)} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it("renders when `github` & `email` is `null`", () => {
    const { container } = renderWithTheme(
      <Header data={omit(["github", "email"], mockData)} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it("renders correctly", () => {
    const { container } = renderWithTheme(<Header data={mockData} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
