import { DocumentNode } from "graphql"
import gql from "graphql-tag"

export const FRAGMENT_TAG: DocumentNode = gql`
  fragment FragmentTag on Tag {
    id
    title
    href
  }
`
