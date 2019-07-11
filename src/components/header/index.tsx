import React from "react"

import { Box } from "../box"
import { HeadingOne, HeadingTwo, HeadingThree } from "../typography"
import { Maybe, SiteSiteMetadataHeading } from "../../types/graphqlTypes.d"
import { ButtonExternal } from "../button"
import { ColumnsCenter } from "../columns"

interface Props {
  data?: Maybe<SiteSiteMetadataHeading>
}

const Header: React.FC<Props> = ({ data }) => {
  if (data == null) return null
  const { name, role, status, email, github } = data!
  return (
    <ColumnsCenter py={[64, 128]} as="header" bg="primary">
      {name && <HeadingOne fs={[48, 64, 80]}>{name}</HeadingOne>}
      {role && <HeadingTwo mb={8}>{role}</HeadingTwo>}
      {status && (
        <HeadingThree fs={[20, 28]} mb={16}>
          {status}
        </HeadingThree>
      )}
      {(email || github) && (
        <Box>
          {email && <ButtonExternal href={email!}>Email</ButtonExternal>}
          {github && <ButtonExternal href={github!}>GitHub</ButtonExternal>}
        </Box>
      )}
    </ColumnsCenter>
  )
}
export default Header
