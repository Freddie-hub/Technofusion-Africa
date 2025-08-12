"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Brain, Cog, Database, Zap, LinkIcon, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    subtitle: "Strategic Roadmaps for AI Transformation",
    description:
      "Comprehensive roadmaps, adoption strategies, and risk analysis with phased transformations to optimize claims workflows and ensure solvency.",
    keyBenefits: [
      "Quick-win automation identification",
      "Long-term ML pipeline planning",
      "Risk assessment and mitigation",
      "ROI optimization strategies",
    ],
    measurableImpacts: [
      { metric: "Implementation Speed", value: "40% faster", description: "Accelerated deployment timelines" },
      { metric: "Risk Reduction", value: "60% lower", description: "Minimized transformation risks" },
      { metric: "ROI Achievement", value: "6 months", description: "Faster return on investment" },
    ],
    useCases: [
      "Claims workflow optimization",
      "Fraud detection strategy",
      "Regulatory compliance planning",
      "Digital transformation roadmaps",
    ],
    gradient: "from-blue-600 to-purple-600",
  },
  {
    icon: Cog,
    title: "Custom AI Models",
    subtitle: "Domain-Specific Intelligence Solutions",
    description:
      "Domain-specific LLMs, predictive models, and fraud detection engines with continuous learning capabilities to improve accuracy and reduce manual reviews.",
    keyBenefits: [
      "Supervised/unsupervised ML models",
      "Anomaly detection systems",
      "Financial forecasting models",
      "Continuous model retraining",
    ],
    measurableImpacts: [
      { metric: "Fraud Detection", value: "85% accuracy", description: "Advanced anomaly detection" },
      { metric: "False Positives", value: "70% reduction", description: "Improved model precision" },
      { metric: "Processing Accuracy", value: "95% automated", description: "Reduced manual intervention" },
    ],
    useCases: [
      "Claims fraud detection",
      "Credit risk assessment",
      "Policy pricing optimization",
      "Customer behavior prediction",
    ],
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: Zap,
    title: "Process Automation",
    subtitle: "Intelligent Workflow Optimization",
    description:
      "RPA, OCR, and ML-driven workflows for automated claims intake, classification, and routing, enforcing SLAs and reducing cycle times.",
    keyBenefits: [
      "Automated claims processing",
      "Document digitization (OCR)",
      "Workflow optimization",
      "SLA enforcement and monitoring",
    ],
    measurableImpacts: [
      { metric: "Processing Time", value: "50% faster", description: "Reduced claims cycle times" },
      { metric: "Manual Work", value: "80% reduction", description: "Automated routine tasks" },
      { metric: "SLA Compliance", value: "98% achievement", description: "Consistent service delivery" },
    ],
    useCases: [
      "Claims intake automation",
      "Policy application processing",
      "Regulatory report generation",
      "Customer onboarding workflows",
    ],
    gradient: "from-pink-600 to-red-600",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    subtitle: "Real-Time Insights & Analytics",
    description:
      "Data pipelines, centralized repositories, and interactive dashboards for real-time insights, proactive alerts, and efficient resource allocation.",
    keyBenefits: [
      "Real-time analytics dashboards",
      "Predictive analytics models",
      "Geographic risk heat maps",
      "Key Risk Indicator monitoring",
    ],
    measurableImpacts: [
      { metric: "Decision Speed", value: "3x faster", description: "Real-time data insights" },
      { metric: "Predictive Accuracy", value: "90% precision", description: "Enhanced forecasting" },
      { metric: "Resource Efficiency", value: "35% improvement", description: "Optimized allocation" },
    ],
    useCases: ["Claims trend analysis", "Risk assessment dashboards", "Solvency monitoring", "Performance analytics"],
    gradient: "from-red-600 to-orange-600",
  },
  {
    icon: LinkIcon,
    title: "AI Integration",
    subtitle: "Seamless System Connectivity",
    description:
      "Embedding AI into CRMs, ERPs, and portals, ensuring seamless connectivity, omnichannel notifications, and automated regulatory reporting.",
    keyBenefits: [
      "CRM/ERP system integration",
      "Omnichannel notifications",
      "API-first architecture",
      "Automated compliance reporting",
    ],
    measurableImpacts: [
      { metric: "Integration Time", value: "60% faster", description: "Rapid system connectivity" },
      { metric: "Data Accuracy", value: "99% consistency", description: "Unified data sources" },
      { metric: "Compliance Automation", value: "100% coverage", description: "Automated reporting" },
    ],
    useCases: [
      "Legacy system modernization",
      "Multi-channel communication",
      "Regulatory compliance automation",
      "Third-party service integration",
    ],
    gradient: "from-orange-600 to-yellow-600",
  },
]

export function ServicesPillars() {
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
            Our Five Core <span className="gradient-text">Service Pillars</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform every aspect of your financial operations, delivering
            measurable results and competitive advantages.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Key Benefits</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {service.keyBenefits.map((benefit, benefitIndex) => (
                      <motion.div
                        key={benefit}
                        className="flex items-center space-x-2 glass rounded-lg p-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + benefitIndex * 0.05 }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm font-medium">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Use Cases</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, useCaseIndex) => (
                      <motion.span
                        key={useCase}
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${service.gradient} text-white`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + useCaseIndex * 0.1 }}
                      >
                        {useCase}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="group glass border-primary/20 hover:bg-primary/10 bg-transparent">
                  Learn More About This Service
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Measurable Impacts */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-center">Measurable Impacts</h4>
                  <div className="grid gap-6">
                    {service.measurableImpacts.map((impact, impactIndex) => (
                      <motion.div
                        key={impact.metric}
                        className="glass rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 + impactIndex * 0.1 }}
                      >
                        <div
                          className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2`}
                        >
                          {impact.value}
                        </div>
                        <div className="font-semibold mb-1">{impact.metric}</div>
                        <div className="text-sm text-muted-foreground">{impact.description}</div>
                      </motion.div>
                    ))}
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
