import { NextPage } from "next"
import React from "react"
import { Box } from "../components/box"
import { Footer } from "../components/footer"
import { Head } from "../components/head"
import { Header } from "../components/header"
import { ProjectsMenu } from "../components/projects"

// export const config = { amp: `hybrid` }

const Home: NextPage = () => {
  return (
    <Box display="grid" gridRowGap={[32, 64]}>
      <Head />
      <Header />
      <ProjectsMenu />
      <Footer />
    </Box>
  )
}

export default Home
