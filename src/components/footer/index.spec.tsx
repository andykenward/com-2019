import React from "react"

import { renderWithTheme } from "../../utils"
import { SiteSiteMetadataContact, Maybe } from "../../types/graphqlTypes.d"

import { Footer } from "."

const mockData: Maybe<SiteSiteMetadataContact>[] = [
  { title: "title one", url: "url one" },
  { title: "title two", url: "url two" },
  { title: undefined, url: "url three" },
  { title: "title four", url: undefined },
  { title: undefined, url: undefined },
]

describe("<Footer />", () => {
  it("renders null with empty array", () => {
    const { container } = renderWithTheme(<Footer data={[]} />)
    expect(container.firstChild).toBeNull()
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders with 2 items", () => {
    const { container } = renderWithTheme(<Footer data={mockData} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
