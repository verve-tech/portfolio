'use client'

import { cn } from '@/lib/utils'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Fragment, useEffect, useRef, useState } from 'react'
import SectionHeader from '../shared/section-header'

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
      scrollerTwoRef.current.scrollTo({
        left: scrollerTwoRef.current.scrollWidth - scrollerTwoRef.current.offsetWidth
      })
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
        scrollerTwo.scrollLeft =
          scrollerTwo.scrollWidth - scrollerTwo.offsetWidth - newScrollPosition * 0.3
      }
    }
    window.addEventListener('scroll', animateSlider)
    return () => {
      window.removeEventListener('scroll', animateSlider)
    }
  }, [scrollDirection, isInView, controls])

  return (
    <section className="py-17.5">
      <SectionHeader
        subtitle="Our Framework"
        title={
          <Fragment>
            Technologies & Platforms <span className="text-primary">We Work With</span>
          </Fragment>
        }
      />

      <div ref={scrollerOneRef} className="scrollbar-hidden mt-10 overflow-x-auto">
        <motion.div ref={sliderRef} animate={controls} className="flex w-fit gap-4">
          {[...awardsOne, ...awardsOne].map((award, index) => (
            <div
              key={index}
              className={cn(
                'rounded-full-round flex min-w-fit items-center gap-3 px-6 py-3 lg:w-fit lg:px-8 lg:py-6 [&_svg]:w-full lg:[&_svg]:w-fit',
                award.differ ? 'bg-primary' : 'bg-paper'
              )}
            >
              {award.icon}
              <p className={cn('text-lg font-bold', award.differ ? 'text-black' : 'text-white')}>
                {award.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <div ref={scrollerTwoRef} className="scrollbar-hidden mt-4 overflow-x-auto">
        <motion.div animate={controls} className="flex w-fit justify-end gap-4">
          {[...awardsTwo, ...awardsTwo].map((award, index) => (
            <div
              key={index}
              className={cn(
                'rounded-full-round flex min-w-fit items-center gap-3 px-6 py-3 lg:w-fit lg:px-8 lg:py-6 [&_svg]:w-full lg:[&_svg]:w-fit',
                award.differ ? 'bg-primary' : 'bg-paper'
              )}
            >
              {award.icon}
              <p className={cn('text-lg font-bold', award.differ ? 'text-black' : 'text-white')}>
                {award.name}
              </p>
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
    icon: <i className="devicon-javascript-plain colored text-3xl"></i>,
    name: 'JavaScript'
  },
  {
    differ: false,
    icon: <i className="devicon-php-plain colored text-3xl"></i>,
    name: 'PHP'
  },
  {
    differ: false,
    icon: <i className="devicon-typescript-plain colored text-3xl"></i>,
    name: 'TypeScript'
  },
  {
    differ: false,
    icon: <i className="devicon-tailwindcss-original colored text-3xl"></i>,
    name: 'Tailwind'
  },
  {
    differ: false,
    icon: <i className="devicon-css3-plain colored text-3xl"></i>,
    name: 'CSS3'
  },
  {
    differ: false,
    icon: <i className="devicon-html5-plain colored text-3xl"></i>,
    name: 'HTML5'
  },
  {
    differ: true,
    icon: <i className="devicon-sass-original colored text-3xl"></i>,
    name: 'Sass'
  },
  {
    differ: false,
    icon: (
      <img
        className="w-7"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
      />
    ),
    name: 'Figma'
  }
]

const awardsTwo = [
  {
    differ: false,
    icon: <i className="devicon-react-plain colored text-3xl"></i>,
    name: 'React'
  },
  {
    differ: true,
    icon: (
      <img
        className="w-7"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
      />
    ),
    name: 'NextJS'
  },
  {
    differ: false,
    icon: (
      <img
        className="w-7"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
      />
    ),
    name: 'NodeJS'
  },
  {
    differ: false,
    icon: (
      <img
        className="w-7"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
      />
    ),
    name: 'NestJS'
  },
  {
    differ: false,
    icon: (
      <img
        className="w-7 invert-[1]"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg"
      />
    ),
    name: 'Wordpress'
  },
  {
    differ: false,
    icon: (
      <img
        className="w-7"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
      />
    ),
    name: 'Supabase'
  },
  {
    differ: false,
    icon: (
      <img
        className="w-7"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
      />
    ),
    name: 'Firebase'
  }
]

export default TrustSection
