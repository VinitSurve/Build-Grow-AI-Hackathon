"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"

const locations = [
  {
    city: "Mumbai",
    venue: "Tech Hub, Powai",
    date: "March 15-17, 2025",
  },
  {
    city: "Pune",
    venue: "Innovation Center, Hinjewadi",
    date: "March 22-24, 2025",
  },
]

export default function LocationCards() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Location</h2>
          <p className="text-muted-foreground text-lg">Join us in Mumbai or Pune for an unforgettable experience</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="relative overflow-hidden glassmorphism border-primary/30 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
                      {location.city}
                    </h3>
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                    >
                      <MapPin className="w-8 h-8 text-primary" />
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-neon-cyan" />
                      <span className="text-foreground/90">{location.venue}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-neon-violet" />
                      <span className="text-foreground/90">{location.date}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-primary font-semibold flex items-center gap-2 cursor-pointer"
                    >
                      <span>Register for {location.city}</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
