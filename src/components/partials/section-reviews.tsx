'use client'

import reviewImageOne from '@/assets/images/review-1.png'
import reviewImageTwo from '@/assets/images/review-2.png'
import reviewImageThree from '@/assets/images/review-3.png'
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
    <section className="reviews py-17.5">
      <div className="app-container">
        <SectionHeader
          subtitle="Testimonials"
          title={
            <Fragment>
              What Our Clients <span className="text-primary">Say</span>?
            </Fragment>
          }
        />

        <div className="mt-13 flex items-center justify-between gap-10">
          <div className="">
            <div className="flex items-center justify-center">
              <div className="relative -rotate-90">
                <ReviewCurve
                  className="transition-all duration-2000"
                  style={{ rotate: `${90 - (360 / count) * activeSlide}deg` }}
                />
                {reviews.map((review, i) => {
                  const angle = (360 / count) * i
                  return (
                    <button
                      key={i}
                      className="bg-primary absolute flex cursor-pointer items-center justify-center rounded-full text-xs text-white transition-all duration-2000 select-none"
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

                <div className="bg-primary absolute inset-0 m-auto aspect-square w-[38%] rotate-90 rounded-full">
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
          </div>
          <div className="max-w-152.5">
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
                  <p className="mb-7 text-xl font-medium">“{slide.description}”</p>
                  <span className="text-2xl font-bold">{slide.name}</span>
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
    name: 'Michelle Obama',
    image: reviewImageOne,
    description:
      'Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer Sprache aussieht.'
  },
  {
    rating: 3,
    name: 'Ariana Grande',
    image: reviewImageThree,
    description:
      'Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer Sprache aussieht.'
  },
  {
    rating: 4,
    name: 'Alexander Gibson',
    image: reviewImageTwo,
    description:
      'Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer Sprache aussieht.'
  }
]

export default ReviewsSection
