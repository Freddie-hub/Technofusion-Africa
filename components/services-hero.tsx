"use client"

import { motion } from "framer-motion"
import { Brain, Cog, Database, Zap, LinkIcon } from "lucide-react"

const serviceIcons = [
  { Icon: Brain, delay: 0, x: "15%", y: "20%" },
  { Icon: Cog, delay: 0.5, x: "75%", y: "15%" },
  { Icon: Database, delay: 1, x: "20%", y: "70%" },
  { Icon: Zap, delay: 1.5, x: "80%", y: "75%" },
  { Icon: LinkIcon, delay: 2, x: "50%", y: "50%" },
]

export function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      {/* Floating Service Icons */}
      {serviceIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute glass rounded-2xl p-4 opacity-60"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
          transition={{ delay, duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", repeatDelay: 4 }}
        >
          <Icon className="w-8 h-8 text-primary" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block glass rounded-full px-6 py-3 text-sm font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            🚀 Comprehensive AI Solutions
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block">Transform Your</span>
            <span className="block gradient-text">Financial Operations</span>
            <span className="block">with AI</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our five core service pillars deliver end-to-end AI transformation for financial and insurance
            organizations, from strategic planning to full-scale implementation and continuous optimization.
          </p>

          <motion.div
            className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { title: "AI Strategy", subtitle: "& Consulting" },
              { title: "Custom AI", subtitle: "Models" },
              { title: "Process", subtitle: "Automation" },
              { title: "Data", subtitle: "Intelligence" },
              { title: "AI", subtitle: "Integration" },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="glass rounded-2xl p-4 text-center transform hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-sm font-semibold">{service.title}</div>
                <div className="text-xs text-muted-foreground">{service.subtitle}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
