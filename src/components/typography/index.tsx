import React from "react"
import { gridColumn, GridColumnProps } from "styled-system"

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
  convertToRem,
} from "../../styled-system"
import styled, { StyledProps } from "../../utils/styled"

export const Text = styled("p", { shouldForwardProp: filterProps })<
  StyledProps & TypographyProps & ColorProps & SpaceProps & GridColumnProps
>`
  ${typography}
  ${color}
  ${space}
  ${gridColumn}
  word-break: break-word;
  hyphens: auto;
`

interface Props extends StyledProps, SpaceProps, ColorProps, GridColumnProps {}

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
    letterSpacing={convertToRem(-0.2)}
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

export const HeadingThree: React.FC<Props & FontSizeProps> = ({
  children,
  ...props
}) => (
  <Text
    as="h3"
    c="black"
    fontFamily="regular"
    fontWeight="regular"
    fs={[28, 38]}
    letterSpacing={convertToRem(-0.2)}
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
    letterSpacing={convertToRem(-0.5)}
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
