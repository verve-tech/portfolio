'use client'

import reviewImageOne from '@/assets/images/testimonial-1.png'
import reviewImageTwo from '@/assets/images/testimonial-2.png'
import reviewImageThree from '@/assets/images/testimonial-3.png'
import Image from 'next/image'
import { Fragment, useRef, useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import ReviewSliderButtons from '../shared/review-slider-buttons'
import SectionHeader from '../shared/section-header'
import IconQuote from '../svg/icon-quote'
import RatingStar from '../svg/rating-star'
import ReviewCurve from '../svg/review-curve'

function ReviewsSection() {
  const swiperRef = useRef<SwiperRef>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const big = 477,
    small = 90,
    count = reviews.length

  const radius = big / 2.5

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index)
    }
  }

  return (
    <section id="reviews" className="reviews py-17.5">
      <div className="app-container">
        <SectionHeader
          subtitle="Testimonials"
          title={
            <Fragment>
              What Our Clients Say About <span className="text-primary">Working</span> With{' '}
              <span className="text-primary">Us</span>?
            </Fragment>
          }
        />

        <div className="-mt-10 flex flex-col items-center justify-between sm:mt-13 sm:gap-10 xl:flex-row">
          <div className="flex aspect-square w-120 scale-70 items-center justify-center sm:scale-100">
            <div className="relative -rotate-90">
              <ReviewCurve
                className="aspect-square transition-all duration-2000"
                style={{ rotate: `${90 - (360 / count) * activeSlide}deg` }}
              />
              {reviews.map((review, i) => {
                const angle = (360 / count) * i
                return (
                  <button
                    key={i}
                    className="absolute flex cursor-pointer items-center justify-center rounded-full text-xs text-white transition-all duration-2000 select-none"
                    onClick={() => goToSlide(i)}
                    style={{
                      width: small,
                      height: small,
                      top: '50%',
                      left: '50%',
                      marginLeft: -small / 2,
                      marginTop: -small / 2,
                      transform: `rotate(${angle - (360 / count) * activeSlide}deg) translate(${radius}px) rotate(-${angle}deg)`
                    }}
                  >
                    <Image
                      className="transition-all duration-2000"
                      style={{ rotate: `${90 + (360 / count) * activeSlide}deg` }}
                      src={review.image}
                      alt={`${review.name} rating`}
                    />
                  </button>
                )
              })}

              <div className="absolute inset-0 m-auto aspect-square w-[38%] rotate-90 rounded-full">
                {reviews.map((review, index) =>
                  index === activeSlide ? (
                    <Image
                      key={index}
                      className="animate-fadeIn aspect-square w-full"
                      src={reviews[activeSlide].image}
                      alt={`${reviews[activeSlide].name} rating`}
                    />
                  ) : (
                    ''
                  )
                )}
                <div className="bg-background absolute top-[32%] right-[-12%] flex aspect-square w-[34%] items-center justify-center rounded-full">
                  <IconQuote />
                </div>
              </div>
            </div>
          </div>

          <div className="-mt-13 max-w-[min(610px,100%)] sm:mt-0">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={20}
              speed={2000}
              className="review-slider"
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            >
              {reviews.map((slide, idx) => (
                <SwiperSlide key={idx} className="group w-full pb-3">
                  <div className="mb-4 flex gap-2">
                    {Array.from({ length: slide.rating }).map((_, index) => (
                      <RatingStar key={index} />
                    ))}
                  </div>
                  <p className="mb-7 text-sm font-medium md:text-xl">“{slide.description}”</p>
                  <span className="text-xl font-bold md:text-2xl">{slide.name}</span>
                </SwiperSlide>
              ))}
              <ReviewSliderButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

const reviews = [
  {
    rating: 5,
    name: 'Emily Carter',
    image: reviewImageOne,
    description:
      'Working with VerveTech was a fantastic experience. Their team quickly understood our product requirements and built a scalable web platform for our startup. Communication was smooth throughout the project, and the final result exceeded our expectations.'
  },
  {
    rating: 4,
    name: 'Kwame Mensah',
    image: reviewImageThree,
    description:
      'VerveTech helped us transform our idea into a fully functional mobile application. The developers were highly skilled and delivered the project on time. I especially appreciated their transparency and problem-solving approach.'
  },
  {
    rating: 4,
    name: 'Javier Morales',
    image: reviewImageTwo,
    description:
      'We hired VerveTech to develop a custom web application for our business operations. Their team delivered a fast, well-structured platform that improved our workflow significantly. I would definitely work with them again.'
  }
]

export default ReviewsSection
