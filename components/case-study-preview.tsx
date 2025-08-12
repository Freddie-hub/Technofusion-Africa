"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, DollarSign, TrendingUp, Users } from "lucide-react"

export function CaseStudyPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const results = [
    {
      icon: Clock,
      value: "50%",
      label: "Faster Claims Processing",
      description: "Reduced average processing time from 14 days to 7 days",
    },
    {
      icon: DollarSign,
      value: "$2.3M",
      label: "Annual Cost Savings",
      description: "Through automation and fraud reduction",
    },
    {
      icon: TrendingUp,
      value: "85%",
      label: "Fraud Detection Rate",
      description: "Improved accuracy with ML-driven anomaly detection",
    },
    {
      icon: Users,
      value: "95%",
      label: "Stakeholder Satisfaction",
      description: "Enhanced transparency and communication",
    },
  ]

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <div className="inline-block glass rounded-full px-4 py-2 text-sm font-medium">📊 Case Study Preview</div>
              <h2 className="text-3xl md:text-5xl font-bold">
                Transforming a <span className="gradient-text">Policyholder</span>
                <br />
                Compensation System
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our comprehensive AI solution revolutionized a major insurance company's claims processing workflow,
                delivering measurable improvements across all key performance indicators.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Key Transformations:</h3>
              <div className="space-y-4">
                {[
                  "Automated claims intake and classification",
                  "ML-powered fraud detection and risk assessment",
                  "Real-time stakeholder notifications and updates",
                  "Immutable audit trails for regulatory compliance",
                  "Predictive analytics for resource allocation",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 group">
              Read Full Case Study
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Results Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                className={`glass rounded-2xl p-6 ${index % 2 === 0 ? "transform rotate-1" : "transform -rotate-1"} hover:rotate-0 transition-transform group`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <result.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text">{result.value}</div>
                  <div className="font-semibold text-sm">{result.label}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{result.description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
