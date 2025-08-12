"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Shield, Clock, Users, DollarSign, CheckCircle } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description: "Average 300% ROI within 12 months of implementation",
    stats: ["50% faster processing", "85% accuracy improvement", "60% cost reduction"],
    gradient: "from-green-600 to-emerald-600",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Advanced fraud detection and compliance automation",
    stats: ["85% fraud detection rate", "100% compliance coverage", "70% false positive reduction"],
    gradient: "from-red-600 to-pink-600",
  },
  {
    icon: Clock,
    title: "Operational Efficiency",
    description: "Streamlined processes and automated workflows",
    stats: ["80% manual work reduction", "24/7 automated monitoring", "98% SLA compliance"],
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Users,
    title: "Enhanced Experience",
    description: "Improved stakeholder satisfaction and engagement",
    stats: ["95% customer satisfaction", "Real-time notifications", "Self-service portals"],
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description: "Significant operational cost savings and resource optimization",
    stats: ["$2.3M average savings", "35% resource efficiency", "Reduced operational overhead"],
    gradient: "from-orange-600 to-yellow-600",
  },
  {
    icon: CheckCircle,
    title: "Future-Ready",
    description: "Scalable solutions that grow with your organization",
    stats: ["Cloud-native architecture", "API-first design", "Continuous model improvement"],
    gradient: "from-teal-600 to-green-600",
  },
]

export function ServiceBenefits() {
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
            Why Choose <span className="gradient-text">Technofusion Africa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI solutions deliver tangible benefits that transform your operations and drive sustainable growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="glass rounded-2xl p-8 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${benefit.gradient} opacity-10 rounded-bl-3xl`}
              />

              <div className="space-y-6 relative z-10">
                {/* Icon & Title */}
                <div className="space-y-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center`}
                  >
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Key Metrics</div>
                  <div className="space-y-2">
                    {benefit.stats.map((stat, statIndex) => (
                      <motion.div
                        key={stat}
                        className="flex items-center space-x-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 + statIndex * 0.05 }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${benefit.gradient}`} />
                        <span className="text-muted-foreground">{stat}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
