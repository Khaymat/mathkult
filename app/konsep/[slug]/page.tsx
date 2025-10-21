import MdxContent from "@/components/mdx-content"
import BackButton from "@/components/back-button"
import { getAllKonsep, getKonsepBySlug } from "@/lib/konsep"
import { notFound } from "next/navigation"
<<<<<<< HEAD
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
=======
>>>>>>> main
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

<<<<<<< HEAD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": konsep.faq?.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <main className="container mx-auto px-4 py-10 max-w-4xl">
=======
  return (
    <main className="container mx-auto px-4 py-10">
>>>>>>> main
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
<<<<<<< HEAD
      {konsep.faq && konsep.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="mb-8">
        <BackButton href="/konsep" text="Kembali ke semua konsep" />
      </div>

      <article className="prose dark:prose-invert max-w-none">
        <MdxContent source={konsep.body} />
      </article>

      {konsep.faq && konsep.faq.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {konsep.faq.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}
=======
      <div className="mb-8">
        <BackButton href="/konsep" text="Kembali ke semua konsep" />
      </div>
      <article className="prose dark:prose-invert max-w-none">
        <MdxContent source={konsep.body} />
      </article>
>>>>>>> main
    </main>
  )
}
