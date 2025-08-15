'use client';

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
    <section>
      <InfiniteMarquee images={logos} from={0} to={'-100%'} color='#ff00ff'/>
    </section>
  )
}

export default PartnersSection
