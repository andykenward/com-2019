import css from "@emotion/css"

import { Tag } from "../../generated/graphql"
import { convertToRem } from "../../lib/styled-system"
import { Box } from "../box"
import { LinkExternal } from "../link"
import { Body } from "../typography"

type Item = Pick<Tag, "id" | "title" | "url">

interface Props {
  data: Item[]
}

export const Tags: React.FC<Props> = ({ data }) =>
  data?.length ? (
    <Box
      as="ul"
      display="flex"
      flexWrap="wrap"
      m={0}
      mb={16}
      padding={0}
      css={css`
        list-style: none;
      `}
    >
      {data.map(({ url, title }, index: number) =>
        title != null ? (
          <Body
            textColor="oyster"
            css={css`
              :last-child:after {
                display: none;
              }
              :after {
                content: "•";
                margin: 0 ${convertToRem(9)};
                font-size: ${convertToRem(12)};
                color: #959595;
              }
            `}
            as="li"
            key={index}
          >
            {url ? (
              <LinkExternal href={url}>{title}</LinkExternal>
            ) : (
              <>{title}</>
            )}
          </Body>
        ) : null
      )}
    </Box>
  ) : null
