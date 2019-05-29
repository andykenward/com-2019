import { Link as GatsbyLink } from "gatsby"

import styled, { StyledProps } from "../styled"
import {
  BgProps,
  ColorProps,
  filterSsProps,
  ssBackgroundColor,
  ssColor,
} from "../styled-system"

export const Link = styled(GatsbyLink, { shouldForwardProp: filterSsProps })<
  StyledProps & ColorProps & BgProps
>`
  ${ssColor}
  ${ssBackgroundColor}
`
