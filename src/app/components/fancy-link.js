import Link from 'next/link'
import React from 'react'

const FancyLink = ({children, active, ...props}) => {
  return (
    <Link {...props} className="relative inline-flex items-center gap-[0.5rem] overflow-hidden group">
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
        <span
          className="absolute bottom-0 left-0 w-full h-[0.15rem] bg-current 
             origin-right scale-x-0 transition-transform duration-700 ease-in-out 
             group-hover:origin-left group-hover:scale-x-100">
        </span>
      </span>
    </Link>

  )
}

export default FancyLink