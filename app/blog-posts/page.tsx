"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { fadeIn, staggerContainer } from "@/lib/animations"

const blogPosts = [
    {
        title: "The Future of AI in Software Development",
        excerpt: "Exploring how artificial intelligence is transforming the way we build and design software applications.",
        author: "Sudais Khan",
        date: "March 15, 2024",
        readTime: "5 min read",
        image: "/po-1.jpg",
        slug: "ai-in-software-development"
    },
    {
        title: "Microservices Architecture: Breaking Down Monoliths",
        excerpt: "A comprehensive guide to transitioning from monolithic to microservices architecture in modern web applications.",
        author: "Omer Jauhar",
        date: "February 28, 2024",
        readTime: "7 min read",
        image: "po-2.jpg",
        slug: "microservices-architecture"
    },
    {
        title: "UX Design Principles for Startup Success",
        excerpt: "Key design strategies that can help startups create intuitive and engaging user experiences.",
        author: "Azaz Khan",
        date: "February 10, 2024",
        readTime: "6 min read",
        image: "/po-3.jpg",
        slug: "ux-design-principles"
    },
    {
        title: "Python Performance Optimization Techniques",
        excerpt: "Advanced techniques to improve the performance and efficiency of your Python applications.",
        author: "Aisha Iftikhar",
        date: "January 22, 2024",
        readTime: "8 min read",
        image: "/po-4.jpg",
        slug: "python-performance-optimization"
    }
]

export default function BlogPage() {

    return (
        <section className="container mx-auto px-4 py-16 md:py-40">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="max-w-xl mb-12 md:mb-16"
            >
                <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                    Our Insights
                </motion.h1>
                <motion.p variants={fadeIn} className="text-gray-400">
                    Dive into our latest thoughts, technical deep-dives, and industry perspectives.
                </motion.p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn}
                        className="bg-gray-900 rounded-md overflow-hidden group"
                    >
                        <div className="aspect-video relative">
                            <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500"
                            />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center text-sm text-gray-400 mb-3">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>{post.date}</span>
                                <span className="mx-2">•</span>
                                <Clock className="h-4 w-4 mr-2" />
                                <span>{post.readTime}</span>
                            </div>
                            <h3 className="font-bold text-lg mb-3 group-hover:text-[#9eff00] transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-400 mb-4">{post.excerpt}</p>
                            <div className="flex items-center">
                                <span className="text-sm text-gray-500 mr-3">By {post.author}</span>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="ml-auto inline-flex items-center text-[#9eff00] hover:underline"
                                >
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
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
                    href="/contact-us"
                    className="inline-flex items-center px-6 py-3 border border-white rounded-full hover:bg-[#9eff00] hover:text-black hover:border-[#9eff00] transition-all duration-300"
                >
                    Contac Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </motion.div>
        </section>
    )
}