"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

const pricingTiers = [
  {
    name: "Discovery",
    description: "Perfect for organizations exploring AI opportunities",
    price: "Custom",
    duration: "2-4 weeks",
    features: [
      "Current state assessment",
      "AI readiness evaluation",
      "Opportunity identification",
      "High-level roadmap",
      "ROI projections",
    ],
    ideal: "Organizations new to AI",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    name: "Transformation",
    description: "Comprehensive AI implementation for serious adopters",
    price: "Custom",
    duration: "3-6 months",
    features: [
      "Everything in Discovery",
      "Custom AI model development",
      "System integration",
      "Process automation",
      "Training & support",
      "Performance monitoring",
    ],
    ideal: "Organizations ready for full AI adoption",
    gradient: "from-purple-600 to-pink-600",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Large-scale AI transformation with ongoing optimization",
    price: "Custom",
    duration: "6+ months",
    features: [
      "Everything in Transformation",
      "Multi-department rollout",
      "Advanced analytics platform",
      "Continuous model improvement",
      "Dedicated success manager",
      "24/7 support",
    ],
    ideal: "Large enterprises with complex needs",
    gradient: "from-orange-600 to-red-600",
  },
]

export function PricingApproach() {
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Flexible <span className="gradient-text">Engagement Models</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored approaches to fit your organization's size, timeline, and transformation goals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative glass rounded-3xl p-8 ${
                tier.popular ? "ring-2 ring-primary/50 scale-105" : ""
              } hover:scale-105 transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-4">{tier.description}</p>
                <div className="space-y-1">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}>
                    {tier.price}
                  </div>
                  <div className="text-sm text-muted-foreground">{tier.duration}</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.05 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Ideal For */}
              <div className="mb-8">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Ideal For
                </div>
                <div className="text-sm text-muted-foreground">{tier.ideal}</div>
              </div>

              {/* CTA */}
              <Button
                className={`w-full ${
                  tier.popular
                    ? "bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    : "glass border-primary/20 hover:bg-primary/10 bg-transparent"
                } group`}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
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
            <h3 className="text-2xl font-bold mb-4">Custom Solutions Available</h3>
            <p className="text-muted-foreground mb-6">
              Every organization is unique. We offer fully customized solutions tailored to your specific requirements,
              industry regulations, and transformation goals. Contact us to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="glass border-primary/20 hover:bg-primary/10 bg-transparent">
                Request Custom Quote
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
