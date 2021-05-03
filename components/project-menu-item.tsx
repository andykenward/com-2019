import type { ProjectData } from "../pages/types"
import { Clients } from "./clients"
import { Link, LinkOutline } from "./link"
import { Tags } from "./tags"

export const ProjectMenuItem = ({
  clients,
  title,
  description,
  role,
  tags,
  site,
  caseStudy,
  studio,
  repo,
}: ProjectData) => (
  <article>
    <Clients clients={clients} />
    {title && (
      <h3
        className={`font-sans font-normal tracking-tight text-2xl sm:text-4xl leading-tight sm:leading-tight ${
          !description ? "mb-2" : ""
        }`}
      >
        {title}
      </h3>
    )}
    {description && <p className="font-sans mb-2">{description}</p>}
    {role && (
      <h4 className={`font-sans text-xl leading-5 ${!studio ? "mb-2" : ""}`}>
        {role}
      </h4>
    )}
    {studio?.href && (
      <Link className="mb-2" href={studio.href}>
        {studio.title}
      </Link>
    )}
    {tags?.length && <Tags data={tags} />}
    {(site || caseStudy || repo) && (
      <footer className="space-x-2">
        {site && <LinkOutline href={site}>Site</LinkOutline>}
        {caseStudy && <LinkOutline href={caseStudy}>Case Study</LinkOutline>}
        {repo && <LinkOutline href={repo}>Repo</LinkOutline>}
      </footer>
    )}
  </article>
)
