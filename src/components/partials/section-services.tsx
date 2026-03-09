import { Fragment } from 'react'
import SectionHeader from '../shared/section-header'
import ServiceCard from '../shared/service-card'
import IconCode from '../svg/icon-code'
import IconDeployment from '../svg/icon-deployment'
import IconDesign from '../svg/icon-design'
import IconMobileApp from '../svg/icon-mobile-app'
import IconShopify from '../svg/icon-shopify'
import IconWebApp from '../svg/icon-web-app'

function ServicesSection() {
  return (
    <section id="services" className="pb-35">
      <div className="app-container">
        <SectionHeader
          subtitle="Our Services"
          title={
            <Fragment>
              What Development Services Do We <span className="text-primary">Provide</span>?
            </Fragment>
          }
        />

        <div className="grid grid-cols-1 gap-5 pt-16 md:grid-cols-2 lg:grid-cols-3">
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
    icon: IconDesign,
    title: 'UI/UX Product Design',
    description:
      'Our designers craft intuitive digital experiences that improve usability, increase engagement, and drive product adoption.'
  },
  {
    icon: IconWebApp,
    title: 'Web App Development',
    description:
      'Build scalable web applications using MongoDB, Express, React and Node.js. Our developers create high-performance platforms for startups, SaaS products, and enterprise applications.'
  },
  {
    icon: IconMobileApp,
    title: 'Mobile App Development',
    description:
      'We build cross-platform iOS and Android apps using React Native and Flutter, delivering scalable mobile experiences for startups and businesses.'
  },
  {
    icon: IconCode,
    title: 'WordPress Development',
    description:
      'We design and develop fast, SEO-optimized WordPress websites tailored for businesses, blogs, and eCommerce stores.'
  },
  {
    icon: IconShopify,
    title: 'Shopify Development',
    description:
      'Launch powerful Shopify stores designed to convert visitors into customers. We create custom themes, apps, and scalable eCommerce experiences.'
  },
  {
    icon: IconDeployment,
    title: 'Deployment & DevOps',
    description:
      'We deploy applications to cloud infrastructure with CI/CD pipelines, ensuring secure, fast, and scalable production environments.'
  }
]

export default ServicesSection
