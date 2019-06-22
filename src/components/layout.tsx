import React, { ReactNode } from "react"

import Header from "./header"
import { Footer } from "./footer"
import { useContact } from "./contact"
import { useHeader } from "./header/query"
import { Box } from "./box"

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <Box display="grid" gridRowGap={[32, 64]}>
    <Header data={useHeader()} />
    <main>{children}</main>
    <Footer data={useContact()} />
  </Box>
)

export default Layout
