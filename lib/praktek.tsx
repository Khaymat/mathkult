import type React from "react"
import CompoundSandbox from "@/components/compound-sandbox"
import GeometricSeriesSandbox from "@/components/geometric-series-sandbox"
import SigmaSandbox from "@/components/sigma-sandbox"
import FactorsSandbox from "@/components/factors-sandbox"
import PathfindingSandbox from "@/components/path-finding-sandbox"
import AnnuitySandbox from "@/components/annuity-sandbox"
import GcdSandbox from "@/components/gcd-sandbox"
import PiEstimationSandbox from "@/components/pi-estimation-sandbox"

export type Praktek = {
  slug: string
  title: string
  desc: string
  category: "Finansial" | "Matematika" | "Algoritma"
  component: React.ReactNode
}

const allPraktek: Praktek[] = [
  {
    slug: "bunga-majemuk",
    title: "Bunga Majemuk",
    desc: "Simulasikan pertumbuhan investasi dengan bunga majemuk.",
    category: "Finansial",
    component: <CompoundSandbox />,
  },
  {
    slug: "deret-geometri",
    title: "Deret Geometri",
    desc: "Hitung jumlah suku dari sebuah deret geometri.",
    category: "Matematika",
    component: <GeometricSeriesSandbox />,
  },
  {
    slug: "sigma",
    title: "Notasi Sigma",
    desc: "Hitung penjumlahan notasi sigma dasar.",
    category: "Matematika",
    component: <SigmaSandbox mode="linear" />,
  },
  {
    slug: "sigma-kuadrat",
    title: "Notasi Sigma Kuadrat",
    desc: "Hitung penjumlahan notasi sigma untuk bilangan kuadrat.",
    category: "Matematika",
    component: <SigmaSandbox mode="square" />,
  },
  {
    slug: "faktor-prima",
    title: "Faktor Prima",
    desc: "Temukan faktor prima dari sebuah bilangan bulat.",
    category: "Algoritma",
    component: <FactorsSandbox />,
  },
  {
    slug: "path-finding",
    title: "Path Finding (A*)",
    desc: "Visualisasi algoritma A* untuk menemukan jalur terpendek.",
    category: "Algoritma",
    component: <PathfindingSandbox />,
  },
  {
    slug: "kalkulator-anuitas",
    title: "Kalkulator Anuitas",
    desc: "Hitung pembayaran bulanan untuk pinjaman atau hipotek.",
    category: "Finansial",
    component: <AnnuitySandbox />,
  },
  {
    slug: "algoritma-euklides",
    title: "Visualisasi FPB Euklides",
    desc: "Lihat langkah-langkah untuk menemukan Faktor Persekutuan Terbesar.",
    category: "Algoritma",
    component: <GcdSandbox />,
  },
  {
    slug: "estimasi-pi-monte-carlo",
    title: "Estimasi Pi Monte Carlo",
    desc: "Simulasikan nilai Pi dengan metode Monte Carlo.",
    category: "Matematika",
    component: <PiEstimationSandbox />,
  },
]

export function getAllPraktek(): Praktek[] {
  return allPraktek
}

export function getPraktekBySlug(slug: string): Praktek | undefined {
  return allPraktek.find((p) => p.slug === slug)
}
