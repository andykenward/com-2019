module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:jest/all",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:testing-library/recommended",
    "plugin:testing-library/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "jest",
    "prettier",
    "react",
    "simple-import-sort",
    "testing-library",
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: "./tsconfig.json",
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "simple-import-sort/sort": "error",
    "sort-imports": "off",
    "import/order": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  globals: { React: "writable" },
}
