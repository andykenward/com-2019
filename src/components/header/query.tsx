import { graphql, useStaticQuery } from "gatsby"
import { oc } from "ts-optchain"

import {
  HeaderQuery,
  Maybe,
  SiteSiteMetadataHeading,
} from "../../types/graphqlTypes.d"

export const useHeader = (): Maybe<SiteSiteMetadataHeading> => {
  const data: HeaderQuery = useStaticQuery(graphql`
    query Header {
      site {
        siteMetadata {
          heading {
            name
            role
            status
            email
            github
          }
        }
      }
    }
  `)
  return oc(data).site.siteMetadata.heading(null)
}
