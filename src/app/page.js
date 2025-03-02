import CollectionsDetail from "./components/collections-detail";
import LimitedProposition from "./components/limited-proposition";
import Link from "next/link";
import { Suspense } from "react";
import LenisScroll from "./components/lenis-scroll";
import CollectionsSelector from "./components/collections-selector";
import CollectionsPreview from "./components/collections-preview";
import CollectionsDescription from "./components/collections-description";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="font-sans font-light leading-[1.2rem]">
      <Hero />
      <Suspense>
        <div className="flex flex-row w-full px-[2rem] mb-[15.4rem]">
          <CollectionsPreview />
          <div className="ml-[2rem] pl-[14.2rem] relative w-full">
            <h1 className="uppercase">collections</h1>
            <CollectionsDescription />
            <CollectionsSelector />
          </div>
        </div>
        <CollectionsDetail />
        <LimitedProposition />
      </Suspense>
      <footer className="px-[2rem] flex flex-col mt-[12rem]">
        <div className="flex flex-row w-full">
          <Link href='mailto:Hello@kyoto.com' className="font-butta text-[11.7rem] mt-[3.8rem] w-1/2">Hello@kyoto.com</Link>
          <div className="flex items-start flex-row w-1/2">
            <p className="uppercase font-butta text-[2rem] ml-[7.9rem] pr-[2rem] mt-[0.3rem]">office</p>
            <p className="mt-[1.3rem] w-[30.5rem]">
              〒600-8216 <br /> 京都府京都市下京区烏丸通塩小路下ル東塩小路町123 <br /> Karasuma-dori, Shichijo-sagaru, Higashi-shiokoji-cho 123, <br /> Shimogyo-ku, Kyoto 600-8216, Japan
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full flex-shrink-0 mt-[12.7rem]">
          <div className="flex items-start flex-row w-1/2 flex-shrink-0 ">
            <p className="uppercase font-butta text-[2rem] pr-[2rem] mt-[0.3rem]">social</p>
            <ul className="capitalize flex flex-row mt-[1.3rem] gap-x-[2rem]">
              <li><Link href='#' >Home</Link></li>
              <li><Link href='#' >Shop</Link></li>
              <li><Link href='#' >About </Link></li>
              <li><Link href='#' >journal</Link></li>
              <li><Link href='#' >contact</Link></li>
            </ul>
          </div>
          <div className="flex items-start flex-row w-1/2 flex-shrink-0">
            <div className="flex flex-row">
              <p className="uppercase font-butta text-[2rem] pr-[2rem] ml-[7.9rem] mt-[0.3rem]">social</p>
              <ul className="capitalize flex flex-col gap-y-[0.8rem] mt-[1.3rem] gap-x-[2rem]">
                <li><Link href='#'>instagram</Link></li>
                <li><Link href='#'>facebook</Link></li>
              </ul>
            </div>
            <div className="flex flex-row">
              <p className="uppercase font-butta text-[2rem] pr-[2rem] ml-[11.4rem] mt-[0.3rem]">contacts</p>
              <ul className="capitalize flex flex-col gap-y-[0.8rem] mt-[1.3rem] gap-x-[2rem]">
                <li><Link href='#'>+81 90-1234-5678</Link></li>
                <li><Link href='#'>Hello@kyoto.com</Link></li>
              </ul>
            </div>
            <div className="flex flex-row">
              <p className="uppercase font-butta text-[2rem] pr-[2rem] ml-[8.7rem] mt-[0.3rem]">work hours</p>
              <ul className="capitalize flex flex-col gap-y-[0.8rem] mt-[1.3rem] gap-x-[2rem]">
                <p>Monday to Friday: <br />9:00 AM - 6:00 PM</p>
              </ul>
            </div>
          </div>
        </div>
        <div className="font-butta uppercase flex flex-row w-full px-[2rem] py-[5rem]">
          <div className="w-1/2">
            <p>©25 kYOTO – All rights reserved</p>
          </div>
          <div className="w-1/2 inline-flex ">
            <Link href='' className="block w-[26.5rem] ml-[15.2rem]">Terms of service</Link>
            <Link href='' className="block w-[26.5rem] ml-[2rem]">Privacy Policy</Link>
            <Link href='' className="block w-[26.5rem] ml-[2rem]">wesbite creation</Link>
          </div>
        </div>
      </footer>
    <LenisScroll />
    </div>
  );
}
