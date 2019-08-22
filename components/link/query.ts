import gql from "graphql-tag"

gql`
  fragment Link on Link {
    id
    title
    url
  }
`
