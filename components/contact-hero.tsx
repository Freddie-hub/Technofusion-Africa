"use client"

import { motion } from "framer-motion"
import { MessageSquare, Mail, Phone } from "lucide-react"

const contactIcons = [
  { Icon: MessageSquare, delay: 0, x: "20%", y: "25%" },
  { Icon: Mail, delay: 0.5, x: "75%", y: "20%" },
  { Icon: Phone, delay: 1, x: "15%", y: "75%" },
]

export function ContactHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      {/* Floating Contact Icons */}
      {contactIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute glass rounded-2xl p-4 opacity-60"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 0.6, scale: 1, rotate: 0 }}
          transition={{ delay, duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", repeatDelay: 4 }}
        >
          <Icon className="w-6 h-6 text-primary" />
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
            💬 Let's Transform Your Organization
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block">Ready to</span>
            <span className="block gradient-text">Get Started?</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Tell us about your AI transformation goals, compliance challenges, or fraud detection needs. Our experts are
            ready to help you build intelligent systems that drive measurable results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
