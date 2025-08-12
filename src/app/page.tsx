<<<<<<< HEAD
import Award from '@/components/sections/Award'
import Hero from '@/components/sections/Hero'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Award />
    </Fragment>
  )
=======
import AwardsSection from '@/components/partials/awards-section'
import HeroSection from '@/components/partials/hero-section'

export default function Home() {
    return (
        <>
            <HeroSection />
            <AwardsSection />
        </>
    )
>>>>>>> 48369cc177c74f68a73ac161bf3a7d2a3a69a780
}
