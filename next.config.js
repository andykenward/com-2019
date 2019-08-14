require("dotenv").config()
const fetch = require("isomorphic-unfetch")

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      "/": { page: "/" },
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
      const res = await fetch(process.env.SCHEMA_PATH, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ query }),
      })
      const resData = await res.json()
      resData.data.projects.forEach(project => {
        paths[`/project/${project.slug}`] = {
          page: "/project/[slug]",
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
    SCHEMA_PATH: process.env.SCHEMA_PATH,
  },
}
