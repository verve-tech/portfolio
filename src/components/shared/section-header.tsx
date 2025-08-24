import { ReactNode } from 'react'
import Asterisks from '../svg/asterisks'

interface Props {
  subtitle: string
  title: ReactNode
}

function SectionHeader({ subtitle, title }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-primary bg-primary/13 flex items-center gap-3 rounded-4xl px-3.25 py-2.5 text-lg leading-custom-1 font-medium">
        <Asterisks width={18} height={18} className="text-primary animate-spin" />
        {subtitle}
      </h3>
      <h2 className="text-custom-44 font-black uppercase">{title}</h2>
    </div>
  )
}

export default SectionHeader
