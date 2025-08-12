"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Send, Shield, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  name: string
  email: string
  company: string
  role: string
  phone: string
  preferredContact: "email" | "whatsapp" | "phone"
  challengeType: string
  description: string
  timeline: string
  budget: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    preferredContact: "email",
    challengeType: "",
    description: "",
    timeline: "",
    budget: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const challengeTypes = [
    "Claims Processing Automation",
    "Fraud Detection & Prevention",
    "Regulatory Compliance",
    "Risk Assessment & Management",
    "Customer Experience Enhancement",
    "Data Analytics & Intelligence",
    "Legacy System Modernization",
    "Other / Custom Solution",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate Web3 blockchain submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real implementation, this would:
      // 1. Hash the form data
      // 2. Submit to blockchain for audit trail
      // 3. Send notifications via email/WhatsApp
      // 4. Store in secure database

      console.log("Form submitted with Web3 integration:", formData)
      setSubmitStatus("success")

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          role: "",
          phone: "",
          preferredContact: "email",
          challengeType: "",
          description: "",
          timeline: "",
          budget: "",
        })
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("Submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Start Your AI Transformation</h2>
        <p className="text-muted-foreground">
          Fill out the form below and our AI experts will get back to you within 24 hours with a customized approach for
          your organization.
        </p>

        {/* Web3 Security Badge */}
        <div className="flex items-center space-x-2 glass rounded-lg p-3 w-fit">
          <Shield className="w-4 h-4 text-green-500" />
          <span className="text-sm font-medium">Secured with Web3 blockchain audit trail</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name *</label>
            <div className="relative">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3 glass rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                  focusedField === "name"
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-transparent hover:border-primary/30"
                }`}
                placeholder="Enter your full name"
              />
              {focusedField === "name" && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 -z-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address *</label>
            <div className="relative">
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3 glass rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                  focusedField === "email"
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-transparent hover:border-primary/30"
                }`}
                placeholder="your.email@company.com"
              />
              {focusedField === "email" && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 -z-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Company Name *</label>
            <div className="relative">
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                onFocus={() => setFocusedField("company")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3 glass rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                  focusedField === "company"
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-transparent hover:border-primary/30"
                }`}
                placeholder="Your company name"
              />
              {focusedField === "company" && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 -z-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Your Role</label>
            <div className="relative">
              <input
                type="text"
                value={formData.role}
                onChange={(e) => handleInputChange("role", e.target.value)}
                onFocus={() => setFocusedField("role")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3 glass rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                  focusedField === "role"
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-transparent hover:border-primary/30"
                }`}
                placeholder="e.g., CTO, Head of Operations"
              />
              {focusedField === "role" && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 -z-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Contact Preferences */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number</label>
            <div className="relative">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                onFocus={() => setFocusedField("phone")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3 glass rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                  focusedField === "phone"
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-transparent hover:border-primary/30"
                }`}
                placeholder="+27 (0) 11 123 4567"
              />
              {focusedField === "phone" && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 -z-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Preferred Contact Method</label>
            <div className="relative">
              <select
                value={formData.preferredContact}
                onChange={(e) => handleInputChange("preferredContact", e.target.value)}
                onFocus={() => setFocusedField("preferredContact")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3 glass rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                  focusedField === "preferredContact"
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-transparent hover:border-primary/30"
                }`}
              >
                <option value="email">Email</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="phone">Phone Call</option>
              </select>
              {focusedField === "preferredContact" && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 -z-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Challenge Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Primary Challenge/Interest *</label>
          <div className="relative">
            <select
              required
              value={formData.challengeType}
              onChange={(e) => handleInputChange("challengeType", e.target.value)}
              onFocus={() => setFocusedField("challengeType")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 glass rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                focusedField === "challengeType"
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-transparent hover:border-primary/30"
              }`}
            >
              <option value="">Select your primary challenge</option>
              {challengeTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {focusedField === "challengeType" && (
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 -z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Describe Your Claims, Fraud, or Compliance Challenges *</label>
          <div className="relative">
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              onFocus={() => setFocusedField("description")}
              onBlur={() => setFocusedField(null)}
              className={`w-full px-4 py-3 glass rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none ${
                focusedField === "description"
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-transparent hover:border-primary/30"
              }`}
              placeholder="Tell us about your current challenges, goals, and what you'd like to achieve with AI. Be as specific as possible about your claims processing, fraud detection, or compliance needs."
            />
            {focusedField === "description" && (
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 -z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </div>
        </div>

        {/* Timeline and Budget */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Timeline</label>
            <div className="relative">
              <select
                value={formData.timeline}
                onChange={(e) => handleInputChange("timeline", e.target.value)}
                onFocus={() => setFocusedField("timeline")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3 glass rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                  focusedField === "timeline"
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-transparent hover:border-primary/30"
                }`}
              >
                <option value="">Select timeline</option>
                <option value="immediate">Immediate (1-3 months)</option>
                <option value="short">Short-term (3-6 months)</option>
                <option value="medium">Medium-term (6-12 months)</option>
                <option value="long">Long-term (12+ months)</option>
              </select>
              {focusedField === "timeline" && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 -z-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Budget Range</label>
            <div className="relative">
              <select
                value={formData.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
                onFocus={() => setFocusedField("budget")}
                onBlur={() => setFocusedField(null)}
                className={`w-full px-4 py-3 glass rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                  focusedField === "budget"
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-transparent hover:border-primary/30"
                }`}
              >
                <option value="">Select budget range</option>
                <option value="under-50k">Under $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-250k">$100,000 - $250,000</option>
                <option value="250k-500k">$250,000 - $500,000</option>
                <option value="500k-plus">$500,000+</option>
                <option value="discuss">Prefer to discuss</option>
              </select>
              {focusedField === "budget" && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 -z-10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <motion.div className="pt-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 text-lg font-semibold transition-all duration-300 ${
              isSubmitting
                ? "bg-gradient-to-r from-primary/50 to-accent/50 cursor-not-allowed"
                : submitStatus === "success"
                  ? "bg-gradient-to-r from-green-600 to-emerald-600"
                  : submitStatus === "error"
                    ? "bg-gradient-to-r from-red-600 to-pink-600"
                    : "bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/25"
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Securing with Web3...</span>
              </div>
            ) : submitStatus === "success" ? (
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Message Sent Successfully!</span>
              </div>
            ) : submitStatus === "error" ? (
              <div className="flex items-center justify-center space-x-2">
                <AlertCircle className="w-5 h-5" />
                <span>Error - Please Try Again</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Send Secure Message</span>
              </div>
            )}
          </Button>
        </motion.div>

        {/* Privacy Notice */}
        <div className="text-xs text-muted-foreground text-center space-y-2">
          <p>
            By submitting this form, you agree to our privacy policy and consent to being contacted about AI solutions.
          </p>
          <p className="flex items-center justify-center space-x-1">
            <Shield className="w-3 h-3" />
            <span>All submissions are encrypted and stored with blockchain audit trails for security.</span>
          </p>
        </div>
      </form>
    </motion.div>
  )
}
