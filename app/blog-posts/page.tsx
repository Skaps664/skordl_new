"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { fadeIn, staggerContainer } from "@/lib/animations"

import { blogPosts } from "./blogPosts"

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
                                src={post.image || ""}
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
                                    href={`/blog-posts/${post.slug}`}
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