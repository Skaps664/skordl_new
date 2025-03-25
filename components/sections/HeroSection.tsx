"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"

function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.floor(canvas.width / 10)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: i % 5 === 0 ? "#9eff00" : "#ffffff",
        })
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = 0.7
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX *= -1
        }

        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY *= -1
        }
      })

      connectParticles()
    }

    const connectParticles = () => {
      const maxDistance = 100

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle =
              particles[i].color === "#9eff00" || particles[j].color === "#9eff00" ? "#9eff00" : "#ffffff"
            ctx.globalAlpha = 0.2 * (1 - distance / maxDistance)
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top

      // Attract particles to mouse
      particles.forEach((particle) => {
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          particle.x += dx * 0.02
          particle.y += dy * 0.02
        }
      })
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    resize()
    window.addEventListener("resize", resize)

    const animate = () => {
      drawParticles()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

export default function HeroSection() {
  return (
    <section id="hero" className="container mx-auto px-4 py-16 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
      >
        <div className="space-y-6">
          <motion.p variants={fadeIn} className="text-[#9eff00]">
            (HELLO, WORLD!)
          </motion.p>
          <motion.h1 variants={fadeIn} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            SKORD<span className="italic font-normal">labs</span>
            <br />
            Engineers
          </motion.h1>
          <motion.p variants={fadeIn} className="text-lg text-gray-400 max-w-md">
            are dedicated to helping your business thrive online. We focus on creating tailored solutions that drive growth, streamline operations, and enhance your digital presence.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-white rounded-full hover:bg-[#9eff00] hover:text-black hover:border-[#9eff00] transition-all duration-200"
            >
              Let's discuss <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div variants={fadeIn} className="mt-8 h-[480px] w-full relative overflow-hidden rounded-lg">
            <InteractiveParticles />
          </motion.div>
        </div>
        <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4">
          <div className="aspect-square bg-gray-900 rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Software development"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="UI/UX design"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md overflow-hidden col-span-2 transform transition-transform duration-300 hover:scale-[1.02]">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Machine learning research"
              width={800}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex justify-center mt-16 md:mt-24"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
            className="flex flex-col items-center"
          >
            <p className="text-gray-500 mb-2 text-sm">Scroll to explore</p>
            <ChevronDown className="h-6 w-6 text-[#9eff00]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

