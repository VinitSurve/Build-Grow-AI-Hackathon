"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const developers = [
  {
    name: "Vinit Surve",
    title: "Next JS Dev",
    affiliation: "GDG OC Organizer • GDG Cloud Mumbai Member",
    image: "/Vinit Surve.jpg",
    github: "https://github.com/VinitSurve",
    linkedin: "https://www.linkedin.com/in/surve-vinit/",
    email: "survevinit56@gmail.com",
  },
  {
    name: "Abdullah Shaikh",
    title: "UI UX Designer",
    affiliation: "GDG Cloud Mumbai Member",
    image: "/Abdullah Shaikh.jpeg",
    github: "https://github.com/elite24shaikh",
    linkedin: "https://www.linkedin.com/in/abdullahs24",
    email: "hello.abdullabdev@gmail.com",
  },
]

export default function DevelopersSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Developers</h2>
          <p className="text-muted-foreground text-lg">Meet the talented minds who built this platform</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {developers.map((developer, index) => (
            <motion.div
              key={developer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="glassmorphism border-border/50 hover:border-primary/50 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-32 h-32 rounded-full overflow-hidden shadow-lg shadow-primary/30 ring-2 ring-primary/30"
                >
                  <img
                    src={developer.image}
                    alt={developer.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Name, Title & Affiliation */}
                <div className="space-y-1">
                  <h3 className="text-2xl font-semibold text-foreground">{developer.name}</h3>
                  <p className="text-sm text-neon-cyan font-semibold">{developer.title}</p>
                  <p className="text-xs text-muted-foreground">{developer.affiliation}</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 pt-2">
                  <motion.a
                    href={developer.github}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={developer.linkedin}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={developer.email}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-muted/50 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
