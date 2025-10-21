"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllKonsep, Konsep } from "@/lib/konsep"
import { useState } from "react"
import AnimatedCard from "@/components/animated-card"
import { Input } from "@/components/ui/input"

function KonsepGrid({ allKonsep }: { allKonsep: Konsep[] }) {
  const [search, setSearch] = useState("")

  const filteredKonsep = allKonsep.filter(
    (k) =>
      k.title.toLowerCase().includes(search.toLowerCase()) ||
      k.summary.toLowerCase().includes(search.toLowerCase()) ||
      k.category.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <>
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Cari konsep..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredKonsep.map((k) => (
          <AnimatedCard key={k.slug}>
            <Link href={`/konsep/${k.slug}`} className="block h-full">
              <Card className="h-full transition-colors hover:border-foreground/60">
                <CardHeader>
                  <CardTitle className="text-base">{k.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">{k.summary}</p>
                  <p className="text-xs text-muted-foreground/80">{k.category}</p>
                </CardContent>
              </Card>
            </Link>
          </AnimatedCard>
        ))}
      </section>
    </>
  )
}

export default async function KonsepPage() {
  const allKonsep = await getAllKonsep()

  return (
    <main className="container mx-auto px-4 py-10">
      <header className="mb-6 space-y-3">
        <h1 className="text-3xl font-bold text-foreground">Konsep</h1>
        <p className="text-muted-foreground">
          Jelajahi berbagai konsep matematika, algoritma, dan finansial. Setiap konsep disajikan sebagai artikel mandiri.
        </p>
        {/* Search and filter can be re-added here as a client component */}
      </header>

      <KonsepGrid allKonsep={allKonsep} />
    </main>
  )
}
