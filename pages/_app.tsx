import { ApolloProvider } from "@apollo/react-hooks"
import { AppPropsType } from "next-server/dist/lib/utils"
import { AppInitialProps, Container } from "next/app"
import * as React from "react"
import withApolloClient, { IApolloProps } from "../lib/with-apollo-client"

export const config = { amp: `hybrid` }
class MyApp extends React.Component<
  IApolloProps & AppInitialProps & AppPropsType
> {
  render() {
    const { Component, pageProps, apolloClient, ...others } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} {...others} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
