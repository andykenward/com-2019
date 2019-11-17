import { DocumentNode, FragmentSpreadNode } from "graphql"
import gql from "graphql-tag"

import { FRAGMENT_PROJECTNAV } from "../projects/query"

const FRAGMENT_HERO: FragmentSpreadNode = gql`
  fragment FragmentHero on Project {
    hero {
      id
      handle
      altText
    }
  }
`

export const QUERY_PROJECTS: DocumentNode = gql`
  query Project($slug: String) {
    project(where: { slug: $slug }) {
      ...FragmentProjectNav
      ...FragmentHero
    }
  }
  ${FRAGMENT_PROJECTNAV}
  ${FRAGMENT_HERO}
`
