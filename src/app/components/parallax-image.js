'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import useImageParallax from '../hooks/useParallax'

const ParallaxImage = ({...props}) => {
  const container = useRef(null)
  const img = useRef(null)

  useImageParallax({container, img, intensity: 15})

  return (
    <figure ref={container} className='h-full w-full overflow-hidden' >
      <Image ref={img} className='w-full h-full scale-[1.2] object-cover' {...props}/>
    </figure>
  )
}

export default ParallaxImage