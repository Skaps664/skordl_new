"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

const projects = [
  {
    title: "Finwise",
    description: "A modern finance platform designed to simplify personal and business budgeting.",
    url: "https://finwise-omega.vercel.app/",
    tags: ["Next.js", "Tailwind", "Charts"],
    image: "./p7.PNG"
  },
  {
    title: "Magic Portfolio",
    description: "A sleek portfolio demo showcasing smooth animations and creative layouts.",
    url: "https://demo.magic-portfolio.com/",
    tags: ["Portfolio", "Motion", "UI/UX"],
    image: "./p6.PNG"
  },
  {
    title: "Paddle Billing",
    description: "Billing dashboard UI mimicking Paddle’s system with clean subscription flows.",
    url: "https://paddle-billing.vercel.app/",
    tags: ["SaaS", "Dashboard", "Billing"],
    image: "./p5.PNG"
  },
  {
    title: "Headless Builders",
    description: "Showcase of headless CMS capabilities for developers and startups.",
    url: "https://headless.builders/",
    tags: ["Headless CMS", "Landing", "Marketing"],
    image: "./p4.PNG"
  },
  {
    title: "CMS + Commerce Stack",
    description: "Enterprise-grade CMS-driven eCommerce experience using Contentstack.",
    url: "https://solutions-cms-contentstack-commerce.vercel.app/",
    tags: ["CMS", "E-Commerce", "Enterprise"],
    image: "./p3.PNG"
  },
  {
    title: "Haarshe Online",
    description: "Elegant and responsive UI for a fashion and lifestyle eCommerce brand.",
    url: "https://haarsheonline.net/",
    tags: ["E-Commerce", "Fashion", "Responsive"],
    image: "./p2.PNG"
  },
  {
    title: "Solar Express",
    description: "Marketplace platform for solar products, focusing on speed and clarity.",
    url: "https://solarexpress.vercel.app/",
    tags: ["Marketplace", "Green Tech", "Tailwind"],
    image: "./p1.PNG"
  },
];

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-32 text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="space-y-12"
      >
        <motion.h1
          variants={fadeIn}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
        >
          🚀 Showcasing What We've Built
        </motion.h1>
        <motion.p variants={fadeIn} className="text-gray-400 max-w-2xl">
          From fintech dashboards to elegant eCommerce and powerful CMS integrations — explore
          the projects we’ve brought to life with performance and precision.
        </motion.p>

        <motion.div
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="border border-[#9eff00] rounded-xl bg-black hover:bg-[#121212] transition-colors duration-300 overflow-hidden"
            >
              {/* Cover Image */}
              <img
                src={project.image}
                alt={`${project.title} cover`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#9eff00]">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#9eff00]/10 text-[#9eff00] text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.url}
                  target="_blank"
                  className="inline-block px-4 py-2 border border-white rounded-full text-sm hover:bg-[#9eff00] hover:text-black hover:border-[#9eff00] transition-all"
                >
                  Visit Live
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}