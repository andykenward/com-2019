import Maybe from "graphql/tsutils/Maybe"

import { Scalars, useMeQuery } from "../../generated/graphql"
import { Box } from "../box"
import { ButtonExternal } from "../button"
import { ColumnsCenter } from "../columns"
import { HeadingOne, HeadingThree, HeadingTwo } from "../typography"

const getMonthYear = (available?: Maybe<Scalars["DateTime"]>) => {
  if (available == null) return null
  return new Date(available).toLocaleString("en-GB", {
    month: "long",
    year: "numeric",
  })
}

export const Header: React.FC = () => {
  const { data } = useMeQuery()

  if (data?.me == null) return null
  const { name, role, update, links, available } = data.me

  const date = getMonthYear(available)

  return (
    <ColumnsCenter py={[64, 128]} as="header" bg="primary">
      {name && (
        <HeadingOne data-testid="name" fontSize={[48, 64, 80]}>
          {name}
        </HeadingOne>
      )}
      {role && (
        <HeadingTwo data-testid="role" mb={8}>
          {role}
        </HeadingTwo>
      )}
      {update && (
        <HeadingThree data-testid="update" fontSize={[20, 28]} mb={16}>
          {update}
        </HeadingThree>
      )}
      {date && (
        <HeadingThree
          as="h4"
          data-testid="available"
          fontSize={[20, 28]}
          mb={16}
        >
          Available from {date}
        </HeadingThree>
      )}
      {links?.length && (
        <Box data-testid="links">
          {links.map(
            item =>
              item.url && (
                <ButtonExternal
                  data-testid="link"
                  key={item.id}
                  href={item.url}
                >
                  {item.title}
                </ButtonExternal>
              )
          )}
        </Box>
      )}
    </ColumnsCenter>
  )
}
