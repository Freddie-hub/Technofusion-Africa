import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesOverview } from "@/components/services-overview"
import { IndustryFocus } from "@/components/industry-focus"
import { CaseStudyPreview } from "@/components/case-study-preview"
import { TechnologyStack } from "@/components/technology-stack"
// import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <IndustryFocus />
      <CaseStudyPreview />
      <TechnologyStack />
      {/* <CTASection /> */}
      <Footer />
    </main>
  )
}
