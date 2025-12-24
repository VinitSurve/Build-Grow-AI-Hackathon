"use client"

import { motion } from "framer-motion"

export default function MarathiStatement() {
  return (
    <section className="relative z-10 py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
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
