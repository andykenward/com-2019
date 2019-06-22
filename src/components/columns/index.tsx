import React from "react"

import { BoxProps, Box } from "../box"

type ColumnsCenterProps = Omit<BoxProps, "display" | "gridTemplateColumns">

export const ColumnsCenter: React.FC<ColumnsCenterProps> = ({
  children,
  ...props
}) => (
  <Box
    display="grid"
    gridTemplateColumns={[
      "32px 1fr 32px",
      "minmax(32px,15%) 1fr minmax(32px,15%)",
    ]}
    {...props}
  >
    {React.Children.map(
      children,
      child =>
        React.isValidElement(child) &&
        React.cloneElement(child, { gridColumn: "2/3" })
    )}
  </Box>
)
