'use client'

import logo from '@/assets/images/logo.svg'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import LinkButton from '../shared/link-button'

const links = [
  {
    text: 'Home',
    link: '#hero'
  },
  {
    text: 'Services',
    link: '#services'
  },
  {
    text: 'Projects',
    link: '#projects'
  },
  {
    text: 'Process',
    link: '#process'
  },
  {
    text: 'Reviews',
    link: '#reviews'
  }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <header className="header app-container bg-background/90 sticky top-0 isolate z-8 flex items-center gap-20 pt-7 pb-3 lg:relative lg:py-12.5">
      <Image
        className="relative z-1"
        src={logo}
        height={40}
        alt={process.env.NEXT_PUBLIC_APP_NAME || 'Company Logo'}
      />

      <div
        className={cn(
          'bg-background/50 fixed inset-0 z-9',
          !isMenuOpen ? 'pointer-events-none opacity-0' : 'opacity-full'
        )}
        onClick={toggleMenu}
      />

      <div
        className={cn(
          'bg-paper fixed top-0 right-0 z-10 flex h-[100vh] min-w-80 flex-col justify-between px-10 pt-30 pb-10 transition-all lg:contents',
          isMenuOpen ? 'translate-x-0' : 'translate-x-[100%]'
        )}
      >
        <nav className="flex flex-col gap-6 lg:flex-row">
          {links.map((val, idx) => (
            <Link
              key={idx}
              className="hover:text-primary text-xl font-medium transition-colors duration-300 lg:text-lg"
              href={val.link}
              data-text={val.text}
            >
              {val.text}
            </Link>
          ))}
        </nav>

        <LinkButton href="#contact" className="lg:ml-auto">
          Contact Us
        </LinkButton>
      </div>

      <button
        className="relative z-20 ml-auto block h-10 w-10 cursor-pointer lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <X className="animate-fadeIn absolute inset-0" width={40} height={40} />
        ) : (
          <Menu className="animate-fadeIn absolute inset-0" width={40} height={40} />
        )}
        {/* <X
          className={cn('absolute inset-0', isMenuOpen ? 'animate-fadeIn' : 'animate-fadeOut')}
          width={40}
          height={40}
        />
        <Menu
          className={cn('absolute inset-0', !isMenuOpen ? 'animate-fadeIn' : 'animate-fadeOut')}
          width={40}
          height={40}
        /> */}
      </button>
    </header>
  )
}
