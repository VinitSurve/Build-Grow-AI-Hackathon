"use client"

import { motion } from "framer-motion"

export function FloatingIllustration() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] hidden xl:block pointer-events-none opacity-30">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative w-full h-full"
      >
        {/* Abstract shapes */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-neon-blue to-transparent blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-neon-cyan to-transparent blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          className="absolute bottom-1/4 left-1/3 w-36 h-36 rounded-full bg-gradient-to-br from-neon-violet to-transparent blur-2xl"
        />
      </motion.div>
    </div>
  )
}
