require("dotenv").config()

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    }
  },
  env: {
    ENDPOINT: process.env.ENDPOINT,
    SSR: process.env.SSR | 1,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf|css)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            context: "",
            outputPath: "static",
            publicPath: "_next/static",
            name: "[path][name].[hash].[ext]",
          },
        },
      ],
    })
    return config
  },
}
