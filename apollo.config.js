require("dotenv").config()

module.exports = {
  client: {
    includes: ["./components/**/*.ts"],
    service: {
      name: "graphcms",
      url: process.env.SCHEMA_PATH,
    },
  },
}
