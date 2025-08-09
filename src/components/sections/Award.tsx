import Image from 'next/image'
import awardImage from '../../assets/img/award.png'
import ArrowDown from '../svg/ArrowDown'
import Asterisk from '../svg/Asterisk'
import CircularText from '../svg/CircularText'

function Award() {
  return (
    <section className="pt-14.25 pr-[calc(50%-820px)] pb-6">
      {/* <Container className="max-w-360"> */}
      <div className="flex">
        <div className="relative">
          <Image src={awardImage} alt="Award Image" />
          <div className="absolute -top-14 right-14">
            <div className="animate-spin overflow-hidden rounded-full backdrop-blur-[12px]">
              <CircularText />
            </div>
            <div className="animate-ball-bounce absolute inset-0 m-auto h-fit w-fit">
              <ArrowDown />
            </div>
          </div>
        </div>

        <div className="ml-auto w-full max-w-83.75 pt-21.75 pl-10">
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

        <div className="-translate-y-30">
          <div className="animate-spin-slow">
            <Asterisk />
          </div>
        </div>
      </div>
      {/* </Container> */}
    </section>
  )
}

export default Award
