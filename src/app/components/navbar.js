'use client'
import Image from "next/image"
import MenuLink from "@/app/components/menu-link"
import { usePathname, useRouter } from "next/navigation"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { navLinks, productsOut } from "../animations/products"
import { navbarLinks, pageFadeOut } from "../animations/page-transition"
import TransitionLink from "./transition-link"

const mapping = [
  {
    name: 'Home',
    slug: '/'
  },
  {
    name: 'Shop',
    slug: '/collections'
  },
  {
    name: 'About',
    slug: '/about'
  },
  {
    name: 'Journal',
    slug: '/journal'
  },
  {
    name: 'Contact',
    slug: '/contact'
  },
]

const Navbar = () => {
  const { push } = useRouter()
  const pathname = usePathname()
  const page = pathname.split('/')[1]
  const marginLeft = page === 'collections' ? 'ml-[144.4rem]' : 'ml-[87.4rem]'

  const isActive = (href) => {
      const current = pathname.split('/')[1] || ''
      console.log({ current: '/' + current, href })

      return `/${current}` === href
  }

  const { contextSafe } = useGSAP()

  useGSAP(() => {
    gsap.set(['.main-links', '.page-fadeout'], {
      clearProps: 'all'
    })
    gsap.to('[data-navbar-active="true"] .nav-link-circle', {
       scale: 1,
       duration: 1.5
    })
  }, [pathname])

  //@todo: handle this better / make a CustomLink component
  const onClick = contextSafe((e) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const currentHref = window.location.href 

    if (currentHref == href) {
      scrollTo({ top: 0 })
      return
    }
    navbarLinks()

    if (page === 'collections') {
      productsOut(() => {
        if (!href.includes('/collections')) {
          navLinks()
        }
        push(href)
      }, true)
    } else if(href.includes('/collections')) {
      const tl = pageFadeOut()
      tl.to('.main-links', {
        marginLeft: '144.4rem',
        ease: 'power4.out',
        duration: 2,
        onComplete: () => {
          push(href)
        }
      }, '<')
    } else {
      pageFadeOut(() => {
        push(href)
      })
    }
  })

  return (
    <nav className="z-10 p-8 flex flex-row items-start w-full fixed top-0 left-0  mix-blend-difference text-white">
      <TransitionLink href='/' onClick={onClick}>
        <figure className="invert">
          <Image loading="eager" src='/logo.svg' height={13} width={67} alt="" />
          <span className="text-[0rem]">Kyoto</span>
        </figure>
      </TransitionLink>
      <ul className={`capitalize top-[2rem] left-0 absolute ${marginLeft} main-links`}>
        {mapping.map(link => (
          <li key={link.slug}>
            <MenuLink onClick={onClick} href={link.slug} active={isActive(link.slug)} >{link.name}</MenuLink>
          </li>
        ))}
      </ul>
      <div className="ml-auto">Bag (0)</div>
    </nav>
  )
}

export default Navbar