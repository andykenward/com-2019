import { ResultFunction } from "@apollo/react-testing"
import { FetchResult } from "apollo-link"
import { omit } from "ramda"

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
  links: [{ __typename: "Link", id: "123", title: "Github", url: "/link" }],
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
export const HEADER_RESULT_DATA_NO_LINKS: MeQuery = {
  me: Object.assign({}, result, { links: null }),
}
