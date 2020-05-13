require("dotenv").config()

module.exports = {
  client: {
    name: "andykenward.com",
    includes: [
      "./src/pages/**/*.graphql",
      "./graphql/**/*.graphql",
      "./src/components/**/*.graphql",
    ],
    service: {
      localSchemaFile: process.env.SCHEMA_PATH,
    },
  },
}
