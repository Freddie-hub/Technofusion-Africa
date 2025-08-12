"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Shield, Zap, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const floatingIcons = [
    { Icon: Brain, delay: 0, x: "10%", y: "20%" },
    { Icon: Shield, delay: 0.5, x: "80%", y: "15%" },
    { Icon: Zap, delay: 1, x: "15%", y: "70%" },
    { Icon: TrendingUp, delay: 1.5, x: "85%", y: "75%" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute glass rounded-full p-4 opacity-60"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", repeatDelay: 3 }}
        >
          <Icon className="w-6 h-6 text-primary" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Asymmetrical Layout */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-block glass rounded-full px-4 py-2 text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Transforming Financial & Insurance Systems
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block">We Build</span>
                <span className="block gradient-text">Efficient</span>
                <span className="block">AI Systems</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Empowering financial and insurance organizations to work smarter, faster, and with greater impact
                through
                <span className="text-primary font-semibold"> AI-driven automation</span>,
                <span className="text-accent font-semibold"> fraud detection</span>, and
                <span className="text-primary font-semibold"> compliance solutions</span>.
                <span className="text-primary font-semibold"> AI in management</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 group">
                Start Your Transformation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass border-primary/20 hover:bg-primary/10 bg-transparent"
              >
                View Case Studies
              </Button>
            </div>

            {/* Key Metrics - Asymmetrical Cards */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <motion.div
                className="glass rounded-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text">50%</div>
                <div className="text-sm text-muted-foreground">Faster Claims Processing</div>
              </motion.div>
              <motion.div
                className="glass rounded-2xl p-6 transform -rotate-1 hover:rotate-0 transition-transform mt-8"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text">85%</div>
                <div className="text-sm text-muted-foreground">Fraud Detection Accuracy</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Interactive AI Network Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Central Hub */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 glass rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Brain className="w-12 h-12 text-primary" />
              </motion.div>

              {/* Orbiting Elements */}
              {[
                { label: "Claims", icon: "📋", angle: 0, radius: 120 },
                { label: "Fraud", icon: "🛡️", angle: 72, radius: 100 },
                { label: "Risk", icon: "⚡", angle: 144, radius: 140 },
                { label: "Compliance", icon: "✅", angle: 216, radius: 110 },
                { label: "Analytics", icon: "📊", angle: 288, radius: 130 },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="absolute glass rounded-xl p-3 text-center"
                  style={{
                    left: `calc(50% + ${Math.cos((item.angle * Math.PI) / 180) * item.radius}px)`,
                    top: `calc(50% + ${Math.sin((item.angle * Math.PI) / 180) * item.radius}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2 + index * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-xs font-medium">{item.label}</div>
                </motion.div>
              ))}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {[0, 72, 144, 216, 288].map((angle, index) => (
                  <motion.line
                    key={angle}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${Math.cos((angle * Math.PI) / 180) * 100}px)`}
                    y2={`calc(50% + ${Math.sin((angle * Math.PI) / 180) * 100}px)`}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                  />
                ))}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}
