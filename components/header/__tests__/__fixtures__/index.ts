import {
  FragmentMeFragment,
  Maybe,
  MeQuery,
} from "../../../../generated/graphql"

const result: Maybe<{ __typename?: "Me" } & FragmentMeFragment> = {
  __typename: "Me",
  id: "123",
  name: "Andy Kenward",
  role: "Senior Front-End Engineer",
  update: "Hire Me",
  available: "2020-04-01T00:00:00.000Z",
  links: [{ __typename: "Link", id: "123", title: "Github", href: "/link" }],
}

export const HEADER_RESULT_DATA: MeQuery = {
  me: Object.assign({}, result),
}

export const HEADER_RESULT_DATA_NO_NAME: MeQuery = {
  me: Object.assign({}, result, { name: null }),
}

export const HEADER_RESULT_DATA_NO_ROLE: MeQuery = {
  me: Object.assign({}, result, { role: null }),
}

export const HEADER_RESULT_DATA_NO_UPDATE: MeQuery = {
  me: Object.assign({}, result, { update: null }),
}

export const HEADER_RESULT_DATA_NO_AVAILABLE: MeQuery = {
  me: Object.assign({}, result, { available: null }),
}

export const HEADER_RESULT_DATA_NO_LINKS: MeQuery = {
  me: Object.assign({}, result, { links: null }),
}
