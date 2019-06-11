import { useStaticQuery, graphql } from "gatsby"
import { oc } from "ts-optchain"

import { TagsQueryQuery, Maybe, Scalars } from "../../types/graphqlTypes.d"

export const useTags = (): Maybe<Scalars["String"]>[] => {
  const data: TagsQueryQuery = useStaticQuery(graphql`
    query TagsQuery {
      site {
        siteMetadata {
          tags
        }
      }
    }
  `)
  return oc(data).site.siteMetadata.tags([])
}
