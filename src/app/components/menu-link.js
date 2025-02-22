'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import useMouseDirection from '../hooks/useMouseDirection'
import useSelected from '../animations/useSelected'

const MenuLink = ({children, active, ...props}) => {
  const ref = useRef(null) 
  const {isAnimating, ...handlers} = useSelected({ ref })

  return (
    <Link {...handlers} {...props} className="pr-[4rem] relative inline-flex items-center w-full gap-[0.5rem] overflow-hidden group">
      <span ref={ref} className='block absolute invert w-full h-full top-0 left-0 bg-lightGray'></span>
      {active ? (
        <svg className="invert h-[0.6rem] w-[0.6rem]" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="3" cy="3" r="3" fill="black" />
        </svg>
      ) : (
        <svg className="invert h-[0.6rem] w-[0.6rem]" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="3" cy="3" r="2.5" stroke="#9C9C9C" />
        </svg>
      )}
      <span className="relative inline-block">
        {children}
      </span>
    </Link>

  )
}

export default MenuLink