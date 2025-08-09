import awardsImage from '@/assets/images/award.png'
import Image from 'next/image'
import ArrowDown from '../svg/arrow-down'
import Asterisks from '../svg/asterisks'
import CircularText from '../svg/circular-text'

export default function AwardsSection() {
    return (
        <section className="relative mt-20 pb-10">
            {/* <div className="absolute -top-60 right-0 h-20 bg-red-500"></div> */}
            <div className="mr-[calc(50vw-36rem)] flex">
                <div className="relative">
                    <Image src={awardsImage} alt="Award Image" />
                    <div className="absolute -top-14 right-14">
                        <div className="animate-spin-slow overflow-hidden rounded-full backdrop-blur-[12px]">
                            <CircularText />
                        </div>
                        <div className="animate-ball-bounce absolute inset-0 m-auto h-fit w-fit">
                            <ArrowDown />
                        </div>
                    </div>
                </div>

                <div className="mt-10 ml-auto w-full max-w-[min(30%,21.6rem)]">
                    <div className="mb-4 border-b border-b-white py-7.5">
                        <span className="text-sub-heading block font-black">
                            13<span className="text-primary">+</span>
                        </span>
                        <span className="block text-xl font-medium">Awards Won</span>
                    </div>

                    <div className="mb-4 border-b border-b-white py-7.5">
                        <span className="text-sub-heading block font-black">
                            500<span className="text-primary">+</span>
                        </span>
                        <span className="block text-xl font-medium">Projects Done</span>
                    </div>

                    <div className="border-b border-b-white py-7.5">
                        <span className="text-sub-heading block font-black">
                            274<span className="text-primary">+</span>
                        </span>
                        <span className="block text-xl font-medium">Brands Trust Us</span>
                    </div>
                </div>

                <Asterisks className="animate-spin-super-slow absolute right-0 translate-x-1/2 -translate-y-28 transform" />
            </div>
        </section>
    )
}
