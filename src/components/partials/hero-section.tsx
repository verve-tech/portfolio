import LinkButton from '../shared/link-button'

export default function HeroSection() {
  return (
    <section className="pt-16.25 pb-11.5">
      <div className="app-container flex justify-between gap-10">
        <h1 className="text-heading max-w-177 leading-none font-black uppercase">
          we create beautiful <span className="text-primary">efficient</span> wordpress websites.
        </h1>
        <div className="max-w-100">
          <p className="mb-5 text-xl font-medium">
            You need to get positive results when you spend hard earned marketing and promotions
            need to get positive results when you
          </p>
          <LinkButton href="/contact">Get Started</LinkButton>
        </div>
      </div>
    </section>
  )
}
