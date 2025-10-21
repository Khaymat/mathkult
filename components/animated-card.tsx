"use client"

import { motion } from "framer-motion"

export default function AnimatedCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}
