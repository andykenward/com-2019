import gql from "graphql-tag"

gql`
  fragment Tags on Tag {
    id
    title
    url
  }
`
