import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const items = ['Handwoven Heritage', 'Kalakari Artistry', 'Timeless Drapes', 'Made with Love', 'Zari & Silk']
const Row = () => <>{[...items, ...items].map((t, i) => <span key={i} className="mq__i"><span>{t}</span><b>✦</b></span>)}</>
export default function Marquee() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const a = gsap.to('.mq__a', { xPercent: -50, duration: 32, ease: 'none', repeat: -1 })
      const b = gsap.fromTo('.mq__b', { xPercent: -50 }, { xPercent: 0, duration: 38, ease: 'none', repeat: -1 })
      ScrollTrigger.create({ trigger: ref.current, start: 'top bottom', end: 'bottom top', onUpdate: s => {
        const v = 1 + Math.min(Math.abs(s.getVelocity()) / 350, 6)
        gsap.to([a, b], { timeScale: v, duration: 0.2, overwrite: true, onComplete: () => gsap.to([a, b], { timeScale: 1, duration: 1.2 }) })
      } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <div className="mq" ref={ref}>
      <div className="mq__t mq__a"><Row /></div>
      <div className="mq__t mq__b mq__out"><Row /></div>
    </div>
  )
}
