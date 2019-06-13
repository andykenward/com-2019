import css from "@emotion/css"
import React from "react"

import { oc } from "ts-optchain"

import { Maybe, SiteSiteMetadataProjectsTags } from "../../types/graphqlTypes.d"
import { Box } from "../box"
import { Body } from "../typography"
import { LinkExternal } from "../link"

interface Props {
  data: Maybe<Array<Maybe<SiteSiteMetadataProjectsTags>>> | undefined | null
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
        const title = oc(tag).title()
        const url = oc(tag).url()
        return title != null ? (
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
