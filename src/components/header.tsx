import React from "react"

import { Box } from "./box"
import { HeadingOne, HeadingTwo } from "./typography"

interface Props {
  siteTitle?: string
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <Box as="header" bg="primary">
    <HeadingOne>Andy Kenward</HeadingOne>
    <HeadingTwo>Senior Front-End Engineer</HeadingTwo>
  </Box>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
