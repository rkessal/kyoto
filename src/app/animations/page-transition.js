import gsap from "gsap"

export const pageFadeOut = (onComplete) => {
  const tl = gsap.timeline()
  tl.to('.page-fadeout', {
    autoAlpha: 0,
    y: -10,
    onComplete,
  })

  return tl
}

export const navbarLinks = () => {
  gsap.to('[data-navbar-active="true"] .nav-link-circle', {
    scale: 0,
  })
}