'use client'

import RoundedArrow from '@/components/svg/rounded-arrow'
import Image from 'next/image'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import projectImage1 from '../../assets/images/projects/cucina.jpeg'
import projectImage2 from '../../assets/images/projects/neowall.jpeg'
import projectImage3 from '../../assets/images/projects/sutech.jpeg'
import projectImage4 from '../../assets/images/projects/vpnguider.jpeg'
import IconArrow from '../svg/icon-arrow'

// Import Swiper styles
import 'swiper/css'

function ProjectsSection() {
  return (
    <section id="projects" className="relative isolate pt-14 pb-16">
      <div className="bg-primary absolute top-0 -z-10 h-[60%] w-full" />

      <div className="app-container">
        <div className="mb-14 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-start">
          <h2 className="text-background lg:text-custom-44 text-custom-32 max-w-[25ch] leading-tight font-black uppercase">
            Our Recent Software & App Development Projects
          </h2>

          {/* <LinkButton
            href="/"
            className="bg-background hover:text-background text-foreground border-background border-2 hover:bg-transparent sm:ml-auto"
          >
            All Projects
          </LinkButton> */}
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
          {projects.map((project, idx) => (
            <SwiperSlide key={idx} className="project-slide">
              <div className="bg-paper mx-auto flex h-full max-w-83.5 flex-col overflow-hidden rounded-3xl shadow-lg transition-shadow duration-300 hover:shadow-xl sm:max-w-full">
                {idx % 2 !== 0 && (
                  <div className="relative h-48 w-full md:h-56">
                    <Image
                      src={project.img}
                      alt={project.name}
                      fill
                      className="object-cover aspect-[1600/1200] h-auto"
                    />
                  </div>
                )}

                <div className="flex-1 p-6">
                  <div className="mb-9 flex items-center gap-5">
                    <div className="w-10 border-t-2 border-white md:w-10" />
                    <h3 className="text-2xl font-extrabold text-primary">{project.name}</h3>
                  </div>

                  <div className="flex items-center justify-between gap-10">
                    <span className="block text-sm font-medium md:text-xl">
                      {project.type} <br /> <span className='text-xs md:text-base font-light'>{project.state}</span>
                    </span>

                    <a href={project.link} target='_blank' className="bg-primary hover:bg-opacity-90 flex aspect-square w-12 items-center justify-center rounded-full transition-colors md:w-16">
                      <IconArrow />
                    </a>
                  </div>
                </div>

                {idx % 2 === 0 && (
                  <div className="relative h-48 w-full md:h-56">
                    <Image
                      src={project.img}
                      alt={project.name}
                      fill
                      className="object-cover aspect-[1600/1200] h-auto"
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

const projects = [
  { id: 1, img: projectImage1, name: "Cucina", type: "Food Brand", link: "https://www.cucinafood.nl", state: "Website" },
  { id: 2, img: projectImage2, name: "Neowall", type: "E-commerce Website", link: "https://neowall.co.uk", state: "Website" },
  { id: 3, img: projectImage3, name: "Sutech", type: "E-commerce/Retail Store", link: "https://sutechngames.com", state: "Website" },
  { id: 4, img: projectImage4, name: "VPN Guider", type: "Affiliate Website", link: "http://vpnguider.com", state: "Website/Web App/Mobile App" },
]

export default ProjectsSection
