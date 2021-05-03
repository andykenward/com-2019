export type HeroData = Partial<{
  title: string
  description: string
  twitter: string
  name: string
  role: string
  update: string
  available: string
  email: string
  links: Partial<{ title: string; href: string }>[]
  footer: Partial<{ title: string; href: string }>[]
}>

export type ProjectData = Partial<{
  order: number
  title: string
  description: string
  clients: string[]
  studio: Partial<{ title: string; href: string }>
  role: string
  tags: string[]
  caseStudy: string
  site: string
  repo: string
}>

export type IndexProps = {
  hero: {
    data: HeroData
  }
  projects: {
    data: ProjectData
    filePath: string
  }[]
}
