import { FragmentSpreadNode } from "graphql"
import gql from "graphql-tag"

export const FRAGMENT_LINK: FragmentSpreadNode = gql`
  fragment FragmentLink on Link {
    id
    title
    url
  }
`
