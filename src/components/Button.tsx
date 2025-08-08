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
        'bg-primary text-custom-black block rounded-lg px-7.5 py-4.5 font-extrabold',
        props.className
      )}
    >
      {children}
    </Link>
  )
}

export default Button
