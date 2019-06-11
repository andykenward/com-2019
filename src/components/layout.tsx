/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { ReactNode } from "react"

import Header from "./header"
import { Footer } from "./footer"
import { useContact } from "./contact"
import { useHeader } from "./header/query"

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header data={useHeader()} />
    <main>{children}</main>
    <Footer data={useContact()} />
  </>
)

export default Layout
