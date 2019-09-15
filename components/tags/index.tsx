import css from "@emotion/css"

import { Tag } from "../../generated/graphql"
import { convertToRem } from "../../lib/styled-system"
import { Box } from "../box"
import { LinkExternal } from "../link"
import { Body } from "../typography"

interface Props {
  data: Pick<Tag, "id" | "title" | "url">[]
}

export const Tags: React.FC<Props> = ({ data }) =>
  data != null && data.length ? (
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
      {data.map((tag, index) => {
        const title = tag.title
        const url = tag.url
        return title != null ? (
          <Body
            color="oyster"
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
            {url != null ? (
              <LinkExternal href={url}>{title}</LinkExternal>
            ) : (
              <>{title}</>
            )}
          </Body>
        ) : null
      })}
    </Box>
  ) : null
