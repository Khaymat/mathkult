"use client"

import { useTheme } from "next-themes"
import { PulsingBorder } from "@paper-design/shaders-react"
import { useEffect, useState } from "react"

export default function HeroBackground() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <PulsingBorder
        key={currentTheme}
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