'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import collections from '../data/collections'
import { useSearchParams } from 'next/navigation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ANIM_DURATION = 2
const RESET_DELAY = 2000

const CollectionsPreview = () => {
  const searchParams = useSearchParams()
  const [current, setCurrent] = useState(searchParams.get('collection') ?? Object.keys(collections)[0])
  const [animatingOut, setAnimatingOut] = useState(false)
  const [queue, setQueue] = useState(['1'])
  const [animating, setAnimating] = useState(false)
  const resetTimerRef = useRef(null)
  const title = useRef(null)
  const ref = useRef(null)
  const { images, available } = collections[current]

  useGSAP(() => {
    const newCollection = searchParams.get('collection') ?? Object.keys(collections)[0]

    if (newCollection !== current) {
      setAnimatingOut(true) 

      gsap.to('.preview-fade-out', {
        opacity: 0,
        duration: 0.5,
        ease: 'power4.inOut',
        onComplete: () => {
          setCurrent(newCollection)
          setAnimatingOut(false)
        }
      })
    }
  }, [searchParams, current])

  useGSAP(() => {
    if (animatingOut) return
    setAnimating(true)
    const tl = gsap.timeline({
        scrollTrigger: ref.current,
    })
    tl.from(title.current, {
      filter: 'blur(1rem)',
      duration: 0.6,
      opacity: 0
    })
    gsap.set('.preview-slide-in img', {
      clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
    })
    tl.to('.preview-slide-in img', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 2,
      ease: 'power4.inOut',
      onComplete: () => {
        setAnimating(false)
      }
    }, "=")

  }, [current, animatingOut])

  useGSAP(() => {
    setAnimating(true)

    gsap.set('.image-preview:last-child', {
      clipPath:  'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
    })
    gsap.from('.image-preview:last-child img', {
      scale: 1.1,
      duration: 2,
      ease: 'power4.out'
    })
    gsap.to('.image-preview:last-child', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: ANIM_DURATION,
      ease: 'power4.out',
      onComplete: () => setAnimating(false)
    })
  }, { dependencies: [queue[queue.length - 1]] }) 

  const onMouseOver = (i) => {
    setQueue(prev => {
      if (prev[prev.length - 1] !== i) {
        prev = [...prev, i]
      }
      return prev
    })
  }

  useEffect(() => {
    if (animating) {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current)
      }
      return
    }

    resetTimerRef.current = setTimeout(() => {
      setQueue(prev => [prev[prev.length - 1]])
    }, RESET_DELAY)

    return () => clearTimeout(resetTimerRef.current)
  }, [animating])

  return (
    <div ref={ref} key={current} className="flex flex-row preview-fade-out">
      <div className='flex flex-col h-[108rem] overflow-y-hidden mr-[2rem] relative'>
        <span ref={title} className='z-30 absolute top-[50%] left-[50%] -translate-x-[50%] mix-blend-difference text-yellow tracking-[0.6rem] -translate-y-[50%] text-[1.8rem] font-butta'>{collections[current].title}</span>
        {!available && (
          <span className='z-30 absolute mt-[5rem] top-[50%] left-[50%] -translate-x-[50%] text-white tracking-[0.6rem] -translate-y-[50%] text-[1.8rem] font-butta'>
            Coming soon
          </span>
        )}
        <ul className="relative h-[108rem] w-[69.2rem]">
          {queue.map((img, index) => images[img] && (
            <li key={`preview-${img}${index}`} className="absolute top-0 left-0 w-full h-full image-preview preview-slide-in">
              <figure className="relative h-full w-full">
                <Image 
                  loading='eager'
                  src={images[img].normal} 
                  height={1080} 
                  width={692} 
                  className={`h-full w-full object-cover ${!available && 'grayscale brightness-75'}`} 
                  alt="" 
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
      <ul data-lenis-prevent className="relative flex flex-col gap-y-[0.5rem] max-h-[108rem] h-full overflow-y-auto scrollbar-hide w-[12.2rem] preview-slide-in">
        {Object.keys(images).map(img => (
          <CollectionIndex available={available} onMouseOver={() => onMouseOver(img)} key={img} imgUrl={images[img].small} />
        ))}
      </ul>
    </div>
  )
}

const CollectionIndex = ({ imgUrl, available, ...props }) => {
  return (
    <li>
      <figure {...props} className='w-[12.2rem] h-[14rem]'>
        <Image loading='eager' className={`w-full h-full object-cover ${!available && 'grayscale-0 brightness-75'}`} alt='' src={imgUrl} height={140} width={122} />
      </figure>
    </li>
  )
}

export default CollectionsPreview
