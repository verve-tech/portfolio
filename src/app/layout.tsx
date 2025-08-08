import Header from '@/components/sections/Header'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Verve',
  description: 'Creative Software Agency'
}

type RootProp = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: RootProp) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
