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
      name: "datocms",
      url: process.env.API_URL,
      headers: {
        authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    },
  },
}
