import { Link } from "gatsby"
import React from "react"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box } from "../components/box"
import { Body } from "../components/typography"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Body>Welcome to your new Gatsby site.</Body>
    <Body>Now go build something great.</Body>
    <Box css={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </Box>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
