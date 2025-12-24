"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const lines: Array<{
      x: number
      y: number
      vx: number
      vy: number
      length: number
      angle: number
    }> = []

    for (let i = 0; i < 50; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        length: Math.random() * 150 + 50,
        angle: Math.random() * Math.PI * 2,
      })
    }

    function animate() {
      if (!canvas || !ctx) return
      ctx.fillStyle = "rgba(18, 18, 18, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      lines.forEach((line) => {
        line.x += line.vx
        line.y += line.vy
        line.angle += 0.001

        if (line.x < 0 || line.x > canvas.width) line.vx *= -1
        if (line.y < 0 || line.y > canvas.height) line.vy *= -1

        const gradient = ctx.createLinearGradient(
          line.x,
          line.y,
          line.x + Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length,
        )
        gradient.addColorStop(0, "rgba(99, 102, 241, 0.2)")
        gradient.addColorStop(0.5, "rgba(34, 211, 238, 0.3)")
        gradient.addColorStop(1, "rgba(139, 92, 246, 0.2)")

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(line.x + Math.cos(line.angle) * line.length, line.y + Math.sin(line.angle) * line.length)
        ctx.stroke()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.4 }} />
}
