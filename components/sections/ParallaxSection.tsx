"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxSection() {
  // Parallax effect refs
  const parallaxRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section ref={parallaxRef} className="relative py-32 md:py-48 overflow-hidden">
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#9eff00]/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="h-full w-full bg-[url('/sq_2.jpg')] bg-cover bg-center" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Transforming Ideas into Digital Reality</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're passionate about creating software that makes a difference.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-[#9eff00] text-black rounded-full hover:bg-white transition-colors duration-300 text-lg font-medium"
          >
            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

