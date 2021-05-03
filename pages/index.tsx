import fs from "fs"
import matter from "gray-matter"
import type { GetStaticProps } from "next"
import path from "path"

import { Footer } from "../components/footer"
import { Hero } from "../components/hero"
import { Meta } from "../components/meta"
import { ProjectMenuItem } from "../components/project-menu-item"
import type { IndexProps } from "../types"
import { postFilePaths, PROJECTS_PATH } from "../utils/mdx-utils"

const Index = ({ projects, hero }: IndexProps) => {
  return (
    <>
      <Meta
        title={hero.data.title}
        description={hero.data.description}
        twitter={hero.data.twitter}
      />
      <div className="grid grid-cols-1 gap-16">
        <Hero {...hero.data} />
        <main className="sm:max-w-center sm:w-full mx-8 sm:mx-auto" role="main">
          <h2 className="font-serif font-light text-4xl sm:text-5xl mb-8">
            Projects
          </h2>
          <div className="space-y-20">
            {projects.map((project) =>
              project ? (
                <ProjectMenuItem key={project.filePath} {...project.data} />
              ) : null
            )}
          </div>
        </main>
        <Footer data={hero.data.footer} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const heroFile = fs.readFileSync(path.join(process.cwd(), "pages/index.mdx"))
  const { data } = matter(heroFile)

  const projects = await Promise.all(
    postFilePaths.map(async (filePath) => {
      const file = fs.readFileSync(path.join(PROJECTS_PATH, filePath))

      const { data } = matter(file)

      return {
        data,
        filePath,
      }
    })
  )
  projects.sort((a, b) => a.data.order - b.data.order)
  return { props: { hero: { data }, projects } }
}

export default Index
