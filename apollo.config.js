require("dotenv").config()

module.exports = {
  client: {
    name: "andykenward.com",
    includes: [
      "./pages/**/*.graphql",
      "./graphql/**/*.graphql",
      "./components/**/*.graphql",
    ],
    service: {
      localSchemaFile: process.env.SCHEMA_PATH,
    },
  },
}
