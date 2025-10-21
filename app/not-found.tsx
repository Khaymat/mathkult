import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
      <h1 className="text-8xl font-bold text-primary animate-pulse">404</h1>
      <p className="mt-4 text-2xl font-semibold text-foreground">Halaman Tidak Ditemukan</p>
      <p className="mt-2 text-muted-foreground">
        Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Kembali ke Beranda</Link>
      </Button>
    </div>
  )
}
