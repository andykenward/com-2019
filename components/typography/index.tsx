import {
  CSSObject,
  InterpolationWithTheme,
  SerializedStyles,
} from "@emotion/core"
import styled from "@emotion/styled"
import {
  colorStyle,
  ColorStyleProps,
  FontSizeProps,
  gridColumn,
  GridColumnProps,
  space,
  SpaceProps,
  TypographyProps,
} from "styled-system"
import { convertToRem, TextTransform, theme, typography } from "../../lib/theme"

export interface StyledProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  css?: CSSObject | SerializedStyles | InterpolationWithTheme<any>
}
const Text = styled("p")<
  StyledProps &
    TypographyProps &
    ColorStyleProps &
    SpaceProps &
    GridColumnProps &
    TextTransform
>`
  ${typography}
  ${colorStyle}
  ${space}
  ${gridColumn}
  word-break: break-word;
  hyphens: auto;
`

interface Props
  extends StyledProps,
    SpaceProps,
    ColorStyleProps,
    GridColumnProps {}
export const Body: React.FC<Props> = ({ children, ...props }) => (
  <Text
    color="black"
    fontFamily={theme.fonts.regular}
    fontWeight={theme.fontWeights.regular}
    fontSize={16}
    lineHeight={theme.lineHeights.default}
    m={0}
    {...props}
  >
    {children}
  </Text>
)

export const BodyBold: React.FC<Props> = ({ children, ...props }) => (
  <Text
    as="strong"
    color="black"
    fontFamily={theme.fonts.regular}
    fontWeight={theme.fontWeights.medium}
    fontSize={16}
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
    color="black"
    fontFamily={theme.fonts.regular}
    fontWeight={theme.fontWeights.regular}
    fontSize={20}
    lineHeight={theme.lineHeights.condensed}
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
    color="black"
    fontFamily={theme.fonts.regular}
    fontWeight={theme.fontWeights.regular}
    fontSize={[28, 38]}
    letterSpacing={convertToRem(-0.2)}
    lineHeight={theme.lineHeights.condensed}
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
    color="black"
    fontFamily={theme.fonts.regular}
    fontWeight={theme.fontWeights.regular}
    fontSize={[36, 46]}
    letterSpacing={convertToRem(-0.5)}
    lineHeight={theme.lineHeights.condensed}
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
    color="black"
    fontFamily={theme.fonts.brand}
    fontWeight={theme.fontWeights.light}
    fontSize={[44, 54]}
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
    color="black"
    fontFamily={theme.fonts.regular}
    fontWeight={theme.fontWeights.medium}
    fontSize={14}
    lineHeight={theme.lineHeights.default}
    m={0}
    {...props}
  >
    {children}
  </Text>
)
