import css from "@emotion/css"
import React from "react"

import { Maybe, Scalars } from "../../types/graphqlTypes.d"
import { Box } from "../box"
import { Body } from "../typography"

interface Props {
  data: Maybe<Scalars["String"]>[] | undefined | null
}

export const Tags: React.FC<Props> = ({ data }) =>
  data && data.length ? (
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
      {data.map((tag, index) => (
        <Body
          c="oyster"
          css={css`
            :last-child:after {
              display: none;
            }
            :after {
              content: "•";
              margin: 0 9px;
              font-size: 12px;
              color: #959595;
            }
          `}
          as="li"
          key={index}
        >
          {tag}
        </Body>
      ))}
    </Box>
  ) : null
