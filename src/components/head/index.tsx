import NextHead from "next/head"

import { GlobalSeoField, SeoField } from "../../../generated/graphql"

type Props = Pick<GlobalSeoField, "twitterAccount"> &
  Pick<SeoField, "description" | "title">

export const Head: React.FC<Props> = ({
  title,
  description,
  twitterAccount,
}) => (
  <NextHead>
    <title>{title}</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    ></meta>
    {description && <meta name="description" content={description} />}
    <meta property="og:type" content="website" />
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {twitterAccount && (
      <meta property="twitter:site" content={twitterAccount} />
    )}
  </NextHead>
)
