import { NextPage } from "next"
import { useRouter } from "next/router"
import { Project } from "../../components/project"
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
