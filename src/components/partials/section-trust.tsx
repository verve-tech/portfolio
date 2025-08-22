'use client'

import { cn } from '@/lib/utils'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Fragment, useEffect, useRef, useState } from 'react'
import SectionHeader from '../shared/section-header'
import AwardOne from '../svg/award-1'
import AwardTen from '../svg/award-10'
import AwardEleven from '../svg/award-11'
import AwardTwelve from '../svg/award-12'
import AwardThirteen from '../svg/award-13'
import AwardTwo from '../svg/award-2'
import AwardThree from '../svg/award-3'
import AwardFour from '../svg/award-4'
import AwardFive from '../svg/award-5'
import AwardSix from '../svg/award-6'
import AwardSeven from '../svg/award-7'
import AwardEight from '../svg/award-8'
import AwardNine from '../svg/award-9'

function TrustSection() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const scrollerOneRef = useRef<HTMLDivElement>(null)
  const scrollerTwoRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const isInView = useInView(sliderRef)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('down')

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY ? 'down' : 'up'
      setScrollDirection(direction)
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  useEffect(() => {
    if (scrollerTwoRef.current) {
        scrollerTwoRef.current.scrollTo({left: scrollerTwoRef.current.scrollWidth - scrollerTwoRef.current.offsetWidth})
    }
  }, [])

  useEffect(() => {
    function animateSlider() {
      if (isInView && sliderRef.current && scrollerOneRef.current && scrollerTwoRef.current) {
        const slider = sliderRef.current
        const scrollerOne = scrollerOneRef.current
        const scrollerTwo = scrollerTwoRef.current
        const sliderWidth = slider.clientWidth
        const sliderHeight = slider.clientHeight
        const sliderTop = slider.offsetTop
        const scrolled = window.scrollY
        const maxScrollLeft = sliderWidth - scrollerOne.clientWidth

        const start = sliderTop - window.innerHeight
        const end = sliderTop + sliderHeight - start
        const percent = ((scrolled - start) * 100) / end

        const newScrollPosition = (percent / 100) * maxScrollLeft

        scrollerOne.scrollLeft = newScrollPosition * 0.3
        scrollerTwo.scrollLeft = (scrollerTwo.scrollWidth - scrollerTwo.offsetWidth) - newScrollPosition * 0.3;
      }
    }
    window.addEventListener('scroll', animateSlider)
    return () => {
      window.removeEventListener('scroll', animateSlider)
    }
  }, [scrollDirection, isInView, controls])

  return (
    <section className="py-17.5 pb-400">
      <SectionHeader
        subtitle="Award Winning WordPress Agency"
        title={
          <Fragment>
            They Trust <span className="text-primary">Us</span>
          </Fragment>
        }
      />

      <div
        ref={scrollerOneRef}
        className="scrollbar-hidden pointer-events-none mt-10 overflow-x-auto"
      >
        <motion.div ref={sliderRef} animate={controls} className="flex w-fit gap-4">
          {[...awardsOne, ...awardsTwo].map((award, index) => (
            <div
              key={index}
              className={cn(
                'rounded-full-round flex items-center px-10.5 py-7.75',
                award.differ ? 'bg-primary' : 'bg-paper'
              )}
            >
              {award.icon}
            </div>
          ))}
        </motion.div>
      </div>

      <div
        ref={scrollerTwoRef}
        className="scrollbar-hidden pointer-events-none mt-4 overflow-x-auto"
      >
        <motion.div animate={controls} className="flex w-fit justify-end gap-4">
          {[...awardsOne, ...awardsTwo].map((award, index) => (
            <div
              key={index}
              className={cn(
                'rounded-full-round flex items-center px-10.5 py-7.75',
                award.differ ? 'bg-primary' : 'bg-paper'
              )}
            >
              {award.icon}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const awardsOne = [
  {
    differ: false,
    icon: <AwardOne />
  },
  {
    differ: false,
    icon: <AwardTwo />
  },
  {
    differ: false,
    icon: <AwardThree />
  },
  {
    differ: false,
    icon: <AwardFour />
  },
  {
    differ: true,
    icon: <AwardFive />
  },
  {
    differ: false,
    icon: <AwardSix />
  }
]

const awardsTwo = [
  {
    differ: false,
    icon: <AwardSeven />
  },
  {
    differ: false,
    icon: <AwardEight />
  },
  {
    differ: true,
    icon: <AwardNine />
  },
  {
    differ: false,
    icon: <AwardTen />
  },
  {
    differ: false,
    icon: <AwardEleven />
  },
  {
    differ: false,
    icon: <AwardTwelve />
  },
  {
    differ: false,
    icon: <AwardThirteen />
  }
]

export default TrustSection
