import { DocumentNode } from "graphql"
import gql from "graphql-tag"

import { FRAGMENT_CLIENT } from "../clients/query"
import { FRAGMENT_TAG } from "../tags/query"

export const QUERY_PROJECTS: DocumentNode = gql`
  query Projects {
    projects {
      id
      slug
      title
    }
  }
`

export const FRAGMENT_PROJECTNAV: DocumentNode = gql`
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
      href
    }
    tags {
      ...FragmentTag
    }
    hrefCaseStudy
    href
  }
  ${FRAGMENT_CLIENT}
  ${FRAGMENT_TAG}
`

export const QUERY_PROJECTS_NAV: DocumentNode = gql`
  query ProjectsNav {
    projects {
      ...FragmentProjectNav
    }
  }
  ${FRAGMENT_PROJECTNAV}
`
