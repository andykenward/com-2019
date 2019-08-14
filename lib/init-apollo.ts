import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from "apollo-boost"
import isoFetch from "isomorphic-unfetch"

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

function create(initialState: NormalizedCacheObject | undefined) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const isBrowser: boolean = typeof window !== "undefined"

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri:
        "https://api-euwest.graphcms.com/v1/cjywu05hg0ysg01dj8nkna8ma/master", // Server URL (must be absolute)
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
      // Use fetch() polyfill on the server
      fetch: !isBrowser ? isoFetch : fetch,
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  })
}

export default function initApollo(
  initialState?: NormalizedCacheObject | undefined
) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === "undefined") {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
