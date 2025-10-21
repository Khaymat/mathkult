"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllPraktek } from "@/lib/praktek"
import AnimatedCard from "@/components/animated-card"
import { useState } from "react"
import { Input } from "@/components/ui/input"

export default function PraktekPage() {
  const allPraktek = getAllPraktek()
  const [search, setSearch] = useState("")

  const filteredPraktek = allPraktek.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <main className="container mx-auto px-4 py-10">
      <header className="mb-6 space-y-3">
        <h1 className="text-3xl font-bold text-foreground">Praktek</h1>
        <p className="text-muted-foreground">
          Pilih salah satu aplikasi interaktif di bawah ini untuk bereksperimen dengan berbagai konsep.
        </p>
      </header>

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Cari praktek..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredPraktek.map((p) => (
          <AnimatedCard key={p.slug}>
            <Link href={`/praktek/${p.slug}`} className="block h-full">
              <Card className="h-full transition-colors hover:border-foreground/60">
                <CardHeader>
                  <CardTitle className="text-base">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                  <p className="text-xs text-muted-foreground/80">{p.category}</p>
                </CardContent>
              </Card>
            </Link>
          </AnimatedCard>
        ))}
      </section>
    </main>
  )
}
