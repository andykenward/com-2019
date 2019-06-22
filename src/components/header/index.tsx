import React from "react"

import { oc } from "ts-optchain"

import { Box } from "../box"
import { HeadingOne, HeadingTwo } from "../typography"
import { Maybe, SiteSiteMetadataHeading } from "../../types/graphqlTypes.d"
import { ButtonExternal } from "../button"

interface Props {
  data?: Maybe<SiteSiteMetadataHeading>
}

const Header: React.FC<Props> = ({ data }) =>
  data ? (
    <Box
      py={[64, 128]}
      as="header"
      bg="primary"
      display="grid"
      gridTemplateColumns={[
        "32px 1fr 32px",
        "minmax(32px,15%) 1fr minmax(32px,15%)",
      ]}
    >
      <HeadingOne gridColumn="2/3" fs={[48, 64, 80]}>
        {oc(data).name("")}
      </HeadingOne>
      <HeadingTwo gridColumn="2/3" mb={8}>
        {oc(data).role("")}
      </HeadingTwo>
      <Box gridColumn="2/3">
        <ButtonExternal href={oc(data).email("")}>Email</ButtonExternal>
        <ButtonExternal href={oc(data).github("")}>GitHub</ButtonExternal>
      </Box>
    </Box>
  ) : null
export default Header
