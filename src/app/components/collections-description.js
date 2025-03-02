'use client'
import React, { useRef, useState, useEffect } from 'react'
import collections from '../data/collections'
import { useSearchParams } from 'next/navigation'
import Arrow from './arrow'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import gsap from 'gsap'

const CollectionsDescription = () => {
  const searchParams = useSearchParams()
  const [current, setCurrent] = useState(searchParams.get('collection') ?? Object.keys(collections)[0])
  const [animatingOut, setAnimatingOut] = useState(false)

  const ref = useRef(null)
  const arrowRef = useRef(null)

  useGSAP(() => {
    const newCollection = searchParams.get('collection') ?? Object.keys(collections)[0]

    if (newCollection !== current) {
      setAnimatingOut(true) 

      gsap.to('.fade-out', {
        opacity: 0,
        yPercent: 15,
        duration: 0.5,
        ease: 'power4.out',
        onComplete: () => {
          setCurrent(newCollection)
          setAnimatingOut(false)
        }
      })
    }
  }, [searchParams, current])

  const { description, title, available } = collections[current]

  useGSAP(() => {
    if (animatingOut || !ref.current || !arrowRef.current) return

    const splitText = new SplitType('.split', { 
      types: 'lines', 
      lineClass: 'overflow-y-clip line py-[0.15rem]' 
    })

    splitText.lines.forEach(line => {
      line.innerHTML = `<span class="fade-out inline-block slide-in align-text-bottom">${line.innerText}</span>`
    })

    const tl = gsap.timeline({
      scrollTrigger: ref.current
    })

    tl.from('.slide-in', {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
    })

    tl.from(arrowRef.current, {
      opacity: 0,
      yPercent: 50,
      ease: 'power4.out',
      duration: 1
    }, '-=0.8')

  }, [title, animatingOut])

  return (
    <div key={current} ref={ref} className="mt-[7.5rem]">
      <h2 className="split capitalize tracking-[0.6rem] font-butta text-[2rem] mb-[1.5rem]">
        {title}
      </h2>
      <p className="split mb-[2rem] w-[24.6rem]">{description.long}</p>
      <Link className={`${available ? 'inline-block' : 'hidden'} fade-out `} ref={arrowRef} href={`/collections/${current}`}>
        <Arrow />
      </Link>
    </div>
  )
}

export default CollectionsDescription
