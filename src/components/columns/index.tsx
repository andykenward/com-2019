import { Children, cloneElement, isValidElement } from "react"
import { Grid, GridProps } from "theme-ui"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ColumnsCenter = ({ children, ref, ...props }: GridProps) => (
  <Grid variant="center" {...props}>
    {Children.map(
      children,
      (child) =>
        isValidElement(child) &&
        cloneElement(child, {
          sx: { gridColumn: "center-start/center-end", ...child.props.sx },
        })
    )}
  </Grid>
)
