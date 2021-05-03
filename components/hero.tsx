import type { HeroData } from "../types"
import { LinkOutline } from "./link"

export const Hero = ({
  name,
  role,
  update,
  links,
  available,
  email,
}: HeroData) => {
  return (
    <header className="bg-primary py-16 sm:py-32">
      <div className="sm:max-w-center mx-8 sm:mx-auto">
        {name && (
          <h1 className="text-black font-serif text-5xl sm:text-7xl">{name}</h1>
        )}
        {role && (
          <h2 className="text-black font-sans text-4xl leading-tight sm:text-5xl sm:leading-tight tracking-tight mb-2">
            {role}
          </h2>
        )}
        {update && (
          <h3 className="text-black font-sans text-xl leading-tight sm:text-3xl sm:leading-tight tracking-tight mb-4">
            {update}
          </h3>
        )}
        {available && (
          <h4 className="text-black font-sans text-xl leading-tight sm:text-3xl sm:leading-tight tracking-tight mb-4">
            {available}
          </h4>
        )}
        {email && <p className="text-black font-sans mb-4">{email}</p>}
        {links?.length && (
          <div className="space-x-2">
            {links.map(
              ({ href, title }) =>
                href && (
                  <LinkOutline key={title} href={href}>
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
