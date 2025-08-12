import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { MissionVision } from "@/components/mission-vision"
import { Leadership } from "@/components/leadership"
import { CompanyStory } from "@/components/company-story"
import { CaseStudyDetailed } from "@/components/case-study-detailed"
import { Values } from "@/components/values"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <Values />
      <Leadership />
      <CaseStudyDetailed />
      <CTASection />
      <Footer />
    </main>
  )
}
