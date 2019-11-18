import { isEmpty } from "ramda"

import {
  FragmentHeroFragment,
  FragmentProjectNavFragment,
  useProjectQuery,
} from "../../generated/graphql"
import { Box } from "../box"
import { ButtonExternal } from "../button"
import { Clients } from "../clients"
import { LinkExternal } from "../link"
import { Tags } from "../tags"
import { Body, HeadingFour, HeadingThree } from "../typography"

export const Project: React.FC<{ slug: string }> = ({ slug }) => {
  const { error, data } = useProjectQuery({
    variables: { slug },
  })

  if (error) {
    return <div>error</div>
  }

  if (!data || isEmpty(data)) return null

  const { project } = data

  if (!project) return null

  console.log("project", project)

  return <ProjectItem {...project} />
}

type Item = FragmentProjectNavFragment & FragmentHeroFragment
export const ProjectItem: React.FC<Item> = ({
  clients,
  title,
  description,
  role,
  tags,
  url,
  urlCaseStudy,
  studio,
  hero,
}) => (
  <Box as="article">
    <Clients data={clients} />
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
    {hero && (
      <img src={`https://media.graphcms.com/resize=w:600/${hero.handle}`} />
    )}
  </Box>
)
