import { ApolloProvider } from "@apollo/react-hooks"
import { css, Global } from "@emotion/core"
import emotionNormalize from "emotion-normalize"
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
          <Global
            styles={css`
              html {
                box-sizing: border-box;
                font-family: "Open Sans", "serif";
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
              }
              *,
              *:before,
              *:after {
                box-sizing: inherit;
              }
              body {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              ${emotionNormalize}
            `}
          />
          <Component {...pageProps} {...others} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
