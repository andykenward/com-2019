import { NextPage } from "next"
import { useRouter } from "next/router"
import { isEmpty } from "ramda"

import { App } from "../../components/app"
import { Head } from "../../components/head"
import { Project } from "../../components/project"
import { withApollo } from "../../lib/apollo"

// export const config = { amp: `hybrid` }

const Slug: NextPage = () => {
  const {
    query: { slug },
  } = useRouter()

  const slugValid = slug && !isEmpty(slug) && slug

  return (
    <App>
      <Head />
      {slugValid && (
        <>
          <h1>{slugValid}</h1>
          <Project slug={slugValid as string} />
        </>
      )}
    </App>
  )
}

export default withApollo(Slug, {
  // Disable apollo ssr fetching in favour of automatic static optimization
  ssr: Boolean(process.env.SSR),
})
