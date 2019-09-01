import { ApolloProvider } from "@apollo/react-hooks"
import { ThemeProvider } from "emotion-theming"
import { AppPropsType } from "next-server/dist/lib/utils"
import { AppInitialProps } from "next/app"
import Router from "next/router"
import * as React from "react"
import { pageview } from "../lib/gtag"
import { theme } from "../lib/theme"
import withApolloClient, { ApolloProps } from "../lib/with-apollo-client"

// export const config = { amp: `hybrid` }
class MyApp extends React.Component<
  ApolloProps & AppInitialProps & AppPropsType
> {
  render() {
    const { Component, pageProps, apolloClient, ...others } = this.props
    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} {...others} />
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}

export default withApolloClient(MyApp)

Router.events.on("routeChangeComplete", url => pageview(url))
