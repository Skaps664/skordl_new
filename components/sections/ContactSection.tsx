"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Globe, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence for animations
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const form = useRef(null);
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yi81rth", // Replace with your EmailJS Service ID
        "template_sf2is5f", // Replace with your EmailJS Template ID
        form.current,
        "y5vpJbhT8-CKmMx8Y" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setShowMessage(true); // Show the success message
          form.current.reset();

          setTimeout(() => {
            setShowMessage(false); // Hide the message after 3 sec
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-16 md:py-24 border-t border-gray-800 relative">

      {/* ✅ Toast Notification - Uses AnimatePresence for smooth fading */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-gray-800 text-white px-6 py-3 rounded-md shadow-lg text-sm opacity-90">
              ✅ Thank you! Your inquiry has been sent. We’ll get back shortly.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
      >
        <div>
          <motion.h2 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Let's create something amazing together
          </motion.h2>
          <motion.p variants={fadeIn} className="text-gray-400 mb-8">
            Ready to transform your ideas into reality? Get in touch with our team to discuss your project.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link
              href="mailto:sudais.skaps@gmail.com"
              className="inline-flex items-center px-6 py-3 border border-white rounded-full hover:bg-[#9eff00] hover:text-black hover:border-[#9eff00] transition-all duration-300"
            >
              Let's discuss <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gray-900 p-6 md:p-8 rounded-md"
        >
          <h3 className="text-2xl font-bold mb-6">Send us a message</h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="name"
                  required
                  className="w-full px-4 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9eff00] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  required
                  className="w-full px-4 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9eff00] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="number" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="from_number"
                  id="number"
                  required
                  className="w-full px-4 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9eff00] focus:border-transparent"
                  placeholder="Your Phone Number"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="from_subject"
                id="subject"
                required
                className="w-full px-4 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9eff00] focus:border-transparent"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9eff00] focus:border-transparent"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#9eff00] text-black font-medium rounded-md hover:bg-white transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
