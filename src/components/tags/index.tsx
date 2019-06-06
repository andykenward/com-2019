import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { oc } from "ts-optchain"

import { HeadingFour } from "../typography"
import { TagsQueryQuery } from "../../types/graphqlTypes.d"
import { List } from "../list"

const useTags = () => {
  const data: TagsQueryQuery = useStaticQuery(graphql`
    query TagsQuery {
      site {
        siteMetadata {
          tags
        }
      }
    }
  `)
  return oc(data).site.siteMetadata.tags([])
}

export const Tags: React.FC = () => {
  const data = useTags()
  return (
    <List>
      {data.map((tag, index) => (
        <HeadingFour as="li" key={index}>
          {tag}
        </HeadingFour>
      ))}
    </List>
  )
}
