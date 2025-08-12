import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { ComponentProps } from 'react'
import { Button } from '../ui/button'

type Props = ComponentProps<'button'> & LinkProps

export default function LinkButton({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  onClick,
  className,
  children,
  ...props
}: Props) {
  return (
    <Button
      asChild
      className={cn(
        'h-14 rounded-lg border-2 px-8.75 font-extrabold transition-all duration-300 hover:bg-transparent hover:text-white',
        className
      )}
      {...props}
    >
      <Link {...{ href, as, replace, scroll, shallow, passHref, onClick }}>{children}</Link>
    </Button>
  )
}
