import { useRef } from 'react'
import gsap from 'gsap'
export default function Magnetic({ as: Tag = 'a', strength = 0.3, className = '', children, ...rest }) {
  const ref = useRef(null)
  const move = e => {
    const r = ref.current.getBoundingClientRect()
    gsap.to(ref.current, { x: (e.clientX - r.left - r.width / 2) * strength, y: (e.clientY - r.top - r.height / 2) * strength * 1.3, duration: 0.4, ease: 'power3.out' })
  }
  const leave = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1,.4)' })
  return <Tag ref={ref} className={className} onMouseMove={move} onMouseLeave={leave} {...rest}>{children}</Tag>
}
export function Btn({ children, small, href = '#', ...rest }) {
  return (
    <Magnetic href={href} className={`btn ${small ? 'btn--sm' : ''}`} {...rest}>
      <span className="btn__t">{children}</span><i />
    </Magnetic>
  )
}
