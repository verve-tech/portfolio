import AwardsSection from '@/components/partials/awards-section'
import HeroSection from '@/components/partials/hero-section'
import PartnersSection from '@/components/partials/section-partners'
import ProcessSection from '@/components/partials/section-process'
import ProjectsSection from '@/components/partials/section-projects'
import ServicesSection from '@/components/partials/section-services'
import TrustSection from '@/components/partials/section-trust'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AwardsSection />
      <PartnersSection />
      <ServicesSection />
      <ProjectsSection />
      <TrustSection />
      <ProcessSection />
    </main>
  )
}
