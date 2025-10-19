import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SiteNavbar from "@/components/site-navbar"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Mathkult",
  description: "Membongkar matematika, algoritma & finansial yang bikin otak nggak nge-lag.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" />
      </head>
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <SiteNavbar />
          <main className="min-h-screen">{children}</main>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
