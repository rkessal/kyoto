'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

const ScrollTriggerWrapper = ({ children, animationFn, params }) => {
  const containerRef = useRef(null)

  useGSAP(() => {
    if (!containerRef.current || !animationFn) return
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        ...params
      }
    })
    
    animationFn(tl, containerRef)
  }, {scope: containerRef})

  return <div ref={containerRef}>{children}</div>
}

export default ScrollTriggerWrapper
