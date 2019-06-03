/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React, { ReactNode } from "react"
import { oc } from "ts-optchain"

import { SiteTitleQueryQuery } from "../types/graphqlTypes"

import Header from "./header"
import { Box } from "./box"

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
      <Box
        css={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Box>
    </>
  )
}

export default Layout
