import { DocumentNode } from "graphql"
import gql from "graphql-tag"

export const FRAGMENT_LINK: DocumentNode = gql`
  fragment FragmentLink on Link {
    id
    title
    href
  }
`
