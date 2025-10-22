"use client"

import { getPraktekBySlug } from "@/lib/praktek"
import { notFound } from "next/navigation"
import BackButton from "@/components/back-button"

// This is a client component because it needs to render the interactive sandboxes.
export default function PraktekPage({ params }: { params: { slug: string } }) {
  const praktek = getPraktekBySlug(params.slug)
  if (!praktek) notFound()

  // Get the component type and props from the praktek object.
  const Component = praktek.component
  const props = praktek.props || {}

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <BackButton />
      </div>
      <header className="mb-6 space-y-3 text-center">
        <h1 className="text-3xl font-bold text-foreground">{praktek.title}</h1>
        <p className="text-muted-foreground">{praktek.desc}</p>
      </header>
      {/* Render the component correctly using JSX syntax. */}
      <section>
        <Component {...props} />
      </section>
    </main>
  )
}
