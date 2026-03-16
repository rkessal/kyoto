'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"

const sizes = ['s', 'l', 'm', 'xl']

const SizeSelector = ({ id }) => {
  const [isSelectorOpen, setSelectorOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState(null)
  const container = useRef(null)
  const { contextSafe } = useGSAP(() => {
    gsap.set('.size-selector', {
      autoAlpha: 0,
      scale: 0,
      rotate: '90deg',
    })
  }, { scope: container })

  const handleSizeSelectorClick = contextSafe((e) => {
    if (!isSelectorOpen) {
      const tl = gsap.timeline()
      if (selectedSize) {
        tl.to('.size-selector-selected', {
          autoAlpha: 0,
          duration: 0.2,
          onComplete: () => setSelectorOpen(true)
        }).fromTo('.size-selector-not-selected', {
          autoAlpha: 0,
        }, {
          autoAlpha: 1,
        })
      } else {
        setSelectorOpen(true)
      }
      tl.to('.size-selector', {
        autoAlpha: 1,
        scale: 1,
        rotate: '0deg',
        ease: 'back.out(1)',
        stagger: 0.05,
        duration: 1
      })
      tl.to('.size-selector-text', {
        autoAlpha: 1,
      }, '=')
      tl.to('.size-button', {
        rotate: '45deg'
      }, '=')
    } else {
      const tl = gsap.timeline()
      if (selectedSize) {
        tl.to('.size-selector-not-selected', {
          autoAlpha: 0,
          onComplete: () => setSelectorOpen(false)
        }).fromTo('.size-selector-selected', {
          autoAlpha: 0,
        }, {
          autoAlpha: 1,
        })
      }
      tl.to('.size-selector-text', {
        autoAlpha: 0,
      })
      tl.to('.size-selector', {
        autoAlpha: 0,
        scale: 0,
        rotate: '90deg',
        stagger: 0.05,
        duration: 0.5,
        onComplete: () => setSelectorOpen(false)
      }, '=')
      tl.to('.size-button', {
        rotate: '0deg'
      }, '=')
    }

  })

  const handleSizeClick = contextSafe((size) => {
    if (selectedSize === `${id}_${size}`) {
      setSelectedSize(null)
      return
    }
    setSelectedSize(`${id}_${size}`)
  })

  return (
    <div
      ref={container}
      key={`size-${id}`}
      className={`${isSelectorOpen ? 'bg-white' : selectedSize ? 'bg-lightGray' : 'bg-darkGray'} opacity-0 size-selector-container transition-colors duration-500 ease-in-out h-[4.1rem] w-[4.1rem] mb-[2rem] rounded-full  absolute bottom-0 left-[50%] translate-x-[-50%]`}
    >
      <div onClick={handleSizeSelectorClick} className="size-button w-full h-full cursor-pointer group">
        <span style={{ display: selectedSize && !isSelectorOpen ? 'block' : 'none'}} className='size-selector-selected absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] uppercase'>
          {selectedSize?.split('_')[1]}
        </span>
        <svg style={{ display: !selectedSize || (isSelectorOpen) ? 'block' : 'none'}} className={`${isSelectorOpen ? 'fill-darkGray' : 'fill-white'} size-selector-not-selected z-30 h-[1.5rem] w-[1.5re] opacity-80 group-hover:opacity-100 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] `} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" width="1" height="15" />
          <rect x="15" y="7" width="1" height="15" transform="rotate(90 15 7)" />
        </svg>
      </div>
      <div style={{ display: isSelectorOpen ? 'block' : 'none' }} className="flex flex-col absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-100%] pb-[1rem]">
        <div className="flex flex-row gap-[1rem]">
          {sizes.map(size => (
            <span
              onClick={() => handleSizeClick(size)}
              key={`size-${size}`}
              className={`${selectedSize === `${id}_${size}` ? 'bg-lightGray text-darkGray' : 'bg-darkGray text-white hover:bg-borderGray hover:text-darkGray'} cursor-pointer transition-colors duration-500 ease-in-out  size-selector flex items-center justify-center rounded-full h-[4.1rem] w-[4.1rem] uppercase`}
            >
              {size}
            </span>
          ))}
        </div>
        <p className="size-selector-text capitalize text-white mix-blend-difference text-center mt-6">size grid</p>
      </div>


    </div>
  )
}

export default SizeSelector