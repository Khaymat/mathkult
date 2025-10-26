"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

const PulsingBorder = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.PulsingBorder),
  { ssr: false },
)

export default function HomePage() {
  return (
    <main className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <PulsingBorder
          className="h-full w-full"
          stroke="hsl(var(--foreground) / 0.1)"
          fill="hsl(var(--background))"
          strokeWidth={2}
          density={0.9}
          speed="slow"
          mode="adjacent"
        />
      </div>
      <div className="container z-10 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col items-start text-left">
          <h1 className="font-heading text-6xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl">
            Mathkult
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Menjelajahi Dunia Matematika, Algoritma, dan Logika Keuangan dengan
            Cara yang Menarik.
          </p>
          <div className="mt-8 flex flex-wrap justify-start gap-4">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/konsep">
                Mulai Belajar <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="font-semibold"
            >
              <Link href="/praktek">
                <Sparkles className="mr-2 h-5 w-5" /> Lihat Proyek
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/mathkult-logo.png"
            alt="Logo Mathkult Besar"
            width={300}
            height={300}
            className="rounded-full aspect-square object-cover opacity-80"
          />
        </div>
      </div>
    </main>
  )
}
