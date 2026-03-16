'use client'

import ProductCard from "./product-card"

const PageProductsWrapper = ({ products, slug }) => {

  return (
      <div className="max-w-[140.4rem] flex-nowrap w-full grid grid-cols-2 gap-[2rem] [&>*:last-child:nth-child(odd)]:col-span-2">
        {products.map((product, index) => (
          <ProductCard
            index={index}
            productKey={product._id}
            collection={slug}
            product={product}
            key={product.name}
            showCollection={false}
            largeSize={false}
          />
        ))}
      </div>
  )
}

export default PageProductsWrapper