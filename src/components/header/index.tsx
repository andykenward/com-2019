import React from "react"

import { oc } from "ts-optchain"

import { Box } from "../box"
import { HeadingOne, HeadingTwo } from "../typography"
import { Maybe, SiteSiteMetadataHeading } from "../../types/graphqlTypes.d"

interface Props {
  data?: Maybe<SiteSiteMetadataHeading>
}

const Header: React.FC<Props> = ({ data }) =>
  data ? (
    <Box py={[64, 128]} as="header" bg="primary">
      <Box px={32} mx={[null, "auto"]} width={[null, 3 / 4]}>
        <HeadingOne fs={[48, 64, 80]}>{oc(data).name("")}</HeadingOne>
        <HeadingTwo>{oc(data).role("")}</HeadingTwo>
      </Box>
    </Box>
  ) : null
export default Header
