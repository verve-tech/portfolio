import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { HTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & HTMLAttributes<HTMLAnchorElement> &
  LinkProps

function Button({ children, ...props }: Props) {
  return (
    <Link
      {...props}
      className={cn(
        'bg-primary text-custom-black border-primary block w-fit rounded-lg border-2 px-8.75 py-4.5 font-extrabold transition-all duration-300 hover:bg-transparent hover:text-white',
        props.className
      )}
    >
      {children}
    </Link>
  )
}

export default Button
