require("dotenv").config()

module.exports = {
  client: {
    name: "andykenward.com",
    includes: ["./components/**/query.ts"],
    service: {
      name: "graphcms",
      url: process.env.ENDPOINT,
    },
  },
}
