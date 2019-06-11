import css from "@emotion/css"
import { Link as GatsbyLink } from "gatsby"
import React from "react"

import { color, ColorProps, filterProps, SpaceProps } from "../../styled-system"
import styled, { StyledProps } from "../../utils/styled"

import { Body } from "../typography"

export const Link = styled(GatsbyLink, { shouldForwardProp: filterProps })<
  StyledProps & ColorProps
>`
  ${color}
`

interface LinkExternalProps extends SpaceProps {
  rel?: string
  target?: string
  href: string
}

export const LinkExternal: React.FC<LinkExternalProps> = ({
  children,
  ...props
}) => (
  <Body
    rel="noopener noreferrer"
    target="_blank"
    as="a"
    css={theme =>
      css`
        text-decoration: none;
        &:hover {
          color: ${theme.colors.green};
        }
      `
    }
    {...props}
  >
    {children}
  </Body>
)
