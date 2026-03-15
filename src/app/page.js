import CollectionsDetail from "./components/collections-detail";
import LimitedProposition from "./components/limited-proposition";
import CollectionsSelector from "./components/collections-selector";
import CollectionsPreview from "./components/collections-preview";
import CollectionsDescription from "./components/collections-description";
import Hero from "./components/hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="font-sans font-light leading-[1.2rem]">
      <Hero />
      <div className="flex flex-row w-full px-[2rem] mb-[15.4rem]">
        <Suspense>
          <CollectionsPreview />
          <div className="ml-[2rem] pl-[14.2rem] relative w-full">
            <h1 className="uppercase">collections</h1>
            <CollectionsDescription />
            <CollectionsSelector />
          </div>
        </Suspense>
      </div>
      <CollectionsDetail />
      <LimitedProposition />
    </div>
  );
}
