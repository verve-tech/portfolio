import img from '@/assets/images/process.png'
import Image from 'next/image'
import Asterisks from '../svg/asterisks'

function ProcessSection() {
  return (
    <section className="py-17.5 pl-[calc(50%-636px)]">
      <div className="flex justify-between gap-10 pl-5">
        <div className="max-w-126.25">
          <h2 className="text-custom-44 leading-custom-1 mb-10 font-black uppercase">
            What’s Our <span className="text-primary">Creative</span> Pocess?
          </h2>

          <div className="">
            <div className="mb-8 flex items-start gap-6">
              <div className="bg-primary flex aspect-square w-16 items-center justify-center rounded-full">
                <Asterisks className="h-6 w-6 animate-spin text-black" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-extrabold">Empathize</h3>
                <p className="text-lg font-medium">
                  Nam eget aliquam facilisis tortor, massa. Elementum
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
                  Nam eget aliquam facilisis tortor, massa. Elementum
                </p>
              </div>
            </div>

            <div className="mb-8 flex items-start gap-6">
              <div className="bg-primary flex aspect-square w-16 items-center justify-center rounded-full">
                <Asterisks className="h-6 w-6 animate-spin text-black" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-extrabold">Ideate</h3>
                <p className="text-lg font-medium">
                  Nam eget aliquam facilisis tortor, massa. Elementum
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-primary flex aspect-square w-16 items-center justify-center rounded-full">
                <Asterisks className="h-6 w-6 animate-spin text-black" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-extrabold">Launch</h3>
                <p className="text-lg font-medium">
                  Nam eget aliquam facilisis tortor, massa. Elementum
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-custom-40">
          <Image src={img} alt="" className="rounded-ss-custom-40 rounded-es-custom-40" />
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
