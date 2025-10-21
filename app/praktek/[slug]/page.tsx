"use client"

import { getPraktekBySlug } from "@/lib/praktek"
import { notFound } from "next/navigation"
import BackButton from "@/components/back-button"

// This is a client component because the sandboxes are interactive.
export default function PraktekPage({ params }: { params: { slug: string } }) {
  const praktek = getPraktekBySlug(params.slug)
  if (!praktek) notFound()

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <BackButton href="/praktek" text="Kembali ke semua praktek" />
      </div>
      <header className="mb-6 space-y-3 text-center">
        <h1 className="text-3xl font-bold text-foreground">{praktek.title}</h1>
        <p className="text-muted-foreground">{praktek.desc}</p>
      </header>
      <section>{praktek.component}</section>
    </main>
  )
}
