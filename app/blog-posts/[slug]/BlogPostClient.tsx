// app/blog-posts/[slug]/BlogPostClient.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { fadeIn } from "@/lib/animations"

export default function BlogPostClient({
    post,
    slug
}: {
    post: any,
    slug: string
}) {
    if (!post) {
        return (
            <div className="container mx-auto px-4 py-16 md:py-72 text-center">
                <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                <Link
                    href="/blog-posts"
                    className="inline-flex items-center text-[#9eff00] hover:underline"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <section className="container mx-auto px-4 py-16 md:py-40">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
            >
                <Link
                    href="/blog-posts"
                    className="inline-flex items-center text-gray-400 hover:text-[#9eff00] mb-6"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>

                <div className="aspect-video relative mb-8">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>

                <div className="flex items-center text-sm text-gray-400 mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                </div>

                <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
                <p className="text-gray-400 mb-6">By {post.author}</p>

                {post.content.map((paragraph: string, index: number) => (
                    <motion.p
                        key={index}
                        variants={fadeIn}
                        className="mb-4 text-gray-300 leading-relaxed"
                    >
                        {paragraph}
                    </motion.p>
                ))}
            </motion.div>
        </section>
    );
}