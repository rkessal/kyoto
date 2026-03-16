'use client'

import { useGSAP } from "@gsap/react"
import CollectionsSelector from "./collections-selector"
import gsap from "gsap"
import SplitType from "split-type"
import { productsOut } from "../animations/products"
import { useSearchParams } from "next/navigation"

const PageCollectionsSelectorWrapper = ({ slug, collection }) => {
  const previous = useSearchParams().get('previous')

  useGSAP(() => {
    const splitText = new SplitType('.split', { 
      types: 'lines', 
      lineClass: 'overflow-y-clip line py-[0.15rem]' 
    })

    splitText.lines.forEach(line => {
      line.innerHTML = `<span class="description-fade-out inline-block description-slide-in align-text-bottom">${line.innerText}</span>`
    })

    gsap.to('.collection', {
      autoAlpha: 1,
    })

    gsap.from('.description-slide-in', {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
    })

    if (!previous) {
      gsap.to('.selector', {
        autoAlpha: 1,
        duration: 2,
        ease: 'power4.inOut'
      })
    } else {
      gsap.set('.selector', {
        autoAlpha: 1
      })
    }
  })

  const transition = () => {
    return new Promise((resolve) => {
      productsOut(() => resolve())
    })
  }

  return (
    <div className="flex flex-col justify-end flex-1 h-[90rem] sticky top-[-25%]">
      <div className="selector opacity-0 w-full relative">
        <CollectionsSelector
          transition={transition}
          current={slug}
          method='path'
        />
      </div>
      <div className="h-[23.5rem] flex items-start flex-col justify-end">
        <div className="collection opacity-0">
          <h1 className="split font-butta text-[1.8rem] tracking-[0.6rem] mb-[1.5rem]">{collection.name}</h1>
          <p className="split font-sans font-light leading-[1.2rem]">{collection.description}</p>
        </div>
      </div>
    </div>
  )

}

export default PageCollectionsSelectorWrapper