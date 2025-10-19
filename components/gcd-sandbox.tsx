"use client"

import { useMemo, useState, Fragment } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function gcdSteps(a0: number, b0: number) {
  const steps: Array<{ a: number; b: number; r: number }> = []
  let a = Math.abs(Math.floor(a0))
  let b = Math.abs(Math.floor(b0))
  if (a < b) [a, b] = [b, a]
  while (b !== 0) {
    const r = a % b
    steps.push({ a, b, r })
    a = b
    b = r
  }
  return { gcd: a, steps }
}

export default function GcdSandbox() {
  const [x, setX] = useState(252)
  const [y, setY] = useState(198)
  const result = useMemo(() => gcdSteps(x, y), [x, y])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          GCD — Euclid
          <code className="text-xs font-mono text-muted-foreground">gcd(a, b)</code>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="a">a</Label>
            <Input id="a" type="number" value={x} onChange={(e) => setX(Number(e.target.value || 0))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="b">b</Label>
            <Input id="b" type="number" value={y} onChange={(e) => setY(Number(e.target.value || 0))} />
          </div>
        </div>
        <div className="rounded border p-3 text-sm">
          <div className="mb-2 text-muted-foreground">Langkah</div>
          <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
            <div>a</div>
            <div>b</div>
            <div>r</div>
            {result.steps.map((s, i) => (
              <Fragment key={i}>
                <div>{s.a}</div>
                <div>{s.b}</div>
                <div>{s.r}</div>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="rounded bg-muted p-3">
          <div className="text-sm text-muted-foreground">Hasil</div>
          <div className="text-2xl font-semibold">{result.gcd}</div>
        </div>
      </CardContent>
    </Card>
  )
}
