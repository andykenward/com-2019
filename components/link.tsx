import NextLink, { LinkProps } from "next/link"
import { ReactNode } from "react"

export const Link = ({
  children,
  className = "",
  ...props
}: LinkProps & {
  children: ReactNode
  className?: string
}) => (
  <NextLink {...props}>
    <a
      rel="noopener noreferrer"
      target="_blank"
      className={`font-sans text-black text-base hover:text-focus focus:text-focus visited:text-visited no-underline inline-flex ${className}`}
    >
      {children}
    </a>
  </NextLink>
)

export const LinkOutline = ({
  children,
  ...props
}: LinkProps & { children: ReactNode }) => (
  <NextLink {...props}>
    <a
      rel="noopener noreferrer"
      target="_blank"
      className="text-black text-base font-sans hover:text-inherit focus:text-inherit visited:text-inherit no-underline inline-flex justify-center bg-transparent hover:bg-primary text-center items-center align-middle break-words px-4 py-2 border border-black border-opacity-40 hover:border-opacity-0 transition-colors duration-150 ease-linear"
    >
      {children}
    </a>
  </NextLink>
)
