import React from "react"

import css from "@emotion/css"

import { LinkExternal } from "../link"

interface Props {
  href: string
  fill?: boolean
}
export const ButtonExternal: React.FC<Props> = ({ children, fill, href }) => (
  <LinkExternal
    noHover
    px={16}
    py={8}
    mr={8}
    href={href}
    css={theme => css`
      display: inline-flex;
      box-shadow: inset 0 0 0 0.0625rem
        ${fill ? theme.colors.primary : `rgba(36, 28, 21, 0.4)`};
      justify-content: center;
      text-align: center;
      align-items: center;
      vertical-align: middle;
      &:hover {
        color: ${fill ? theme.colors.oyster : theme.colors.oyster};
        box-shadow: inset 0 0 0 0.0625rem
          ${fill ? theme.colors.green : theme.colors.primary};
        background-color: ${fill ? "transparent" : theme.colors.primary};
      }
    `}
  >
    {children}
  </LinkExternal>
)
