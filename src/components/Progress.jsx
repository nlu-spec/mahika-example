import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
export default function Progress() {
  const r = useRef(null)
  useEffect(() => {
    const t = gsap.to(r.current, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } })
    return () => { t.scrollTrigger?.kill(); t.kill() }
  }, [])
  return <div className="progress"><i ref={r} /></div>
}
