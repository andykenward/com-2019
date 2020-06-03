import { GraphQLClient } from "graphql-request"

import { getSdk } from "../../generated/graphql"

if (!process.env.API_URL || !process.env.API_TOKEN) {
  throw Error(
    "API_URL or API_TOKEN are missing, please define in environment variables"
  )
}

const graphqlClient = new GraphQLClient(process.env.API_URL, {
  headers: {
    authorization: `Bearer ${process.env.API_TOKEN}`,
  },
})

export const appSdk = (() => getSdk(graphqlClient))()
