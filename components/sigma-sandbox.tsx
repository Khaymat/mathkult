"use client"

import { useMemo, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

type Props = { mode?: "linear" | "square" } // linear: ∑k, square: ∑k^2

export default function SigmaSandbox({ mode = "linear" }: Props) {
  const [n, setN] = useState(10)
  const arr = useMemo(() => Array.from({ length: n }, (_, i) => i + 1), [n])
  const sum = useMemo(() => {
    if (mode === "square") return (n * (n + 1) * (2 * n + 1)) / 6
    return (n * (n + 1)) / 2
  }, [n, mode])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {mode === "square" ? "Sigma Kuadrat" : "Sigma"}
          <code className="text-xs font-mono text-muted-foreground">{mode === "square" ? "∑ k^2" : "∑ k"}</code>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>n</Label>
          <div className="flex items-center gap-3">
            <Slider value={[n]} min={1} max={100} step={1} onValueChange={([v]) => setN(v)} className="flex-1" />
            <span className="w-10 text-right tabular-nums">{n}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 rounded-md border border-dashed p-3 text-sm">
          {arr.map((v) => (
            <span key={v} className="rounded border px-2 py-0.5">
              {mode === "square" ? v * v : v}
            </span>
          ))}
        </div>

        <div className="rounded bg-muted p-3">
          <div className="text-sm text-muted-foreground">Rumus</div>
          <div className="text-sm">
            {mode === "square"
              ? "$$\\sum_{k=1}^{n} k^2 = \\\\frac{n(n+1)(2n+1)}{6}$$"
              : "$$\\sum_{k=1}^{n} k = \\\\frac{n(n+1)}{2}$$"
          </div>
          <div className="mt-2 text-2xl font-semibold">{sum}</div>
        </div>
      </CardContent>
    </Card>
  )
}
