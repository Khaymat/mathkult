export type PraktekData = {
  slug: string
  title: string
  desc: string
  category: "Finansial" | "Matematika" | "Algoritma"
}

export const allPraktekData: PraktekData[] = [
  {
    slug: "bunga-majemuk",
    title: "Bunga Majemuk",
    desc: "Simulasikan pertumbuhan investasi dengan bunga majemuk.",
    category: "Finansial",
  },
  {
    slug: "deret-geometri",
    title: "Deret Geometri",
    desc: "Hitung jumlah suku dari sebuah deret geometri.",
    category: "Matematika",
  },
  {
    slug: "faktor-prima",
    title: "Faktor Prima",
    desc: "Temukan faktor prima dari sebuah bilangan bulat.",
    category: "Algoritma",
  },
  {
    slug: "path-finding",
    title: "Path Finding (A*)",
    desc: "Visualisasi algoritma A* untuk menemukan jalur terpendek.",
    category: "Algoritma",
  },
  {
    slug: "kalkulator-anuitas",
    title: "Kalkulator Anuitas",
    desc: "Hitung pembayaran bulanan untuk pinjaman atau hipotek.",
    category: "Finansial",
  },
  {
    slug: "algoritma-euklides",
    title: "Visualisasi FPB Euklides",
    desc: "Lihat langkah-langkah untuk menemukan Faktor Persekutuan Terbesar.",
    category: "Algoritma",
  },
  {
    slug: "estimasi-pi-monte-carlo",
    title: "Estimasi Pi Monte Carlo",
    desc: "Simulasikan nilai Pi dengan metode Monte Carlo.",
    category: "Matematika",
  },
]

export function getAllPraktekData(): PraktekData[] {
  return allPraktekData
}

export function getPraktekDataBySlug(slug: string): PraktekData | undefined {
  return allPraktekData.find((p) => p.slug === slug)
}
