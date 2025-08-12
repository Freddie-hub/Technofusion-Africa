"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Headquarters",
    details: ["Sandton City", "Johannesburg, South Africa", "2196"],
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+27 (0) 11 123 4567", "+27 (0) 82 456 7890", "24/7 Emergency Support"],
    gradient: "from-green-600 to-emerald-600",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@technofusion.africa", "support@technofusion.africa", "partnerships@technofusion.africa"],
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8:00 - 18:00", "Saturday: 9:00 - 13:00", "Sunday: Emergency Only"],
    gradient: "from-orange-600 to-red-600",
  },
]

export function ContactInfo() {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground">
          Multiple ways to reach our AI experts. We're here to help you transform your financial operations with
          intelligent solutions.
        </p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <motion.div
            key={detail.title}
            className="glass rounded-2xl p-6 group hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-start space-x-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${detail.gradient} flex items-center justify-center flex-shrink-0`}
              >
                <detail.icon className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{detail.title}</h3>
                <div className="space-y-1">
                  {detail.details.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-sm text-muted-foreground">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        className="glass rounded-2xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Global Reach</h3>
            <p className="text-sm text-muted-foreground">
              While headquartered in South Africa, we serve financial and insurance organizations across Africa and
              internationally. Remote consultations and implementations available worldwide.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
