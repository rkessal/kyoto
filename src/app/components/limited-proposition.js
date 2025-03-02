'use client'
import Image from 'next/image'
import React from 'react'
import SizeSelector from './size-selector'
import ParallaxImage from './parallax-image'
import propositions from '../data/propositions'
import ScrollTriggerWrapper from '../animations/ScrollTriggerWrapper'
import gsap from 'gsap'
import Arrow from './arrow'
import Link from 'next/link'

const LimitedProposition = () => {

  const animationFn = (tl, ref) => {
    gsap.set('figure', {
      clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
    })
  
    tl.to('figure', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 2.5,
      ease: 'power4.out',
    })
  }
  return (
    <div className='mt-[15rem]'>
      <h1 className='text-center uppercase font-butta tracking-[0.6rem] text-[2rem] mb-[4rem]'>Limited proposition</h1>
      <div className='flex px-[2rem] flex-wrap w-full justify-between gap-y-[4.5rem]'>
       {Object.keys(propositions).map(key => (
        <div className='flex flex-col relative w-[83.4rem]' key={key}>
          <div className='relative mb-[2rem] h-[80rem]'>
            <ScrollTriggerWrapper 
              animationFn={animationFn}
              params={{start: 'top 90%'}}
            >
              <ParallaxImage loading='eager' alt='' width={834} height={800} src={propositions[key].image}  />
            </ScrollTriggerWrapper>
            <SizeSelector id={key} />
          </div>
          <p className='w-full bg-lightGray flex items-center h-[2rem] px-[0.5rem] mb-[0.5rem]' >
{propositions[key].title}
          </p>
          <div className='flex flex-row w-full gap-x-[2.5rem] justify-between'>
            <p className='bg-lightGray flex w-full items-center h-[2rem] px-[0.5rem] uppercase font-butta tracking-[0.6rem] pt-[0.4rem] '>{propositions[key].collection}</p>
            <select className='bg-lightGray flex w-full items-center h-[2rem] px-[0.5rem]'>
              {Object.keys(propositions[key].prices).map(cur => (
                <option key={`cur-${propositions[key].title}-${cur}`}>
                  {propositions[key].prices[cur]}
                </option>
              ))}
            </select>
          </div>
        </div>
       ))}
      </div>
      <div className='w-full flex flex-col items-center justify-center mt-[4rem]'>
        <Link href='/collections' className='uppercase'>
        <span className='block mb-[0.5rem]'>view all</span>
          <Arrow />
        </Link>
      </div>
    </div>
  )
}


export default LimitedProposition