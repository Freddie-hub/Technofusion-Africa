import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services-hero"
import { ServicesPillars } from "@/components/services-pillars"
import { ServiceProcess } from "@/components/service-process"
import { ServiceBenefits } from "@/components/service-benefits"
import { PricingApproach } from "@/components/pricing-approach"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesHero />
      <ServicesPillars />
      <ServiceProcess />
      <ServiceBenefits />
      <PricingApproach />
      <CTASection />
      <Footer />
    </main>
  )
}
