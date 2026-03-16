'use client'

import React, { useRef } from 'react'
import SizeSelector from './size-selector'
import { urlFor } from '@/sanity/image'
import { getPrice } from '@/app/hooks'
import ProductImage from './product-image'
import { useGSAP } from '@gsap/react'

//@todo: add currency handler
const currentCurrency = 'yen'

const ProductCard = ({ product, productKey, collection, showCollection, index, largeSize }) => {
  const price = getPrice(product.price, currentCurrency)
  const container = useRef(null)


  return (
    <div ref={container} className={`product product-${index} flex flex-col relative w-full`}key={productKey}>
      <div className={`relative mb-[2rem] ${largeSize ? 'h-[80rem]' : 'h-[90rem]'}`}>
        <ProductImage index={index} width={largeSize ? 834 : 692} height={largeSize ? 800 : 900} src={urlFor(product.images[0]).auto('format').url()} />
        <SizeSelector id={productKey} />
      </div>
      {showCollection ? (
        <>
          <p className='opacity-0 gray-box w-full bg-lightGray flex items-center h-[2rem] px-[0.5rem] mb-[0.5rem]' >
            {product.name}
          </p>
          <div className='flex flex-row w-full gap-x-[2.5rem] justify-between'>
            <p className='opacity-0 gray-box overflow-hidden bg-lightGray flex w-full items-center h-[2rem] px-[0.5rem] uppercase font-butta tracking-[0.6rem] pt-[0.4rem] '>{collection}</p>
            <div className='opacity-0 gray-box overflow-hidden bg-lightGray flex w-full items-center h-[2rem] px-[0.5rem]'>
              {price.formatted}
            </div>
          </div>
        </>
      ) : (
          <div className='flex flex-row w-full gap-x-[0.6rem] justify-between'>
            <p className='opacity-0 gray-box overflow-hidden bg-lightGray flex w-full items-center h-[2rem] px-[0.5rem]'>{product.name}</p>
            <div className='opacity-0 gray-box overflow-hidden bg-lightGray flex w-full items-center h-[2rem] px-[0.5rem]'>
              {price.formatted}
            </div>
          </div>
      )}
    </div>
  )
}

export default ProductCard