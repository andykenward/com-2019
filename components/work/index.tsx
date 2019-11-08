import { useWorkQuery } from "../../generated/graphql"

export const Work: React.FC = () => {
  const { loading, error, data } = useWorkQuery()

  if (error) {
    return <div>error</div>
  }

  if (loading) {
    return <div>loading</div>
  }
  return null
}
