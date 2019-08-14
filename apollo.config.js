require("dotenv").config()
const SCHEMA_PATH =
  process.env.SCHEMA_PATH ||
  "https://api-euwest.graphcms.com/v1/cjywu05hg0ysg01dj8nkna8ma/master"

module.exports = {
  client: {
    includes: ["./components/**/*.ts"],
    service: {
      name: "graphcms",
      url: SCHEMA_PATH,
    },
  },
}
