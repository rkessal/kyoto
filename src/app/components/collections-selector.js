'use client'
import React, { useRef } from 'react'
import CollectionsSelectorItem from './collections-selector-item'
import collections from '../data/collections'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRouter, useSearchParams } from 'next/navigation'

const CollectionsSelector = ({ current, method, transition }) => {
  const previous = useSearchParams().get('previous') ?? ''
  const router = useRouter()
  const ref = useRef(null)
  const size = (100 / Object.keys(collections).length).toFixed(2)

  useGSAP(() => {
    if (method === 'path') {
      if (previous) {
        gsap.set(ref.current, {
          yPercent: Object.keys(collections).indexOf(previous) * 100,
        })
      } else {
        gsap.set(ref.current, {
          yPercent: Math.max(Object.keys(collections).indexOf(current) * 100, 0),
        })
      }
    }

    gsap.to(ref.current, {
      yPercent: Math.max(Object.keys(collections).indexOf(current) * 100, 0),
      duration: 1,
      ease: 'power4.inOut',
      onComplete: () => {
        if (method === 'query') return
        if (previous) router.replace(`/collections/${current}`, { scroll: false })
      }
    })
  }, { dependencies: [current]})

  return (
    <>
      <span
        ref={ref}
        className='absolute w-full top-0 left-0 bg-lightGray z-30 pointer-events-none'
        style={{ height: `${size}%` }}
      />
      {Object.keys(collections).map((key) => (
        <CollectionsSelectorItem
          key={key}
          current={current}
          {...collections[key]}
          number={Object.keys(collections[key].images).length}
          method={method}
          transition={transition}
        />
      ))}
      </>
  )
}

export default CollectionsSelector