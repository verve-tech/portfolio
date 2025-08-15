'use client'

import InfiniteMarquee from '../shared/infinite-marquee'
import LogoAromix from '../svg/logo-aromix'
import LogoFireli from '../svg/logo-fireli'
import LogoMartino from '../svg/logo-martino'
import LogoNatroma from '../svg/logo-natroma'
import LogoSquarestone from '../svg/logo-squarestone'
import LogoVertex from '../svg/logo-vertex'
import LogoVirogan from '../svg/logo-virogan'
import LogoWaverio from '../svg/logo-waverio'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logos: any[] = [
  LogoAromix,
  LogoFireli,
  LogoMartino,
  LogoNatroma,
  LogoSquarestone,
  LogoVertex,
  LogoVirogan,
  LogoWaverio
]

function PartnersSection() {
  return (
    <section className="relative h-53.5 pb-35">
      <div className="bg-custom-black/15 absolute top-0 bottom-0 h-fit z-10 my-auto w-[110%] rotate-[3.5deg] py-9 backdrop-blur-xl">
        <InfiniteMarquee images={logos} from={0} to={'-100%'} color="text-foreground" />
      </div>
      <div className="bg-primary absolute top-0 bottom-0 h-fit my-auto w-[110%] rotate-[-3.5deg] py-9">
        <InfiniteMarquee images={logos} from={"-100%"} to={0} color="text-custom-black" />
      </div>
    </section>
  )
}

export default PartnersSection
