import { Text } from "theme-ui"

import { FragmentClientFragment } from "../../../generated/graphql"

export const Clients: React.FC<{ clients?: FragmentClientFragment[] }> = ({
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
