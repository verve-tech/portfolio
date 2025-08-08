import Container from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/svg/logo.svg'
import Button from '../Button'

function Header() {
  return (
    <header className="py-12.5">
      <Container>
        <div className="flex items-center gap-14">
          <Image src={logo} alt="Site Logo" className="h-9.5" />

          <nav className="flex gap-6">
            {links.map((val, idx) => (
              <Link key={idx} className="nav-link" href={val.link} data-text={val.text}>
                {val.text}
              </Link>
            ))}
          </nav>

          <Button href="#contact-us" className="ml-auto">
            Contact Us
          </Button>
        </div>
      </Container>
    </header>
  )
}

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

export default Header
