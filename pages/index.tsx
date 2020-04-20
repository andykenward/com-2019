import { GraphQLClient } from "graphql-request"
import { GetStaticProps, NextPage } from "next"
import React from "react"

import { Box } from "../components/box"
import { Footer } from "../components/footer"
import { Head } from "../components/head"
import { Header } from "../components/header"
import { ProjectsMenu } from "../components/projects"
import { getSdk, HomeQuery } from "../generated/graphql"

const Home: NextPage<{ data: HomeQuery }> = ({ data }) => {
  const { me, projects, footer } = data
  return (
    <>
      <Head />
      <Box display="grid" gridRowGap={[32, 64]}>
        <Header data={me} />
        <ProjectsMenu data={projects} />
        <Footer data={footer} />
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const client = new GraphQLClient(`${process.env.ENDPOINT}`)
    const sdk = getSdk(client)
    const data = await sdk.Home()

    return { props: { data } }
  } catch (error) {
    console.log("error", error)
    throw error
  }
}

export default Home
