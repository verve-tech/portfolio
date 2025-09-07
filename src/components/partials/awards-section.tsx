import awardsImage from '@/assets/images/award.png'
import ArrowDown from '@/components/svg/arrow-down'
import Asterisks from '@/components/svg/asterisks'
import CircularText from '@/components/svg/circular-text'
import RoundedArrow from '@/components/svg/rounded-arrow'
import Image from 'next/image'

export default function AwardsSection() {
  return (
    <section className="pt-[3.5%] pb-6 lg:pr-[calc(50%-675px)]">
      <div className="relative flex w-[98%] flex-col lg:w-auto lg:flex-row lg:pr-25">
        <div className="relative">
          <Image
            src={awardsImage}
            alt="Award Image"
            className="lg:rounded-se-custom-40 lg:rounded-ee-custom-40 rounded-se-lg rounded-ee-lg"
          />
          <div className="absolute -top-[10.5%] right-[10.5%] aspect-square w-[12.284%]">
            <div className="h-full w-full animate-spin overflow-hidden rounded-full backdrop-blur-[12px]">
              <CircularText className="h-full w-full" />
            </div>
            <div className="animate-ball-bounce absolute inset-0 m-auto h-fit w-[19.47%]">
              <ArrowDown className="w-full" />
            </div>
          </div>
        </div>

        <div className="ml-auto flex w-full flex-row gap-4 pt-7.5 pl-10 text-center lg:max-w-83.75 lg:flex-col lg:text-start">
          <div className="flex-1 border-b-white py-7.5 lg:border-b">
            <span className="text-custom-32 md:text-custom-44 block font-black">
              13<span className="text-primary">+</span>
            </span>
            <span className="block text-sm font-medium md:text-xl">Awards Won</span>
          </div>

          <div className="flex-1 border-b-white py-7.5 lg:border-b">
            <span className="text-custom-32 md:text-custom-44 block font-black">
              500<span className="text-primary">+</span>
            </span>
            <span className="block text-sm font-medium md:text-xl">Projects Done</span>
          </div>

          <div className="flex-1 border-b-white py-7.5 lg:border-b">
            <span className="text-custom-32 md:text-custom-44 block font-black">
              274<span className="text-primary">+</span>
            </span>
            <span className="block text-sm font-medium md:text-xl">Brands Trust Us</span>
          </div>
        </div>

        <div className="absolute -top-30 right-0 hidden translate-x-[50%] lg:block">
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
