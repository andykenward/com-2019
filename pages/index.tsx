import { NextPage } from "next"
import React from "react"

import { App } from "../components/app"
import { Box } from "../components/box"
import { Footer } from "../components/footer"
import { Head } from "../components/head"
import { Header } from "../components/header"
import { ProjectsMenu } from "../components/projects"
import { withApollo } from "../lib/apollo"

// export const config = { amp: `hybrid` }

const Home: NextPage = () => {
  return (
    <App>
      <Head />
      <Box display="grid" gridRowGap={[32, 64]}>
        <Header />
        <ProjectsMenu />
        <Footer />
      </Box>
    </App>
  )
}

export default withApollo()(Home)
