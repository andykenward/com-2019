import { NextPage } from "next"
import React from "react"
import { ProjectsMenu } from "../components/projects"

export const config = { amp: `hybrid` }

const Home: NextPage = () => {
  return (
    <>
      <h1>Hello world! change</h1>
      <ProjectsMenu />
    </>
  )
}

export default Home
