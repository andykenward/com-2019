require("dotenv").config()

module.exports = {
  client: {
    name: "andykenward.com",
    includes: ["./components/**/query.ts"],
    service: {
      localSchemaFile: process.env.SCHEMA_PATH,
    },
  },
}
