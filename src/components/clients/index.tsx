import { FragmentProjectNavFragment } from "../../../generated/graphql"
import { BodyBold } from "../typography"

export const Clients: React.FC<Pick<FragmentProjectNavFragment, "clients">> = ({
  clients,
}) => (
  <>
    {(clients ?? []).map(
      ({ id, title }) =>
        id &&
        title && (
          <BodyBold key={id} textTransform="uppercase">
            {title}
          </BodyBold>
        )
    )}
  </>
)
