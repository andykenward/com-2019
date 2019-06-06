import React from "react"
import { Link as GatsbyLink } from "gatsby"

import {
  ColorProps,
  filterProps,
  color,
  typography,
  TypographyProps,
} from "../styled-system"
import styled, { StyledProps } from "../utils/styled"

export const Link = styled(GatsbyLink, { shouldForwardProp: filterProps })<
  StyledProps & ColorProps
>`
  ${color}
`
export const LinkExternal = styled.a<TypographyProps>`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  ${typography}
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`

interface Props {
  href: string
}

export const LinkFooter: React.FC<Props> = ({ children, ...props }) => (
  <LinkExternal
    fontFamily="regular"
    fontWeight="regular"
    fs={16}
    lineHeight="default"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </LinkExternal>
)
