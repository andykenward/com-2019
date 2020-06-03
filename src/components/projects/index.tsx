import { Box, Grid, Heading, Text } from "theme-ui"

import { FragmentProjectNavFragment } from "../../../generated/graphql"
import { Clients } from "../clients"
import { ColumnsCenter } from "../columns"
import { LinkExternal, LinkOutline } from "../link"
import { Tags } from "../tags"

export const ProjectsMenuItem: React.FC<FragmentProjectNavFragment> = ({
  clients,
  title,
  description,
  role,
  tags,
  live,
  caseStudy,
  studio,
}) => (
  <Box as="article">
    <Clients clients={clients} />
    <Heading as="h3" variant="headingThree" mb={!description ? 8 : undefined}>
      {title}
    </Heading>
    <Text as="p" variant="body" mb={8}>
      {description}
    </Text>
    <Heading as="h4" variant="headingFour" mb={!studio ? 8 : undefined}>
      {role?.title}
    </Heading>
    {studio?.href && (
      <LinkExternal mb={8} href={studio.href}>
        {studio.title}
      </LinkExternal>
    )}
    {tags && <Tags tags={tags} />}
    {(live || caseStudy) && (
      <Box>
        {live?.href && <LinkOutline href={live.href}>Site</LinkOutline>}
        {caseStudy?.href && (
          <LinkOutline href={caseStudy.href}>Case Study</LinkOutline>
        )}
      </Box>
    )}
  </Box>
)

export const ProjectsMenu: React.FC<{
  data?: Array<FragmentProjectNavFragment> | null
}> = ({ data }) => {
  const projects = data ?? []

  return (
    <ColumnsCenter as="section">
      <Heading variant="headingOne" mb={32}>
        Projects
      </Heading>
      <Grid gap={56}>
        {projects.map((project) =>
          project ? <ProjectsMenuItem key={project.id} {...project} /> : null
        )}
      </Grid>
    </ColumnsCenter>
  )
}
