import { useMeQuery } from "../../generated/graphql"
import { Box } from "../box"
import { ButtonExternal } from "../button"
import { ColumnsCenter } from "../columns"
import { HeadingOne, HeadingThree, HeadingTwo } from "../typography"

export const Header: React.FC = () => {
  const { data } = useMeQuery()

  if (data == null || data.me == null) return null
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
      <Box data-testid="links">
        {(links || []).map(
          item =>
            item &&
            item.url && (
              <ButtonExternal key={item.id} href={item.url}>
                {item.title}
              </ButtonExternal>
            )
        )}
      </Box>
    </ColumnsCenter>
  )
}
