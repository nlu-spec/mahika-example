import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Mark } from './Logo.jsx'

export default function Preloader({ onReveal, onDone }) {
  const root = useRef(null)
  const num = useRef(null)
  const bar = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root)
      const c = { v: 0 }
      gsap.set(q('.pre-word span'), { yPercent: 110 })
      gsap.set(q('.pre-mark *'), { strokeDasharray: 300, strokeDashoffset: 300 })
      gsap.set(q('.pre-orn'), { scaleX: 0 })
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.to(q('.pre-mark .m-ring'), { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }, 0)
        .to(q('.pre-mark .m-m, .pre-mark .m-leaf'), { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut' }, 0.4)
        .to(q('.pre-mark'), { rotate: 360, duration: 3, ease: 'power2.inOut' }, 0)
        .to(q('.pre-word span'), { yPercent: 0, stagger: 0.09, duration: 1, ease: 'expo.out' }, 0.9)
        .to(q('.pre-orn'), { scaleX: 1, duration: 1.2, ease: 'expo.out' }, 1.3)
        .to(q('.pre-tag'), { opacity: 1, letterSpacing: '.42em', duration: 1.4 }, 1.5)
        .to(c, { v: 100, duration: 2.8, ease: 'power2.inOut', onUpdate: () => {
          const n = Math.round(c.v)
          if (num.current) num.current.textContent = String(n).padStart(3, '0')
          if (bar.current) bar.current.style.width = n + '%'
        } }, 0)
        .to(q('.pre-center, .pre-count'), { opacity: 0, y: -30, duration: 0.7, ease: 'power2.in' }, 3.1)
        .to(q('.pre-line'), { opacity: 0, duration: 0.4 }, 3.1)
        .add(() => onReveal && onReveal(), 3.6)
        .to(q('.curtain--l'), { xPercent: -101, duration: 1.8, ease: 'expo.inOut' }, 3.7)
        .to(q('.curtain--r'), { xPercent: 101, duration: 1.8, ease: 'expo.inOut' }, 3.7)
        .to(q('.pre-shadow'), { opacity: 0, duration: 1.2 }, 3.9)
        .add(() => onDone && onDone(), 5.4)
      return () => tl.kill()
    }, root)
    return () => ctx.revert()
  }, [])
  return (
    <div className="preloader" ref={root} aria-hidden="true">
      <div className="curtain curtain--l"><i className="tassel" /></div>
      <div className="curtain curtain--r"><i className="tassel" /></div>
      <div className="pre-shadow" />
      <div className="pre-center">
        <Mark className="pre-mark" />
        <div className="pre-word">{[...'MAHIKA'].map((c, i) => <span key={i}>{c}</span>)}</div>
        <div className="pre-orn"><i /><b>✦</b><i /></div>
        <div className="pre-tag">Tradition meets tomorrow</div>
      </div>
      <div className="pre-count"><span ref={num}>000</span><i>%</i></div>
      <div className="pre-line"><b ref={bar} /></div>
    </div>
  )
}
