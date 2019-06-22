import React from "react"

import { oc } from "ts-optchain"

import css from "@emotion/css"

import { SiteSiteMetadataContact, Maybe } from "../../types/graphqlTypes.d"

import { Box } from "../box"
import { LinkExternal } from "../link"

interface Props {
  data: Maybe<SiteSiteMetadataContact>[]
}

export const Footer: React.FC<Props> = ({ data }) =>
  data && data.length > 0 ? (
    <Box
      as="footer"
      py={32}
      display="grid"
      gridTemplateColumns={[
        "32px 1fr 32px",
        "minmax(32px,15%) 1fr minmax(32px,15%)",
      ]}
    >
      <Box
        as="ul"
        display="grid"
        gridRowGap={16}
        gridColumn="2/3"
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
    </Box>
  ) : null
