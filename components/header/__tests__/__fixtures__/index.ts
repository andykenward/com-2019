import { MeQuery } from "../../../../generated/graphql"

export const HEADER_RESULT_DATA: MeQuery = {
  me: {
    __typename: "Me",
    id: "123",
    name: "Andy Kenward",
    role: "Senior Front-End Engineer",
    update: "Hire Me",
    links: [{ __typename: "Link", id: "123", title: "Github", url: "/link" }],
  },
}
