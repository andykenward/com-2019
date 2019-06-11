import React from "react"

import css from "@emotion/css"

import { LinkExternal } from "../link"

interface Props {
  href: string
}
export const ButtonExternal: React.FC<Props> = ({ children, ...props }) => (
  <LinkExternal
    p={8}
    href="test"
    css={css`
      display: inline-flex;
      box-shadow: inset 0 0 0 0.0625rem rgba(36, 28, 21, 0.4);
    `}
  >
    {children}
  </LinkExternal>
)
