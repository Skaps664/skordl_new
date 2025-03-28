"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, ArrowRight } from "lucide-react"

export default function NotFound() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        yoyo: Number.POSITIVE_INFINITY,
        repeatDelay: 10,
      },
    },
  }

  const pulseVariants = {
    hidden: { scale: 0.8, opacity: 0.5 },
    visible: {
      scale: [1, 1.05, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  // Quick links for navigation
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog-posts" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  // Fixed background positions instead of random
  const backgroundElements = [
    { x: "25%", y: "75%", opacity: 0.12, duration: 20 },
    { x: "45%", y: "90%", opacity: 0.14, duration: 25 },
    { x: "40%", y: "40%", opacity: 0.18, duration: 18 },
    { x: "75%", y: "50%", opacity: 0.11, duration: 22 },
    { x: "50%", y: "45%", opacity: 0.15, duration: 30 },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-3xl w-full text-center px-4"
      >
        <motion.div className="relative mb-8 mx-auto" variants={itemVariants}>
          <motion.div
            variants={numberVariants}
            className="text-[120px] md:text-[160px] font-bold leading-none text-gray-800 select-none"
          >
            404
          </motion.div>

          <motion.div variants={pulseVariants} className="absolute inset-0 flex items-center justify-center">
            <div className="text-[120px] md:text-[160px] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#9eff00] to-[#00ff9e] select-none">
              404
            </div>
          </motion.div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
          Page Not Found
        </motion.h1>

        <motion.p variants={itemVariants} className="text-gray-400 mb-8 text-lg max-w-xl mx-auto">
          Oops! The page you're looking for seems to have wandered off into the digital wilderness. Let's help you find
          your way back.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/" className="inline-flex items-center text-[#9eff00] hover:text-gray-400 transition-colors">
            <Home className="mr-2 h-5 w-5" />
            Return to Homepage
          </Link>

          <Link
            href="/blog-posts"
            className="inline-flex items-center text-[#9eff00] hover:text-gray-400 transition-colors"
          >
            Explore Our Blog
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated background elements - only rendered on client side */}
      {isClient && (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {backgroundElements.map((el, i) => (
            <motion.div
              key={i}
              initial={{
                x: el.x,
                y: el.y,
                opacity: el.opacity,
              }}
              animate={{
                x: `calc(${el.x} + 10%)`,
                y: `calc(${el.y} + 10%)`,
                opacity: el.opacity + 0.05,
              }}
              transition={{
                duration: el.duration,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute w-64 h-64 rounded-full bg-[#9eff00] filter blur-[100px]"
            />
          ))}
        </div>
      )}
    </div>
  )
}

