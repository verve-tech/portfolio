import img from '@/assets/images/process.png'
import Image from 'next/image'
import Asterisks from '../svg/asterisks'

function ProcessSection() {
  return (
    <section className="py-17.5 pl-[calc(50%-636px)]">
      <div className="flex flex-col justify-between gap-10 pl-5 lg:flex-row">
        <div className="lg:max-w-140">
          <h2 className="text-custom-44 leading-custom-1 mb-10 font-black uppercase">
            Our <span className="text-primary">Development</span> Process
          </h2>

          <div className="">
            <div className="mb-8 flex items-start gap-6">
              <div className="bg-primary flex aspect-square w-16 items-center justify-center rounded-full">
                <Asterisks className="h-6 w-6 animate-spin text-black" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-extrabold">Empathize</h3>
                <p className="text-lg font-medium">
                  We understand your business goals, product vision, and target audience before
                  starting development.
                </p>
              </div>
            </div>

            <div className="mb-8 flex items-start gap-6">
              <div className="bg-primary flex aspect-square w-16 items-center justify-center rounded-full">
                <Asterisks className="h-6 w-6 animate-spin text-black" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-extrabold">Define</h3>
                <p className="text-lg font-medium">
                  We define the architecture, technology stack, and product roadmap to ensure
                  scalable development.
                </p>
              </div>
            </div>

            <div className="mb-8 flex items-start gap-6">
              <div className="bg-primary flex aspect-square w-16 items-center justify-center rounded-full">
                <Asterisks className="h-6 w-6 animate-spin text-black" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-extrabold">Design & Build</h3>
                <p className="text-lg font-medium">
                  Our designers and developers create intuitive interfaces and high-performance
                  applications.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-primary flex aspect-square w-16 items-center justify-center rounded-full">
                <Asterisks className="h-6 w-6 animate-spin text-black" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-extrabold">Launch & Scale</h3>
                <p className="text-lg font-medium">
                  We deploy your product to production and help scale it with ongoing support and
                  improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-custom-40 ml-auto w-full lg:w-auto">
          <Image src={img} alt="" className="rounded-ss-custom-40 rounded-es-custom-40 w-full" />
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
