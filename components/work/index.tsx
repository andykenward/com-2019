import { useWorkQuery } from "../../generated/graphql"

export const Work: React.FC = () => {
  const { loading } = useWorkQuery()

  if (loading) {
    return <div>loading</div>
  }
  return null
}
