export default function BlogNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <div className="max-w-3xl w-full text-center px-4">
        <div className="mb-8">
          <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <div className="absolute inset-0 border-4 border-[#9eff00] rounded-full opacity-20"></div>
            <div className="absolute inset-0 border-4 border-[#9eff00] rounded-full opacity-40 animate-ping"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9eff00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Post Not Found</h1>

          <p className="text-gray-400 mb-8 text-lg max-w-xl mx-auto">
            We couldn't find the blog post you were looking for. It might have been moved, deleted, or never existed in
            the first place.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">Popular blog posts</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {[
              {
                title: "The Future of AI in Software Development",
                excerpt:
                  "Exploring how artificial intelligence is transforming the way we build and design software applications.",
                slug: "ai-in-software-development",
              },
              {
                title: "Microservices Architecture: Breaking Down Monoliths",
                excerpt:
                  "A comprehensive guide to transitioning from monolithic to microservices architecture in modern web applications.",
                slug: "microservices-architecture",
              },
              {
                title: "UX Design Principles for Startup Success",
                excerpt: "Key design strategies that can help startups create intuitive and engaging user experiences.",
                slug: "ux-design-principles",
              },
              {
                title: "Python Performance Optimization Techniques",
                excerpt: "Advanced techniques to improve the performance and efficiency of your Python applications.",
                slug: "python-performance-optimization",
              },
            ].map((post, index) => (
              <a
                key={index}
                href={`/blog-posts/${post.slug}`}
                className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all group"
              >
                <h4 className="font-bold mb-2 group-hover:text-[#9eff00] transition-colors">{post.title}</h4>
                <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="/blog-posts"
            className="inline-flex items-center text-gray-400 hover:text-[#9eff00] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-5 w-5"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to All Posts
          </a>

          <a href="/" className="inline-flex items-center text-gray-400 hover:text-[#9eff00] transition-colors">
            Return to Homepage
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-5 w-5"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black to-gray-900 pointer-events-none">
        <div className="absolute inset-0 bg-[#9eff00] opacity-5 mix-blend-overlay"></div>
      </div>
    </div>
  )
}

