import { storiesOf } from "@storybook/react"
import React from "react"
import { withKnobs, text } from "@storybook/addon-knobs"

import {
  Body,
  BodyBold,
  HeadingFour,
  HeadingOne,
  HeadingThree,
  HeadingTwo,
  Label,
} from "."

storiesOf("Typography", module)
  .addDecorator(withKnobs)
  .add("all", () => {
    const headingOne = text("HeadingOne", "Heading One")
    const headingTwo = text("HeadingTwo", "Heading Two")
    const headingThree = text("HeadingThree", "Heading Three")
    const headingFour = text("HeadingFour", "Heading Four")
    const bodyBold = text("BodyBold", "Body Bold")
    const body = text("Body", "Body")
    const label = text("Label", "Label")
    return (
      <>
        <HeadingOne>{headingOne}</HeadingOne>
        <HeadingTwo>{headingTwo}</HeadingTwo>
        <HeadingThree>{headingThree}</HeadingThree>
        <HeadingFour>{headingFour}</HeadingFour>
        <BodyBold>{bodyBold}</BodyBold>
        <Body>{body}</Body>
        <Label>{label}</Label>
      </>
    )
  })
