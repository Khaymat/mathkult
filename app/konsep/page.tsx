import { getAllKonsep } from "@/lib/konsep"
import KonsepList from "./konsep-list"

export default async function KonsepPage() {
  const allKonsep = await getAllKonsep()

  return (
    <main className="container mx-auto px-4 py-10">
      <header className="mb-6 space-y-3">
        <h1 className="text-3xl font-bold text-foreground">Konsep</h1>
        <p className="text-muted-foreground">
          Jelajahi berbagai konsep matematika, algoritma, dan finansial. Setiap konsep disajikan sebagai artikel mandiri.
        </p>
      </header>

      <KonsepList allKonsep={allKonsep} />
    </main>
  )
}
