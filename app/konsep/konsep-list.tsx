"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import AnimatedCard from "@/components/animated-card"
import type { Konsep } from "@/lib/konsep"

export default function KonsepList({ allKonsep }: { allKonsep: Konsep[] }) {
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
                  <p className="text-xs text-muted-foreground/80">
                    {k.category}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </AnimatedCard>
        ))}
      </section>
    </>
  )
}
