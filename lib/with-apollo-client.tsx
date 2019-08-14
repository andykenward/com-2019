import initApollo from "./init-apollo"
import React from "react"
import Head from "next/head"
import { getDataFromTree } from "@apollo/react-ssr"
import { AppProps, AppInitialProps, AppContext } from "next/app"
import { ApolloClient, NormalizedCacheObject } from "apollo-boost"
import {
  AppContextType,
  AppPropsType,
  NextComponentType,
} from "next-server/dist/lib/utils"

export interface IApolloProps {
  apolloState?: NormalizedCacheObject
  apolloClient: ApolloClient<NormalizedCacheObject>
}

// (MyApp: AppComponentType<IApolloProps & AppInitialProps>)

export default (
  MyApp: NextComponentType<
    AppContextType,
    AppInitialProps,
    AppPropsType & IApolloProps
  >
) => {
  return class Apollo extends React.Component<
    IApolloProps & AppInitialProps & AppProps
  > {
    public apolloClient: ApolloClient<NormalizedCacheObject>
    static displayName = "withApollo(App)"
    static async getInitialProps(ctx: AppContext) {
      const { AppTree } = ctx

      let appProps = {}
      if (MyApp.getInitialProps) {
        appProps = await MyApp.getInitialProps(ctx)
      }
      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo()

      if (typeof window === "undefined") {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            // @ts-ignore
            <AppTree {...appProps} apolloClient={apollo} />
          )
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error("Error while running `getDataFromTree`", error)
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract()

      return {
        ...appProps,
        apolloState,
      }
    }

    constructor(props: IApolloProps & AppInitialProps & AppProps) {
      super(props)
      this.apolloClient = initApollo(props.apolloState)
    }

    render() {
      return <MyApp apolloClient={this.apolloClient} {...this.props} />
    }
  }
}
