import { useRouter, withRouter } from "next/router"
import { Project } from "../../components/project"
import { NextPage } from "next"
import { WithRouterProps } from "next/dist/client/with-router"
import { ProjectsMenu } from "../../components/projects"

export const config = { amp: `hybrid` }

const Slug: NextPage = () => {
  const router = useRouter()

  return (
    <div>
      <ProjectsMenu />
      <h1>{router.query.slug}</h1>
      <Project slug="inside-abbey-road" />
    </div>
  )
}

export default Slug
