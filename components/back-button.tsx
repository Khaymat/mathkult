"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground mb-4"
    >
      <ArrowLeft className="h-4 w-4" />
      <span>kembali</span>
    </button>
  )
}
