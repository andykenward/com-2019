import { useMeQuery } from "../../generated/graphql"
import { Box } from "../box"
import { ButtonExternal } from "../button"
import { ColumnsCenter } from "../columns"
import { HeadingOne, HeadingThree, HeadingTwo } from "../typography"

export const Header: React.FC = () => {
  const { data } = useMeQuery()

  if (data?.me == null) return null
  const { name, role, update, links } = data.me

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
