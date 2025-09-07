'use client'

import RoundedArrow from '@/components/svg/rounded-arrow'
import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import projectImage from '../../assets/images/project-1.png'
import LinkButton from '../shared/link-button'
import IconArrow from '../svg/icon-arrow'

// Import Swiper styles
import 'swiper/css'

function ProjectsSection() {
  return (
    <section className="relative isolate pt-14 pb-16">
      <div className="bg-primary absolute top-0 -z-10 h-[60%] w-full" />

      <div className="app-container">
        <div className="gap-4 mb-14 flex flex-col items-center justify-between text-center sm:flex-row sm:text-start">
          <h2 className="text-background lg:text-custom-44 text-custom-32 max-w-[13ch] leading-tight font-black uppercase">
            Our Recent Projects We Did
          </h2>

          <LinkButton
            href="/"
            className="bg-background hover:text-background text-foreground border-background border-2 hover:bg-transparent sm:ml-auto"
          >
            All Projects
          </LinkButton>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet bg-primary opacity-50',
            bulletActiveClass: 'swiper-pagination-bullet-active !opacity-100'
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={20}
          speed={1000}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
          className="pb-10" // Add padding for pagination
        >
          {originalSlides.map((_, idx) => (
            <SwiperSlide key={idx} className="project-slide">
              <div className="bg-paper flex h-full flex-col overflow-hidden rounded-3xl shadow-lg transition-shadow duration-300 hover:shadow-xl sm:max-w-full max-w-83.5 mx-auto">
                {idx % 2 !== 0 && (
                  <div className="relative h-48 w-full md:h-56">
                    <Image
                      src={projectImage}
                      alt="Project showcase"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex-1 p-6">
                  <div className="mb-9 flex items-center gap-5">
                    <div className="w-10 border-t-2 border-white md:w-28" />
                    <h3 className="text-2xl font-extrabold">Landing Page UI</h3>
                  </div>

                  <div className="flex items-center justify-between gap-10">
                    <span className="block text-sm font-medium md:text-xl">
                      Nike Landing Page <br /> Website
                    </span>

                    <div className="bg-primary hover:bg-opacity-90 flex aspect-square w-12 items-center justify-center rounded-full transition-colors md:w-16">
                      <IconArrow />
                    </div>
                  </div>
                </div>

                {idx % 2 === 0 && (
                  <div className="relative h-48 w-full md:h-56">
                    <Image
                      src={projectImage}
                      alt="Project showcase"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <RoundedArrow className="absolute -right-10 -bottom-20" />
    </section>
  )
}

const originalSlides = [
  { id: 1, color: '#ff6b6b' },
  { id: 2, color: '#feca57' },
  { id: 3, color: '#1dd1a1' },
  { id: 4, color: '#54a0ff' },
  { id: 5, color: '#ff9ff3' },
  { id: 6, color: '#00d2d3' }
]

export default ProjectsSection
