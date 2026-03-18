const { default: gsap } = require("gsap")

export const productsOut = (onComplete, hideSelector) => {
  if (hideSelector) {
    gsap.to(['.selector'], {
      opacity: 0,
      y: 5,
      duration: 0.5,
      ease: 'power4.out',
    })
  }
  gsap.to(['.collection'], {
    opacity: 0,
    y: 5,
    duration: 0.5,
    ease: 'power4.out',
  })
  gsap.to('.product', {
    autoAlpha: 0,
    duration: 1,
    ease: 'power4.inOut',
  })
  gsap.to('.product figure', {
    autoAlpha: 0,
    clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
    duration: 1,
    filter: 'blur(10px)',
    ease: 'power4.inOut',
    onComplete
  })
}

export const navLinks = (onComplete) => {
  gsap.to('.main-links', {
    marginLeft: '87.4rem',
    ease: 'power4.out',
    duration: 2,
    onComplete
  })
}
