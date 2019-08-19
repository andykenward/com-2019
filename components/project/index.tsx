import css from "@emotion/css"
import { isEmpty } from "ramda"
import {
  ProjectNavItemFragment,
  useProjectQuery,
} from "../../generated/graphql"
import { Box } from "../box"
import { ButtonExternal } from "../button"
import { LinkExternal } from "../link"
import { Tags } from "../tags"
import { Body, BodyBold, HeadingFour, HeadingThree } from "../typography"

export const Project: React.FC<{ slug: string }> = ({ slug }) => {
  const { loading, error, data, networkStatus } = useProjectQuery({
    variables: { slug },
  })

  if (error) {
    return <div>error</div>
  }

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
    {studio && studio.url && (
      <LinkExternal mb={8} href={studio.url}>
        {studio.title}
      </LinkExternal>
    )}
    {tags && <Tags data={tags} />}

    {(url || urlCaseStudy) && (
      <Box>
        {url && <ButtonExternal href={url}>Site</ButtonExternal>}
        {urlCaseStudy && (
          <ButtonExternal href={urlCaseStudy}>Case Study</ButtonExternal>
        )}
      </Box>
    )}
  </article>
)
