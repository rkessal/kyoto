'use client'
import useMouseDirection from '@/app/hooks/useMouseDirection'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const fromTop = 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
const fromDown = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'

const useSelected = ({ ref }) => {
  const { dir } = useMouseDirection()
  const animatingRef = useRef(false)

  const { contextSafe } = useGSAP(() => {
    gsap.set(ref.current, {
      clipPath: fromDown,
    })
  })

  const onMouseEnter = contextSafe(async () => {
    if (dir === 'down') {
      gsap.set(ref.current, {
        clipPath: fromDown
      })
    }

    if (dir === 'up') {
      gsap.set(ref.current, {
        clipPath: fromTop
      })
    }
    gsap.to(ref.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'power4.out',
      duration: 1,
      onComplete: () => {
        animatingRef.current = false
      }
    })
  })

  const onMouseLeave = contextSafe(() => {
    if (dir === 'down') {
      gsap.to(ref.current, {
        clipPath: fromTop,
        ease: 'power4.out',
        duration: 1,
        delay: 0.2,
        onComplete: () => {
          animatingRef.current = false
        }
      })
    }

    if (dir === 'up') {
      gsap.to(ref.current, {
        clipPath: fromDown,
        ease: 'power4.out',
        duration: 1,
        delay: 0.2,
        onComplete: () => {
          animatingRef.current = false
        }
      })
    }
  })

  return { onMouseEnter, onMouseLeave, isAnimating: animatingRef.current }
}

export default useSelected
