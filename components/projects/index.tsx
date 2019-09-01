import Link from "next/link"

import { useProjectsNavQuery, useProjectsQuery } from "../../generated/graphql"
import { Box } from "../box"
import { ColumnsCenter } from "../columns"
import { ProjectItem } from "../project"
import { HeadingOne } from "../typography"

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
        {(projects || []).map(project =>
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

export const ProjectsMenu: React.FC = () => {
  const { data } = useProjectsNavQuery()

  const projects = data ? data.projects : []

  return (
    <ColumnsCenter as="section">
      <HeadingOne mb={32}>Projects</HeadingOne>
      <Box display="grid" gridRowGap={56}>
        {(projects || []).map(project =>
          project ? <ProjectItem key={project.id} {...project} /> : null
        )}
      </Box>
    </ColumnsCenter>
  )
}
