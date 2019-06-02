import { Link as GatsbyLink } from "gatsby"

import { ColorProps, filterProps, color } from "../styled-system"
import styled, { StyledProps } from "../utils/styled"

export const Link = styled(GatsbyLink, { shouldForwardProp: filterProps })<
  StyledProps & ColorProps
>`
  ${color}
`
