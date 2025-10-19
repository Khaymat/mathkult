"use client"

import { useMemo, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function AnnuitySandbox() {
  const [P, setP] = useState(10000)
  const [r, setR] = useState(10) // %
  const [n, setN] = useState(12)

  const payment = useMemo(() => {
    const i = r / 100
    if (i === 0) return P / Math.max(1, n)
    return (P * i) / (1 - Math.pow(1 + i, -Math.max(1, n)))
  }, [P, r, n])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Anuitas
          <code className="text-xs font-mono text-muted-foreground">PMT = P·i / (1 - (1+i)^-n)</code>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="p">Pokok (P)</Label>
            <Input id="p" type="number" value={P} onChange={(e) => setP(Number(e.target.value || 0))} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="r">Bunga % (i)</Label>
            <div className="flex items-center gap-3">
              <Slider value={[r]} min={0} max={100} step={0.25} onValueChange={([v]) => setR(v)} className="flex-1" />
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
              <Slider value={[n]} min={1} max={360} step={1} onValueChange={([v]) => setN(v)} className="flex-1" />
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
        <div className="rounded bg-muted p-4">
          <div className="text-sm text-muted-foreground">Pembayaran per periode</div>
          <div className="text-2xl font-semibold">Rp {payment.toFixed(2).toLocaleString()}</div>
        </div>
        <Button
          variant="secondary"
          onClick={() => {
            setP(10000)
            setR(10)
            setN(12)
          }}
        >
          Reset Contoh
        </Button>
      </CardContent>
    </Card>
  )
}
