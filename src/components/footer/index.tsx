import { FooterFieldsFragment } from "../../../generated/graphql"
import { Link } from "../link"

export const Footer: React.FC<{ data?: FooterFieldsFragment | null }> = ({
  data,
}) => {
  if (data == null || !data.links.length) return null

  const { links } = data

  return (
    <footer className="sm:max-w-center sm:w-full mx-8 sm:mx-auto py-8">
      <ul className="space-y-4">
        {(links ?? []).map(
          ({ title, href, id }) =>
            title &&
            href && (
              <li key={id}>
                <Link href={href}>{title}</Link>
              </li>
            )
        )}
      </ul>
    </footer>
  )
}
