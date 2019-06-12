import { storiesOf } from "@storybook/react"
import React from "react"

import { ButtonExternal } from "."

storiesOf("Button", module)
  .add("all", () => {
    return (
      <>
        <ButtonExternal href="https://google.com">Standard</ButtonExternal>
        <ButtonExternal fill href="https://google.com">
          Standard Fill
        </ButtonExternal>
      </>
    )
  })
  .add("standard", () => (
    <ButtonExternal href="https://google.com">Standard</ButtonExternal>
  ))
  .add("fill", () => (
    <ButtonExternal fill href="https://google.com">
      Standard Fill
    </ButtonExternal>
  ))
