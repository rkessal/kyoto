'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ProductImage = (props) => {
  const [loaded, setLoaded] = useState(false)
  const container = useRef(null)
  const img = useRef(null)
  const { index } = props

  useGSAP(() => {
    if (!container.current || !img.current) return
    const tl = gsap.timeline()
    gsap.set(container.current, { autoAlpha: 0 })

    gsap.set(`.product-${index} .gray-box`, {
      clipPath: 'inset(0% 100% 0% 0%)',
    })

    gsap.set(`.product .size-selector-container`, {
      autoAlpha: 0,
      scale: 0,
      rotate: '45deg',
    })

    gsap.set(container.current, {
      clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
    })

    gsap.set(img.current, {
      yPercent: 0,
      autoAlpha: 0,
      filter: 'blur(10px)',
    })

    tl.to(img.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })

    setLoaded(true)
    tl.to(container.current, { autoAlpha: 1, duration: 0, delay: 0.3 })

    if (!loaded) return

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: '+=200px bottom',
      },
      delay: 0.4,
    })
    tl2.set(img.current, { scale: 1.4 })

    tl2.to(img.current, {
      autoAlpha: 1,
      duration: 2,
      filter: 'blur(0px)',
    })
      .to(img.current, {
        scale: 1.2,
        duration: 2.5,
        ease: 'power1.out',
      }, '=')
      .to(container.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 2,
        ease: 'power4.inOut',
      }, '=')
      .to(`.product-${index} .gray-box`, {
        autoAlpha: 1,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.8,
        ease: 'power4.inOut'
      }, '=')
      .to(`.product-${index} .size-selector-container`, {
        autoAlpha: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.inOut',
        rotate: '0deg',
      }, '<0.6')

  }, [loaded])


  return (
    <figure style={{ display: loaded ? 'block' : 'none' }} ref={container} className='h-full w-full overflow-hidden' >
      <Image alt='' ref={img} className='w-full h-full object-cover' {...props} />
    </figure>
  )
}

export default ProductImage