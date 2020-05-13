import React from "react"

import { Box, BoxProps } from "../box"

type ColumnsCenterProps = Omit<BoxProps, "display" | "gridTemplateColumns">

export const ColumnsCenter: React.FC<ColumnsCenterProps> = ({
  children,
  ...props
}) => (
  <Box
    display="grid"
    gridTemplateColumns={[
      "32px [center-start] 1fr [center-end] 32px",
      "minmax(32px,15%) [center-start] 1fr [center-end] minmax(32px,15%)",
    ]}
    {...props}
  >
    {React.Children.map(
      children,
      (child) =>
        React.isValidElement(child) &&
        React.cloneElement(child, { gridColumn: "center-start/center-end" })
    )}
  </Box>
)
