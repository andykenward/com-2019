import { GetStaticProps, NextPage } from "next"
import React from "react"

import { HomeQuery } from "../../generated/graphql"
import { Box } from "../components/box"
import { Footer } from "../components/footer"
import { Head } from "../components/head"
import { Header } from "../components/header"
import { ProjectsMenu } from "../components/projects"
import { appSdk } from "../utils/client"

const Home: NextPage<{ data: HomeQuery }> = ({ data }) => {
  const { me, allProjects, footer } = data
  return (
    <>
      <Head />
      <Box display="grid" gridRowGap={[32, 64]}>
        <Header data={me} />
        <ProjectsMenu data={allProjects} />
        <Footer data={footer} />
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await appSdk.Home()

    return { props: { data } }
  } catch (error) {
    console.log("error", error)
    throw error
  }
}

export default Home
