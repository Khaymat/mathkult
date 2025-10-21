import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllPraktek } from "@/lib/praktek"

export default function PraktekPage() {
  const allPraktek = getAllPraktek()

  return (
    <main className="container mx-auto px-4 py-10">
      <header className="mb-6 space-y-3">
        <h1 className="text-3xl font-bold text-foreground">Praktek</h1>
        <p className="text-muted-foreground">
          Pilih salah satu aplikasi interaktif di bawah ini untuk bereksperimen dengan berbagai konsep.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allPraktek.map((p) => (
          <Link key={p.slug} href={`/praktek/${p.slug}`} className="block">
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
        ))}
      </section>
    </main>
  )
}
