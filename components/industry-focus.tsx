"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Shield, FileCheck, Users, Zap } from "lucide-react"

const industries = [
  {
    icon: Building2,
    title: "Financial Services",
    description: "Transform banking operations with intelligent automation and risk management",
    solutions: ["Automated loan processing", "Credit risk assessment", "Regulatory compliance", "Customer onboarding"],
    metrics: { improvement: "60%", metric: "Processing Speed" },
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Shield,
    title: "Insurance Companies",
    description: "Revolutionize claims processing and fraud detection with AI-powered solutions",
    solutions: ["Claims automation", "Fraud detection", "Policy management", "Risk assessment"],
    metrics: { improvement: "75%", metric: "Fraud Detection" },
    gradient: "from-purple-600 to-pink-600",
  },
]

const capabilities = [
  {
    icon: Zap,
    title: "Claims Processing",
    description: "Automated intake, classification, and routing with real-time status updates",
    impact: "50% faster processing times",
  },
  {
    icon: Shield,
    title: "Fraud Detection",
    description: "ML-driven anomaly detection with supervised and unsupervised learning",
    impact: "85% accuracy improvement",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Automated reporting with immutable audit trails and real-time monitoring",
    impact: "100% compliance assurance",
  },
  {
    icon: Users,
    title: "Stakeholder Engagement",
    description: "Personalized portals with omnichannel notifications and self-service options",
    impact: "40% higher satisfaction",
  },
]

export function IndustryFocus() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Industries We <span className="gradient-text">Transform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized AI solutions designed for the unique challenges of financial and insurance sectors, delivering
            measurable results and competitive advantages.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className="relative"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="glass rounded-3xl p-8 h-full relative overflow-hidden group hover:scale-105 transition-all duration-300">
                {/* Gradient Background */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${industry.gradient} opacity-10 rounded-bl-3xl`}
                />

                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center`}
                  >
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{industry.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span
                        className={`text-2xl font-bold bg-gradient-to-r ${industry.gradient} bg-clip-text text-transparent`}
                      >
                        {industry.metrics.improvement}
                      </span>
                      <span className="text-sm text-muted-foreground">{industry.metrics.metric}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{industry.description}</p>

                {/* Solutions Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <motion.div
                      key={solution}
                      className="glass rounded-lg p-3 text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + solutionIndex * 0.1 }}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.gradient}`} />
                        <span>{solution}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Core <span className="gradient-text">Capabilities</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                className="glass rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{capability.title}</h4>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{capability.description}</p>
                <div className="text-sm font-medium text-primary">{capability.impact}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
