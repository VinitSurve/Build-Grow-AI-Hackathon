"use client"

import { motion } from "framer-motion"
import { Calendar, FileText, Code, Trophy, Award } from "lucide-react"

const timelineEvents = [
  {
    icon: Calendar,
    title: "Registrations Open",
    date: "January 15, 2025",
    description: "Sign up and form your teams",
  },
  {
    icon: FileText,
    title: "Problem Statement Reveal",
    date: "February 1, 2025",
    description: "All tracks announced with details",
  },
  {
    icon: Code,
    title: "Hackathon Day",
    date: "March 15-17, 2025",
    description: "48 hours of intense building",
  },
  {
    icon: Trophy,
    title: "Demo Day",
    date: "March 17, 2025",
    description: "Present your solutions to judges",
  },
  {
    icon: Award,
    title: "Results & Awards",
    date: "March 18, 2025",
    description: "Winners announced and prizes distributed",
  },
]

export default function Timeline() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Event Timeline</h2>
          <p className="text-muted-foreground text-lg">Mark your calendars for these important dates</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex gap-8 items-start"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/50 shrink-0"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 glassmorphism border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h3 className="text-2xl font-semibold text-foreground">{event.title}</h3>
                      <span className="text-sm text-neon-cyan font-mono">{event.date}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
