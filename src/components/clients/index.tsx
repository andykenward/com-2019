import { FragmentClientFragment } from "../../../generated/graphql"

export const Clients: React.FC<{ clients?: FragmentClientFragment[] }> = ({
  clients,
}) => (
  <>
    {(clients ?? []).map(
      ({ id, title }) =>
        id &&
        title && (
          <strong className="uppercase font-sans font-medium" key={id}>
            {title}
          </strong>
        )
    )}
  </>
)
