import { Link } from "./link"

export const Footer = ({
  data,
}: {
  data?: { title?: string; href?: string }[]
}) => {
  if (data == null || !data.length) return null

  return (
    <footer className="sm:max-w-center sm:w-full mx-8 sm:mx-auto py-8">
      <ul className="space-y-4">
        {data.map(
          ({ title, href }) =>
            title &&
            href && (
              <li key={title}>
                <Link href={href}>{title}</Link>
              </li>
            )
        )}
      </ul>
    </footer>
  )
}
