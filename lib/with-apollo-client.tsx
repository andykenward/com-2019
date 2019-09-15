import { getDataFromTree } from "@apollo/react-ssr"
import { ApolloClient, NormalizedCacheObject } from "apollo-boost"
import {
  AppContextType,
  AppPropsType,
  NextComponentType,
} from "next-server/dist/lib/utils"
import { AppContext, AppInitialProps, AppProps } from "next/app"
import Head from "next/head"
import React from "react"

import initApollo from "./init-apollo"

export interface ApolloProps {
  apolloState?: NormalizedCacheObject
  apolloClient: ApolloClient<NormalizedCacheObject>
}

// (MyApp: AppComponentType<IApolloProps & AppInitialProps>)

export default (
  MyApp: NextComponentType<
    AppContextType,
    AppInitialProps,
    AppPropsType & ApolloProps
  >
) => {
  return class Apollo extends React.Component<
    ApolloProps & AppInitialProps & AppProps
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
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
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

    constructor(props: ApolloProps & AppInitialProps & AppProps) {
      super(props)
      this.apolloClient = initApollo(props.apolloState)
    }

    render() {
      return <MyApp apolloClient={this.apolloClient} {...this.props} />
    }
  }
}
