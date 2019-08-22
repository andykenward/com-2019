import gql from "graphql-tag"

gql`
  fragment Clients on Client {
    id
    title
    url
  }
`
