'use client'
import React from 'react'
import propositions from '../data/propositions'
import Arrow from './arrow'
import Link from 'next/link'
import ProductCard from './product-card'

const LimitedProposition = () => {
  return (
    <div className='mt-[15rem]'>
      <h1 className='text-center uppercase font-butta tracking-[0.6rem] text-[2rem] mb-[4rem]'>Limited proposition</h1>
      <div className='flex px-[2rem] flex-wrap w-full justify-between gap-y-[4.5rem]'>
       {Object.keys(propositions).map(key => (
        <ProductCard products={propositions} showCollection={true} key={key} productKey={key} />
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