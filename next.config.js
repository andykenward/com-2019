require("dotenv").config()
const fetch = require("isomorphic-unfetch") // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      "/": { page: "/" },
      "/work/": { page: "/work/index" },
    }

    try {
      // PROJECT PAGES
      const query = `
        query Projects {
          projects {
            id
            slug
          }
        }
      `
      const res = await fetch(process.env.ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ query }),
      })
      const resData = await res.json()
      resData.data.projects.forEach(project => {
        paths[`/work/${project.slug}/`] = {
          page: "/work/[slug]",
          query: { slug: project.slug },
        }
      })
      return paths
    } catch (error) {
      console.log("error", error)
      throw error
    }
  },
  env: {
    ENDPOINT: process.env.ENDPOINT,
    SSR: process.env.SSR | 1,
  },
}
