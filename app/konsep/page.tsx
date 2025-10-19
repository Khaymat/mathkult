"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import MdxContent from "@/components/mdx-content"

type Topic = {
  id: string
  title: string
  body: string
  category: "Matematika" | "Algoritma" | "Finansial"
}

const topics: Topic[] = [
  {
    id: "bunga",
    title: "Bunga Majemuk",
    category: "Finansial",
    body: `
# Bunga Majemuk
Rumus: $$A=P(1+r)^n$$.
Contoh: $$P=1000,\\ r=10\\%,\\ n=2 \\Rightarrow A=1210.$$
`,
  },
  {
    id: "deret",
    title: "Deret Geometri",
    category: "Matematika",
    body: `
# Deret Geometri
Jumlah suku: $$S_n=a\\frac{1-r^n}{1-r}$$.
`,
  },
  {
    id: "sigma",
    title: "Notasi Sigma",
    category: "Matematika",
    body: `
# Notasi Sigma
$$\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$$.
`,
  },
  {
    id: "bigno",
    title: "Kompleksitas Big-O",
    category: "Algoritma",
    body: `
# Big-O
Linear $$O(n)$$, Binary Search $$O(\\log n)$$, Bubble $$O(n^2)$$.
`,
  },
  {
    id: "limit",
    title: "Limit Dasar",
    category: "Matematika",
    body: `
# Limit
$$\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$$.
`,
  },
  {
    id: "turunan",
    title: "Aturan Turunan",
    category: "Matematika",
    body: `
# Turunan
$$\\frac{d}{dx} x^n = n x^{n-1}$$.
`,
  },
  {
    id: "integral",
    title: "Integral Dasar",
    category: "Matematika",
    body: `
# Integral Dasar
$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}+C,\\; n\\neq -1$$.
`,
  },
  {
    id: "peluang",
    title: "Peluang Dasar",
    category: "Matematika",
    body: `
# Peluang Dasar
$$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$$.
`,
  },
  {
    id: "matriks",
    title: "Matriks Dasar",
    category: "Matematika",
    body: `
# Matriks
Determinannya: $$\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = ad-bc$$.
`,
  },
  {
    id: "eksplog",
    title: "Eksponensial & Logaritma",
    category: "Matematika",
    body: `
# Eksponensial & Logaritma
$$a^{\\log_a x}=x,\\; \\log_a b=\\frac{\\ln b}{\\ln a}$$.
`,
  },
  {
    id: "trig",
    title: "Trigonometri Dasar",
    category: "Matematika",
    body: `
# Trigonometri
Identitas: $$\\sin^2 x+\\cos^2 x=1$$.
`,
  },
  {
    id: "taylor",
    title: "Deret Taylor",
    category: "Matematika",
    body: `
# Deret Taylor
$$e^x=\\sum_{k=0}^{\\infty}\\frac{x^k}{k!}$$.
`,
  },
  {
    id: "normal",
    title: "Distribusi Normal",
    category: "Matematika",
    body: `
# Distribusi Normal
PDF: $$f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$.
`,
  },
]

const categories: Topic["category"][] = ["Matematika", "Algoritma", "Finansial"]

export default function KonsepPage() {
  const [q, setQ] = useState("")
  const [cat, setCat] = useState<Topic["category"] | "Semua">("Semua")
  const [activeId, setActiveId] = useState(topics[0].id)

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    return topics.filter((t) => {
      const okCat = cat === "Semua" || t.category === cat
      const okQ = !s || t.title.toLowerCase().includes(s) || t.body.toLowerCase().includes(s)
      return okCat && okQ
    })
  }, [q, cat])

  const active = useMemo(() => topics.find((t) => t.id === activeId) ?? filtered[0] ?? topics[0], [activeId, filtered])

  return (
    <main className="container mx-auto px-4 py-10">
      <header className="mb-6 space-y-3">
        <h1 className="text-3xl font-bold text-foreground">Konsep</h1>
        <p className="text-muted-foreground">Pilih konsep di bawah. LaTeX dirender otomatis via KaTeX.</p>
        <div className="flex flex-wrap items-center gap-3">
          <Input placeholder="Cari konsep..." value={q} onChange={(e) => setQ(e.target.value)} className="w-64" />
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

      <section className="grid gap-4 md:grid-cols-3">
        {filtered.map((t) => (
          <Card
            key={t.id}
            role="button"
            onClick={() => setActiveId(t.id)}
            className={cn(
              "transition-colors",
              active?.id === t.id ? "border-foreground" : "hover:border-foreground/60",
            )}
          >
            <CardHeader>
              <CardTitle className="text-base">{t.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{t.category}</CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6">
        {active && <MdxContent source={active.body} />}
      </section>
    </main>
  )
}
