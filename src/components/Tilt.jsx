import { useRef } from 'react'
import gsap from 'gsap'
/* 3D hover tilt + glare */
export default function Tilt({ children, className = '', max = 8, ...rest }) {
  const ref = useRef(null)
  const glare = useRef(null)
  const fine = typeof matchMedia !== 'undefined' && matchMedia('(hover:hover)').matches
  const move = e => {
    if (!fine) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height
    gsap.to(ref.current, { rotateY: (px - 0.5) * max * 2, rotateX: -(py - 0.5) * max * 2, transformPerspective: 900, duration: 0.5, ease: 'power3.out' })
    gsap.to(glare.current, { opacity: 1, background: `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,240,200,.28), transparent 55%)`, duration: 0.3 })
  }
  const leave = () => {
    gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.9, ease: 'elastic.out(1,.5)' })
    gsap.to(glare.current, { opacity: 0, duration: 0.4 })
  }
  return (
    <div ref={ref} className={`tilt ${className}`} onMouseMove={move} onMouseLeave={leave} {...rest}>
      {children}
      <span ref={glare} className="tilt__glare" />
    </div>
  )
}
