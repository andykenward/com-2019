import css from "@emotion/css"
import React from "react"

import { Maybe, SiteSiteMetadataProjects } from "../../types/graphqlTypes.d"
import { Box } from "../box"
import { Tags } from "../tags"
import {
  BodyBold,
  HeadingOne,
  HeadingThree,
  HeadingFour,
  Body,
} from "../typography"
import { ButtonExternal } from "../button"
import { ColumnsCenter } from "../columns"
import { LinkExternal } from "../link"

interface Props {
  data: Maybe<SiteSiteMetadataProjects>[]
}

export const Projects: React.FC<Props> = ({ data }) =>
  data && data.length > 0 ? (
    <ColumnsCenter as="section">
      <HeadingOne mb={32}>Projects</HeadingOne>
      <Box display="grid" gridRowGap={64}>
        {data.map(
          (item, index) => item && <ProjectsItem key={index} data={item} />
        )}
      </Box>
    </ColumnsCenter>
  ) : null

export const ProjectsItem: React.FC<{
  data: SiteSiteMetadataProjects
}> = ({
  data: { title, description, client, siteUrl, caseUrl, tags, role, studio },
}) => (
  <Box as="article">
    {client && (
      <BodyBold
        css={css`
          text-transform: uppercase;
        `}
      >
        {client}
      </BodyBold>
    )}
    {title && (
      <HeadingThree mb={!description ? 8 : undefined}>{title}</HeadingThree>
    )}
    {description && <Body mb={8}>{description}</Body>}
    {role && <HeadingFour mb={!studio ? 8 : undefined}>{role}</HeadingFour>}
    {studio && studio.url && studio.title && (
      <LinkExternal mb={8} href={studio.url}>
        {studio.title}
      </LinkExternal>
    )}
    <Tags data={tags} />
    {(siteUrl || caseUrl) && (
      <Box>
        {siteUrl && <ButtonExternal href={siteUrl}>Site</ButtonExternal>}
        {caseUrl && <ButtonExternal href={caseUrl}>Case Study</ButtonExternal>}
      </Box>
    )}
  </Box>
)
