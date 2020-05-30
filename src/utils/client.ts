import { GraphQLClient } from "graphql-request"

import { getSdk } from "../../generated/graphql"

const graphqlClient = new GraphQLClient(process.env.API_URL, {
  headers: {
    authorization: `Bearer ${process.env.API_TOKEN}`,
  },
})

export const appSdk = (() => getSdk(graphqlClient))()
