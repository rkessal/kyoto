'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import useImageParallax from '../hooks/useParallax'

const ParallaxImage = ({...props}) => {
  const container = useRef(null)
  const img = useRef(null)

  useImageParallax({container, img, intensity: 20})

  return (
    <figure ref={container} className='h-full w-full overflow-hidden absolute top-0 left-0' >
      <Image ref={img} className='w-full h-full scale-[1.25] object-cover' {...props}/>
    </figure>
  )
}

export default ParallaxImage