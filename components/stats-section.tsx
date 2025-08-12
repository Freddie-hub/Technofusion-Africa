"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Clock, Shield, CheckCircle } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "50%",
    label: "Faster Claims Processing",
    description: "Through intelligent automation and ML-driven workflows",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    value: "85%",
    label: "Fraud Detection Accuracy",
    description: "Advanced anomaly detection reduces false positives",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Automated Monitoring",
    description: "Real-time alerts and continuous system optimization",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Compliance Assurance",
    description: "Audit-proof reporting with immutable trails",
    color: "from-orange-500 to-red-500",
  },
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Measurable <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI solutions deliver quantifiable results that transform how financial and insurance organizations
            operate, reducing costs while improving accuracy and compliance.
          </p>
        </motion.div>

        {/* Asymmetrical Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={`relative group ${index % 2 === 0 ? "lg:mt-0" : "lg:mt-12"}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Card with Angled Design */}
              <div className="glass rounded-3xl p-8 h-full transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                {/* Gradient Accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-20 rounded-bl-3xl`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} mb-6`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div
                    className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <h3 className="text-xl font-semibold">{stat.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-muted-foreground mb-6">Ready to see these results in your organization?</p>
          <motion.button
            className="glass rounded-full px-8 py-3 font-medium hover:bg-primary/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
