"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Database, Cloud, Shield, Cpu, Network } from "lucide-react"

const technologies = [
  {
    category: "AI & Machine Learning",
    icon: Brain,
    tools: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI GPT", "Custom LLMs"],
    gradient: "from-purple-600 to-pink-600",
  },
  {
    category: "Data & Analytics",
    icon: Database,
    tools: ["Apache Spark", "Elasticsearch", "PostgreSQL", "MongoDB", "Redis"],
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    category: "Cloud Infrastructure",
    icon: Cloud,
    tools: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"],
    gradient: "from-green-600 to-emerald-600",
  },
  {
    category: "Security & Compliance",
    icon: Shield,
    tools: ["OAuth 2.0", "JWT", "Encryption", "Audit Logging", "GDPR Tools"],
    gradient: "from-red-600 to-orange-600",
  },
  {
    category: "Processing & Automation",
    icon: Cpu,
    tools: ["Apache Kafka", "RabbitMQ", "Celery", "Apache Airflow", "Jenkins"],
    gradient: "from-yellow-600 to-orange-600",
  },
  {
    category: "Integration & APIs",
    icon: Network,
    tools: ["REST APIs", "GraphQL", "Webhooks", "Message Queues", "Microservices"],
    gradient: "from-indigo-600 to-purple-600",
  },
]

export function TechnologyStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Cutting-Edge <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to build scalable, secure, and high-performance AI
            solutions that integrate seamlessly with your existing infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              className="glass rounded-2xl p-6 group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center`}
                  >
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{tech.category}</h3>
                </div>

                {/* Tools */}
                <div className="space-y-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool}
                      className="flex items-center space-x-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + toolIndex * 0.05 }}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tech.gradient}`} />
                      <span className="text-muted-foreground">{tool}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Architecture</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our solutions are built with enterprise requirements in mind: high availability, scalability, security,
              and compliance. We follow industry best practices and maintain rigorous testing standards to ensure your
              AI systems perform reliably in production environments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
