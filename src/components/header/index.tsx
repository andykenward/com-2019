import React from "react"

import { oc } from "ts-optchain"

import { Box } from "../box"
import { HeadingOne, HeadingTwo } from "../typography"
import { Maybe, SiteSiteMetadataHeading } from "../../types/graphqlTypes.d"
import { ButtonExternal } from "../button"
import { ColumnsCenter } from "../columns"

interface Props {
  data?: Maybe<SiteSiteMetadataHeading>
}

const Header: React.FC<Props> = ({ data }) =>
  data ? (
    <ColumnsCenter py={[64, 128]} as="header" bg="primary">
      <HeadingOne fs={[48, 64, 80]}>{oc(data).name("")}</HeadingOne>
      <HeadingTwo mb={8}>{oc(data).role("")}</HeadingTwo>
      <Box>
        <ButtonExternal href={oc(data).email("")}>Email</ButtonExternal>
        <ButtonExternal href={oc(data).github("")}>GitHub</ButtonExternal>
      </Box>
    </ColumnsCenter>
  ) : null
export default Header
