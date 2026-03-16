'use client'
import Image from "next/image"
import MenuLink from "@/app/components/menu-link"
import { useParams, usePathname, useRouter } from "next/navigation"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { productsOut } from "../animations/products"

const Navbar = () => {
  const { push } = useRouter()
  const pathname = usePathname()
  const page = pathname.split('/')[1]
  const paddingLeft = page === 'collections' ? 'pl-[144.4rem]' : 'pl-[87.4rem]'

  const { contextSafe } = useGSAP()

  //@todo: handle this better / make a CustomLink component
  const onClick = contextSafe((e) => {
    e.preventDefault()
    const href = e.currentTarget.href

    if (page === 'collections' && !href.includes('/collections')) {
      productsOut()
      const tl = gsap.timeline()
      tl.to('.main-links', {
        paddingLeft: '87.4rem',
        ease: 'power4.out',
        duration: 2,
        onComplete: () => {
          console.log('complete')
          push(href)
        }
      }, '<')
    } else if(href.includes('/collections')) {
      const tl = gsap.timeline()
      tl.to('.page-fadeout', {
        autoAlpha: 0,
        y: -10,
      })
      .to('.main-links', {
        paddingLeft: '144.4rem',
        ease: 'power4.out',
        duration: 2,
        onComplete: () => {
          push(href)
        }
      }, '<')
    } else {
      push(href)
    }



    console.log(e.currentTarget.href)
  })

  return (
    <nav className="z-10 p-8 flex flex-row items-start w-full fixed top-0 left-0  mix-blend-difference text-white">
      <figure className="invert">
        <Image loading="eager" src='/logo.svg' height={13} width={67} alt="" />
        <span className="text-[0rem]">Kyoto</span>
      </figure>
      <ul className={`capitalize top-[2rem] left-0 absolute ${paddingLeft} main-links`}>
        <li><MenuLink onClick={onClick} href='/' active>Home</MenuLink> </li>
        <li><MenuLink onClick={onClick} href='/collections'>Shop</MenuLink></li>
        <li><MenuLink onClick={onClick} href='/about'>About</MenuLink></li>
        <li><MenuLink onClick={onClick} href='#'>journal</MenuLink></li>
        <li><MenuLink onClick={onClick} href='/contact'>contact</MenuLink></li>
      </ul>
      <div className="ml-auto">Bag (0)</div>
    </nav>
  )
}

export default Navbar