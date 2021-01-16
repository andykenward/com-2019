import { Box, Heading, Text } from "theme-ui"

import { FragmentMeFragment, MeRecord } from "../../../generated/graphql"
import { ColumnsCenter } from "../columns"
import { LinkExternal } from "../link"

const getMonthYear = (available?: MeRecord["available"]) => {
  if (available == null) return null
  return new Date(available).toLocaleString("en-GB", {
    month: "long",
    year: "numeric",
  })
}

export const Header: React.FC<{ data?: FragmentMeFragment | null }> = ({
  data,
}) => {
  if (data == null) return null
  const { name, role, update, links, available, email } = data

  const date = getMonthYear(available)

  return (
    <ColumnsCenter as="header" py={[64, 128]} bg="primary">
      {name && (
        <Heading as="h1" variant="headingOne" sx={{ fontSize: [48, 64, 80] }}>
          {name}
        </Heading>
      )}
      {role && (
        <Heading as="h2" variant="headingTwo" mb={8}>
          {role}
        </Heading>
      )}
      {update && (
        <Heading
          as="h3"
          variant="headingThree"
          mb={16}
          sx={{ fontSize: [20, 28] }}
        >
          {update}
        </Heading>
      )}
      {date && (
        <Heading
          as="h4"
          variant="headingThree"
          mb={16}
          sx={{ fontSize: [20, 28] }}
        >
          Available from {date}
        </Heading>
      )}
      {email && (
        <Text as="p" variant="body" mb={16}>
          {email}
        </Text>
      )}
      {links?.length && (
        <Box>
          {links.map(
            ({ href, id, title }) =>
              href && (
                <LinkExternal variant="outline" key={id} href={href}>
                  {title}
                </LinkExternal>
              )
          )}
        </Box>
      )}
    </ColumnsCenter>
  )
}
