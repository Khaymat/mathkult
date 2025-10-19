"use client"

import type React from "react"
import { useEffect, useRef } from "react"

type Props = {
  children: React.ReactNode
}

function loadScriptOnce(id: string, src: string) {
  return new Promise<void>((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve()
      return
    }
    const s = document.createElement("script")
    s.id = id
    s.src = src
    s.defer = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.head.appendChild(s)
  })
}

function loadCssOnce(id: string, href: string) {
  if (document.getElementById(id)) return
  const l = document.createElement("link")
  l.id = id
  l.rel = "stylesheet"
  l.href = href
  document.head.appendChild(l)
}

async function ensureKatex() {
  const anyWin = window as any
  if (typeof anyWin.renderMathInElement === "function") return
  // ensure CSS
  loadCssOnce("katex-css", "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css")
  // load JS sequentially
  await loadScriptOnce("katex-js", "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js")
  await loadScriptOnce("katex-auto-js", "https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/auto-render.min.js")
}

export default function MathAutoRender({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const run = async () => {
      const el = ref.current
      if (!el) return
      await ensureKatex()
      const anyWin = window as any
      if (typeof anyWin.renderMathInElement === "function") {
        anyWin.renderMathInElement(el, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
          ],
          throwOnError: false,
        })
      }
    }
    run().catch(() => {
      // optional: swallow render errors in preview
    })
  }, [children])

  return <div ref={ref}>{children}</div>
}
