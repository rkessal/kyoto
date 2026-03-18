'use client'
import React, { useRef } from 'react'
import useSelected from '../animations/useSelected'
import TransitionLink from './transition-link'

const MenuLink = ({children, active, onClick, ...props}) => {
  const ref = useRef(null) 
  const {isAnimating, ...handlers} = useSelected({ ref })

  return (
    <TransitionLink data-navbar-active={active} onClick={onClick} {...handlers} {...props} className="pr-[4rem] relative inline-flex items-center w-full gap-[0.5rem] overflow-hidden group">
      <span ref={ref} className='pointer-events-none block absolute invert w-full h-full top-0 left-0 bg-lightGray'></span>
        <div className='relative'>
          <svg className="invert h-[0.6rem] w-[0.6rem]" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="2.5" stroke="#9C9C9C" />
          </svg>
        <svg className={`nav-link-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invert h-[0.6rem] w-[0.6rem] scale-0`} viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="3" cy="3" r="3" fill="black" />
        </svg>
        </div>
      {/* {active ? (
      ) : (
        <svg className="invert h-[0.6rem] w-[0.6rem]" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="3" cy="3" r="2.5" stroke="#9C9C9C" />
        </svg>
      )} */}
      <span className="relative inline-block">
        {children}
      </span>
    </TransitionLink>

  )
}

export default MenuLink