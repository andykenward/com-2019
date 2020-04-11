import { DocumentNode } from "graphql"
import gql from "graphql-tag"

export const FRAGMENT_CLIENT: DocumentNode = gql`
  fragment FragmentClient on Client {
    id
    title
    href
  }
`
