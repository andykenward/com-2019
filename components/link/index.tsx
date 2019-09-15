import css from "@emotion/css"
import { SpaceProps } from "styled-system"

import { Body } from "../typography"

interface LinkExternalProps extends SpaceProps {
  rel?: string
  target?: string
  href: string
  noHover?: boolean
}

export const LinkExternal: React.FC<LinkExternalProps> = ({
  children,
  noHover,
  ...props
}) => (
  <Body
    rel="noopener noreferrer"
    target="_blank"
    as="a"
    css={theme =>
      css`
        display: inline-flex;
        transition: all 0.15s linear;
        text-decoration: none;
        :visited:hover,
        :hover,
        :focus {
          color: ${noHover ? "inherit" : theme.colors.green};
        }
        :visited {
          color: ${noHover ? "inherit" : theme.colors.visited};
        }
      `
    }
    {...props}
  >
    {children}
  </Body>
)
