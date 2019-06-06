import React from "react"

import { oc } from "ts-optchain"

import { SiteSiteMetadataContact, Maybe } from "../types/graphqlTypes.d"

import { Box } from "./box"
import { List } from "./list"
import { LinkFooter } from "./link"

interface Props {
  data: Maybe<SiteSiteMetadataContact>[]
}

export const Footer: React.FC<Props> = ({ data }) => {
  return (
    <Box as="footer">
      <List>
        {data.map((item, index) => {
          const title = oc(item).title()
          const url = oc(item).url()

          return (
            title &&
            url && (
              <li key={index}>
                <LinkFooter href={url}>{title}</LinkFooter>
              </li>
            )
          )
        })}
      </List>
    </Box>
  )
}
