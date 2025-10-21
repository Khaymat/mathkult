import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import DynamicHeroBackground from '@/components/dynamic-hero-background'

export default function HomePage() {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <DynamicHeroBackground />
      <div className="z-10 flex flex-col items-center text-center">
        <h1 className="font-heading text-6xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl">
          Mathkult
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Menjelajahi Dunia Matematika, Algoritma, dan Logika Keuangan dengan Cara yang Menarik.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="font-semibold">
            <Link href="/konsep">
              Mulai Belajar <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="font-semibold">
            <Link href="/praktek">
              <Sparkles className="mr-2 h-5 w-5" /> Lihat Proyek
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
