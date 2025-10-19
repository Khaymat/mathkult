"use client"
import { useMemo, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function Formula() {
  return <code className="text-xs md:text-sm font-mono text-muted-foreground">A = P (1 + r)^n</code>
}

export default function CompoundSandbox() {
  const [P, setP] = useState(1000)
  const [r, setR] = useState(10)
  const [n, setN] = useState(2)

  const A = useMemo(() => P * Math.pow(1 + r / 100, n), [P, r, n])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Bunga Majemuk
          <Formula />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="p">Pokok (P)</Label>
            <Input id="p" type="number" value={P} onChange={(e) => setP(Number(e.target.value || 0))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="r">Bunga % (r)</Label>
            <div className="flex items-center gap-3">
              <Slider value={[r]} min={0} max={50} step={0.5} onValueChange={([v]) => setR(v)} className="flex-1" />
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
            <Label htmlFor="n">Periode (n)</Label>
            <div className="flex items-center gap-3">
              <Slider value={[n]} min={0} max={50} step={1} onValueChange={([v]) => setN(v)} className="flex-1" />
              <Input
                id="n"
                type="number"
                value={n}
                onChange={(e) => setN(Number(e.target.value || 0))}
                className="w-24"
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-4">
          <div className="text-sm text-muted-foreground">Nilai Akhir (A)</div>
          <div className="text-2xl font-semibold">Rp {A.toLocaleString("id-ID")}</div>
        </div>

        <Button
          variant="secondary"
          onClick={() => {
            setP(1000)
            setR(10)
            setN(2)
          }}
        >
          Reset Contoh
        </Button>
      </CardContent>
    </Card>
  )
}
