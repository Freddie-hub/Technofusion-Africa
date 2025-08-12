"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Shield } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 glass rounded-full p-4 opacity-60"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <Brain className="w-6 h-6 text-primary" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 glass rounded-full p-4 opacity-60"
        animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <Zap className="w-6 h-6 text-accent" />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-20 glass rounded-full p-4 opacity-60"
        animate={{ y: [0, -15, 0], rotate: [0, -180, -360] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <Shield className="w-6 h-6 text-primary" />
      </motion.div>

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
            About Technofusion Africa
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block">Pioneering the</span>
            <span className="block gradient-text">AI Revolution</span>
            <span className="block">in Finance</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The AI backbone for every business and organization, transforming legacy systems into
            intelligent ecosystems through innovative technology, strategic vision, and measurable results.
          </p>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { number: "50+", label: "AI Projects Delivered" },
              { number: "85%", label: "Average Efficiency Gain" },
              { number: "24/7", label: "System Monitoring" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-2xl p-6 transform hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
