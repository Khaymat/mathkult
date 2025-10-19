import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background accent aura using tokens */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-foreground/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-48 w-48 rounded-full bg-muted/60 blur-3xl" />
      </div>

      <div className="container mx-auto grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image src="/images/mathkult-logo.png" alt="Mathkult" width={48} height={48} />
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">Mathkult</h1>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
            Membongkar matematika, algoritma & finansial yang bikin otak nggak nge-lag. Karena hidup udah ribet, masa
            belajar juga harus ribet?
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="px-6">
              <Link href="/konsep">Jelajahi Konsep</Link>
            </Button>
            <Button asChild variant="outline" className="px-6 bg-transparent">
              <Link href="/praktek">Coba Praktek</Link>
            </Button>
          </div>

          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground md:grid-cols-3">
            <li>• Dukungan LaTeX (KaTeX)</li>
            <li>• Mini sandbox interaktif</li>
          </ul>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h3 className="mb-2 text-lg font-semibold">Contoh topik</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Dasar-dasar limit dan turunan</li>
            <li>Algoritma greedy vs dynamic programming</li>
            <li>Keuangan: bunga majemuk & arus kas diskonto</li>
          </ul>
          <div className="mt-6 rounded-lg bg-muted p-4 text-sm">
            Santai, jelas, tanpa drama...belajar yang relevan dan praktis.
          </div>
        </div>
      </div>
    </section>
  )
}
