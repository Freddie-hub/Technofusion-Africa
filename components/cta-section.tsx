"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap } from "lucide-react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.3),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Floating Icons */}
            <div className="relative inline-block">
              <motion.div
                className="absolute -top-4 -left-4 glass rounded-full p-2"
                animate={{ rotate: 360, y: [-5, 5, -5] }}
                transition={{
                  rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  y: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-full p-2"
                animate={{ rotate: -360, y: [5, -5, 5] }}
                transition={{
                  rotate: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  y: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <Zap className="w-4 h-4 text-accent" />
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-bold">
                Ready to <span className="gradient-text">Transform</span>
                <br />
                Your Organization?
              </h2>
            </div>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join forward-thinking financial and insurance organizations that have already revolutionized their
              operations with our AI solutions. Start your transformation today.
            </p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 group px-8 py-4 text-lg"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="glass border-primary/20 hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
              >
                View Case Studies
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="pt-12 space-y-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-sm text-muted-foreground">Trusted by leading organizations</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                {/* Placeholder for client logos */}
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-24 h-12 glass rounded-lg flex items-center justify-center">
                    <div className="w-16 h-6 bg-gradient-to-r from-primary/30 to-accent/30 rounded" />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 glass rounded-full opacity-20"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 glass rounded-full opacity-20"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </section>
  )
}
