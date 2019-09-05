import { DocumentNode } from "graphql"
import gql from "graphql-tag"

import { FRAGMENT_LINK } from "../link/query"

export const QUERY_FOOTER: DocumentNode = gql`
  query Footer {
    footer(where: { id: "cjzjk2d1gvch50887pxsk6yju" }) {
      id
      links {
        ...FragmentLink
      }
    }
  }
  ${FRAGMENT_LINK}
`
