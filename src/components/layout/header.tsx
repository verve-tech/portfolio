import logo from '@/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

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
        <header className="container flex items-center gap-20 py-12.5">
            <Image
                src={logo}
                height={40}
                alt={process.env.NEXT_PUBLIC_APP_NAME || 'Company Logo'}
            />

            <nav className="flex gap-6">
                {links.map((val, idx) => (
                    <Link
                        key={idx}
                        className="text-xl font-medium"
                        href={val.link}
                        data-text={val.text}
                    >
                        {val.text}
                    </Link>
                ))}
            </nav>

            <Button
                asChild
                className="ml-auto h-14 rounded-lg border-2 px-8.75 font-extrabold transition-all duration-300 hover:bg-transparent hover:text-white"
            >
                <Link href="/">Contact Us</Link>
            </Button>
        </header>
    )
}
