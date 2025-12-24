"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

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
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const speed = 0.5 // Adjust speed here

    const scroll = () => {
      scrollPosition += speed
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition

        // Reset scroll position when reaching the middle (for seamless loop)
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Duplicate events for seamless infinite scroll
  const duplicatedEvents = [...pastEvents, ...pastEvents]

  return (
    <section className="relative z-10 py-20 px-4 overflow-hidden">
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

        {/* Infinite Slider */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div 
            ref={scrollRef}
            className="overflow-x-hidden overflow-y-hidden scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6">
              {duplicatedEvents.map((event, index) => (
                <motion.div
                  key={`${event.title}-${index}`}
                  className="flex-shrink-0 w-[350px] md:w-[400px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="overflow-hidden glassmorphism border-border/50 hover:border-primary/50 transition-all duration-300 rounded-xl group hover:shadow-xl hover:shadow-primary/10 h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
