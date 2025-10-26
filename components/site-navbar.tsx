"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/", label: "Home" },
  { href: "/konsep", label: "Konsep" },
  { href: "/praktek", label: "Praktek" },
  { href: "/tentang", label: "Tentang" },
]

export default function SiteNavbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
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
            {/* Desktop Navigation */}
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
            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground"
              >
                <Menu />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 z-40 w-full bg-background/95 backdrop-blur-sm"
          >
            <div className="container mx-auto flex flex-col px-4 pt-20 pb-8">
              <nav className="flex flex-col items-center gap-6">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-semibold transition-colors",
                      pathname === l.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-foreground"
            >
              <X />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
