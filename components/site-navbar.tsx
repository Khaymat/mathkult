"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { href: "/", label: "Home" },
  { href: "/konsep", label: "Konsep" },
  { href: "/praktek", label: "Praktek" },
  { href: "/tentang", label: "Tentang" },
]

export default function SiteNavbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50 dark:bg-black dark:border-zinc-800">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/mathkult-logo.png"
            alt="Logo Mathkult"
            width={28}
            height={28}
            className="rounded-full aspect-square object-cover"
          />
          <span className="font-semibold">Mathkult</span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-3 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "px-3 py-1.5 rounded-md text-sm transition-colors",
                  pathname === l.href
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
