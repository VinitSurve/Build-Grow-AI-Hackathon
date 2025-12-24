"use client"

import { motion } from "framer-motion"

const capabilities = [
  {
    name: "AI Applications",
    description: "Production-ready solutions",
    icon: "/gemini-start-building-card-apps.svg",
  },
  {
    name: "Explore Models",
    description: "Diverse model ecosystem",
    icon: "/gemini-start-building-card-explore.svg",
  },
  {
    name: "Integrate AI",
    description: "Seamless API integration",
    icon: "/gemini-start-building-card-integrate.svg",
  },
  {
    name: "On-device AI",
    description: "Edge computing capabilities",
    icon: "/gemini-start-building-card-nano.svg",
  },
  {
    name: "Secure AI Systems",
    description: "Enterprise-grade security",
    icon: "/gemini-start-building-card-security.svg",
  },
  {
    name: "Open Models (Gemma)",
    description: "Open-source AI foundation",
    icon: "/gemini-start-building-gemma.png",
  },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Build with Google AI</h2>
          <p className="text-muted-foreground text-lg">
            Core capabilities and technologies powering our community and hackathons
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="glassmorphism border border-border/50 hover:border-neon-cyan/30 rounded-xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 h-full hover:shadow-lg hover:shadow-neon-cyan/5">
                <div className="w-16 h-16 flex items-center justify-center relative">
                  <img
                    src={capability.icon}
                    alt={capability.name}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: "grayscale(100%) brightness(0.8) sepia(1) hue-rotate(200deg) saturate(5)" }}
                  />
                </div>
                <div className="text-center space-y-1">
                  <h3 className="text-sm font-semibold text-foreground/90 group-hover:text-neon-cyan transition-colors">
                    {capability.name}
                  </h3>
                  <p className="text-xs text-muted-foreground/60 leading-tight">
                    {capability.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
