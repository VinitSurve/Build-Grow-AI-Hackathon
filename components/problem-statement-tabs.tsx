"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const problemStatements = [
  {
    category: "Industry Tracks",
    problems: [
      {
        title: "🏥 Health Tech: Smarter healthcare and diagnostics",
        description: "Build AI solutions to improve diagnostics, patient monitoring, and healthcare workflows.",
        difficulty: "All Levels",
      },
      {
        title: "💰 FinTech: Financial automation and fraud prevention",
        description: "Create tools for payment automation, risk analysis, or real-time fraud detection.",
        difficulty: "All Levels",
      },
      {
        title: "🔐 Cyber Security: AI-powered protection and threat detection",
        description: "Design systems that leverage AI to detect, prevent, and respond to security threats.",
        difficulty: "All Levels",
      },
      {
        title: "📚 Edu Tech: Learning accessibility and skill-building platforms",
        description: "Build platforms that personalize learning, assessment, and skill development at scale.",
        difficulty: "All Levels",
      },
      {
        title: "🌾 Agri Tech: Smart farming and agricultural innovations",
        description: "Use AI and IoT to optimize crop yields, resource usage, and supply-chain visibility.",
        difficulty: "All Levels",
      },
    ],
  },
]

export default function ProblemStatementTabs() {
  const [activeTab, setActiveTab] = useState(0)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Advanced":
        return "bg-red-500/20 text-red-400 border-red-500/50"
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
      default:
        return "bg-green-500/20 text-green-400 border-green-500/50"
    }
  }

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Problem Statements</h2>
          <p className="text-muted-foreground text-lg">Choose your track and start building innovative solutions</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {problemStatements.map((category, index) => (
            <motion.button
              key={category.category}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              {category.category}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {problemStatements[activeTab].problems.map((problem, index) => (
              <Card
                key={index}
                className="glassmorphism border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {problem.title}
                    </h3>
                    <Badge className={getDifficultyColor(problem.difficulty)}>{problem.difficulty}</Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
