import css from "@emotion/css"

import { FooterFieldsFragment } from "../../../generated/graphql"
import { Box } from "../box"
import { ColumnsCenter } from "../columns"
import { LinkExternal } from "../link"

export const Footer: React.FC<{ data?: FooterFieldsFragment | null }> = ({
  data,
}) => {
  if (data == null) return null

  const { links } = data

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
        {(links ?? []).map(
          ({ title, href, id }) =>
            title &&
            href && (
              <Box
                data-testid="footer-item"
                as="li"
                m={0}
                p={0}
                display="list-item"
                key={id}
              >
                <LinkExternal data-testid="footer-item-a" href={href}>
                  {title}
                </LinkExternal>
              </Box>
            )
        )}
      </Box>
    </ColumnsCenter>
  )
}
