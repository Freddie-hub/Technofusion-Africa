"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, Video, FileText } from "lucide-react"

const contactMethods = [
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a 30-minute discovery call with our AI experts",
    action: "Schedule Now",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Chat",
    description: "Quick questions? Chat with us on WhatsApp",
    action: "Start Chat",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    icon: Video,
    title: "Virtual Demo",
    description: "See our AI solutions in action with a live demo",
    action: "Request Demo",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: FileText,
    title: "Download Resources",
    description: "Get our AI transformation guide and case studies",
    action: "Download",
    gradient: "from-orange-600 to-red-600",
  },
]

export function ContactMethods() {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Quick Actions</h3>
        <p className="text-muted-foreground">Choose the best way to connect with our team</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.title}
            className="glass rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="space-y-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mx-auto`}
              >
                <method.icon className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">{method.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{method.description}</p>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="glass border-primary/20 hover:bg-primary/10 bg-transparent text-xs"
              >
                {method.action}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Emergency Contact */}
      <motion.div
        className="glass rounded-2xl p-6 border-2 border-red-500/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="text-center space-y-3">
          <h4 className="font-semibold text-red-400">Emergency Support</h4>
          <p className="text-sm text-muted-foreground">
            Critical system issues? Our emergency support team is available 24/7 for existing clients.
          </p>
          <Button size="sm" className="bg-gradient-to-r from-red-600 to-pink-600 hover:opacity-90">
            Emergency Contact
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}
