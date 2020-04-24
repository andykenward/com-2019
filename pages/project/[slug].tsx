/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { GraphQLClient } from "graphql-request"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/dist/client/router"

import { Box } from "../../components/box"
import { Head } from "../../components/head"
import { ProjectsMenuItem } from "../../components/projects"
import { getSdk, ProjectQuery } from "../../generated/graphql"

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
      <Box display="grid" gridRowGap={[32, 64]}>
        <ProjectsMenuItem key={project.slug} {...project} />
      </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const client = new GraphQLClient(`${process.env.ENDPOINT}`)
    const sdk = getSdk(client)
    const data = await sdk.Projects()

    return {
      paths: data.projects?.map((project) => `/project/${project.slug}`) || [],
      fallback: false,
    }
  } catch (error) {
    console.log("error", error)
    throw error
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  try {
    const client = new GraphQLClient(`${process.env.ENDPOINT}`)
    const sdk = getSdk(client)
    const data = params?.slug ? await sdk.Project({ slug: params.slug }) : null

    return { props: { data } }
  } catch (error) {
    console.log("error", error)
    throw error
  }
}

export default Project
