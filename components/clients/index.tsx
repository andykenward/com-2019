import { FragmentClientFragment, Maybe } from "../../generated/graphql"
import { BodyBold } from "../typography"

interface Props {
  data: Maybe<Array<{ __typename?: "Client" } & FragmentClientFragment>>
}

export const Clients: React.FC<Props> = ({ data }) => (
  <>
    {(data || []).map(
      item =>
        item && (
          <BodyBold key={item.id} textTransform="uppercase">
            {item.title}
          </BodyBold>
        )
    )}
  </>
)
