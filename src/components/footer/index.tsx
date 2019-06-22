import React from "react"

import { oc } from "ts-optchain"

import css from "@emotion/css"

import { SiteSiteMetadataContact, Maybe } from "../../types/graphqlTypes.d"

import { Box } from "../box"
import { LinkExternal } from "../link"
import { ColumnsCenter } from "../columns"

interface Props {
  data: Maybe<SiteSiteMetadataContact>[]
}

export const Footer: React.FC<Props> = ({ data }) =>
  data && data.length > 0 ? (
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
        {data.map((item, index) => {
          const title = oc(item).title()
          const url = oc(item).url()

          return (
            title &&
            url && (
              <Box as="li" m={0} p={0} display="list-item" key={index}>
                <LinkExternal href={url}>{title}</LinkExternal>
              </Box>
            )
          )
        })}
      </Box>
    </ColumnsCenter>
  ) : null
