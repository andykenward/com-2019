import { DocumentNode } from "graphql"
import gql from "graphql-tag"

export const QUERY_PROJECTS: DocumentNode = gql`
  query Projects {
    projects(orderBy: date_DESC) {
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
      ...Clients
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
      ...Tags
    }
    urlCaseStudy
    url
  }
`

export const QUERY_PROJECTS_NAV: DocumentNode = gql`
  query ProjectsNav {
    projects(orderBy: date_DESC) {
      ...ProjectNavItem
    }
  }
`
