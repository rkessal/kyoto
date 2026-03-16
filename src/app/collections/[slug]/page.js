import { client } from "@/sanity/client";
import ProductCard from "@/app/components/product-card";
import PageCollectionsSelectorWrapper from "@/app/components/page-collections-selector-wrapper";
import PageProductsWrapper from "@/app/components/page-products-wrapper";

export default async function Page({ params }) {
  const { slug } = await params
  const collection = await client.fetch(`*[_type == "collection" && slug.current == $slug][0]{ 
    name,
    description,
    slug,
  }`, { slug });
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
    <div className="collection-page flex flex-row gap-x-[2rem] font-sans font-light leading-[1.2rem] mt-[6rem] px-[2rem]">
      <PageProductsWrapper slug={slug} products={products} />
      <PageCollectionsSelectorWrapper 
        collection={collection} 
        slug={slug} 
      />
    </div>
  );
}
