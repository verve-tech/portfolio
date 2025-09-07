import logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import IconDribble from '../svg/icon-dribble'
import IconFacebook from '../svg/icon-facebook'
import IconInstagram from '../svg/icon-instagram'
import IconLinkedin from '../svg/icon-linkedin'
import IconPinterest from '../svg/icon-pinterest'
import IconTwitter from '../svg/icon-twitter'

function Footer() {
  return (
    <footer className="bg-paper py-10">
      <div className="app-container flex flex-wrap items-center gap-8 xl:gap-13">
        <div className="basis-full lg:basis-auto">
          <Image
            className="mx-auto block lg:mx-0"
            src={logo}
            height={40}
            alt={process.env.NEXT_PUBLIC_APP_NAME || 'Company Logo'}
          />
        </div>

        <nav className="flex basis-full justify-center gap-5 lg:basis-auto lg:justify-start xl:gap-11">
          <a
            href="#"
            className="hover:text-primary text-sm font-medium transition-colors duration-300"
            data-text="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-primary text-sm font-medium transition-colors duration-300"
            data-text="Terms & Conditions"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="hover:text-primary text-sm font-medium transition-colors duration-300"
            data-text="Contact"
          >
            Contact
          </a>
          <a
            href="#"
            className="hover:text-primary text-sm font-medium transition-colors duration-300"
            data-text="License"
          >
            License
          </a>
        </nav>

        <div className="ml-auto flex basis-full items-center justify-center gap-5 lg:basis-auto lg:justify-start xl:gap-6.25">
          <a href="#">
            <IconFacebook />
          </a>
          <a href="#">
            <IconTwitter />
          </a>
          <a href="#">
            <IconInstagram />
          </a>
          <a href="#">
            <IconLinkedin />
          </a>
          <a href="#">
            <IconDribble />
          </a>
          <a href="#">
            <IconPinterest />
          </a>
        </div>

        <span className="basis-full text-center text-sm font-medium lg:basis-auto lg:text-start">
          Copyright {new Date().getFullYear()} | wpcone.com
        </span>
      </div>
    </footer>
  )
}

export default Footer
