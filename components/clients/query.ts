import { FragmentSpreadNode } from "graphql"
import gql from "graphql-tag"

export const FRAGMENT_CLIENT: FragmentSpreadNode = gql`
  fragment FragmentClient on Client {
    id
    title
    url
  }
`
