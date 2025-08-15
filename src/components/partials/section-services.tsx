import { Fragment } from 'react'
import SectionHeader from '../shared/section-header'
import ServiceCard from '../shared/service-card'
import IconCode from '../svg/icon-code'
import IconDesign from '../svg/icon-design'

function ServicesSection() {
  return (
    <section className="pb-35">
      <div className="app-container">
        <SectionHeader
          subtitle="Our Services"
          title={
            <Fragment>
              What Do We <span className="text-primary">Provide</span>?
            </Fragment>
          }
        />

        <div className="grid grid-cols-3 gap-5 pt-16">
          {services.map((val, idx) => (
            <ServiceCard
              key={idx}
              icon={val.icon}
              title={val.title}
              description={val.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: IconCode,
    title: 'Theme Development',
    description:
      'You need to get positive results when you spend hard earned marketing and promotions.'
  },
  {
    icon: IconCode,
    title: 'Plugin Development',
    description:
      'You need to get positive results when you spend hard earned marketing and promotions.'
  },
  {
    icon: IconCode,
    title: 'Ecommerce Site',
    description:
      'You need to get positive results when you spend hard earned marketing and promotions.'
  },
  {
    icon: IconCode,
    title: 'Business Site',
    description:
      'You need to get positive results when you spend hard earned marketing and promotions.'
  },
  {
    icon: IconCode,
    title: 'Custom Coding',
    description:
      'You need to get positive results when you spend hard earned marketing and promotions.'
  },
  {
    icon: IconDesign,
    title: 'UI/UX Design',
    description:
      'You need to get positive results when you spend hard earned marketing and promotions.'
  }
]

export default ServicesSection
