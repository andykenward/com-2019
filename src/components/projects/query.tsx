import { graphql, useStaticQuery } from "gatsby"
import { oc } from "ts-optchain"

import {
  Maybe,
  ProjectsQuery,
  SiteSiteMetadataProjects,
} from "../../types/graphqlTypes.d"

export const useProjects = (): Maybe<SiteSiteMetadataProjects>[] => {
  const data: ProjectsQuery = useStaticQuery(
    graphql`
      query Projects {
        site {
          siteMetadata {
            projects {
              title
              client
              siteUrl
              caseUrl
              tags {
                title
                url
              }
              role
            }
          }
        }
      }
    `
  )
  return oc(data).site.siteMetadata.projects([])
}
