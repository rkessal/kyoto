'use client'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import SplitType from "split-type"

export const TextReveal = () => {
  useGSAP(() => {
    const splitTexts = document.querySelectorAll('.split-text')
    
    splitTexts.forEach(text => {
      const split = new SplitType(text, { 
        types: 'lines', 
        lineClass: 'overflow-y-clip line py-[0.15rem]' 
      })

      split.lines.forEach(line => {
        line.innerHTML = `<span class="fade-out inline-block slide-in align-text-bottom">${line.innerHTML}</span>`
      })

      gsap.from(text.querySelectorAll('.slide-in'), {
        opacity: 0,
        yPercent: 100,
        duration: 1,
        stagger: 0.1,
        delay: 0.4,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: text,
        }
      })
    })
  }, [])

  return null
}
