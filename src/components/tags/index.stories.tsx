import { storiesOf } from "@storybook/react"
import React from "react"

import { Tags } from "."

storiesOf("Tags", module).add("all", () => {
  return (
    <Tags
      data={[
        "TypeScript",
        "JavaScript",
        "React",
        "GraphQL",
        "Redux",
        "Apollo",
        "Jest",
        "Cypress",
      ]}
    />
  )
})
