"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Twitter, Mail } from "lucide-react"

const leaders = [
  {
    name: "Dr. Amara Okafor",
    role: "Chief Executive Officer",
    bio: "Former McKinsey partner with 15+ years in financial services transformation. PhD in Computer Science from MIT.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "amara@technofusion.africa",
    },
  },
  {
    name: "Prof. Kwame Asante",
    role: "Chief Technology Officer",
    bio: "AI research pioneer with 20+ publications. Former Google AI researcher specializing in financial ML models.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "kwame@technofusion.africa",
    },
  },
  {
    name: "Sarah Mwangi",
    role: "Head of AI Strategy",
    bio: "Insurance industry veteran with expertise in claims automation and fraud detection. Former Allianz executive.",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@technofusion.africa",
    },
  },
]

export function Leadership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visionary leaders combining deep industry expertise with cutting-edge AI knowledge to drive transformation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="glass rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 relative overflow-hidden">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative Element */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full opacity-80" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">{leader.name}</h3>
                    <p className="text-primary font-medium">{leader.role}</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-4">
                    <motion.a
                      href={leader.social.linkedin}
                      className="w-8 h-8 glass rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={leader.social.twitter}
                      className="w-8 h-8 glass rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${leader.social.email}`}
                      className="w-8 h-8 glass rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
