import { NextPage } from "next"
import { useRouter } from "next/router"

import { App } from "../../components/app"
import { Head } from "../../components/head"
import { Project } from "../../components/project"
import { ProjectsMenu } from "../../components/projects"
import { withApollo } from "../../lib/apollo"

// export const config = { amp: `hybrid` }

const Slug: NextPage = () => {
  const router = useRouter()

  return (
    <App>
      <Head />
      <ProjectsMenu />
      <h1>{router.query.slug}</h1>
      <Project slug={router.query.slug as string} />
    </App>
  )
}

export default withApollo(Slug, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: Boolean(process.env.SSR),
})
