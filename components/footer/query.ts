import { DocumentNode } from "graphql"
import gql from "graphql-tag"

export const QUERY_FOOTER: DocumentNode = gql`
  query Footer {
    footer(where: { id: "cjzjk2d1gvch50887pxsk6yju" }) {
      id
      links {
        ...Link
      }
    }
  }
`
