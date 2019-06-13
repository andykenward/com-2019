import { useStaticQuery, graphql } from "gatsby"
import { oc } from "ts-optchain"

import {
  TagsQueryQuery,
  Maybe,
  SiteSiteMetadataTags,
} from "../../types/graphqlTypes.d"

export const useTags = (): Maybe<Array<Maybe<SiteSiteMetadataTags>>> => {
  const data: TagsQueryQuery = useStaticQuery(graphql`
    query TagsQuery {
      site {
        siteMetadata {
          tags {
            title
            url
          }
        }
      }
    }
  `)
  return oc(data).site.siteMetadata.tags([])
}
