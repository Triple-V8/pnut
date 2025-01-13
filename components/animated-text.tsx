"use client"

import { motion } from "framer-motion"

export function AnimatedText({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
    >
      {children}
    </motion.span>
  )
}

