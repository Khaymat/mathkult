"use client"

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-muted/10 blur-3xl animate-pulse delay-2000" />
    </div>
  )
}
