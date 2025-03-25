"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { fadeIn, staggerContainer } from "@/lib/animations"

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24 border-t border-gray-800 dark:border-gray-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={fadeIn} className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
            <div className="h-1 w-16 bg-[#9eff00]"></div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Founded in 2024, skordl is a software research and development lab at the intersection of design and technology.
            We create innovative digital solutions that drive business growth and technological advancement.
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Our team of expert engineers, designers, and researchers work collaboratively to deliver exceptional results
            that exceed client expectations.
          </p>

          <div className="flex flex-wrap gap-3">
            <Badge className="bg-[#9eff00]/10 text-[#9eff00] hover:bg-[#9eff00]/20">Innovation</Badge>
            <Badge className="bg-[#9eff00]/10 text-[#9eff00] hover:bg-[#9eff00]/20">Excellence</Badge>
            <Badge className="bg-[#9eff00]/10 text-[#9eff00] hover:bg-[#9eff00]/20">Collaboration</Badge>
            <Badge className="bg-[#9eff00]/10 text-[#9eff00] hover:bg-[#9eff00]/20">Integrity</Badge>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="space-y-8">
          <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400">
              To empower businesses through innovative software solutions that drive growth, efficiency, and competitive
              advantage in the digital landscape.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400">
              To be at the forefront of technological innovation, setting new standards in software development and
              research that shape the future of digital experiences.
            </p>
          </div>

          <div className="pt-2">
            <Link href="#team" className="inline-flex items-center text-[#9eff00] hover:underline">
              Meet our team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

