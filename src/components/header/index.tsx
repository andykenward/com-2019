import { FragmentMeFragment, MeRecord } from "../../../generated/graphql"
import { LinkOutline } from "../link"

const getMonthYear = (available?: MeRecord["available"]) => {
  if (available == null) return null
  return new Date(available).toLocaleString("en-GB", {
    month: "long",
    year: "numeric",
  })
}

export const Header: React.FC<{ data?: FragmentMeFragment | null }> = ({
  data,
}) => {
  if (data == null) return null
  const { name, role, update, links, available, email } = data

  const date = getMonthYear(available)

  return (
    <header className="bg-primary py-16 sm:py-32">
      <div className="sm:max-w-center mx-8 sm:mx-auto">
        {name && (
          <h1 className="text-black font-heading text-5xl sm:text-7xl md:text-7xl">
            {name}
          </h1>
        )}
        {role && (
          <h2 className="text-black font-body text-4xl leading-tight sm:text-5xl sm:leading-tight tracking-tight mb-2">
            {role}
          </h2>
        )}
        {update && (
          <h3 className="text-black font-body text-xl leading-tight sm:text-3xl sm:leading-tight tracking-tight mb-4">
            {update}
          </h3>
        )}
        {date && (
          <h4 className="text-black font-body text-xl leading-tight sm:text-3xl sm:leading-tight tracking-tight mb-4">
            Available from {date}
          </h4>
        )}
        {email && <p className="text-black font-body mb-4">{email}</p>}
        {links?.length && (
          <div className="space-x-2">
            {links.map(
              ({ href, id, title }) =>
                href && (
                  <LinkOutline key={id} href={href}>
                    {title}
                  </LinkOutline>
                )
            )}
          </div>
        )}
      </div>
    </header>
  )
}
