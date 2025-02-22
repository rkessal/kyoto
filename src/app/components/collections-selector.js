'use client'
import React, { useRef } from 'react'
import CollectionsSelectorItem from './collections-selector-item'
import collections from '../data/collections'
import { useSearchParams } from 'next/navigation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CollectionsSelector = () => {
  const ref = useRef(null)
  const current = useSearchParams().get('collection')
  const size = (100 / Object.keys(collections).length).toFixed(2)

  useGSAP(() => {
    gsap.to(ref.current, {
      yPercent: Object.keys(collections).indexOf(current) * 100,
      duration: 1,
      ease: 'power4.inOut'
    })
  }, { dependencies: [current]})

  return (
    <div className="ml-auto w-[44.7rem] absolute right-0 top-[40.5rem]">
      <span
        ref={ref}
        className='absolute w-full top-0 left-0 bg-lightGray z-30 pointer-events-none'
        style={{ height: `${size}%` }}
      />
      {Object.keys(collections).map((key) => (
        <CollectionsSelectorItem
          key={key}
          {...collections[key]}
        />
      ))}
    </div>
  )
}

export default CollectionsSelector