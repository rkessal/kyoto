import React from 'react'
import SizeSelector from './size-selector'
import { urlFor } from '@/sanity/image'
import { getPrice } from '@/app/hooks'
import ProductImage from './product-image'

//@todo: add currency handler
const currentCurrency = 'yen'

const ProductCard = ({ product, productKey, collection, showCollection, index, largeSize }) => {
  const price = getPrice(product.price, currentCurrency)

  return (
    <div className={`flex flex-col relative ${largeSize ? 'w-[83.4rem]' : 'w-[69.2rem]'} `}key={productKey}>
      <div className={`relative mb-[2rem] ${largeSize ? 'h-[80rem]' : 'h-[90rem]'}`}>
        <ProductImage index={index} width={largeSize ? 834 : 692} height={largeSize ? 800 : 900} src={urlFor(product.images[0]).auto('format').url()} />
        <SizeSelector id={productKey} />
      </div>
      {showCollection ? (
        <>
          <p className='w-full bg-lightGray flex items-center h-[2rem] px-[0.5rem] mb-[0.5rem]' >
            {product.name}
          </p>
          <div className='flex flex-row w-full gap-x-[2.5rem] justify-between'>
            <p className='bg-lightGray flex w-full items-center h-[2rem] px-[0.5rem] uppercase font-butta tracking-[0.6rem] pt-[0.4rem] '>{collection}</p>
            <div className='bg-lightGray flex w-full items-center h-[2rem] px-[0.5rem]'>
              {price.formatted}
            </div>
          </div>
        </>
      ) : (
          <div className='flex flex-row w-full gap-x-[0.6rem] justify-between'>
            <p className='bg-lightGray flex w-full items-center h-[2rem] px-[0.5rem]'>{product.name}</p>
            <div className='bg-lightGray flex w-full items-center h-[2rem] px-[0.5rem]'>
              {price.formatted}
            </div>
          </div>
      )}
    </div>
  )
}

export default ProductCard