import Link from "next/link"

import {
  FragmentProjectNavFragment,
  useProjectsNavQuery,
  useProjectsQuery,
} from "../../generated/graphql"
import { Box } from "../box"
import { ButtonExternal } from "../button"
import { Clients } from "../clients"
import { ColumnsCenter } from "../columns"
import { LinkExternal } from "../link"
import { Tags } from "../tags"
import { Body, HeadingFour, HeadingOne, HeadingThree } from "../typography"

export const Projects: React.FC = () => {
  const { loading, error, data } = useProjectsQuery()

  if (error) {
    return <div>error</div>
  }

  if (loading) {
    return <div>loading</div>
  }

  if (!data) return null

  const { projects } = data

  return (
    <div>
      <nav>
        {(projects ?? []).map(project =>
          project ? (
            <Link
              prefetch
              key={project.id}
              href="/project/[slug]"
              as={`/project/${project.slug}`}
            >
              <a>{project.title}</a>
            </Link>
          ) : null
        )}
      </nav>
    </div>
  )
}

const ProjectsMenuItem: React.FC<FragmentProjectNavFragment> = ({
  clients,
  title,
  description,
  role,
  tags,
  url,
  urlCaseStudy,
  studio,
}) => (
  <Box as="article">
    <Clients data={clients} />
    <HeadingThree mb={!description ? 8 : undefined}>{title}</HeadingThree>
    <Body mb={8}>{description}</Body>
    <HeadingFour mb={!studio ? 8 : undefined}>{role}</HeadingFour>
    {studio?.url && (
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
  </Box>
)

export const ProjectsMenu: React.FC = () => {
  const { data } = useProjectsNavQuery()

  const projects = data?.projects ?? []

  return (
    <ColumnsCenter as="section">
      <HeadingOne mb={32}>Projects</HeadingOne>
      <Box display="grid" gridRowGap={56}>
        {projects.map(project =>
          project ? <ProjectsMenuItem key={project.id} {...project} /> : null
        )}
      </Box>
    </ColumnsCenter>
  )
}
