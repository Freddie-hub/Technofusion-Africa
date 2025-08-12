"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Users, CheckCircle, AlertTriangle } from "lucide-react"

const challenges = [
  {
    icon: Clock,
    title: "Slow Processing Times",
    description: "Average claims processing took 14-21 days due to manual workflows",
  },
  {
    icon: AlertTriangle,
    title: "High Fraud Rates",
    description: "15% fraud rate with limited detection capabilities and high false positives",
  },
  {
    icon: Users,
    title: "Poor Stakeholder Experience",
    description: "Limited visibility and communication throughout the claims process",
  },
]

const solutions = [
  {
    title: "Automated Claims Intake",
    description: "OCR and NLP-powered document processing with intelligent classification",
    impact: "80% reduction in manual data entry",
  },
  {
    title: "ML-Driven Fraud Detection",
    description: "Supervised and unsupervised learning models for anomaly detection",
    impact: "85% fraud detection accuracy",
  },
  {
    title: "Real-Time Notifications",
    description: "Omnichannel alerts via SMS, email, and WhatsApp with status updates",
    impact: "95% stakeholder satisfaction",
  },
  {
    title: "Predictive Analytics",
    description: "Resource allocation optimization and solvency forecasting",
    impact: "30% better resource utilization",
  },
]

const results = [
  { metric: "Processing Time", before: "14-21 days", after: "7 days", improvement: "50% faster" },
  { metric: "Fraud Detection", before: "60% accuracy", after: "85% accuracy", improvement: "25% improvement" },
  { metric: "Cost Savings", before: "Baseline", after: "$2.3M annually", improvement: "Significant ROI" },
  { metric: "Satisfaction", before: "65%", after: "95%", improvement: "30% increase" },
]

export function CaseStudyDetailed() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block glass rounded-full px-6 py-3 text-sm font-medium mb-6">
            📊 Featured Case Study
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Policyholder Compensation <span className="gradient-text">System Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            How we revolutionized a major insurance company's claims processing workflow, delivering measurable
            improvements across efficiency, accuracy, and stakeholder satisfaction.
          </p>
        </motion.div>

        {/* Challenge Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            The <span className="gradient-text">Challenge</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                className="glass rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <challenge.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{challenge.title}</h4>
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Our <span className="gradient-text">Solution</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="glass rounded-2xl p-8 group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <h4 className="font-semibold text-lg">{solution.title}</h4>
                  </div>
                  <p className="text-muted-foreground">{solution.description}</p>
                  <div className="text-sm font-medium text-primary bg-primary/10 rounded-lg px-3 py-2 inline-block">
                    {solution.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Measurable <span className="gradient-text">Results</span>
          </h3>

          <div className="glass rounded-3xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-4 px-4 font-semibold">Metric</th>
                  <th className="text-center py-4 px-4 font-semibold">Before</th>
                  <th className="text-center py-4 px-4 font-semibold">After</th>
                  <th className="text-center py-4 px-4 font-semibold">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <motion.tr
                    key={result.metric}
                    className="border-b border-border/30 last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  >
                    <td className="py-4 px-4 font-medium">{result.metric}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{result.before}</td>
                    <td className="py-4 px-4 text-center font-semibold">{result.after}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-green-500 font-semibold">{result.improvement}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 group">
            Download Full Case Study
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
