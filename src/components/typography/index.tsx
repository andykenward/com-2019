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
  FontSizeProps,
} from "../../styled-system"
import styled, { StyledProps } from "../../utils/styled"

export const Text = styled("p", { shouldForwardProp: filterProps })<
  StyledProps & TypographyProps & ColorProps & SpaceProps
>`
  ${typography}
  ${color}
  ${space}
`

interface Props extends StyledProps, SpaceProps, ColorProps {}

export const Body: React.FC<Props> = ({ children, ...props }) => (
  <Text
    c="black"
    fontFamily="regular"
    fontWeight="regular"
    fs={16}
    lineHeight="default"
    m={0}
    {...props}
  >
    {children}
  </Text>
)

export const BodyBold: React.FC<Props> = ({ children, ...props }) => (
  <Text
    as="strong"
    c="black"
    fontFamily="regular"
    fontWeight="medium"
    fs={16}
    lineHeight="default"
    letterSpacing="-0.2px"
    m={0}
    {...props}
  >
    {children}
  </Text>
)

export const HeadingFour: React.FC<Props> = ({ children, ...props }) => (
  <Text
    as="h4"
    c="black"
    fontFamily="regular"
    fontWeight="regular"
    fs={20}
    lineHeight="condensed"
    m={0}
    {...props}
  >
    {children}
  </Text>
)

export const HeadingThree: React.FC<Props> = ({ children, ...props }) => (
  <Text
    as="h3"
    c="black"
    fontFamily="regular"
    fontWeight="regular"
    fs={[28, 38]}
    letterSpacing="-0.2px"
    lineHeight="condensed"
    m={0}
    textTransform="capitalize"
    {...props}
  >
    {children}
  </Text>
)

export const HeadingTwo: React.FC<Props> = ({ children, ...props }) => (
  <Text
    as="h2"
    c="black"
    fontFamily="regular"
    fontWeight="regular"
    fs={[36, 46]}
    letterSpacing="-0.5px"
    lineHeight="condensed"
    m={0}
    textTransform="capitalize"
    {...props}
  >
    {children}
  </Text>
)

type HeadingOneProps = Props & FontSizeProps
export const HeadingOne: React.FC<HeadingOneProps> = ({
  children,
  ...props
}) => (
  <Text
    as="h1"
    c="black"
    fontFamily="brand"
    fontWeight="light"
    fs={[44, 54]}
    lineHeight={1.090909091}
    m={0}
    textTransform="capitalize"
    {...props}
  >
    {children}
  </Text>
)

export const Label: React.FC<Props> = ({ children, ...props }) => (
  <Text
    as="span"
    c="black"
    fontFamily="regular"
    fontWeight="medium"
    fs={14}
    lineHeight="default"
    m={0}
    {...props}
  >
    {children}
  </Text>
)
