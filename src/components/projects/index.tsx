import { FragmentProjectNavFragment } from "../../../generated/graphql"
import { Clients } from "../clients"
import { Link, LinkOutline } from "../link"
import { Tags } from "../tags"

export const ProjectsMenuItem: React.FC<FragmentProjectNavFragment> = ({
  clients,
  title,
  description,
  role,
  tags,
  live,
  caseStudy,
  studio,
}) => (
  <article>
    <Clients clients={clients} />
    <h3
      className={`font-body font-normal tracking-tight text-2xl sm:text-4xl leading-tight sm:leading-tight ${
        !description ? "mb-2" : ""
      }`}
    >
      {title}
    </h3>
    <p className="font-body mb-2">{description}</p>
    <h4 className={`font-body text-xl leading-5 ${!studio ? "mb-2" : ""}`}>
      {role?.title}
    </h4>
    {studio?.href && (
      <Link className="mb-2" href={studio.href}>
        {studio.title}
      </Link>
    )}
    {tags && <Tags tags={tags} />}
    {(live || caseStudy) && (
      <footer className="space-x-2">
        {live?.href && <LinkOutline href={live.href}>Site</LinkOutline>}
        {caseStudy?.href && (
          <LinkOutline href={caseStudy.href}>Case Study</LinkOutline>
        )}
      </footer>
    )}
  </article>
)

export const ProjectsMenu: React.FC<{
  data?: Array<FragmentProjectNavFragment> | null
}> = ({ data }) => {
  const projects = data ?? []

  return (
    <main className="sm:max-w-center sm:w-full mx-8 sm:mx-auto" role="main">
      <h2 className="font-heading font-light text-4xl sm:text-5xl mb-8">
        Projects
      </h2>
      <div className="space-y-20">
        {projects.map((project) =>
          project ? <ProjectsMenuItem key={project.id} {...project} /> : null
        )}
      </div>
    </main>
  )
}
