"use client"

import dynamic from 'next/dynamic'

const HeroBackground = dynamic(() => import('@/components/hero-background'), {
  ssr: false,
})

export default HeroBackground
