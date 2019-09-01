import css from "@emotion/css"

import { useFooterQuery } from "../../generated/graphql"
import { Box } from "../box"
import { ColumnsCenter } from "../columns"
import { LinkExternal } from "../link"

export const Footer: React.FC = () => {
  const { data } = useFooterQuery()

  if (data == null || data.footer == null) return null

  const { links } = data.footer

  return (
    <ColumnsCenter as="footer" py={32}>
      <Box
        as="ul"
        display="grid"
        gridRowGap={16}
        m={0}
        p={0}
        css={css`
          list-style: none;
        `}
      >
        {(links || []).map(item => {
          return (
            item.title &&
            item.url && (
              <Box as="li" m={0} p={0} display="list-item" key={item.id}>
                <LinkExternal href={item.url}>{item.title}</LinkExternal>
              </Box>
            )
          )
        })}
      </Box>
    </ColumnsCenter>
  )
}
