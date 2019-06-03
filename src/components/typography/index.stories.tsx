import { storiesOf } from "@storybook/react"
import React from "react"

import {
  Body,
  BodyBold,
  HeadingFour,
  HeadingOne,
  HeadingThree,
  HeadingTwo,
  Label,
} from "."

storiesOf("Typography", module).add("all", () => (
  <>
    <HeadingOne>Heading One</HeadingOne>
    <HeadingTwo>Heading Two</HeadingTwo>
    <HeadingThree>Heading Three</HeadingThree>
    <HeadingFour>Heading Four</HeadingFour>
    <BodyBold>Body Bold</BodyBold>
    <Body>Body</Body>
    <Label>Label</Label>
  </>
))
