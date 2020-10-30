import { GraphQLClient } from "graphql-request"

import { getSdk } from "../../generated/graphql"

const API_URL =
  process.env.NODE_ENV === "test" && !process.env.API_URL
    ? "http://localhost:3000/graphql"
    : process.env.API_URL

const API_TOKEN =
  process.env.NODE_ENV === "test" && !process.env.API_TOKEN
    ? "test"
    : process.env.API_TOKEN

if (!API_URL || !API_TOKEN) {
  throw Error(
    "API_URL or API_TOKEN are missing, please define in environment variables"
  )
}

const graphqlClient = new GraphQLClient(API_URL, {
  headers: {
    authorization: `Bearer ${API_TOKEN}`,
  },
})

export const appSdk = (() => getSdk(graphqlClient))()
