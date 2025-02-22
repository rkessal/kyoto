import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const DEFAULT_INTENSITY = 20
const useImageParallax = ({ container, img, intensity }) => {
  useGSAP(() => {
    if (!container.current || !img.current) return

    gsap.set(img.current, { yPercent: 0 })

    gsap.to(img.current, {
      yPercent: intensity || DEFAULT_INTENSITY,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })
  })
}

export default useImageParallax
