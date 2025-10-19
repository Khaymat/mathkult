import fs from "fs"
import path from "path"

const kontenDir = path.join(process.cwd(), "konten/konsep")

export type Konsep = {
  slug: string
  title: string
  category: "Matematika" | "Algoritma" | "Finansial"
  summary: string
  body: string
}

export async function getAllKonsep(): Promise<Konsep[]> {
  const files = fs.readdirSync(kontenDir)
  const allKonsepData = files.map((fileName) => {
    const slug = fileName.replace(/\\.mdx$/, "")
    const filePath = path.join(kontenDir, fileName)
    const fileContent = fs.readFileSync(filePath, "utf8")
    // Simple frontmatter parsing, can be improved with a library like gray-matter
    const titleMatch = fileContent.match(/title: "(.*)"/)
    const categoryMatch = fileContent.match(/category: "(.*)"/)
    const summaryMatch = fileContent.match(/summary: "(.*)"/)

    const title = titleMatch ? titleMatch[1] : "Untitled"
    const category = categoryMatch ? (categoryMatch[1] as Konsep["category"]) : "Matematika"
    const summary = summaryMatch ? summaryMatch[1] : "No summary available."

    return {
      slug,
      title,
      category,
      summary,
      body: fileContent,
    }
  })
  return allKonsepData
}

export async function getKonsepBySlug(slug: string): Promise<Konsep | undefined> {
  const filePath = path.join(kontenDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    return undefined
  }
  const fileContent = fs.readFileSync(filePath, "utf8")
  const titleMatch = fileContent.match(/title: "(.*)"/)
  const categoryMatch = fileContent.match(/category: "(.*)"/)
  const summaryMatch = fileContent.match(/summary: "(.*)"/)

  const title = titleMatch ? titleMatch[1] : "Untitled"
  const category = categoryMatch ? (categoryMatch[1] as Konsep["category"]) : "Matematika"
  const summary = summaryMatch ? summaryMatch[1] : "No summary available."

  return {
    slug,
    title,
    category,
    summary,
    body: fileContent,
  }
}
