import css from "@emotion/css"
import React from "react"
import { oc } from "ts-optchain"

import { Maybe, SiteSiteMetadataProjects } from "../../types/graphqlTypes.d"
import { Box } from "../box"
import { Tags } from "../tags"
import { BodyBold, HeadingOne, HeadingThree, HeadingFour } from "../typography"
import { ButtonExternal } from "../button"

interface Props {
  data: Maybe<SiteSiteMetadataProjects>[]
}

export const Projects: React.FC<Props> = ({ data }) =>
  data && data.length > 0 ? (
    <Box
      as="section"
      display="grid"
      gridTemplateColumns={[
        "32px 1fr 32px",
        "minmax(32px,15%) 1fr minmax(32px,15%)",
      ]}
    >
      <HeadingOne gridColumn="2/3" mb={32}>
        Projects
      </HeadingOne>
      <Box display="grid" gridColumn="2/3" gridRowGap={64}>
        {data.map((item, index) => (
          <ProjectsItem
            key={index}
            title={oc(item).title()}
            client={oc(item).client()}
            siteUrl={oc(item).siteUrl()}
            caseUrl={oc(item).caseUrl()}
            tags={oc(item).tags()}
            role={oc(item).role()}
          />
        ))}
      </Box>
    </Box>
  ) : null

export const ProjectsItem: React.FC<SiteSiteMetadataProjects> = ({
  title,
  client,
  siteUrl,
  caseUrl,
  tags,
  role,
}) => (
  <Box as="article">
    <BodyBold
      css={css`
        text-transform: uppercase;
      `}
    >
      {client}
    </BodyBold>
    <HeadingThree mb={8}>{title}</HeadingThree>
    <HeadingFour mb={8}>{role}</HeadingFour>
    <Tags data={tags} />
    <Box>
      {siteUrl && <ButtonExternal href={siteUrl}>Site</ButtonExternal>}
      {caseUrl && <ButtonExternal href={caseUrl}>Case Study</ButtonExternal>}
    </Box>
  </Box>
)
