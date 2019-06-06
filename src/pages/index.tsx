import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Tags } from "../components/tags"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Tags />
  </Layout>
)

export default IndexPage
