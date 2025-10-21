import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const architectsDaughter = localFont({
  src: '../public/fonts/ArchitectsDaughter-Regular.ttf',
  display: 'swap',
  variable: '--font-architects-daughter',
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
