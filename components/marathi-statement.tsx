"use client"

import { motion } from "framer-motion"

export default function MarathiStatement() {
  return (
    <section className="relative z-10 py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Community Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16"
        >
          {/* GDG Cloud Mumbai Logo */}
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl shadow-primary/30 ring-2 ring-primary/30 bg-white/5 backdrop-blur-sm p-2">
              <img
                src="/GDG Cloud Mumbai Logo.jpg"
                alt="GDG Cloud Mumbai Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm md:text-base font-semibold text-neon-cyan">GDG Cloud Mumbai</span>
          </motion.div>

          {/* X Symbol */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-violet bg-clip-text text-transparent"
          >
            ✕
          </motion.div>

          {/* GDG Pune Logo */}
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-xl shadow-secondary/30 ring-2 ring-secondary/30 bg-white/5 backdrop-blur-sm p-2">
              <img
                src="/GDG Pune Logo.png"
                alt="GDG Pune Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm md:text-base font-semibold text-neon-violet">GDG Pune</span>
          </motion.div>
        </motion.div>

        {/* Marathi Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <motion.div
            animate={{
              textShadow: [
                "0 0 20px rgba(99, 102, 241, 0.5)",
                "0 0 40px rgba(99, 102, 241, 0.8)",
                "0 0 20px rgba(99, 102, 241, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="text-3xl md:text-5xl font-bold text-foreground leading-relaxed"
          >
            तंत्रज्ञान, कल्पना आणि भविष्य घडवणारा एक अनुभव.
          </motion.div>
          <p className="text-lg text-muted-foreground italic">
            Technology, imagination, and an experience shaping the future.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
