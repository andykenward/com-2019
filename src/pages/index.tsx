import { GetStaticProps, NextPage } from "next"
import React from "react"
import { Grid } from "theme-ui"

import { HomeQuery } from "../../generated/graphql"
import { Footer } from "../components/footer"
import { Head } from "../components/head"
import { Header } from "../components/header"
import { ProjectsMenu } from "../components/projects"
import { appSdkToggle } from "../lib/api"

type Props = {
  data: HomeQuery
}

const Home: NextPage<Props> = ({ data }) => {
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

export const getStaticProps: GetStaticProps<Props> = async ({
  preview = false,
}) => {
  try {
    const data = await appSdkToggle(preview).Home()

    return { props: { data } }
  } catch (error) {
    console.log("error", error)
    throw error
  }
}

export default Home
