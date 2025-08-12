import logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import LinkButton from '../shared/link-button'

const links = [
  {
    text: 'Home',
    link: '#hero'
  },
  {
    text: 'Plugins',
    link: '#plugins'
  },
  {
    text: 'Themes',
    link: '#themes'
  },
  {
    text: 'Templates',
    link: '#templates'
  },
  {
    text: 'Blog',
    link: '#blog'
  },
  {
    text: 'Support',
    link: '#support'
  }
]

export default function Header() {
  return (
    <header className="app-container flex items-center gap-20 py-12.5">
      <Image src={logo} height={40} alt={process.env.NEXT_PUBLIC_APP_NAME || 'Company Logo'} />

      <nav className="flex gap-6">
        {links.map((val, idx) => (
          <Link
            key={idx}
            className="hover:text-primary text-lg font-medium transition-colors duration-300"
            href={val.link}
            data-text={val.text}
          >
            {val.text}
          </Link>
        ))}
      </nav>

      <LinkButton href="/" className="ml-auto">
        Contact Us
      </LinkButton>
    </header>
  )
}
