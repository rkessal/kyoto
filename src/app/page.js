import Image from "next/image";
import CollectionsSelectorItem from "./components/collections-selector-item";
import collections from "./data/collections";
import CollectionsDetail from "./components/collections-detail";
import LimitedProposition from "./components/limited-proposition";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="font-sans font-light leading-[1.2rem]">
      <div className="flex flex-row w-full h-[109.7rem]  mb-[8.3rem]">
        <figure className="h-[109.7rem] w-[86.4rem] relative">
          <Image src='/hero1.png' height={1097} width={864} className="w-full h-full" alt="" />
        </figure>
        <figure className="h-[109.7rem] w-[86.4rem] relative">
          <Image src='/hero2.png' height={1097} width={864} className="w-full h-full" alt="" />
        </figure>
        <div className="flex flex-row absolute right-[30.7rem] top-[19.3rem] w-[26.4rem]">
          <p className="uppercase w-[12.2rem]">Welcome</p>
          <p className="w-[12.2rem] ml-[2rem]">To a world where each thread tells a story of heritage, balance, and modernity.</p>
        </div>
        <div className="text-center absolute top-[50rem] w-[25.1rem] left-[50%] translate-x-[-50%]">
          <p>It is dialogue between wisdom and purity, each garment exists as a vessel of harmony and an elevated state of mind</p>
          <button className="uppercase mt-[1.7rem]">collections</button>
        </div>
      </div>

      <div className="flex flex-row w-full px-[2rem] mb-[15.4rem]">
        <div className="flex flex-row">
          <figure className="relative h-[108rem] w-[69.2rem] mr-[2rem]">
            <Image src='/col-kyoto1.png' height={1080} width={692} className="h-full w-full object-cover" alt="" />
          </figure>
          <div className="h-[108rem] w-[12.2rem] overflow-y-hidden bg-gray-100">

          </div>
        </div>
        <div className="ml-[2rem] pl-[14.2rem] relative w-full">
          <h1 className="uppercase">collections</h1>
          <div className="mt-[7.5rem]">
            <h2 className="capitalize tracking-[0.6rem] font-butta text-[2rem] mb-[1.5rem]">Kyōto</h2>
            <p className="w-[24.6rem]">Silent echoes of an ancient capital. Kyōto is a tribute to grace and harmony — where tradition flows seamlessly into the present. Each piece embodies the poise of a bygone era, reimagined for today’s discerning eye.</p>
          </div>
          <div className="ml-auto w-[44.7rem] absolute right-0 top-[40.5rem]">
            {collections.map(({index, title, number, description}) => (
              <CollectionsSelectorItem
                key={`${index}-${title}`}
                title={title}
                index={index}
                number={number}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>
      <Suspense>
        <CollectionsDetail />
      </Suspense>
      <LimitedProposition />
      <footer className="px-[2rem] flex flex-col mt-[12rem]">
        <div className="flex flex-row w-full">
          <Link href='mailto:Hello@kyoto.com' className="font-butta text-[11.7rem] mt-[3.8rem] w-1/2">Hello@kyoto.com</Link>
          <div className="flex items-start flex-row w-1/2">
            <p className="uppercase font-butta text-[2rem] ml-[7.9rem] pr-[2rem] mt-[0.3rem]">office</p>
            <p className="mt-[1.3rem] w-[30.5rem]">
            〒600-8216 <br/> 京都府京都市下京区烏丸通塩小路下ル東塩小路町123 <br/> Karasuma-dori, Shichijo-sagaru, Higashi-shiokoji-cho 123, <br/> Shimogyo-ku, Kyoto 600-8216, Japan
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
              <p>Monday to Friday: <br/>9:00 AM - 6:00 PM</p>
            </ul>
          </div>
          </div>
        <div className="flex flex-row w-full flex-shrink-0">
        </div>
        </div>
        <div className="border-t-[0.01rem] border-veryLightGray w-full mt-[7rem]"></div>
        <div className="font-butta uppercase flex flex-row w-full px-[2rem] py-[5rem]">
          <div className="w-1/2">
            <p>©25 kYOTO – All rights reserved</p>
          </div>
          <div className="w-1/2 inline-flex">
            <Link href='' className="block w-[26.5rem] ml-[15.2rem]">Terms of service</Link>
            <Link href='' className="block w-[26.5rem] ml-[2rem]">Privacy Policy</Link>
            <Link href='' className="block w-[26.5rem] ml-[2rem]">wesbite creation</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
