import { DocumentNode } from "graphql"
import gql from "graphql-tag"

export const QUERY_WORK: DocumentNode = gql`
  query Work {
    projects(orderBy: date_DESC) {
      __typename
      id
      slug
      title
    }
  }
`
