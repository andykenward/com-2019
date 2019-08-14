import { DocumentNode } from "graphql"
import gql from "graphql-tag"

export const QUERY_PROJECTS: DocumentNode = gql`
  query Project($slug: String) {
    project(where: { slug: $slug }) {
      id
      slug
      title
    }
  }
`
