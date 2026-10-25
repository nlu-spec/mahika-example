import { useEffect, useRef } from 'react'
import gsap from 'gsap'
export default function Cursor() {
  const big = useRef(null), dot = useRef(null)
  useEffect(() => {
    if (!matchMedia('(hover:hover) and (pointer:fine)').matches) return
    const bx = gsap.quickTo(big.current, 'x', { duration: 0.55, ease: 'power3' }), by = gsap.quickTo(big.current, 'y', { duration: 0.55, ease: 'power3' })
    const dx = gsap.quickTo(dot.current, 'x', { duration: 0.12 }), dy = gsap.quickTo(dot.current, 'y', { duration: 0.12 })
    gsap.set([big.current, dot.current], { xPercent: -50, yPercent: -50 })
    const mv = e => { bx(e.clientX); by(e.clientY); dx(e.clientX); dy(e.clientY); gsap.to(dot.current, { opacity: 1, duration: 0.3, overwrite: 'auto' }) }
    const over = e => {
      const t = e.target.closest?.('[data-cursor], a, button')
      if (!t) return gsap.to(big.current, { scale: 0, opacity: 0, duration: 0.4 })
      const label = t.dataset.cursor
      big.current.firstChild.textContent = label || ''
      gsap.to(big.current, label ? { scale: 1, opacity: 1, duration: 0.5, ease: 'expo.out' } : { scale: 0.32, opacity: 0.9, duration: 0.4 })
    }
    addEventListener('mousemove', mv); addEventListener('mouseover', over)
    return () => { removeEventListener('mousemove', mv); removeEventListener('mouseover', over) }
  }, [])
  return <><div ref={big} className="cursor"><span /></div><div ref={dot} className="cursor-dot" /></>
}
