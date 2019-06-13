import { storiesOf } from "@storybook/react"
import React from "react"

import { Tags } from "."

storiesOf("Tags", module).add("all", () => {
  return (
    <Tags
      data={[
        { title: "TypeScript", url: "https://www.typescriptlang.org" },
        {
          title: "JavaScript",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          title: "React",
          url: "https://reactjs.org",
        },
        { title: "GraphQL", url: "https://graphql.org" },
        {
          title: "Redux",
          url: "https://redux.js.org",
        },
        { title: "Apollo", url: "https://www.apollographql.com" },
        { title: "Jest", url: "https://jestjs.io" },
        { title: "Cypress", url: "http://cypress.io" },
      ]}
    />
  )
})
