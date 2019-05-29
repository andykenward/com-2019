module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ["jest", "import", "prettier"],
  extends: [
    "react-app",
    "plugin:jest/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  rules: {
    "import/order": [
      "error",
      { "newlines-between": "always-and-inside-groups" },
    ],
  },
}
