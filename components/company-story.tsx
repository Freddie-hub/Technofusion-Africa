"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Target, Rocket } from "lucide-react"

const timeline = [
  {
    year: "2020",
    title: "The Vision",
    description: "Founded with a mission to democratize AI for African financial institutions",
    icon: Lightbulb,
    gradient: "from-blue-600 to-cyan-600",
  },
  // {
  //   year: "2022",
  //   title: "First Breakthrough",
  //   description: "Delivered our first major claims processing automation, reducing cycle times by 60%",
  //   icon: Target,
  //   gradient: "from-purple-600 to-pink-600",
  // },
  {
    year: "2024",
    title: "Scaling Impact",
    description: "Expanded across multiple sectors with comprehensive AI transformation solutions",
    icon: Rocket,
    gradient: "from-green-600 to-emerald-600",
  },
]

export function CompanyStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a bold vision to transforming Africa's financial landscape through intelligent AI solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-12`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className={`glass rounded-3xl p-8 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="space-y-4">
                      <div
                        className={`text-4xl font-bold gradient-text ${index % 2 === 0 ? "text-right" : "text-left"}`}
                      >
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
