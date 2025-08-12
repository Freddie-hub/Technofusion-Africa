"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Shield, Users, Lightbulb, Award, Globe } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technologies to deliver transformative solutions",
    gradient: "from-yellow-600 to-orange-600",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "We prioritize data security and regulatory compliance in every solution we build",
    gradient: "from-red-600 to-pink-600",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work as true partners, understanding your unique challenges and delivering tailored solutions",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "We stay ahead of AI trends and continuously improve our solutions through data-driven insights",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver exceptional quality and measurable results that exceed expectations",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    icon: Globe,
    title: "African Impact",
    description: "We're committed to transforming Africa's financial landscape through accessible AI solutions",
    gradient: "from-orange-600 to-red-600",
  },
]

export function Values() {
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
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The principles that guide our work and define our commitment to transforming financial services through AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="glass rounded-2xl p-8 group hover:scale-105 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${value.gradient} opacity-10 rounded-bl-3xl`}
              />

              <div className="space-y-4 relative z-10">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center`}
                >
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>

              {/* Hover Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
