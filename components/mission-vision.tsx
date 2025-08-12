"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Eye, Target, Heart } from "lucide-react"

export function MissionVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Vision */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Our Vision</h2>
              </div>

              <div className="glass rounded-3xl p-8 space-y-4">
                <p className="text-lg leading-relaxed">
                  <span className="font-semibold gradient-text">
                    "We build intelligent AI systems that empower financial and insurance organizations to work smarter,
                    faster, and with greater impact."
                  </span>
                </p>
                <p className="text-muted-foreground">
                  Our vision is to become Africa's leading AI transformation partner, delivering efficiency, automation,
                  risk detection, and compliance solutions that set new industry standards.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              </div>

              <div className="glass rounded-3xl p-8 space-y-4">
                <p className="text-lg leading-relaxed">
                  To transform legacy financial systems into intelligent ecosystems through:
                </p>
                <ul className="space-y-3">
                  {[
                    "Phased technology-led transformations",
                    "Quick-win automations and complex integrations",
                    "Continuous improvement through data-driven insights",
                    "Measurable outcomes that drive business value",
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Purpose */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Our Purpose</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe that every financial institution deserves access to cutting-edge AI technology. Our purpose is
              to democratize AI innovation, making advanced solutions accessible and practical for organizations of all
              sizes across Africa and beyond.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
