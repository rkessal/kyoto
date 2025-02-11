'use client'
import Image from 'next/image'
import React from 'react'
import { useParams, useSearchParams } from 'next/navigation'


const CollectionsDetail = ({ 
  collections
}) => {
  const searchParams = useSearchParams()
  const collection = searchParams.get('collection')

  console.log(collection)
  // const { logo, description, columns } = data
  return (
    <div className="pl-[14.2rem] grid">
      <div className='w-[12.2rem]'>
        {/* <figure className="h-[6.2rem] w-[4.7rem]">
          <Image src={logo.path} height={logo.height} width={logo.size} className="w-full h-full object-cover" alt="" />
        </figure>
        <p>
          {description}
        </p> */}
      </div>
    </div>
  )
}

export default CollectionsDetail