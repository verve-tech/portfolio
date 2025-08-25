import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'

function ReviewSliderButtons() {
  const swiper = useSwiper()
  const [isBeginning, setIsBeginning] = useState<boolean>(swiper?.isBeginning || true)
  const [isEnd, setIsEnd] = useState<boolean>(swiper?.isEnd || false)

  useEffect(() => {
    if (!swiper) return

    // Update states on slide change
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning)
      setIsEnd(swiper.isEnd)
    }

    // Set initial states
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)

    // Listen for slide changes
    swiper.on('slideChange', handleSlideChange)

    // Cleanup
    return () => {
      swiper.off('slideChange', handleSlideChange)
    }
  }, [swiper])

  if (!swiper) return null

  return (
    <div className="absolute right-18 bottom-0 z-10 flex">
      <button
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
        className={cn(
          'custom-prev flex aspect-square w-15 cursor-pointer items-center justify-center rounded-full',
          isBeginning && 'opacity-50'
        )}
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => {
          swiper.slideNext()
        }}
        disabled={isEnd}
        className={cn(
          'custom-next bg-primary flex aspect-square w-15 cursor-pointer items-center justify-center rounded-full',
          isEnd && 'opacity-50'
        )}
      >
        <ChevronRight color="black" />
      </button>
    </div>
  )
}

export default ReviewSliderButtons
