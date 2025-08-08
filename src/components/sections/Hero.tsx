import Button from '../Button'
import Container from '../Container'

function Hero() {
  return (
    <section className="pt-16.25 pb-11.5">
      <Container>
        <div className="flex justify-between gap-10">
          <h1 className="text-custom-64 max-w-177 leading-[1] font-black uppercase">
            we create beautiful <span className="text-primary">efficient</span> wordpress websites.
          </h1>
          <div className="max-w-100">
            <p className="mb-5 text-xl font-medium">
              You need to get positive results when you spend hard earned marketing and promotions
              need to get positive results when you
            </p>
            <Button href="#contact-us">Get Started</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
