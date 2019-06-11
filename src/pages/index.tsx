import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Projects } from "../components/projects"
import { useProjects } from "../components/projects/query"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Projects data={useProjects()} />
  </Layout>
)

export default IndexPage
