import { storiesOf } from "@storybook/react"
import React from "react"

import { ButtonExternal } from "."

storiesOf("Button", module).add("ButtonExternal", () => {
  return <ButtonExternal href="test">Button External</ButtonExternal>
})
