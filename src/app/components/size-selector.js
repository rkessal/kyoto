'use client'

import { useState } from "react"

const sizes = ['s', 'l', 'm', 'xl']

const SizeSelector = ({ id }) => {
  const [selected, setSelected] = useState(false)
  return (
    <div 
      key={`size-${id}`} 
      className={`${selected ? 'bg-white' : 'bg-darkGray '} h-[4.1rem] w-[4.1rem] mb-[2rem] rounded-full cursor-pointer absolute bottom-0 left-[50%] translate-x-[-50%]`}
      onClick={() => setSelected(prev => !prev)}
    >
        <svg className={`${selected ? 'fill-darkGray' : 'fill-white'} h-[1.5rem] w-[1.5re] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] `} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" width="1" height="15"/>
          <rect x="15" y="7" width="1" height="15" transform="rotate(90 15 7)"/>
        </svg>
        {selected && (
        <div className="gap-[1rem] flex flex-col absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-100%] pb-[1rem]">
          <div className="flex flex-row gap-[1rem]">
            {sizes.map(size => (
              <span 
                key={`size-${size}`}
                className="flex items-center justify-center text-white bg-darkGray rounded-full h-[4.1rem] w-[4.1rem] uppercase"
              >
                {size}
              </span>
            ))}
          </div>
          <p className="capitalize text-white mix-blend-difference text-center">size grid</p>
        </div>
        )}
    </div>
  )
}

export default SizeSelector