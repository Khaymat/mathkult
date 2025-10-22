"use client"

import { useTheme } from "next-themes"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import ClientOnly from "@/components/client-only"

const PulsingBorder = dynamic(
  () => import("@paper-design/shaders-react").then((mod) => mod.PulsingBorder),
  { ssr: false },
)

export default function HomePage() {
  const { theme, resolvedTheme } = useTheme()
  const currentTheme = theme === "system" ? resolvedTheme : theme

  return (
    <ClientOnly>
      <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <PulsingBorder
            key={currentTheme}
            className="h-full w-full"
            stroke="hsl(var(--foreground) / 0.1)"
            fill="transparent"
            strokeWidth={2}
            density={0.9}
            speed="slow"
            mode="adjacent"
          />
        </div>
        <div className="z-10 flex flex-col items-center text-center">
          <h1 className="font-heading text-6xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl">
            Mathkult
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Menjelajahi Dunia Matematika, Algoritma, dan Logika Keuangan dengan
            Cara yang Menarik.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
      </main>
    </ClientOnly>
  )
}
