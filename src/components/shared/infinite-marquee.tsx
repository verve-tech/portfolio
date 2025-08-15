'use client'

import { motion } from 'framer-motion'
import { ComponentType, SVGProps } from 'react'

interface InfiniteMarqueeProps {
  images: ComponentType<SVGProps<SVGSVGElement>>[]
  from: number | string
  to: number | string
  color: string
}

function InfiniteMarquee({ images, from, to, color }: InfiniteMarqueeProps) {
  return (
    <div className="my-24 flex gap-16.5">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="flex flex-shrink-0 gap-16.5"
      >
        {images.map((Component, index) => {
          return <Component key={index} className={color} />
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="flex flex-shrink-0 gap-16.5"
      >
        {images.map((Component, index) => {
          return <Component key={index} className={color} />
        })}
      </motion.div>
    </div>
  )
}

export default InfiniteMarquee
