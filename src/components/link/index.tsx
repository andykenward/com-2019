import { Link, LinkProps } from "theme-ui"

export const LinkExternal: React.FC<LinkProps> = ({ children, ...props }) => (
  <Link rel="noopener noreferrer" target="_blank" {...props}>
    {children}
  </Link>
)

export const LinkOutline: React.FC<LinkProps> = ({ children, ...props }) => (
  <Link variant="outline" rel="noopener noreferrer" target="_blank" {...props}>
    {children}
  </Link>
)
