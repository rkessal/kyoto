'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import useSelected from '../animations/useSelected'
import { useRouter } from 'next/navigation'

const CollectionsSelectorItem = ({ index, title, number, description, id, method, current, transition }) => {
  const { push } = useRouter()
  const ref = useRef(null)
  const {isAnimating, ...handlers} = useSelected({ ref })

  const handleLink = async (e) => {
    if (method === 'path') {
      if (id === current) return
      e.preventDefault()
      await transition()
      push(`/collections/${id}?previous=${current}`, { scroll: false })
    }
  }

  return (
    <Link 
      {...handlers} 
      scroll={false}
      href={method === 'query' ? `/?collection=${id}` : `/collections/${id}`}
      className='relative flex flex-row py-[1.5rem] px-[2rem] gap-x-[3rem]'
      onClick={handleLink}
    >
      <span ref={ref}
       className='absolute w-full h-full top-0 left-0 bg-veryLightGray'></span>
      <span className='z-30'>{index}</span>
      <div className='z-30'>
        <div className='flex flex-row items-start'>
          <h3 className='capitalize font-butta text-[2rem] tracking-[0.6rem]'>{title}</h3>
          <div className='ml-[1rem] inline-block'>{String(number).padStart(2, 0)}</div>
        </div>
        <p className='mt-[0.5rem] capitalize'>{description.small}</p>
      </div>
    </Link>
  )
}

export default CollectionsSelectorItem