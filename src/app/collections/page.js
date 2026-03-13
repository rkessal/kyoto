import ProductCard from "../components/product-card";
import collections from "../data/collections";
import propositions from "../data/propositions";

export default function Collection() {
  return (
    <div className="font-sans font-light leading-[1.2rem] mt-[5.3rem] px-[2rem]">
      <div className="max-w-[140.4rem] w-full flex flex-wrap gap-[2rem]">
       {Object.keys(propositions).map(key => (
        <ProductCard products={propositions} key={key} productKey={key} />
       ))}
      </div>
    </div>
  );
}
