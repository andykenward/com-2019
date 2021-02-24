import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/dist/client/router"

import { ProjectQuery } from "../../../generated/graphql"
import { Head } from "../../components/head"
import { ProjectsMenuItem } from "../../components/projects"
import { appSdkToggle } from "../../lib/api"

type Params = {
  slug: string
}

type Props = {
  data: ProjectQuery | null
}

export const Project: NextPage<Props> = ({ data }) => {
  const { back } = useRouter()

  if (data?.project == null) return null

  const { project } = data

  return (
    <>
      <Head />
      <button onClick={() => back()}>HOME</button>
      <div>
        {project.slug && <ProjectsMenuItem key={project.slug} {...project} />}
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const data = await appSdkToggle().Projects()

    return {
      paths:
        data.allProjects?.map((project) => `/project/${project.slug}`) || [],
      fallback: false,
    }
  } catch (error) {
    console.log("error", error)
    throw error
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
  preview = false,
}) => {
  try {
    const data = params?.slug
      ? await appSdkToggle(preview).Project({ slug: params.slug })
      : null

    return { props: { data } }
  } catch (error) {
    console.log("error", error)
    throw error
  }
}

export default Project
