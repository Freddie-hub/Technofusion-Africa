"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Lightbulb, Cog, Rocket, BarChart } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Assessment",
    description: "Comprehensive analysis of your current systems, processes, and AI readiness",
    duration: "2-4 weeks",
    deliverables: ["Current state assessment", "Gap analysis", "Opportunity identification"],
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Development of tailored AI strategy with phased implementation roadmap",
    duration: "3-6 weeks",
    deliverables: ["AI strategy document", "Implementation roadmap", "ROI projections"],
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: Cog,
    title: "Development & Integration",
    description: "Custom AI model development and seamless integration with existing systems",
    duration: "8-16 weeks",
    deliverables: ["Custom AI models", "System integrations", "Testing & validation"],
    gradient: "from-pink-600 to-red-600",
  },
  {
    icon: Rocket,
    title: "Deployment & Launch",
    description: "Careful rollout with comprehensive training and change management support",
    duration: "2-4 weeks",
    deliverables: ["Production deployment", "User training", "Go-live support"],
    gradient: "from-red-600 to-orange-600",
  },
  {
    icon: BarChart,
    title: "Optimization & Support",
    description: "Continuous monitoring, optimization, and ongoing support for sustained success",
    duration: "Ongoing",
    deliverables: ["Performance monitoring", "Model retraining", "Continuous improvement"],
    gradient: "from-orange-600 to-yellow-600",
  },
]

export function ServiceProcess() {
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
            Our Proven <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to AI transformation that ensures successful implementation and measurable results
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Flow Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 via-red-600 to-yellow-600 opacity-30 transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Step Number */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center relative z-10`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="glass rounded-2xl p-6 text-center space-y-4 h-full">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>

                  <div className="space-y-3">
                    <div
                      className={`text-sm font-medium text-transparent bg-gradient-to-r ${step.gradient} bg-clip-text`}
                    >
                      Duration: {step.duration}
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Key Deliverables
                      </div>
                      <div className="space-y-1">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <motion.div
                            key={deliverable}
                            className="text-xs text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.2 + deliverableIndex * 0.1 }}
                          >
                            • {deliverable}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-sm font-bold z-20">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Transformation?</h3>
            <p className="text-muted-foreground mb-6">
              Our proven process ensures successful implementation with minimal disruption to your operations. Let's
              discuss how we can transform your organization.
            </p>
            <motion.button
              className="glass rounded-full px-8 py-3 font-medium hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Discovery Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
