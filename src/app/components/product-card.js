'use client'
import React from 'react'
import SizeSelector from './size-selector'
import ParallaxImage from './parallax-image'
import ScrollTriggerWrapper from '../animations/ScrollTriggerWrapper'
import gsap from 'gsap'

const ProductCard = ({ products, productKey, showCollection, largeSize }) => {
  const animationFn = (tl, ref) => {
    gsap.set('figure', {
      clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
    })
  
    tl.from('img', {
      scale: 1.4,
      duration: 2.5,
      ease: 'power4.out',
    })
      .to('figure', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 2.5,
        ease: 'power4.out',
      }, '=')
  }
  return (
    <div className={`flex flex-col relative ${largeSize ? 'w-[83.4rem]' : 'w-[69.2rem]'} `}key={productKey}>
      <div className={`relative mb-[2rem] ${largeSize ? 'h-[80rem]' : 'h-[90rem]'}`}>
        <ScrollTriggerWrapper
          animationFn={animationFn}
          params={{ start: 'top 90%' }}
        >
          <ParallaxImage loading='eager' alt='' width={834} height={800} src={products[productKey].image} />
        </ScrollTriggerWrapper>
        <SizeSelector id={productKey} />
      </div>
      {showCollection ? (
        <>
          <p className='w-full bg-lightGray flex items-center h-[2rem] px-[0.5rem] mb-[0.5rem]' >
            {products[productKey].title}
          </p>
          <div className='flex flex-row w-full gap-x-[2.5rem] justify-between'>
            <p className='bg-lightGray flex w-full items-center h-[2rem] px-[0.5rem] uppercase font-butta tracking-[0.6rem] pt-[0.4rem] '>{products[productKey].collection}</p>
            <select className='bg-lightGray flex w-full items-center h-[2rem] px-[0.5rem]'>
              {Object.keys(products[productKey].prices).map(cur => (
                <option key={`cur-${products[productKey].title}-${cur}`}>
                  {products[productKey].prices[cur]}
                </option>
              ))}
            </select>
          </div>
        </>
      ) : (
          <div className='flex flex-row w-full gap-x-[0.6rem] justify-between'>
            <p className='bg-lightGray flex w-full items-center h-[2rem] px-[0.5rem] uppercase font-butta tracking-[0.6rem] pt-[0.4rem] '>{products[productKey].title}</p>
            <select className='bg-lightGray flex w-full items-center h-[2rem] px-[0.5rem]'>
              {Object.keys(products[productKey].prices).map(cur => (
                <option key={`cur-${products[productKey].title}-${cur}`}>
                  {products[productKey].prices[cur]}
                </option>
              ))}
            </select>
          </div>
      )}
    </div>
  )
}

export default ProductCard