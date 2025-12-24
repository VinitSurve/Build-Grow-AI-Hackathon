"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

const gdgCloudMumbai = [
  {
    name: "Abhishek Sharma",
    role: "Lead Cloud Engineer",
    company: "",
    image: "/abhishek_sharma_RQClIHO.webp",
  },
  {
    name: "Niharika Dhanik",
    role: "Cloud Engineer",
    company: "",
    image: "/niharika_dhanik_ivuUui4.webp",
  },
  {
    name: "Rushabh Mahale",
    role: "Cloud Engineer",
    company: "Searce inc",
    image: "/rushabh_mahale_N4nLK69.webp",
  },
  {
    name: "Nikunj Shah",
    role: "Sr. AVP- India & Mauritius",
    company: "Winjit Tech",
    image: "/nikunj_shah_3SB4kkE.webp",
  },
]

const gdgPune = [
  {
    name: "Mahaveer Muttha",
    role: "GDG Organizer",
    company: "Birdvision consulting Pvt Ltd",
    image: "/mahaveer_muttha_C00umYC_imgupscaler.ai_General_16K.jpg",
  },
  {
    name: "Pranoti Nandurkar",
    role: "WTM Ambassador",
    company: "Tata consultancy services",
    image: "/pranoti_nandurkar_imgupscaler.ai_General_16K.jpg",
  },
  {
    name: "Swapnil Jathar",
    role: "GDG Organizer",
    company: "Mphasis",
    image: "/swapnil_jathar_imgupscaler.ai_V1(Fast)_2K.png",
  },
  {
    name: "Namrata More",
    role: "WTM ambassador",
    company: "OneCard",
    image: "/namrata_more_TjJKQM8_imgupscaler.ai_V1(Fast)_2K.png",
  },
]

export default function OrganizersSection() {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
          <p className="text-muted-foreground text-lg">Meet the organizers behind this amazing hackathon</p>
        </motion.div>

        {/* GDG Cloud Mumbai */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-8"
          >
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              GDG Cloud Mumbai Organizers
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gdgCloudMumbai.map((organizer, index) => (
              <motion.div
                key={organizer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glassmorphism border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg shadow-primary/30 ring-2 ring-primary/30">
                    <img
                      src={organizer.image}
                      alt={organizer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h4 className="text-xl font-semibold text-foreground">{organizer.name}</h4>

                  {/* Role */}
                  <p className="text-sm text-neon-cyan font-medium">{organizer.role}</p>

                  {/* Company */}
                  {organizer.company && (
                    <p className="text-sm text-muted-foreground">{organizer.company}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GDG Pune */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-8"
          >
            <span className="bg-gradient-to-r from-neon-violet to-neon-cyan bg-clip-text text-transparent">
              GDG Pune Organizers
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gdgPune.map((organizer, index) => (
              <motion.div
                key={organizer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glassmorphism border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg shadow-secondary/30 ring-2 ring-secondary/30">
                    <img
                      src={organizer.image}
                      alt={organizer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h4 className="text-xl font-semibold text-foreground">{organizer.name}</h4>

                  {/* Role */}
                  <p className="text-sm text-neon-cyan font-medium">{organizer.role}</p>

                  {/* Company */}
                  {organizer.company && (
                    <p className="text-sm text-muted-foreground">{organizer.company}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
