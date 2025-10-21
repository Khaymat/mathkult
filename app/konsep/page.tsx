import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllKonsep, Konsep } from "@/lib/konsep"

async function KonsepGrid({ allKonsep }: { allKonsep: Konsep[] }) {
  // Simple client-side search can be added here later if needed
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {allKonsep.map((k) => (
        <Link key={k.slug} href={`/konsep/${k.slug}`} className="block">
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
      ))}
    </section>
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
