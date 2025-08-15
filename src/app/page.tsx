import AwardsSection from '@/components/partials/awards-section'
import HeroSection from '@/components/partials/hero-section'
import PartnersSection from '@/components/partials/section-partners'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <AwardsSection />
      <PartnersSection />
    </Fragment>
  )
}
