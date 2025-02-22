'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)
const LenisScroll = () => {
  const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])
  
  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
  )
}

export default LenisScroll