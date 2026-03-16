import Arrow from './arrow'
import Link from 'next/link'
import ProductCard from './product-card'
import { client } from '@/sanity/client'

const LimitedProposition = async () => {
  const products = await client.fetch(`*[
  _type == "product" &&
  $slug in collection[]->slug.current
  ]{
    _id,
    name,
    images,
    price,
    'collections': collection[]->{
      name, 
      slug
    }
  }`, { slug: 'limited-propositions' });

  return (
    <div className='mt-[15rem]'>
      <h1 className='text-center uppercase font-butta tracking-[0.6rem] text-[2rem] mb-[4rem]'>Limited proposition</h1>
      <div className='grid grid-cols-2 gap-[2rem] [&>*:last-child:nth-child(odd)]:col-span-2 px-[2rem] w-full justify-between gap-y-[4.5rem]'>
        {products.map((product, index) => {
          const collection = product.collections.filter(col => col.slug.current !== 'limited-propositions')[0]
          return (
            <ProductCard 
              index={index}
              product={product}
              collection={`${collection.name} collection`}
              showCollection={true}
              key={product._id}
              productKey={product._id} 
              largeSize={true}
            />
          )
        })}
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