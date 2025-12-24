"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const pastEvents = [
  {
    title: "TechVerse 2024",
    description: "Over 400 developers participated",
    image: "/hackathon-event-developers-working.jpg",
  },
  {
    title: "Workshop Series",
    description: "Monthly sessions on AI and Cloud",
    image: "/tech-workshop-training-session.jpg",
  },
  {
    title: "Community Meetups",
    description: "Regular networking events",
    image: "/developer-meetup-networking.jpg",
  },
  {
    title: "Demo Day Highlights",
    description: "Innovative projects showcased",
    image: "/tech-presentation-demo-day.jpg",
  },
]

export default function PastMedia() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground text-lg">Highlights from our previous events and community activities</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="overflow-hidden glassmorphism border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
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
