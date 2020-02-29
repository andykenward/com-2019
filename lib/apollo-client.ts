import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import fetch from "isomorphic-unfetch"
import { NextPageContext } from "next"

export default function createApolloClient(
  initialState: NormalizedCacheObject = {},
  ctx?: NextPageContext
) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      uri: `${process.env.ENDPOINT}`, // Server URL (must be absolute)
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
      fetch,
    }),
    cache: new InMemoryCache().restore(initialState),
  })
}
