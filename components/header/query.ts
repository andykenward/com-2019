import { DocumentNode, FragmentSpreadNode } from "graphql"
import gql from "graphql-tag"

import { FRAGMENT_LINK } from "../link/query"

export const FRAGMENT_ME: FragmentSpreadNode = gql`
  fragment FragmentMe on Me {
    id
    name
    role
    update
    links {
      ...FragmentLink
    }
  }
  ${FRAGMENT_LINK}
`

export const QUERY_ME: DocumentNode = gql`
  query Me {
    me(where: { id: "cjzkx8reiebu10941932j2b3x" }) {
      ...FragmentMe
    }
  }
  ${FRAGMENT_ME}
`
