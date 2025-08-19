import AwardsSection from '@/components/partials/awards-section'
import HeroSection from '@/components/partials/hero-section'
import PartnersSection from '@/components/partials/section-partners'
import ProjectsSection from '@/components/partials/section-projects'
import ServicesSection from '@/components/partials/section-services'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <AwardsSection />
      <PartnersSection />
      <ServicesSection />
      <ProjectsSection />
    </Fragment>
  )
}
