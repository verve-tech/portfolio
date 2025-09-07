import { ReactNode } from 'react'
import Asterisks from '../svg/asterisks'

interface Props {
  subtitle: string
  title: ReactNode
}

function SectionHeader({ subtitle, title }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-primary bg-primary/13 leading-custom-1 flex items-center gap-3 rounded-4xl px-3.25 py-2.5 text-sm font-medium md:text-base lg:text-lg">
        <Asterisks className="text-primary h-3.5 lg:h-4.5 w-3.5 lg:w-4.5 animate-spin" />
        {subtitle}
      </h3>
      <h2 className="lg:text-custom-44 text-custom-32 font-black uppercase">{title}</h2>
    </div>
  )
}

export default SectionHeader
