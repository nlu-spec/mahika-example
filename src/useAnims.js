import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/* Shared scroll animations, scoped to one section ref. */
export default function useAnims(ref, extra, deps = []) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(ref)
      // split headings
      q('[data-split]').forEach(h => {
        const kind = h.dataset.split
        const parts = h.querySelectorAll(`[data-anim="${kind}"]`)
        gsap.fromTo(parts, { yPercent: 118, rotate: kind === 'char' ? 8 : 3 }, { yPercent: 0, rotate: 0, duration: kind === 'char' ? 1.1 : 1.4, stagger: kind === 'char' ? 0.035 : kind === 'word' ? 0.07 : 0.14, ease: 'expo.out', scrollTrigger: { trigger: h, start: 'top 88%', toggleActions: 'play none none none' } })
      })
      // fades
      q('.fade').forEach(el => gsap.fromTo(el, { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 1.3, ease: 'expo.out', delay: +(el.dataset.d || 0), scrollTrigger: { trigger: el, start: 'top 92%' } }))
      // image clip reveals
      q('.clip').forEach(el => {
        const inner = el.querySelector('.media__in')
        gsap.fromTo(el, { clipPath: 'inset(14% 14% 14% 14%)', opacity: 0 }, { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, duration: 1.8, ease: 'expo.out', delay: +(el.dataset.d || 0), scrollTrigger: { trigger: el, start: 'top 92%' } })
        if (inner) gsap.fromTo(inner, { scale: 1.35 }, { scale: 1, duration: 2.2, ease: 'expo.out', delay: +(el.dataset.d || 0), scrollTrigger: { trigger: el, start: 'top 92%' } })
      })
      // parallax inside media
      q('[data-parallax]').forEach(el => {
        const s = +el.dataset.parallax
        gsap.fromTo(el, { yPercent: -s }, { yPercent: s, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } })
      })
      // scrubbed word highlight
      q('.scrub').forEach(p => gsap.fromTo(p.querySelectorAll('.scrub__w'), { opacity: 0.14 }, { opacity: 1, stagger: 0.1, ease: 'none', scrollTrigger: { trigger: p, start: 'top 80%', end: 'bottom 45%', scrub: true } }))
      // drawn lines
      q('.draw').forEach(p => {
        const len = p.getTotalLength?.() || 1000
        gsap.fromTo(p, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: p.closest('svg') || p, start: 'top 80%', end: 'bottom 40%', scrub: 0.6 } })
      })
      extra && extra(q)
    }, ref)
    const t = setTimeout(() => ScrollTrigger.refresh(), 200)
    return () => { clearTimeout(t); ctx.revert() }
  }, deps)
}
