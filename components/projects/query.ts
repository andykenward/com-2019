import { DocumentNode, FragmentSpreadNode } from "graphql"
import gql from "graphql-tag"

import { FRAGMENT_CLIENT } from "../clients/query"
import { FRAGMENT_TAG } from "../tags/query"

export const QUERY_PROJECTS: DocumentNode = gql`
  query Projects {
    projects(orderBy: sort_ASC) {
      id
      slug
      title
    }
  }
`

export const FRAGMENT_PROJECTNAV: FragmentSpreadNode = gql`
  fragment FragmentProjectNav on Project {
    id
    clients {
      ...FragmentClient
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
      ...FragmentTag
    }
    urlCaseStudy
    url
    sort
  }
  ${FRAGMENT_CLIENT}
  ${FRAGMENT_TAG}
`

export const QUERY_PROJECTS_NAV: DocumentNode = gql`
  query ProjectsNav {
    projects(orderBy: sort_ASC) {
      ...FragmentProjectNav
    }
  }
`
