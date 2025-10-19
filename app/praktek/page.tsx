"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import CompoundSandbox from "@/components/compound-sandbox"
import GeometricSeriesSandbox from "@/components/geometric-series-sandbox"
import SigmaSandbox from "@/components/sigma-sandbox"
import FactorsSandbox from "@/components/factors-sandbox"

type Item = {
  id: string
  title: string
  desc: string
  category: "Finansial" | "Matematika" | "Algoritma"
  component: React.ReactNode
}

const items: Item[] = [
  {
    id: "compound",
    title: "Bunga Majemuk",
    desc: "A = P(1+r)^n",
    category: "Finansial",
    component: <CompoundSandbox />,
  },
  {
    id: "geom",
    title: "Deret Geometri",
    desc: "Sₙ = a(1-rⁿ)/(1-r)",
    category: "Matematika",
    component: <GeometricSeriesSandbox />,
  },
  {
    id: "sigma",
    title: "Sigma",
    desc: "∑ dari 1 ke n",
    category: "Matematika",
    component: <SigmaSandbox mode="linear" />,
  },
  {
    id: "sigma-square",
    title: "Sigma Kuadrat",
    desc: "∑ k² dari 1 ke n",
    category: "Matematika",
    component: <SigmaSandbox mode="square" />,
  },
  {
    id: "factors",
    title: "Faktor Prima",
    desc: "Faktorisasi bilangan",
    category: "Algoritma",
    component: <FactorsSandbox />,
  },
]

const categories: Item["category"][] = ["Finansial", "Matematika", "Algoritma"]

export default function PraktekPage() {
  const [q, setQ] = useState("")
  const [cat, setCat] = useState<Item["category"] | "Semua">("Semua")
  const [activeId, setActiveId] = useState(items[0].id)

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    return items.filter((i) => {
      const okCat = cat === "Semua" || i.category === cat
      const okQ = !s || i.title.toLowerCase().includes(s) || i.desc.toLowerCase().includes(s)
      return okCat && okQ
    })
  }, [q, cat])

  const active = useMemo(() => items.find((i) => i.id === activeId) ?? filtered[0] ?? items[0], [activeId, filtered])

  return (
    <main className="container mx-auto px-4 py-10">
      <header className="mb-6 space-y-3">
        <h1 className="text-3xl font-bold text-foreground">Praktek</h1>
        <p className="text-muted-foreground">Pilih mini-app di bawah untuk bereksperimen.</p>
        <div className="flex flex-wrap items-center gap-3">
          <Input placeholder="Cari mini-app..." value={q} onChange={(e) => setQ(e.target.value)} className="w-64" />
          <div className="flex items-center gap-2">
            <Button size="sm" variant={cat === "Semua" ? "default" : "outline"} onClick={() => setCat("Semua")}>
              Semua
            </Button>
            {categories.map((c) => (
              <Button key={c} size="sm" variant={cat === c ? "default" : "outline"} onClick={() => setCat(c)}>
                {c}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((i) => (
          <Card
            key={i.id}
            role="button"
            onClick={() => setActiveId(i.id)}
            className={cn(
              "h-full transition-colors",
              active?.id === i.id ? "border-foreground" : "hover:border-foreground/60",
            )}
          >
            <CardHeader>
              <CardTitle className="text-base">{i.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {i.desc} — {i.category}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-8">{active?.component}</section>
    </main>
  )
}
