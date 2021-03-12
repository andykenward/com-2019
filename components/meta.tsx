import NextHead from "next/head"

export const Meta = ({
  title,
  description,
  twitter,
}: {
  title?: string
  description?: string
  twitter: string
}) => (
  <NextHead>
    {title && <title>{title}</title>}
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    ></meta>
    {description && <meta name="description" content={description} />}
    <meta property="og:type" content="website" />
    {title && <meta property="og:title" content={title} />}
    {description && <meta property="og:description" content={description} />}
    {twitter && <meta property="twitter:site" content={twitter} />}
  </NextHead>
)
