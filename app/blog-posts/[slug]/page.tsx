// app/blog-posts/[slug]/page.tsx
import { Metadata } from 'next'
import BlogPostClient from './BlogPostClient'

// Static data (ideally move to a separate data file)
export const blogPostsData: { [key: string]: any } = {
    "ai-in-software-development": {
        title: "The Future of AI in Software Development",
        content: [
            "Artificial Intelligence (AI) is rapidly transforming the landscape of software development, introducing unprecedented levels of efficiency and innovation.",
            "Machine learning algorithms are now capable of generating code, predicting potential bugs, and even suggesting architectural improvements.",
            "Developers are increasingly leveraging AI-powered tools to automate repetitive tasks, allowing more focus on creative problem-solving."
        ],
        author: "Sudais Khan",
        date: "March 15, 2024",
        readTime: "5 min read",
        image: "/po-1.jpg",
        slug: "ai-in-software-development"
    },
    "microservices-architecture": {
        title: "Microservices Architecture: Breaking Down Monoliths",
        content: [
            "Microservices architecture represents a paradigm shift in how we design and deploy software applications.",
            "By breaking down monolithic structures into smaller, independently deployable services, organizations can achieve greater scalability and flexibility.",
            "This approach allows teams to develop, deploy, and scale components of an application independently."
        ],
        author: "Omer Jauhar",
        date: "February 28, 2024",
        readTime: "7 min read",
        image: "/po-2.jpg",
        slug: "microservices-architecture"
    }
};

// Generate static params for build-time generation
export async function generateStaticParams() {
    return Object.keys(blogPostsData).map((slug) => ({
        slug: slug
    }));
}

// Generate metadata dynamically
export async function generateMetadata({
    params
}: {
    params: { slug: string }
}): Promise<Metadata> {
    const post = blogPostsData[params.slug];

    return {
        title: post ? post.title : 'Blog Post Not Found',
        description: post ? post.excerpt : 'This blog post could not be found.',
        openGraph: {
            title: post ? post.title : 'Blog Post Not Found',
            description: post ? post.excerpt : 'This blog post could not be found.',
            images: post ? [{ url: post.image }] : [],
        },
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPostsData[params.slug];

    return <BlogPostClient post={post} slug={params.slug} />;
}