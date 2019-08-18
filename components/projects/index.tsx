import Link from "next/link"
import React from "react"
import { useProjectsNavQuery, useProjectsQuery } from "../../generated/graphql"
import { ProjectItem } from "../project"

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
    <>
      {(projects || []).map(project =>
        project ? <ProjectItem key={project.id} {...project} /> : null
      )}
    </>
  )
}
