"use client"

import { useMemo, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

function factorize(n: number) {
  const res: number[] = []
  let x = Math.max(2, Math.floor(n))
  for (let p = 2; p * p <= x; p++) {
    while (x % p === 0) {
      res.push(p)
      x = x / p
    }
  }
  if (x > 1) res.push(x)
  return res
}

export default function FactorsSandbox() {
  const [val, setVal] = useState(360)
  const primes = useMemo(() => factorize(Math.min(1_000_000, val)), [val])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Faktor Prima
          <code className="text-xs font-mono text-muted-foreground">n → × p</code>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground" htmlFor="n">
            Angka
          </label>
          <Input
            id="n"
            type="number"
            value={val}
            onChange={(e) => setVal(Number(e.target.value || 0))}
            className="w-40"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {primes.length ? (
            primes.map((p, i) => (
              <span key={`${p}-${i}`} className="rounded border px-2 py-0.5 font-mono tabular-nums">
                {p}
              </span>
            ))
          ) : (
            <span className="text-muted-foreground">—</span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
