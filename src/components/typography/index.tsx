import React from "react"

import "../../fonts/index.css"
import {
  color,
  ColorProps,
  filterProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "../../styled-system"
import styled, { StyledProps } from "../../utils/styled"

const Text = styled("p", { shouldForwardProp: filterProps })<
  StyledProps & TypographyProps & ColorProps & SpaceProps
>`
  ${typography}
  ${color}
  ${space}
`

export const Body: React.FC = ({ children }) => (
  <Text
    c="black"
    fontFamily="regular"
    fontWeight="regular"
    fs={16}
    lineHeight="default"
    m={0}
  >
    {children}
  </Text>
)

export const BodyBold: React.FC = ({ children }) => (
  <Text
    c="black"
    fontFamily="regular"
    fontWeight="medium"
    fs={16}
    lineHeight="default"
    m={0}
  >
    {children}
  </Text>
)

export const HeadingFour: React.FC = ({ children }) => (
  <Text
    as="h4"
    c="black"
    fontFamily="regular"
    fontWeight="regular"
    fs={20}
    lineHeight="condensed"
    m={0}
  >
    {children}
  </Text>
)

export const HeadingThree: React.FC = ({ children }) => (
  <Text
    as="h3"
    c="black"
    fontFamily="regular"
    fontWeight="regular"
    fs={28}
    letterSpacing="-0.2px"
    lineHeight="condensed"
    m={0}
  >
    {children}
  </Text>
)

export const HeadingTwo: React.FC = ({ children }) => (
  <Text
    as="h2"
    c="black"
    fontFamily="regular"
    fontWeight="regular"
    fs={36}
    letterSpacing="-0.5px"
    lineHeight="condensed"
    m={0}
  >
    {children}
  </Text>
)

export const HeadingOne: React.FC = ({ children }) => (
  <Text
    as="h1"
    c="black"
    fontFamily="brand"
    fontWeight="light"
    fs={44}
    lineHeight={1.090909091}
    m={0}
  >
    {children}
  </Text>
)

export const Label: React.FC = ({ children }) => (
  <Text
    as="span"
    c="black"
    fontFamily="regular"
    fontWeight="regular"
    fs={14}
    lineHeight="default"
    m={0}
  >
    {children}
  </Text>
)
