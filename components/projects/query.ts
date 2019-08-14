import { DocumentNode } from "graphql"
import gql from "graphql-tag"

export const QUERY_PROJECTS: DocumentNode = gql`
  query Projects {
    projects {
      id
      slug
      title
    }
  }
`

export const QUERY_PROJECTS_NAV: DocumentNode = gql`
  query ProjectsNav {
    projects {
      id
      slug
      title
    }
  }
`
