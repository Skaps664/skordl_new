"use client"

import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { useParams } from "next/navigation"
import { notFound } from "next/navigation"

// Service data with detailed information
const servicesData = [
  {
    slug: "software-development",
    title: "SOFTWARE DEVELOPMENT",
    headline: "Custom Software Solutions Tailored to Your Business",
    description: "We build powerful, scalable software that solves your unique business challenges and drives growth.",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Custom solutions designed specifically for your business needs",
      "Scalable architecture that grows with your company",
      "Intuitive user interfaces that enhance productivity",
      "Rigorous testing to ensure reliability and performance",
      "Ongoing support and maintenance to keep your software running smoothly",
    ],
    process: [
      "Discovery and Requirements Analysis",
      "Architecture and Design",
      "Development and Implementation",
      "Testing and Quality Assurance",
      "Deployment and Integration",
      "Maintenance and Support",
    ],
    technologies: ["React", "Node.js", "Python", "Java", "C#", ".NET", "MongoDB", "PostgreSQL", "AWS", "Azure"],
  },
  {
    slug: "website-design-and-development",
    title: "WEBSITE DESIGN AND DEVELOPMENT",
    headline: "Stunning Websites That Convert Visitors Into Customers",
    description:
      "We create beautiful, responsive websites that provide exceptional user experiences and drive business results.",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Responsive designs that work flawlessly on all devices",
      "SEO-optimized structure to improve search engine rankings",
      "Fast loading speeds for better user experience and conversion rates",
      "Intuitive navigation and user flows that guide visitors to conversion",
      "Content management systems that make updates easy",
    ],
    process: [
      "Strategy and Planning",
      "Wireframing and Prototyping",
      "Visual Design",
      "Development and CMS Integration",
      "Testing and Optimization",
      "Launch and Post-Launch Support",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "WordPress",
      "Shopify",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    slug: "machine-learning-solutions",
    title: "MACHINE LEARNING SOLUTIONS",
    headline: "Intelligent Systems That Learn and Adapt",
    description:
      "We develop cutting-edge machine learning solutions that extract valuable insights from your data and automate complex processes.",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Data-driven decision making with predictive analytics",
      "Automation of repetitive tasks to increase efficiency",
      "Pattern recognition to identify trends and opportunities",
      "Personalization capabilities to enhance customer experiences",
      "Continuous improvement as systems learn from new data",
    ],
    process: [
      "Data Collection and Preparation",
      "Feature Engineering",
      "Model Selection and Training",
      "Validation and Testing",
      "Deployment and Integration",
      "Monitoring and Refinement",
    ],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Keras",
      "NLTK",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Jupyter",
      "MLflow",
    ],
  },
  {
    slug: "r-and-d",
    title: "R&D",
    headline: "Pushing the Boundaries of What's Possible",
    description:
      "Our research and development team explores emerging technologies to create innovative solutions that give your business a competitive edge.",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Access to cutting-edge technologies before your competitors",
      "Custom innovation roadmaps aligned with your business goals",
      "Proof-of-concept development to validate ideas quickly",
      "Risk mitigation through thorough research and testing",
      "Intellectual property development and protection",
    ],
    process: [
      "Trend Analysis and Technology Scouting",
      "Concept Development",
      "Prototyping and Experimentation",
      "Feasibility Assessment",
      "Technology Transfer",
      "Commercialization Strategy",
    ],
    technologies: [
      "Blockchain",
      "IoT",
      "AR/VR",
      "Quantum Computing",
      "Edge Computing",
      "5G",
      "Biometrics",
      "Robotics",
      "3D Printing",
      "Green Tech",
    ],
  },
  {
    slug: "data-engineering",
    title: "DATA ENGINEERING",
    headline: "Transform Raw Data Into Actionable Insights",
    description:
      "We design and implement robust data pipelines and warehouses that turn your data into a strategic asset for your business.",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Centralized data repositories for improved accessibility",
      "Real-time analytics capabilities for immediate insights",
      "Data quality assurance to ensure accurate decision-making",
      "Scalable infrastructure that handles growing data volumes",
      "Secure data management compliant with regulations",
    ],
    process: [
      "Data Source Identification",
      "ETL Pipeline Design",
      "Data Warehouse Architecture",
      "Implementation and Integration",
      "Performance Optimization",
      "Monitoring and Maintenance",
    ],
    technologies: [
      "Apache Spark",
      "Hadoop",
      "Kafka",
      "Airflow",
      "Snowflake",
      "BigQuery",
      "Redshift",
      "dbt",
      "Databricks",
      "Elasticsearch",
    ],
  },
  {
    slug: "backend-services",
    title: "BACKEND SERVICES",
    headline: "Scalable and Secure Server-Side Solutions",
    description:
      "We build robust backend systems that power your applications with high performance, security, and reliability.",
    image: "/placeholder.svg?height=600&width=800",
    benefits: [
      "Highly scalable architectures that handle growing user bases",
      "Secure data storage and processing to protect sensitive information",
      "Efficient API design for seamless integration with other systems",
      "Optimized performance for fast response times",
      "Comprehensive monitoring and logging for quick issue resolution",
    ],
    process: [
      "Architecture Design",
      "Database Schema Design",
      "API Development",
      "Authentication and Authorization Implementation",
      "Testing and Performance Tuning",
      "Deployment and DevOps Integration",
    ],
    technologies: [
      "Node.js",
      "Python",
      "Go",
      "Java",
      "GraphQL",
      "REST",
      "MongoDB",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
  },
]

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  const service = servicesData.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Link
          href="/services"
          className="inline-flex items-center text-gray-400 hover:text-[#9eff00] mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to all services
        </Link>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {service.headline}
          </motion.h1>

          <motion.p variants={fadeIn} className="text-xl text-gray-300 mb-12">
            {service.description}
          </motion.p>

          <motion.div variants={fadeIn} className="aspect-video relative mb-16 rounded-lg overflow-hidden">
            <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-6 text-[#9eff00]">Key Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#9eff00] mr-3 mt-1 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-6 text-[#9eff00]">Our Process</h2>
              <ol className="space-y-4">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-[#9eff00] text-black font-bold mr-3 shrink-0">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-2xl font-bold mb-6 text-center">Technologies We Use</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(158, 255, 0, 0.1)" }}
                  className="px-5 py-3 border border-gray-800 rounded-md transition-colors duration-300 hover:border-[#9eff00]/50"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-20 text-center"
          >
            <h2 className="text-2xl font-bold mb-6">Ready to get started?</h2>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-8 py-4 bg-[#9eff00] text-black font-medium rounded-full hover:bg-opacity-90 transition-all"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

