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

gql`
  fragment ProjectNavItem on Project {
    id
    clients {
      id
      title
    }
    slug
    title
    description
    role
    studio {
      id
      title
      url
    }
    tags {
      id
      title
      url
    }
    urlCaseStudy
    url
  }
`

export const QUERY_PROJECTS_NAV: DocumentNode = gql`
  query ProjectsNav {
    projects {
      ...ProjectNavItem
    }
  }
`
