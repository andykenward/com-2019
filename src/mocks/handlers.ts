import { graphql } from "msw"

import { HomeQuery, HomeQueryVariables } from "../../generated/graphql"

export const handlers = [
  graphql.query<HomeQuery, HomeQueryVariables>("Home", (_req, res, ctx) => {
    return res(
      ctx.data({
        _site: { __typename: "Site" },
        allProjects: [],
        footer: {
          __typename: "FooterRecord",
          id: "1234",
          links: [
            {
              __typename: "LinkRecord",
              id: "321",
              title: "link one",
              href: "https://google.com",
            },
          ],
        },
      })
    )
  }),
]
