"use client"

import { useState, useEffect, useRef } from "react"
import { Layers, Users, Clock, Award } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { scaleIn, staggerContainer } from "@/lib/animations"

export default function StatsSection() {
  // Refs for scroll animations
  const counterRef = useRef(null)
  const counterInView = useInView(counterRef, { once: true, amount: 0.5 })

  // Counter animation
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    awards: 0,
  })

  useEffect(() => {
    if (counterInView) {
      const interval = setInterval(() => {
        setCounts((prev) => {
          const newCounts = { ...prev }
          if (newCounts.projects < 20) newCounts.projects += 1
          if (newCounts.clients < 20) newCounts.clients += 1
          if (newCounts.years < 1) newCounts.years += 1
          if (newCounts.awards < 5) newCounts.awards += 1

          if (newCounts.projects >= 120 && newCounts.clients >= 85 && newCounts.years >= 10 && newCounts.awards >= 25) {
            clearInterval(interval)
          }

          return newCounts
        })
      }, 50)

      return () => clearInterval(interval)
    }
  }, [counterInView])

  return (
    <section id="stats" className="py-16 md:py-24 border-t border-gray-800" ref={counterRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            {
              value: counts.projects,
              label: "Projects Completed",
              icon: <Layers className="h-8 w-8 text-[#9eff00] mb-4" />,
            },
            {
              value: counts.clients,
              label: "Happy Clients",
              icon: <Users className="h-8 w-8 text-[#9eff00] mb-4" />,
            },
            {
              value: counts.years,
              label: "Years Experience",
              icon: <Clock className="h-8 w-8 text-[#9eff00] mb-4" />,
            },
            { value: counts.awards, label: "Ongoing ", icon: <Award className="h-8 w-8 text-[#9eff00] mb-4" /> },
          ].map((stat, index) => (
            <motion.div key={index} variants={scaleIn} className="text-center">
              {stat.icon}
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}+</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

