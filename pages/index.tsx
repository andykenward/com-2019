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
      <Box display="grid" gridRowGap={[32, 64]}>
        <Head />
        <Header />
        <ProjectsMenu />
        <Footer />
      </Box>
    </App>
  )
}

export default withApollo(Home, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: Boolean(process.env.SSR),
})
