import { storiesOf } from "@storybook/react"
import React from "react"

import { Footer } from "."

storiesOf("Footer", module).add("all", () => {
  return (
    <Footer
      data={[
        {
          title: "Email",
          url: "mailto:hello@andykenward.com",
        },
        {
          title: "GitHub",
          url: "https://github.com/andykenward",
        },
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/andykenward",
        },
        {
          title: "Twitter",
          url: "https://twitter.com/andykenward",
        },
        {
          title: "Stack Overflow",
          url: "https://stackoverflow.com/story/andykenward",
        },
      ]}
    />
  )
})
