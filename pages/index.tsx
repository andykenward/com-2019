import { NextPage } from "next"
import React from "react"

import { Projects, ProjectsMenu } from "../components/projects"

const Home: NextPage = () => {
  return (
    <>
      <h1>Hello world! change</h1>
      <ProjectsMenu />
    </>
  )
}

export default Home
