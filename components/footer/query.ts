import { DocumentNode } from "graphql"
import gql from "graphql-tag"

import { FRAGMENT_LINK } from "../link/query"

export const QUERY_FOOTER: DocumentNode = gql`
  query Footer {
    footer(where: { id: "ck8vw5x4w19nc0104oio2p1ml" }) {
      id
      links {
        ...FragmentLink
      }
    }
  }
  ${FRAGMENT_LINK}
`
