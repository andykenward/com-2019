import { DocumentNode } from "graphql"
import gql from "graphql-tag"

// cjzkx8reiebu10941932j2b3x

gql`
  fragment Me on Me {
    id
    name
    role
    update
    links {
      ...Link
    }
  }
`

export const QUERY_ME: DocumentNode = gql`
  query Me {
    me(where: { id: "cjzkx8reiebu10941932j2b3x" }) {
      ...Me
    }
  }
`
