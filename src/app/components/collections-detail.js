'use client'
import React from 'react'
import ParallaxImage from './parallax-image'
import ScrollTriggerWrapper from '../animations/ScrollTriggerWrapper'
import gsap from 'gsap'


const CollectionsDetail = () => {
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
    <div className="pl-[14.2rem]">
      <div className='w-full'>
        <svg className='h-[5.8rem] w-[4.5rem] mb-[0.5rem]' width="45" height="60" viewBox="0 0 45 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.8354 34.6561C44.8354 38.4188 44.3594 41.8414 43.4074 44.9241C42.4554 47.9614 41.0274 50.5908 39.1234 52.8121C37.2648 55.0334 34.9301 56.7334 32.1194 57.9121C29.3541 59.0908 26.1354 59.6801 22.4634 59.6801C18.6554 59.6801 15.3461 59.0908 12.5354 57.9121C9.72477 56.6881 7.3901 54.9881 5.53144 52.8121C3.67277 50.5908 2.2901 47.9388 1.38344 44.8561C0.476771 41.7734 0.0234375 38.3508 0.0234375 34.5881C0.0234375 29.6014 0.839437 25.2494 2.47144 21.5321C4.10344 17.8148 6.5741 14.9134 9.88344 12.8281C13.2381 10.7428 17.4541 9.70011 22.5314 9.70011C27.3821 9.70011 31.4621 10.7428 34.7714 12.8281C38.0808 14.8681 40.5741 17.7694 42.2514 21.5321C43.9741 25.2494 44.8354 29.6241 44.8354 34.6561ZM6.48344 34.6561C6.48344 38.7361 7.0501 42.2494 8.18344 45.1961C9.31677 48.1428 11.0621 50.4094 13.4194 51.9961C15.8221 53.5828 18.8368 54.3761 22.4634 54.3761C26.1354 54.3761 29.1274 53.5828 31.4394 51.9961C33.7968 50.4094 35.5421 48.1428 36.6754 45.1961C37.8088 42.2494 38.3754 38.7361 38.3754 34.6561C38.3754 28.5361 37.1061 23.7534 34.5674 20.3081C32.0288 16.8174 28.0168 15.0721 22.5314 15.0721C18.8594 15.0721 15.8221 15.8654 13.4194 17.4521C11.0621 18.9934 9.31677 21.2374 8.18344 24.1841C7.0501 27.0854 6.48344 30.5761 6.48344 34.6561ZM32.5274 0.860107V5.68811H12.3314V0.860107H32.5274Z" fill="black" />
        </svg>
        <p className='w-[9.1rem]'>
        Textiles of the future, the newest Japanese technologies
        </p>
      </div>
      <div className='flex flex-row w-full'>
        <div className='ml-[14rem] mt-[0.4rem] w-[28.4rem]'>
          <p>A4</p>
          <p>Ethereal Weave™</p>
        </div>
        <div className='mt-[0.4rem] w-[28.4rem]'>
          <p>LTD</p>
          <p>Shadowform™</p>
        </div>
        <div className='mt-[0.4rem] w-[30.3rem] '>
          <div className='w-[28.4rem]'>
          <p className='w-[7.5rem]'>Silent echoes of A capital.</p>
          <p className='w-[10.3rem]'>
            <span className='mb-[]'>Durable <br></br> Balances resilience & elegance. </span>
            <br></br>
            <br></br>
            <span className='block text-justify'>Inspired by the enduring strength of ancient stone carvings.</span>
          </p>
          </div>
        </div>
        <div className='mt-[0.4rem]'>
          <p>A<sup>1</sup></p>
          <p>Luminous Thread™</p>
        </div>
        <div className='mt-[15rem] w-[30.3rem] '>
          <div className='flex flex-row mb-[2.5rem]'>
            <span className='block mr-[2rem] w-[5rem] text-right -ml-[5rem]'>27</span>
            <p>Silent Echoes of an Ancient Capital</p>
          </div>
          <div className='flex flex-row mb-[5rem]'>
            <span className='block mr-[2rem] w-[5rem] text-right -ml-[5rem]'>A4</span>
            <p className='w-[26.4rem] capitalize'>
              Crafted from the fabrics of the future, each piece is designed with unparalleled precision and innovation. Our textiles combine advanced technology with timeless artistry, creating materials that transcend the ordinary.
              <br></br>
              <br></br>
              <br></br>
              These unique fabrics are not merely materials—they are stories. They whisper the harmony of past and future, woven together in designs that honor tradition while embracing the avant-garde.</p>
          </div>
          <div className='flex flex-row mb-[5rem]'>
            <div className='flex flex-row mb-[5rem] mr-[4rem]'>
              <span className='block mr-[2rem] w-[5rem] text-right -ml-[5rem]'>A4</span>
              <p className='w-[10rem] text-justify'>A lightweight, breathable fabric that feels as soft as air, inspired by the seamless flow of traditional Japanese silk.</p>
            </div>
            <div className='flex flex-row mb-[5rem]'>
              <span className='block mr-[2rem] w-[5rem] text-right -ml-[5rem]'>LTD</span>
              <p className='text-justify w-[10.4rem]'>A structured yet flexible material, perfect for architectural silhouettes.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row w-full relative min-h-[50rem]'>
        <p className='uppercase'>fIG.0712</p>
        <div className='h-[50rem] absolute flex flex-row top-0 -ml-[7.1rem] left-[50%] translate-x-[-50%]'>
          <div className='w-[42rem] h-[50rem] relative'>
            <ScrollTriggerWrapper animationFn={animationFn} >
              <ParallaxImage src='/o.png' width={420} height={500} alt='' />
            </ScrollTriggerWrapper>
          </div>
          <div className="absolute w-[30.8rem] -ml-[1rem] origin-bottom-left bottom-0 -rotate-90 ">
            Interwoven fibers that subtly reflect light, evoking the quiet glow of Kyoto&apos;s temples at dusk.
          </div>
          <div className="absolute top-0 -translate-y-full pb-[1rem]">
          A1
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CollectionsDetail