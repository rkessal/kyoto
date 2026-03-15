import { client } from "@/sanity/client";
import Link from "next/link";

export default async function Collections() {
  const collections = await client.fetch(`*[_type == "collection"]{ 
    name,
    slug,
  }`);

  return (
    <div className="font-sans font-light leading-[1.2rem] mt-[5.3rem] px-[2rem]">
      <div className="max-w-[140.4rem] w-full flex flex-wrap gap-[2rem]">
        <ul className="py-96">
          {collections.map(collection => (
            <li key={collection.slug.current} className="font-butta text-6xl">
              <Link href={`/collections/${collection.slug.current}`} key={collection.slug.current}>
                {collection.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
