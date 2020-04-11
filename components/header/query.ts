import { DocumentNode } from "graphql"
import gql from "graphql-tag"

import { FRAGMENT_LINK } from "../link/query"

export const FRAGMENT_ME: DocumentNode = gql`
  fragment FragmentMe on Me {
    id
    name
    role
    update
    available
    links {
      ...FragmentLink
    }
  }
  ${FRAGMENT_LINK}
`

export const QUERY_ME: DocumentNode = gql`
  query Me {
    me(where: { id: "ck8vv6ync198z0104gjvsnrt8" }) {
      ...FragmentMe
    }
  }
  ${FRAGMENT_ME}
`
