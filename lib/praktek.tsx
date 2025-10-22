import type React from "react"
import { type PraktekData, allPraktekData } from "./praktek-data"
import CompoundSandbox from "@/components/compound-sandbox"
import GeometricSeriesSandbox from "@/components/geometric-series-sandbox"
import FactorsSandbox from "@/components/factors-sandbox"
import PathfindingSandbox from "@/components/path-finding-sandbox"
import AnnuitySandbox from "@/components/annuity-sandbox"
import GcdSandbox from "@/components/gcd-sandbox"
import PiEstimationSandbox from "@/components/pi-estimation-sandbox"

export type Praktek = PraktekData & {
  component: React.ComponentType<any>
  props?: Record<string, any>
}

const componentMap: Record<string, { component: React.ComponentType<any>; props?: Record<string, any> }> = {
  "bunga-majemuk": { component: CompoundSandbox },
  "deret-geometri": { component: GeometricSeriesSandbox },
  "faktor-prima": { component: FactorsSandbox },
  "path-finding": { component: PathfindingSandbox },
  "kalkulator-anuitas": { component: AnnuitySandbox },
  "algoritma-euklides": { component: GcdSandbox },
  "estimasi-pi-monte-carlo": { component: PiEstimationSandbox },
}

const allPraktek: Praktek[] = allPraktekData.map((p) => ({
  ...p,
  ...componentMap[p.slug],
}))

export function getAllPraktek(): Praktek[] {
  return allPraktek
}

export function getPraktekBySlug(slug: string): Praktek | undefined {
  return allPraktek.find((p) => p.slug === slug)
}
