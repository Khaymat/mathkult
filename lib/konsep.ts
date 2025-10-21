import fs from "fs"
import path from "path"
import matter from "gray-matter"

const kontenDir = path.join(process.cwd(), "konsep")

export type FAQ = {
  question: string
  answer: string
}

export type Konsep = {
  slug: string
  title: string
  category: "Matematika" | "Algoritma" | "Finansial"
  summary: string
  body: string
  faq?: FAQ[]
}

export function getAllKonsep(): Konsep[] {
  // Read directory names as slugs
  const slugs = fs.readdirSync(kontenDir).filter(file =>
    fs.statSync(path.join(kontenDir, file)).isDirectory()
  );

  const allKonsepData = slugs.map((slug) => {
    const filePath = path.join(kontenDir, slug, 'index.mdx')
    const fileContent = fs.readFileSync(filePath, "utf8")
    const matterResult = matter(fileContent)

    return {
      slug,
      title: matterResult.data.title,
      category: matterResult.data.category,
      summary: matterResult.data.summary,
      body: matterResult.content,
      faq: matterResult.data.faq || [],
    } as Konsep
  })
  return allKonsepData
}

export function getKonsepBySlug(slug: string): Konsep | undefined {
  // Path now points to index.mdx within a folder
  const filePath = path.join(kontenDir, slug, 'index.mdx')
  if (!fs.existsSync(filePath)) {
    return undefined
  }
  const fileContent = fs.readFileSync(filePath, "utf8")
  const matterResult = matter(fileContent)

  return {
    slug,
    title: matterResult.data.title,
    category: matterResult.data.category,
    summary: matterResult.data.summary,
    body: matterResult.content,
    faq: matterResult.data.faq || [],
  } as Konsep
}
