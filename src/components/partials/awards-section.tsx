import awardsImage from '@/assets/images/award.png'
import ArrowDown from '@/components/svg/arrow-down'
import Asterisks from '@/components/svg/asterisks'
import CircularText from '@/components/svg/circular-text'
import RoundedArrow from '@/components/svg/rounded-arrow'
import Image from 'next/image'

export default function AwardsSection() {
  return (
    <section className="pt-14.25 pr-[calc(50%-675px)] pb-6">
      <div className="flex relative pr-25">
        <div className="relative">
          <Image src={awardsImage} alt="Award Image" className='rounded-se-custom-40 rounded-ee-custom-40' />
          <div className="absolute -top-14 right-14">
            <div className="animate-spin overflow-hidden rounded-full backdrop-blur-[12px]">
              <CircularText />
            </div>
            <div className="animate-ball-bounce absolute inset-0 m-auto h-fit w-fit">
              <ArrowDown />
            </div>
          </div>
        </div>

        <div className="ml-auto w-full max-w-83.75 pt-7.5 pl-10">
          <div className="mb-4 border-b border-b-white py-7.5">
            <span className="text-custom-44 block font-black">
              13<span className="text-primary">+</span>
            </span>
            <span className="block text-xl font-medium">Awards Won</span>
          </div>

          <div className="mb-4 border-b border-b-white py-7.5">
            <span className="text-custom-44 block font-black">
              500<span className="text-primary">+</span>
            </span>
            <span className="block text-xl font-medium">Projects Done</span>
          </div>

          <div className="border-b border-b-white py-7.5">
            <span className="text-custom-44 block font-black">
              274<span className="text-primary">+</span>
            </span>
            <span className="block text-xl font-medium">Brands Trust Us</span>
          </div>
        </div>

        <div className="absolute -top-30 right-0 translate-x-[50%]">
          <div className="animate-spin-slow">
            <Asterisks />
          </div>
        </div>
      </div>

      <div className="relative -top-12.5 w-fit -rotate-183">
        <RoundedArrow />
      </div>
    </section>
  )
}
