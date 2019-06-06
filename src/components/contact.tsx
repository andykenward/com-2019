import { useStaticQuery, graphql } from "gatsby"

import { oc } from "ts-optchain"

import {
  SiteSiteMetadataContact,
  ContactQuery,
  Maybe,
} from "../types/graphqlTypes.d"

export const useContact = (): Maybe<SiteSiteMetadataContact>[] => {
  const data: ContactQuery = useStaticQuery(
    graphql`
      query Contact {
        site {
          siteMetadata {
            contact {
              title
              url
            }
          }
        }
      }
    `
  )
  return oc(data).site.siteMetadata.contact([])
}
