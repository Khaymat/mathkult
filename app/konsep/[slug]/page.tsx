import MdxContent from "@/components/mdx-content"
import BackButton from "@/components/back-button"
import { getAllKonsep, getKonsepBySlug } from "@/lib/konsep"
import { notFound } from "next/navigation"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const konsep = await getKonsepBySlug(params.slug)
  if (!konsep) notFound()

  return {
    title: `${konsep.title} | Mathkult`,
    description: konsep.summary,
  }
}

export async function generateStaticParams() {
  const allKonsep = await getAllKonsep()
  return allKonsep.map((p) => ({ slug: p.slug }))
}

export default async function KonsepPage({ params }: { params: { slug: string } }) {
  const konsep = await getKonsepBySlug(params.slug)
  if (!konsep) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": konsep.title,
    "description": konsep.summary,
    "author": {
      "@type": "Organization",
      "name": "Mathkult"
    },
    "keywords": `${konsep.category}, matematika, algoritma, logika`
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-8">
        <BackButton href="/konsep" text="Kembali ke semua konsep" />
      </div>
      <article className="prose dark:prose-invert max-w-none">
        <MdxContent source={konsep.body} />
      </article>
    </main>
  )
}
