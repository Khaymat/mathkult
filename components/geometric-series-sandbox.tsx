"use client"
import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function GeometricSeriesSandbox() {
  const [a, setA] = useState(2)
  const [r, setR] = useState(0.5)
  const [n, setN] = useState(4)

  const Sn = useMemo(() => {
    if (Math.abs(1 - r) < 1e-9) return a * n // fallback saat r ~ 1
    return (a * (1 - Math.pow(r, n))) / (1 - r)
  }, [a, r, n])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Deret Geometri
          <code className="text-xs md:text-sm font-mono text-muted-foreground">Sₙ = a (1 - rⁿ) / (1 - r)</code>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="a">Suku awal (a)</Label>
            <Input id="a" type="number" value={a} onChange={(e) => setA(Number(e.target.value || 0))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="r">Rasio (r)</Label>
            <div className="flex items-center gap-3">
              <Slider
                value={[r]}
                min={-0.9}
                max={0.9}
                step={0.01}
                onValueChange={([v]) => setR(Number(v.toFixed(2)))}
                className="flex-1"
              />
              <Input
                id="r"
                type="number"
                value={r}
                onChange={(e) => setR(Number(e.target.value || 0))}
                className="w-24"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="n">Banyak suku (n)</Label>
            <div className="flex items-center gap-3">
              <Slider value={[n]} min={1} max={50} step={1} onValueChange={([v]) => setN(v)} className="flex-1" />
              <Input
                id="n"
                type="number"
                value={n}
                onChange={(e) => setN(Number(e.target.value || 1))}
                className="w-24"
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-4">
          <div className="text-sm text-muted-foreground">Jumlah Sₙ</div>
          <div className="text-2xl font-semibold">{Sn.toLocaleString("id-ID")}</div>
        </div>

        <Button
          variant="secondary"
          onClick={() => {
            setA(2)
            setR(0.5)
            setN(4)
          }}
        >
          Reset Contoh
        </Button>
      </CardContent>
    </Card>
  )
}
