"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const codeSnippet = `import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const result = await model.generateContent({
  contents: [{
    role: "user",
    parts: [{ text: "Build the future" }]
  }]
});

console.log(result.response.text());`

export function TypewriterCode() {
  const [displayedCode, setDisplayedCode] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode((prev) => prev + codeSnippet[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 30)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-xl overflow-hidden glassmorphism border border-primary/30 shadow-2xl shadow-primary/20"
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/20">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-muted-foreground ml-2 font-mono">gemini-ai.ts</span>
      </div>

      {/* Code Content */}
      <div className="p-6 font-mono text-sm overflow-x-hidden">
        <pre className="text-foreground leading-relaxed whitespace-pre-wrap break-words">
          <code>
            {displayedCode.split("\n").map((line, i) => (
              <div key={i} className="min-h-[1.5rem]">
                {line.includes("import") && (
                  <span>
                    <span className="text-neon-violet">import</span>
                    <span className="text-foreground"> {"{"} </span>
                    <span className="text-neon-cyan">{line.match(/\{([^}]+)\}/)?.[1]}</span>
                    <span className="text-foreground"> {"}"} </span>
                    <span className="text-neon-violet">from</span>
                    <span className="text-green-400">{line.match(/from\s+"([^"]+)"/)?.[0].replace("from ", "")}</span>
                    <span className="text-muted-foreground">;</span>
                  </span>
                )}
                {line.includes("const") && !line.includes("import") && (
                  <span>
                    <span className="text-neon-violet">const</span>
                    <span className="text-foreground">{line.replace("const", "")}</span>
                  </span>
                )}
                {line.includes("await") && (
                  <span>
                    <span className="text-neon-violet">await</span>
                    <span className="text-foreground">{line.replace("await", "")}</span>
                  </span>
                )}
                {!line.includes("import") && !line.includes("const") && !line.includes("await") && (
                  <span className="text-foreground">{line}</span>
                )}
              </div>
            ))}
          </code>
        </pre>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          className="inline-block w-2 h-4 bg-neon-cyan ml-1"
        />
      </div>
    </motion.div>
  )
}
