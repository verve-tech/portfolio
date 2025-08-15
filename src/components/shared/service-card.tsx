import { ComponentProps, ComponentType } from 'react'

interface Props {
  icon: ComponentType<ComponentProps<'svg'>>
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: Props) {
  const Icon = icon
  return (
    <div className="bg-paper group hover:bg-primary rounded-3xl p-10 transition-colors duration-300">
      <div className="bg-custom-black group-hover:bg-foreground mb-6 flex aspect-square w-18 items-center justify-center rounded-full transition-colors duration-300">
        <Icon className="group-hover:text-custom-black transition-colors duration-300" />
      </div>
      <h4 className="group-hover:text-custom-black mb-3 text-2xl font-extrabold transition-colors duration-300">
        {title}
      </h4>
      <p className="group-hover:text-custom-black text-lg font-medium transition-colors duration-300">
        {description}
      </p>
    </div>
  )
}

export default ServiceCard
