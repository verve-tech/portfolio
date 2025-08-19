'use client'

import RoundedArrow from '@/components/svg/rounded-arrow'
import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import projectImage from '../../assets/images/project-1.png'
import LinkButton from '../shared/link-button'
import IconArrow from '../svg/icon-arrow'

function ProjectsSection() {
  return (
    <section className="relative isolate pt-13.75 pb-35">
      <div className="bg-primary absolute top-0 -z-10 h-[60%] w-full" />

      <div className="app-container">
        <div className="mb-13.75 flex items-center justify-between">
          <h2 className="text-custom-44 text-custom-black max-w-97 leading-[1] font-black uppercase">
            Our Recent Projects We Did
          </h2>

          <LinkButton
            href="/"
            className="bg-custom-black hover:text-custom-black text-foreground border-custom-black ml-auto border-2 hover:bg-transparent"
          >
            All Projects
          </LinkButton>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          loop={true}
          slidesPerView="auto"
          spaceBetween={20}
          speed={2000}
        >
          {[...originalSlides, ...originalSlides].map((slide, idx) => (
            <SwiperSlide key={idx} className="w-full max-w-100">
              <div className="bg-paper flex flex-col overflow-hidden rounded-3xl nth-[even]:flex-col-reverse">
                <div className="p-6">
                  <div className="mb-8.75 flex items-center gap-5">
                    <div className="w-28 border-t-2 border-white" />
                    <h3 className="text-2xl font-extrabold">Landing Page UI</h3>
                  </div>

                  <div className="flex items-center justify-between gap-10">
                    <span className="block text-xl font-medium">
                      Nike Landing Page <br /> Website
                    </span>

                    <div className="bg-primary flex aspect-square w-16 items-center justify-center rounded-full">
                      <IconArrow />
                    </div>
                  </div>
                </div>

                <Image src={projectImage} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <RoundedArrow className="absolute -right-10.5 -bottom-7.75" />
    </section>
  )
}

const originalSlides = [
  { id: 1, color: '#ff6b6b' },
  { id: 2, color: '#feca57' },
  { id: 3, color: '#1dd1a1' },
  { id: 4, color: '#54a0ff' }
]

export default ProjectsSection
