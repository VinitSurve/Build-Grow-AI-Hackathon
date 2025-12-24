"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TypewriterCode } from "@/components/typewriter-code"
import { FloatingIllustration } from "@/components/floating-illustration"

export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Code Block */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <TypewriterCode />
          </motion.div>

          {/* Right: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-block"
              >
                <span className="text-sm font-mono text-neon-cyan tracking-wider uppercase">
                  TechVerse Hackathon 2025
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-balance"
              >
                Build the Future
                <br />
                <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-violet bg-clip-text text-transparent">
                  with AI & Cloud
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty"
              >
                Join India's premier developer hackathon. Build innovative solutions with Google technologies, connect
                with mentors, and compete for amazing prizes.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/60 hover:scale-105"
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 bg-transparent"
              >
                View Problem Statements
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">500+</span>
                <span className="text-sm text-muted-foreground">Participants</span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">₹5L</span>
                <span className="text-sm text-muted-foreground">Prize Pool</span>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-foreground">48hrs</span>
                <span className="text-sm text-muted-foreground">Innovation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Illustration */}
      <FloatingIllustration />
    </section>
  )
}
