"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">About Build & Grow AI Hackathon</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                This initiative is brought to you by <span className="text-neon-cyan font-semibold">GDG Cloud Mumbai</span> X <span className="text-neon-cyan font-semibold">GDG Cloud Pune</span>. Build & Grow AI Hackathon is more than just a hackathon—it's a movement to empower developers across India to build
                solutions that matter. We bring together the brightest minds in technology to solve real-world problems
                using cutting-edge tools.
              </p>
              <p>
                Our mission is to foster innovation and collaboration within the developer community, providing a
                platform where ideas transform into impactful solutions. With support from Google and industry leaders,
                we offer unparalleled learning opportunities and resources.
              </p>
              <p>
                Whether you're a seasoned developer or just starting your journey, Build & Grow AI Hackathon welcomes you to be part of
                something extraordinary. Join us in shaping the future of technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl"
              />
              <div className="relative glassmorphism rounded-2xl p-8 border-primary/30">
                <img
                  src="/abstract-futuristic-tech-brain-ai-cloud-innovation.jpg"
                  alt="About Build & Grow AI Hackathon"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
