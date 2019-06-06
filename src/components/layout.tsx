/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React, { ReactNode } from "react"
import { oc } from "ts-optchain"

import { SiteTitleQueryQuery } from "../types/graphqlTypes.d"

import Header from "./header"
import { Footer } from "./footer"
import { useContact } from "./contact"

interface Props {
  children: ReactNode
}

const useSiteTitle = () => {
  const data: SiteTitleQueryQuery = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return oc(data).site.siteMetadata.title("")
}

const Layout: React.FC<Props> = ({ children }) => {
  const title = useSiteTitle()

  return (
    <>
      <Header siteTitle={title} />
      <main>{children}</main>
      <Footer data={useContact()} />
    </>
  )
}

export default Layout
