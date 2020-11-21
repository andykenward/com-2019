import { Box, Grid } from "theme-ui"

import { FooterFieldsFragment } from "../../../generated/graphql"
import { ColumnsCenter } from "../columns"
import { LinkExternal } from "../link"

export const Footer: React.FC<{ data?: FooterFieldsFragment | null }> = ({
  data,
}) => {
  if (data == null || !data.links.length) return null

  const { links } = data

  return (
    <ColumnsCenter as="footer" py={32}>
      <Grid
        as="ul"
        gap={16}
        m={0}
        p={0}
        sx={{
          listStyle: "none",
        }}
      >
        {(links ?? []).map(
          ({ title, href, id }) =>
            title &&
            href && (
              <Box as="li" m={0} p={0} key={id}>
                <LinkExternal href={href}>{title}</LinkExternal>
              </Box>
            )
        )}
      </Grid>
    </ColumnsCenter>
  )
}
