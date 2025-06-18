"use client"

import Link from "next/link"
import { ArrowRight, Code, Braces, Cpu, LineChart, DatabaseBackup, Vault } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"

export default function ServicesSection() {
  const services = [
    {
      title: "SOFTWARE DEVELOPMENT",
      icon: <Code className="h-5 w-5 text-[#9eff00]" />,
      description: "Custom software solutions tailored to your business needs.",
      slug: "software-development",
    },
    {
      title: "WEBSITE DESIGN AND DEVELOPMENT",
      icon: <Braces className="h-5 w-5 text-[#9eff00]" />,
      description: "Intuitive and engaging user experiences that delight customers.",
      slug: "website-design-and-development",
    },
    {
      title: "MACHINE LEARNING SOLUTIONS",
      icon: <Cpu className="h-5 w-5 text-[#9eff00]" />,
      description: "Intelligent systems that learn and adapt to your data.",
      slug: "machine-learning-solutions",
    },
    {
      title: "R&D",
      icon: <LineChart className="h-5 w-5 text-[#9eff00]" />,
      description: "Pushing the boundaries of what's possible with technology.",
      slug: "r-and-d",
    },
    {
      title: "DATA ENGINEERING",
      icon: <DatabaseBackup className="h-5 w-5 text-[#9eff00]" />,
      description: "Transforming raw data into actionable insights with robust pipelines.",
      slug: "data-engineering",
    },
    {
      title: "BACKEND SERVICES",
      icon: <Vault className="h-5 w-5 text-[#9eff00]" />,
      description: "Scalable and secure server-side solutions for seamless performance.",
      slug: "backend-services",
    },
  ]

  return (
    <section id="services" className="container mx-auto px-4 py-16 md:py-36">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-xl mb-12 md:mb-16"
      >
        <motion.h2 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          We build exceptional digital experiences
        </motion.h2>
        <motion.p variants={fadeIn} className="text-gray-400">
          skordl brings your vision to life with cutting-edge software solutions that drive innovation and success for
          your business.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-1"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="max-w-[90%] border-t border-gray-800 py-6 md:py-8 pr-4 flex justify-between items-center group"
          >
            <div className="flex items-start">
              <div className="mr-4 mt-1">{service.icon}</div>
              <div>
                <h3 className="text-lg md:text-xl font-bold">{service.title}</h3>
                <p className="text-gray-400 mt-2 max-w-md">{service.description}</p>
              </div>
            </div>
            <Link
              href={`/services/${service.slug}`}
              className="text-[#9eff00] flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0"
            >
              <span className="hidden sm:inline-block mr-2">Read More</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Technologies */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mt-16 md:mt-24"
      >
        <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-8 text-center">
          Technologies We Work With
        </motion.h3>

        <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
          {[
            "React",
            "Node.js",
            "Python",
            "TensorFlow",
            "AWS",
            "Docker",
            "Kubernetes",
            "GraphQL",
            "TypeScript",
            "Next.js",
            "Flutter",
            "Go",
          ].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(158, 255, 0, 0.1)" }}
              className="px-5 py-3 border border-gray-800 rounded-md transition-colors duration-300 hover:border-[#9eff00]/50"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

