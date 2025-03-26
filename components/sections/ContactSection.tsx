"use client";

import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const form = useRef(null);
  const [showMessage, setShowMessage] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const calendlyRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yi81rth",
        "template_sf2is5f",
        form.current,
        "y5vpJbhT8-CKmMx8Y"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setShowMessage(true);
          form.current.reset();

          setTimeout(() => {
            setShowMessage(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  const handleBookNowClick = () => {
    setShowCalendly(true);
  };

  const handleCloseCalendly = () => {
    setShowCalendly(false);
  };

  useEffect(() => {
    // Dynamically load Calendly widget CSS
    const cssLink = document.createElement('link');
    cssLink.href = 'https://assets.calendly.com/assets/external/widget.css';
    cssLink.rel = 'stylesheet';
    document.head.appendChild(cssLink);

    // Dynamically load Calendly widget JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Calendly widget when script loads
    script.onload = () => {
      if (showCalendly && window.Calendly) {
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/sudais-skaps/30min?background_color=1a1a1a&text_color=ffffff&primary_color=21e316'
        });
      }
    };

    // Cleanup
    return () => {
      document.head.removeChild(cssLink);
      document.body.removeChild(script);
    };
  }, [showCalendly]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendlyRef.current && !calendlyRef.current.contains(event.target)) {
        setShowCalendly(false);
      }
    };

    if (showCalendly) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendly]);

  return (
    <section id="contact" className="container mx-auto px-4 py-16 md:py-48 border-t border-gray-800">
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-gray-800 text-white px-6 py-3 rounded-md shadow-lg text-sm opacity-90">
              ✅ Thank you! Your inquiry has been sent. We'll get back shortly.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-hidden">
          <motion.div
            ref={calendlyRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-5xl h-[90vh] bg-[#1a1a1a] border-2 border-[#9eff00] rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="absolute top-4 right-4 z-60">
              <button
                onClick={handleCloseCalendly}
                className="text-[#9eff00] hover:text-white transition-colors duration-300 bg-black/50 p-2 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
            <div
              id="calendly-popup"
              className="w-full h-full"
            ></div>
          </motion.div>
        </div>
      )}

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
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 border border-white rounded-full hover:bg-[#9eff00] hover:text-black hover:border-[#9eff00] transition-all duration-300"
            >
              Let's discuss <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
          <motion.h2 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 mt-8">
            OR Book a free consultation
          </motion.h2>
          <motion.div variants={fadeIn}>
            <button
              onClick={handleBookNowClick}
              className="inline-flex items-center px-6 py-3 border border-white rounded-full hover:bg-[#9eff00] hover:text-black hover:border-[#9eff00] transition-all duration-300"
            >
              Book Now <ArrowRight className="ml-2 h-4 w-4" />
            </button>
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