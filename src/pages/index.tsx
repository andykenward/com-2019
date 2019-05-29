import { Link } from "gatsby"
import React from "react"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box } from "../components/box"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Box css={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </Box>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
