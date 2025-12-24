"use client"

import { motion } from "framer-motion"
import { Brain, Cloud, Lightbulb, Users, Network } from "lucide-react"
import { Card } from "@/components/ui/card"

const highlights = [
  {
    icon: Brain,
    title: "AI & ML",
    description: "Build intelligent applications with cutting-edge AI technologies",
  },
  {
    icon: Cloud,
    title: "Web & Cloud",
    description: "Create scalable solutions with modern cloud infrastructure",
  },
  {
    icon: Lightbulb,
    title: "Open Innovation",
    description: "Explore limitless possibilities with your creative ideas",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Learn from industry experts and Google engineers",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Connect with fellow developers and tech enthusiasts",
  },
]

export default function HighlightsGrid() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Participate?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Unlock opportunities to learn, build, and grow with the best in the industry
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full glassmorphism border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/10">
                  <div className="p-6 space-y-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all"
                    >
                      <Icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground">{highlight.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
