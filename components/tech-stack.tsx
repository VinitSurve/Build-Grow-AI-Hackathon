"use client"

import { motion } from "framer-motion"

const technologies = [
  { name: "Google Cloud", icon: "☁️" },
  { name: "Firebase", icon: "🔥" },
  { name: "Gemini AI", icon: "✨" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Flutter", icon: "📱" },
  { name: "Vertex AI", icon: "🤖" },
]

export default function TechStack() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powered By Google</h2>
          <p className="text-muted-foreground text-lg">Build with world-class developer tools and platforms</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glassmorphism border-border/50 hover:border-primary/50 rounded-xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
            >
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                className="text-5xl grayscale group-hover:grayscale-0 transition-all"
              >
                {tech.icon}
              </motion.span>
              <span className="text-sm font-semibold text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
