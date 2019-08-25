import { ApolloProvider } from "@apollo/react-hooks"
import { ThemeProvider } from "emotion-theming"
import { AppPropsType } from "next-server/dist/lib/utils"
import { AppInitialProps, Container } from "next/app"
import * as React from "react"
import { theme } from "../lib/theme"
import withApolloClient, { ApolloProps } from "../lib/with-apollo-client"

export const config = { amp: `hybrid` }
class MyApp extends React.Component<
  ApolloProps & AppInitialProps & AppPropsType
> {
  render() {
    const { Component, pageProps, apolloClient, ...others } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} {...others} />
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
