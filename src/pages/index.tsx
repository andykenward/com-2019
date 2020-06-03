import { GetStaticProps, NextPage } from "next"
import React from "react"
import { Grid } from "theme-ui"

import { HomeQuery } from "../../generated/graphql"
import { Footer } from "../components/footer"
import { Head } from "../components/head"
import { Header } from "../components/header"
import { ProjectsMenu } from "../components/projects"
import { appSdk } from "../utils/client"

const Home: NextPage<{ data: HomeQuery }> = ({ data }) => {
  const { _site, me, allProjects, footer } = data
  return (
    <>
      <Head
        title={_site?.globalSeo?.fallbackSeo?.title}
        description={_site.globalSeo?.fallbackSeo?.description}
        twitterAccount={_site.globalSeo?.twitterAccount}
      />
      <Grid gap={[32, 64]}>
        <Header data={me} />
        <ProjectsMenu data={allProjects} />
        <Footer data={footer} />
      </Grid>
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
