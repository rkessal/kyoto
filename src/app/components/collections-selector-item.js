import React from 'react'

const CollectionsSelectorItem = ({ index, title, number, description }) => {
  const selected = index === '01'
  return (
    <div className={`flex flex-row py-[1.5rem] px-[2rem] gap-x-[3rem] ${selected && 'bg-lightGray'}`}>
      <span>{index}</span>
      <div>
        <div className='flex flex-row items-start'>
          <h3 className='capitalize font-butta text-[2rem] tracking-[0.6rem]'>{title}</h3>
          <div className='ml-[1rem] inline-block'>({number})</div>
        </div>
        <p className='mt-[0.5rem] capitalize'>{description}</p>
      </div>
    </div>
  )
}

export default CollectionsSelectorItem