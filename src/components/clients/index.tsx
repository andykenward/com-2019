import { Text } from "theme-ui"

import { FragmentProjectNavFragment } from "../../../generated/graphql"

export const Clients: React.FC<Pick<FragmentProjectNavFragment, "clients">> = ({
  clients,
}) => (
  <>
    {(clients ?? []).map(
      ({ id, title }) =>
        id &&
        title && (
          <Text
            as="strong"
            variant="bodyBold"
            key={id}
            sx={{ textTransform: "uppercase" }}
          >
            {title}
          </Text>
        )
    )}
  </>
)
