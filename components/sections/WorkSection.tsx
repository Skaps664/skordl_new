"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"

export default function WorkSection() {
  return (
    <section id="work" className="container mx-auto px-4 py-16 md:py-24 border-t border-gray-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16"
      >
        <motion.h2 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl font-bold">
          FEATURED
          <br />
          WORK
        </motion.h2>
        <motion.p variants={fadeIn} className="text-gray-400 max-w-md mt-4 md:mt-0">
          As a modern software agency, we combine cutting-edge technology with elegant design to create solutions
          tailored to your specific needs.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {[
          {
            title: "WEB APPLICATIONS",
            description: "Creating powerful digital experiences",
            number: "01",
            tags: ["React", "Node.js", "AWS"],
            image: "/w-2.jpg",
            link: "/projects",
          },
          {
            title: "MOBILE DEVELOPMENT",
            description: "Innovative solutions for mobile platforms",
            number: "02",
            tags: ["Flutter", "React Native", "iOS/Android"],
            image: "/w-1.jpg",
            link: "/projects",
          },
          {
            title: "E-COMMERCE PLATFORM",
            description: "Scalable online shopping experiences",
            number: "03",
            tags: ["Next.js", "Stripe", "Headless CMS"],
            image: "/w-3.jpg",
            link: "/projects",
          },
          {
            title: "AI-POWERED ANALYTICS",
            description: "Data-driven insights for business growth",
            number: "04",
            tags: ["Python", "TensorFlow", "Data Visualization"],
            image: "/w-4.png",
            link: "/projects",
          },
        ].map((project, index) => (
          <motion.div key={index} variants={fadeIn} className="space-y-4 group">
            <div className="aspect-video bg-gray-900 grayscale rounded-md overflow-hidden transform transition-transform duration-800 hover:grayscale-0 group-hover:scale-[1.02] relative">
              <Image
                src={project.image}
                alt={`Project ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link href={project.link} className="bg-[#9eff00] text-black px-4 py-2 rounded-full flex items-center">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-gray-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-gray-500">({project.number})</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex justify-end"
      >
        <Link
          href="#contact"
          className="inline-flex items-center text-white hover:text-[#9eff00] transition-colors duration-300"
        >
          Discuss your Vision <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  )
}
