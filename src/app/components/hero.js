import Image from "next/image"
import Link from "next/link"
import Arrow from "./arrow"

const Hero = () => {
  return (
      <div className="flex flex-row w-full h-[109.7rem]  mb-[2rem]">
        <figure className="h-[109.7rem] w-[86.4rem] relative">
          <Image loading="eager" src='/hero1.png' height={1097} width={864} className="w-full h-full" alt="" />
        </figure>
        <figure className="h-[109.7rem] w-[86.4rem] relative">
          <Image loading="eager" src='/hero2.png' height={1097} width={864} className="w-full h-full" alt="" />
        </figure>
        <div className="flex flex-row absolute right-[30.7rem] top-[19.3rem] w-[26.4rem]">
          <p className="uppercase w-[12.2rem]">Welcome</p>
          <p className="w-[12.2rem] ml-[2rem]">To a world where each thread tells a story of heritage, balance, and modernity.</p>
        </div>
        <div className="flex flex-col items-center text-center absolute top-[68.4rem] w-[25.1rem] left-[50%] translate-x-[-50%]">
          <p>It is dialogue between wisdom and purity, each garment exists as a vessel of harmony and an elevated state of mind</p>
          <Link className="flex items-center flex-col" href='/collections'>
            <button className="uppercase mt-[1.7rem] mb-[0.5rem]">collections</button>
            <Arrow />
          </Link>
        </div>
      </div>
  )
}

export default Hero