import { css } from "@emotion/core"
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
    mb={8}
    href={href}
    css={theme => css`
      display: inline-flex;
      box-shadow: inset 0 0 0 0.0625rem
        ${fill ? theme.colors.primary : `rgba(36, 28, 21, 0.4)`};
      justify-content: center;
      background-color: ${fill ? theme.colors.primary : "transparent"};
      text-align: center;
      align-items: center;
      vertical-align: middle;
      :hover,
      :focus {
        color: ${theme.colors.oyster};
        box-shadow: inset 0 0 0 0.0625rem
          ${fill ? `rgba(36, 28, 21, 0.4)` : theme.colors.primary};
        background-color: ${fill ? "transparent" : theme.colors.primary};
      }
    `}
  >
    {children}
  </LinkExternal>
)
