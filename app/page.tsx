import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import DynamicHeroBackground from '@/components/dynamic-hero-background'

export default function HomePage() {
  return (
    <main className="container relative mx-auto flex min-h-[calc(100vh-10rem)] items-center justify-center px-4 py-16">
      <DynamicHeroBackground />
      <div className="max-w-2xl text-center space-y-8">

        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Belajar itu nggak harus ribet.
        </h1>

        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            Pernah pusing sama rumus matematika yang aneh? Atau bingung algoritma itu sebenarnya apa? Tenang, kamu nggak sendirian.
          </p>
          <p>
            Mathkult ada untuk membongkar semua itu. Kami percaya, konsep rumit bisa dijelaskan dengan cara yang asyik dan mudah dimengerti. Karena hidup udah ribet, masa belajar juga harus ribet? 😉
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/konsep">
              Jelajahi Konsep <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/praktek">Coba Praktek Interaktif</Link>
          </Button>
        </div>

      </div>
    </main>
  )
}
