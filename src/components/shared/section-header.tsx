import { ReactNode } from 'react'
import Asterisks from '../svg/asterisks'

interface Props {
  subtitle: string
  title: ReactNode
}

function SectionHeader({ subtitle, title }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="flex items-center gap-3 text-lg font-medium text-primary bg-primary/13 py-2.5 px-3.25 rounded-4xl leading-[1]">
        <Asterisks width={18} height={18} className="text-primary" />
        {subtitle}
      </h3>
      <h2 className="text-custom-44 font-black uppercase">{title}</h2>
    </div>
  )
}

export default SectionHeader
