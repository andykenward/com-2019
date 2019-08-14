import React from "react"
import { useProjectsQuery, useProjectQuery } from "../../generated/graphql"

export const Project: React.FC<{ slug: string }> = ({ slug }) => {
  const { loading, error, data } = useProjectQuery({
    variables: { slug },
  })

  if (error) {
    return <div>error</div>
  }

  if (loading) {
    return <div>loading</div>
  }

  if (!data) return null

  const { project } = data

  if (!project) return null

  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  )
}
