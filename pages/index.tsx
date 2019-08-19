import { NextPage } from "next"
import React from "react"
import { Head } from "../components/head"
import { ProjectsMenu } from "../components/projects"

// export const config = { amp: `hybrid` }

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <ProjectsMenu />
    </>
  )
}

export default Home
