import { client } from "@/sanity/client";
import ProductCard from "@/app/components/product-card";

export default async function Page({ params }) {
  const { slug } = await params
  const products = await client.fetch(`*[
  _type == "product" &&
  $slug in collection[]->slug.current
  ]{
    _id,
    name,
    images,
    price,
  }`, { slug });
  return (
    <div className="font-sans font-light leading-[1.2rem] mt-[5.3rem] px-[2rem]">
      <div className="max-w-[140.4rem] w-full flex flex-wrap gap-[2rem]">
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
        {/* {Object.keys(propositions).map(key => (
          <ProductCard collection={slug} products={propositions} key={key} productKey={key} />
        ))} */}
      </div>
    </div>
  );
}
