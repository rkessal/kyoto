import Image from 'next/image'
import React from 'react'
import SizeSelector from './size-selector'

const propositions = {
  'mantra-long-sleeve-kimono': {
    title: 'Mantra Long-sleeve kimono',
    collection: 'nara',
    price: {
      amount: '¥ 181 634',
      color: 'black'
    },
    image: '/propositions/mantra-long-sleeve-kimono.png'
  },
  'coat-kimono-eclipse-gown': {
    title: 'coat kimono Eclipse Gown',
    collection: 'kYOTO',
    price: {
      amount: '¥ 150 232',
      color: 'black'
    },
    image: '/propositions/coat-kimono-eclipse-gown.png'
  },
  'kimono-jacket': {
    title: 'kimono jacket',
    collection: 'kYOTO',
    price: {
      amount: '¥ 81 634',
      color: 'white'
    },
    image: '/propositions/kimono-jacket.png'
  },
  'stellar-light-kimono': {
    title: 'Stellar Light Kimono',
    collection: 'tokyo',
    price: {
      amount: '¥ 90 774',
      color: 'white'
    },
    image: '/propositions/stellar-light-kimono.png'
  },
  'hikari-coat': {
    title: 'Hikari Coat',
    collection: 'kyoto',
    price: {
      amount: '¥ 81 634',
      color: 'white'
    },
    image: '/propositions/hikari-coat.png'
  },
  'mantra-dress': {
    title: 'mantra dress',
    collection: 'nara',
    price: {
      amount: '¥ 90 774',
      color: 'white'
    },
    image: '/propositions/mantra-dress.png'
  }
}

const LimitedProposition = () => {
  return (
    <div>
      <h1 className='text-center uppercase font-butta tracking-[0.6rem] text-[2rem] mb-[4rem]'>Limited proposition</h1>
      <div className='flex flex-wrap w-full'>
       {Object.keys(propositions).map(key => (
        <div className='flex items-end justify-between p-[2rem] relative h-[80rem] w-[86.4rem]' key={key}>
          <figure className='h-full w-full overflow-hidden absolute top-0 left-0' >
            <Image className='w-full h-full object-cover' width={864} height={800} src={propositions[key].image} alt=''/>
          </figure>
          <SizeSelector id={key} />
          <div className='z-10 mix-blend-difference text-white '>
            <p className='uppercase'>{propositions[key].collection}</p>
            <p className='capitalize mt-[0.5rem]'>{propositions[key].title}</p>
          </div>
          <div className='z-10 mix-blend-difference text-white '>
            <p>{propositions[key].price.amount}</p>
          </div>
        </div>
       ))}
      </div>
    </div>
  )
}


export default LimitedProposition