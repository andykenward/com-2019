require("dotenv").config()

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
    }
  },
  env: {
    ENDPOINT: process.env.ENDPOINT,
    SSR: process.env.SSR | 1,
  },
}
