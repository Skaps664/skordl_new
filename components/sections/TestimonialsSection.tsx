"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function TestimonialsSection() {
  // Parallax effect refs
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={parallaxRef} id="testimonials" className="relative py-32 md:py-48 overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#9eff00]/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="h-full w-full bg-[url('/sq_1.jpg')] bg-cover bg-center" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-xl mb-12 md:mb-16 text-white"
        >
          <motion.h2 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            What Our Clients Say
          </motion.h2>
          <motion.p variants={fadeIn} className="text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about working with us.
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
              quote:
                "skordl transformed our business with their innovative software solutions. Their team's expertise and dedication exceeded our expectations.",
              author: "Jahandad Adam",
              position: "TechVision Inc.",
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              quote:
                "Working with skordl was a game-changer for our company. Their attention to detail and commitment to excellence is unmatched in the industry.",
              author: "Sohail Khan",
              position: "CTO at Awez Corp",
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              quote:
                "The team at skordl delivered a complex project on time and within budget. Their technical expertise and communication made the process seamless.",
              author: "Maria Rodriguez",
              position: "GlobalTech",
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              quote:
                "skordl's research-driven approach to software development helped us stay ahead of the competition. They're true partners in our success.",
              author: "Adnan Khan",
              position: "Solar Express",
              image: "/placeholder.svg?height=100&width=100",
            },
          ].map((testimonial, index) => (
            <motion.div key={index} variants={fadeIn} className="bg-gray-900/80 p-6 md:p-8 rounded-md relative backdrop-blur-md">
              <div className="absolute -top-4 -left-4 text-6xl text-[#9eff00] ">"</div>
              <p className="text-gray-300 mb-6 relative z-10">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
