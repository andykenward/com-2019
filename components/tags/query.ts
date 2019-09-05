import { FragmentSpreadNode } from "graphql"
import gql from "graphql-tag"

export const FRAGMENT_TAG: FragmentSpreadNode = gql`
  fragment FragmentTag on Tag {
    id
    title
    url
  }
`
