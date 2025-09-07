import LinkButton from '../shared/link-button'

export default function HeroSection() {
  return (
    <section className="pt-16.25 pb-11.5 text-center lg:text-start">
      <div className="app-container flex flex-col justify-between gap-10 lg:flex-row">
        <h1 className="text-custom-32 md:text-custom-44 lg:text-custom-54 xl:text-custom-64 mx-auto max-w-[16ch] leading-none font-black uppercase lg:mx-0">
          we create beautiful <span className="text-primary">efficient</span> wordpress websites.
        </h1>
        <div className="mx-auto max-w-[39ch] lg:mx-0">
          <p className="mb-5 text-sm font-medium md:text-base xl:text-xl">
            You need to get positive results when you spend hard earned marketing and promotions
            need to get positive results when you
          </p>
          <LinkButton href="/contact">Get Started</LinkButton>
        </div>
      </div>
    </section>
  )
}
