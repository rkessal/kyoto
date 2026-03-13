'use client'
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="px-[2rem] flex flex-col mt-[12rem]">
      <div className="flex flex-row w-full">
        <Link href='mailto:Hello@kyoto.com' className="font-butta text-[11.7rem] mt-[3.8rem] w-1/2 split-text">Hello@kyoto.com</Link>
        <div className="flex items-start flex-row w-1/2">
          <p className="uppercase font-butta text-[2rem] ml-[7.9rem] pr-[2rem]  split-text">office</p>
          <p className="mt-[2rem] w-[30.5rem] split-text">
            〒600-8216 <br /> 京都府京都市下京区烏丸通塩小路下ル東塩小路町123 <br /> Karasuma-dori, Shichijo-sagaru, Higashi-shiokoji-cho 123, <br /> Shimogyo-ku, Kyoto 600-8216, Japan
          </p>
        </div>
      </div>
      <div className="flex flex-row w-full flex-shrink-0 mt-[12.7rem]">
        <div className="flex items-start flex-row w-1/2 flex-shrink-0 ">
          <p className="uppercase font-butta text-[2rem] pr-[2rem] split-text">menu</p>
          <ul className="capitalize flex flex-row mt-[2rem] gap-x-[2rem]">
            <li className="split-text"><Link href='#' >Home</Link></li>
            <li className="split-text"><Link href='#' >Shop</Link></li>
            <li className="split-text"><Link href='#' >About </Link></li>
            <li className="split-text"><Link href='#' >journal</Link></li>
            <li className="split-text"><Link href='#' >contact</Link></li>
          </ul>
        </div>
        <div className="flex items-start flex-row w-1/2 flex-shrink-0">
          <div className="flex flex-row">
            <p className="uppercase font-butta text-[2rem] pr-[2rem] ml-[7.9rem]  split-text">social</p>
            <ul className="capitalize flex flex-col gap-y-[0.8rem] mt-[2rem] gap-x-[2rem] split-text">
              <li><Link href='#'>instagram</Link></li>
              <li><Link href='#'>facebook</Link></li>
            </ul>
          </div>
          <div className="flex flex-row">
            <p className="uppercase font-butta text-[2rem] pr-[2rem] ml-[11.4rem]  split-text">contacts</p>
            <ul className="capitalize flex flex-col gap-y-[0.8rem] mt-[2rem] gap-x-[2rem] split-text">
              <li><Link href='#'>+81 90-1234-5678</Link></li>
              <li><Link href='#'>Hello@kyoto.com</Link></li>
            </ul>
          </div>
          <div className="flex flex-row">
            <p className="uppercase font-butta text-[2rem] pr-[2rem] ml-[8.7rem]  split-text">work hours</p>
            <ul className="capitalize flex flex-col gap-y-[0.8rem] mt-[2rem] gap-x-[2rem] split-text">
              <p>Monday to Friday: <br />9:00 AM - 6:00 PM</p>
            </ul>
          </div>
        </div>
      </div>
      <div className="font-butta uppercase flex flex-row w-full py-[5rem] border-t-[1px] border-borderGray mt-[7.2rem]">
        <div className="w-1/2">
          <p className="split-text">©25 kYOTO – All rights reserved</p>
        </div>
        <div className="w-1/2 inline-flex ">
          <Link href='' className="block w-[26.5rem] ml-[15.2rem] split-text">Terms of service</Link>
          <Link href='' className="block w-[26.5rem] ml-[2rem] split-text">Privacy Policy</Link>
          <Link href='' className="block w-[26.5rem] ml-[2rem] split-text">wesbite creation</Link>
        </div>
      </div>
    </footer>
  );
} 