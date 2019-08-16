import React from "react"
import {
  ProjectNavItemFragment,
  useProjectQuery,
} from "../../generated/graphql"

export const Project: React.FC<{ slug: string }> = ({ slug }) => {
  const { loading, error, data, networkStatus } = useProjectQuery({
    variables: { slug },
  })
  console.log("- networkStatus", networkStatus)
  console.log("data", data)
  if (error) {
    return <div>error</div>
  }

  // if (loading) {
  //   return <div>loading</div>
  // }

  if (!data) return null

  const { project } = data

  if (!project) return null

  return <ProjectItem {...project} />
}

type Item = ProjectNavItemFragment
export const ProjectItem: React.FC<Item> = ({
  clients,
  title,
  description,
  role,
  tags,
  url,
  urlCaseStudy,
  studio,
}) => (
  <article>
    {(clients || []).map(client => (
      <strong key={client.id}>{client.title}</strong>
    ))}

    <h3>{title}</h3>
    <p>{description}</p>
    <h4>{role}</h4>
    {studio && (
      <a rel="noopener noreferrer" target="_blank" href={studio.url as string}>
        {studio.title}
      </a>
    )}
    <ul>
      {(tags || []).map(tag => (
        <li key={tag.id}>{tag.title}</li>
      ))}
    </ul>
    {url && (
      <a rel="noopener noreferrer" target="_blank" href={url}>
        Site
      </a>
    )}
    {urlCaseStudy && (
      <a rel="noopener noreferrer" target="_blank" href={urlCaseStudy}>
        Case Study
      </a>
    )}
  </article>
)
