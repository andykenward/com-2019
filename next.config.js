require("dotenv").config()

module.exports = {
  env: {
    ENDPOINT: process.env.ENDPOINT,
    SSR: process.env.SSR | 1,
  },
}
