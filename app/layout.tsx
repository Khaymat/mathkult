import type React from "react"
import type { Metadata } from "next"
import { architectsDaughter, inter } from "@/lib/fonts"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SiteNavbar from "@/components/site-navbar"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import ClientOnly from "@/components/client-only"

export const metadata: Metadata = {
  title: {
    default: "Mathkult",
    template: "%s | Mathkult",
  },
  description: "Membongkar matematika, algoritma & logika yang bikin otak nggak nge-lag. Karena hidup udah ribet, masa belajar juga harus ribet? 😉",
  keywords: ["matematika", "algoritma", "logika", "finansial", "pemrograman", "belajar"],
  authors: [{ name: "Mathkult" }],
  creator: "Mathkult",
  generator: "Mathkult",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${architectsDaughter.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" integrity="sha384-sBpkE+ul98NE/uRTF3O/D2QBCFwqiYekOIqDlb/GtuoDBN2L9wV6Qh2quS/Q2/rO" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<div>Loading...</div>}>
            <ClientOnly>
              <SiteNavbar />
            </ClientOnly>
            <main className="min-h-screen">{children}</main>
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}