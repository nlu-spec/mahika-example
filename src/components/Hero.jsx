import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Media from './Media.jsx'
import Particles from './Particles.jsx'
import { Lines } from './Split.jsx'
import { Btn } from './Magnetic.jsx'

export default function Hero({ go, lenis }) {
  const root = useRef(null)

  // idle state
  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root)
      gsap.set(q('.hero h1 .line__in, .hero [data-in]'), { opacity: 0 })
      gsap.set(q('.hero__art'), { scale: 1.25, opacity: 0 })
      // scroll parallax
      gsap.to(q('.hero__art'), { yPercent: 12, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to(q('.hero__copy'), { yPercent: -22, opacity: 0.1, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom 35%', scrub: true } })
      gsap.to(q('.hero__ring'), { rotate: 120, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
      // mouse parallax
      if (matchMedia('(hover:hover)').matches) {
        const ax = gsap.quickTo(q('.hero__artwrap')[0], 'x', { duration: 1.2, ease: 'power3' }), ay = gsap.quickTo(q('.hero__artwrap')[0], 'y', { duration: 1.2, ease: 'power3' })
        const cx = gsap.quickTo(q('.hero__copy')[0], 'x', { duration: 1.6, ease: 'power3' })
        const mv = e => { const nx = e.clientX / innerWidth - 0.5, ny = e.clientY / innerHeight - 0.5; ax(nx * -34); ay(ny * -22); cx(nx * 14) }
        addEventListener('mousemove', mv)
        return () => removeEventListener('mousemove', mv)
      }
    }, root)
    return () => ctx.revert()
  }, [])

  // intro, fired by preloader
  useEffect(() => {
    if (!go) return
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root)
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      tl.to(q('.hero__art'), { scale: 1, opacity: 1, duration: 2.8 }, 0)
        .set(q('.hero h1 .line__in'), { opacity: 1, yPercent: 120 }, 0)
        .to(q('.hero h1 .line__in'), { yPercent: 0, duration: 1.7, stagger: 0.16 }, 0.35)
        .fromTo(q('.hero [data-in]'), { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, stagger: 0.14 }, 0.8)
        .fromTo(q('.hero__ring'), { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 2.2 }, 0.4)
    }, root)
    return () => ctx.revert()
  }, [go])

  return (
    <section className="hero" id="home" ref={root}>
      <div className="hero__bgglow" />
      <svg className="hero__ring" viewBox="0 0 200 200" aria-hidden="true" data-in-keep>
        <circle cx="100" cy="100" r="98" fill="none" stroke="#d8b56a" strokeOpacity=".35" strokeDasharray="2 6" />
        <circle cx="100" cy="100" r="82" fill="none" stroke="#d8b56a" strokeOpacity=".22" />
      </svg>
      <div className="hero__artwrap"><div className="hero__art"><Media variant="hero" src="hero.jpg" className="hero__media" /></div></div>
      <div className="hero__veil" />
      <Particles count={70} />
      <div className="hero__copy">
        <p className="eyebrow" data-in>Tradition meets tomorrow</p>
        <h1><Lines lines={['More Than', 'Fashion']} /></h1>
        <p className="hero__sub" data-in><em>A story in every drape.</em></p>
        <div data-in><Btn href="#kalakari" onClick={e => { e.preventDefault(); lenis?.scrollTo('#kalakari', { duration: 1.8 }) }}>Discover the Collection</Btn></div>
      </div>
      <div className="hero__scroll" data-in><span>Scroll</span><i /></div>
      <div className="hero__meta" data-in><b>01</b><i /><span>Spring · Summer 2026</span></div>
    </section>
  )
}
