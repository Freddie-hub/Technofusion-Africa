"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Cog, Database, Zap, LinkIcon, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description:
      "Roadmaps, adoption strategies, and risk analysis with phased transformations to optimize workflows and ensure solvency.",
    features: ["Quick-win automations", "Long-term ML pipelines", "Risk assessment", "ROI optimization"],
    gradient: "from-blue-600 to-purple-600",
  },
  {
    icon: Cog,
    title: "Custom AI Models",
    description:
      "Domain-specific LLMs, predictive models, and fraud detection engines with continuous learning capabilities.",
    features: ["Supervised/unsupervised ML", "Anomaly detection", "Financial forecasting", "Continuous retraining"],
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "RPA, OCR, and ML-driven workflows for automated claims intake, classification, and routing with SLA enforcement.",
    features: ["Claims automation", "Document processing", "Workflow optimization", "Audit trail generation"],
    gradient: "from-pink-600 to-red-600",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description:
      "Centralized repositories and interactive dashboards for real-time insights, proactive alerts, and resource allocation.",
    features: ["Real-time dashboards", "Predictive analytics", "Geographic heat maps", "KRI monitoring"],
    gradient: "from-red-600 to-orange-600",
  },
  {
    icon: LinkIcon,
    title: "AI Integration",
    description:
      "Seamless embedding into CRMs, ERPs, and portals with omnichannel notifications and automated regulatory reporting.",
    features: ["CRM/ERP integration", "Multi-channel alerts", "Regulatory compliance", "Immutable audit trails"],
    gradient: "from-orange-600 to-yellow-600",
  },
]

export function ServicesOverview() {
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
            Core Service <span className="gradient-text">Pillars</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions designed specifically for financial and insurance organizations, from strategy to
            implementation and continuous optimization.
          </p>
        </motion.div>

        {/* Asymmetrical Service Layout */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-2 glass rounded-lg p-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Button variant="outline" className="group glass border-primary/20 hover:bg-primary/10 bg-transparent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Visual Element */}
              <div className="flex-1 relative">
                <div className="relative w-full h-80 lg:h-96">
                  {/* Main Card */}
                  <motion.div
                    className={`absolute inset-4 glass rounded-3xl bg-gradient-to-br ${service.gradient} opacity-20`}
                    animate={{
                      rotate: [0, 2, -2, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Floating Elements */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-12 h-12 glass rounded-xl bg-gradient-to-br ${service.gradient} opacity-60`}
                      style={{
                        left: `${20 + i * 25}%`,
                        top: `${15 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4 + i,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  ))}

                  {/* Central Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
