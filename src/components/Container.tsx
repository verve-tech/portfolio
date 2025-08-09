import { cn } from '@/lib/utils'
import { HTMLAttributes, ReactNode } from 'react'

type Props = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

function Container({ children, ...props }: Props) {
  return (
    <div {...props} className={cn('mx-auto max-w-320 px-5', props.className)}>
      {children}
    </div>
  )
}

export default Container
