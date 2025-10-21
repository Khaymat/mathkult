"use client"

import { PulsingBorder } from "@paper-design/shaders-react"

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <PulsingBorder
        className="h-full w-full"
        stroke="hsl(var(--foreground) / 0.1)"
        fill="hsl(var(--background))"
        strokeWidth={2}
        density={0.9}
        speed="slow"
        mode="adjacent"
      />
    </div>
  )
}
