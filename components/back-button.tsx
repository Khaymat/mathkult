import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

type BackButtonProps = {
  href: string
  text: string
}

export default function BackButton({ href, text }: BackButtonProps) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
      <ArrowLeft className="h-4 w-4" />
      <span>{text}</span>
    </Link>
  )
}
