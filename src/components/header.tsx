import { css } from "@emotion/core"
import React from "react"

import { Box } from "./box"
import { Link } from "./link"

interface Props {
  siteTitle?: string
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <Box as="header" ssBg="purple" css={{ marginBottom: "1.45rem" }}>
    <Box
      as="div"
      css={{
        margin: "0 auto",
        maxWidth: "960px",
        padding: "1.45rem 1.0875rem",
      }}
    >
      <Box
        as="h1"
        css={css`
          margin: 0;
        `}
      >
        <Link ssColor="white" to="/" css={{ textDecoration: "none" }}>
          {siteTitle}
        </Link>
      </Box>
    </Box>
  </Box>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
