"use client"

import Link from "next/link"
import { ArrowRight, Cpu, Database, LineChart } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"

export default function ResearchSection() {
  return (
    <section id="research" className="container mx-auto px-4 py-16 md:py-24 border-t border-gray-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-xl mb-12 md:mb-16"
      >
        <motion.h2 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Research & Innovation
        </motion.h2>
        <motion.p variants={fadeIn} className="text-gray-400">
          We conduct cutting-edge research in Computer Science and Machine Learning to push the boundaries of what's
          possible.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
      >
        {[
          {
            icon: <Cpu className="h-12 w-12 text-[#9eff00] mb-6" />,
            title: "Machine Learning",
            description: "Developing advanced algorithms and models to solve complex problems.",
          },
          {
            icon: <Database className="h-12 w-12 text-[#9eff00] mb-6" />,
            title: "Big Data Analytics",
            description: "Transforming large datasets into actionable insights and knowledge.",
          },
          {
            icon: <LineChart className="h-12 w-12 text-[#9eff00] mb-6" />,
            title: "Predictive Modeling",
            description: "Building sophisticated models to forecast trends and behaviors.",
          },
        ].map((research, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="bg-gray-900 p-6 md:p-8 rounded-md transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(158,255,0,0.1)]"
          >
            {research.icon}
            <h3 className="text-xl font-bold mb-4">{research.title}</h3>
            <p className="text-gray-400 mb-6">{research.description}</p>
            <Link href="#" className="text-[#9eff00] flex items-center group">
              Learn more{" "}
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Research Papers */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mt-16"
      >
        <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-8">
          Ongoing Research
        </motion.h3>

        <motion.div variants={staggerContainer} className="space-y-6">
          {[
            {
              title: "Physics Informed Neural Networks for Structural Weight Prediction",
              authors: "Mr. Sudais Khan, Mr. M Omer Jauhar",
              date: "June 2025",
            },
          ].map((paper, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="border-l-2 border-[#9eff00] pl-4 py-2 hover:bg-gray-900/50 transition-colors duration-300"
            >
              <h4 className="text-lg font-bold">{paper.title}</h4>
              <p className="text-gray-400">{paper.authors}</p>
              <div className="flex justify-between mt-2 text-sm">
                <span>{paper.date}</span>
                <span className="text-[#9eff00]">{paper.journal}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

