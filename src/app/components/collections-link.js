'use client'
import gsap from "gsap"
import Arrow from "./arrow"
import TransitionLink from "./transition-link"
import { useRouter } from "next/navigation"
import { navbarLinks } from "../animations/page-transition"

const CollectionsLink = (props) => {
  const { push } = useRouter()
  const onClick = (e) => {
    e.preventDefault()
    navbarLinks()
    const href = e.currentTarget.href
      const tl = gsap.timeline()
      tl.to('.page-fadeout', {
        autoAlpha: 0,
        y: -10,
      })
      .to('.main-links', {
        marginLeft: '144.4rem',
        ease: 'power4.out',
        duration: 2,
        onComplete: () => {
          push(href)
        }
      }, '<')
    } 

  return (
  <TransitionLink onClick={onClick} className="flex items-center flex-col" href='/collections' {...props}>
    {props.children}
  </TransitionLink>
  )
}

export default CollectionsLink