import React from "react"

import { oc } from "ts-optchain"

import { SiteSiteMetadataContact, Maybe } from "../../types/graphqlTypes.d"

import { Box } from "../box"
import { List, ListItem } from "../list"
import { LinkExternal } from "../link"

interface Props {
  data: Maybe<SiteSiteMetadataContact>[]
}

export const Footer: React.FC<Props> = ({ data }) =>
  data && data.length > 0 ? (
    <Box as="footer" px={32} py={32} mx={[null, "auto"]} width={[null, 3 / 4]}>
      <List>
        {data.map((item, index) => {
          const title = oc(item).title()
          const url = oc(item).url()

          return (
            title &&
            url && (
              <ListItem key={index}>
                <LinkExternal href={url}>{title}</LinkExternal>
              </ListItem>
            )
          )
        })}
      </List>
    </Box>
  ) : null
