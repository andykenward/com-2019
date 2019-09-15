import { DocumentNode } from "graphql"
import gql from "graphql-tag"

import { FRAGMENT_PROJECTNAV } from "../projects/query"

export const QUERY_PROJECTS: DocumentNode = gql`
  query Project($slug: String) {
    project(where: { slug: $slug }) {
      ...FragmentProjectNav
    }
  }
  ${FRAGMENT_PROJECTNAV}
`
