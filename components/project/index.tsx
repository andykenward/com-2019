import css from "@emotion/css"
import { isEmpty } from "ramda"
import React from "react"
import {
  ProjectNavItemFragment,
  useProjectQuery,
} from "../../generated/graphql"
import { Body, BodyBold, HeadingFour, HeadingThree } from "../typography"

export const Project: React.FC<{ slug: string }> = ({ slug }) => {
  const { loading, error, data, networkStatus } = useProjectQuery({
    variables: { slug },
  })
  console.log("- networkStatus", networkStatus)
  console.log("data", isEmpty(data))
  if (error) {
    return <div>error</div>
  }

  // if (loading) {
  //   return <div>loading</div>
  // }

  if (!data || isEmpty(data)) return null

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
      <BodyBold
        key={client.id}
        css={css`
          text-transform: uppercase;
        `}
      >
        {client.title}
      </BodyBold>
    ))}

    <HeadingThree mb={!description ? 8 : undefined}>{title}</HeadingThree>
    <Body mb={8}>{description}</Body>
    <HeadingFour mb={!studio ? 8 : undefined}>{role}</HeadingFour>
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
