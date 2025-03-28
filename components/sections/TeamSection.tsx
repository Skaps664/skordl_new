"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Twitter, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"

export default function TeamSection() {
  return (
    <section id="team" className="container mx-auto px-4 py-16 md:py-24 border-t border-gray-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-xl mb-12 md:mb-16"
      >
        <motion.h2 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Meet Our Team
        </motion.h2>
        <motion.p variants={fadeIn} className="text-gray-400">
          Our talented professionals bring diverse expertise and passion to every project.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8"
      >
        {[
          {
            name: "Sudais Khan",
            role: "CEO & Founder",
            image: "/su_pp.PNG",
            social: { twitter: "#", linkedin: "https://www.linkedin.com/in/sudaisk/", github: "https://github.com/skaps664" },
          },
          {
            name: "Aisha Iftikhar",
            role: "Lead Python Dev",
            image: "/ai_pp.png",
            social: { twitter: "#", linkedin: "https://www.linkedin.com/in/aisha-iftikhar-ai231/", github: "" },
          },
          {
            name: "Omer Jauhar",
            role: "Backend Engineer",
            image: "/oj_pp.jpeg",
            social: { twitter: "#", linkedin: "https://www.linkedin.com/in/muhammad-omer-jauhar-khan-51aa671b9/", github: "https://github.com/omerjauhar" },
          },
          {
            name: "Ammar Raza",
            role: "Lead Software Dev",
            image: "/mb_pp.jpeg",
            social: { twitter: "#", linkedin: "https://www.linkedin.com/in/mubeen-ali-shah-b64263292/", github: "" },
          },
          {
            name: "Azaz Khan",
            role: "UX/UI Designer",
            image: "/az_pp.PNG",
            social: { twitter: "#", linkedin: "", github: "" },
          },
          {
            name: "Mubeen Ali Shah",
            role: "Lead QA",
            image: "/am_pp.png",
            social: { twitter: "#", linkedin: "https://www.linkedin.com/in/ammar-chattha-239919230/", github: "" },
          },
          
        ].map((member, index) => (
          <motion.div key={index} variants={fadeIn} className="bg-gray-900 rounded-md overflow-hidden group">
            <div className="aspect-square relative">
              <Image
                src={member.image || ""}
                alt={member.name}
                width={200}
                height={200}
                className="object-cover w-full h-full  group-hover:grayscale-5 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="flex justify-center space-x-4">
                    {/* <Link href={member.social.twitter} className="text-white hover:text-[#9eff00]">
                      <Twitter className="h-5 w-5" />
                    </Link> */}
                    <Link href={member.social.linkedin} target="_blank" className="text-white hover:text-[#9eff00]">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    {/* <Link href={member.social.github} className="text-white hover:text-[#9eff00]">
                      <Github className="h-5 w-5" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="">{member.name}</h3>
              <p className="text-[#9eff00] text-sm">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 text-center"
      >
        <Link
          href="https://www.linkedin.com/company/skordl/jobs/" target="_blank"
          className="inline-flex items-center px-6 py-3 border border-white rounded-full hover:bg-[#9eff00] hover:text-black hover:border-[#9eff00] transition-all duration-300"
        >
          Join Our Team <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  )
}