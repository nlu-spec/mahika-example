import { useEffect, useRef } from 'react'
/* Floating gold dust on canvas, pauses when off-screen / hidden. */
export default function Particles({ count = 60 }) {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d')
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return
    let w, h, raf, vis = true
    const dpr = Math.min(devicePixelRatio || 1, 2)
    const ps = Array.from({ length: count }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.8 + 0.4, s: Math.random() * 0.00022 + 0.00008, a: Math.random() * Math.PI * 2, o: Math.random() * 0.6 + 0.2 }))
    const size = () => { w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0) }
    size()
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting }, { threshold: 0 })
    io.observe(c)
    addEventListener('resize', size)
    let t0 = performance.now()
    const tick = t => {
      raf = requestAnimationFrame(tick)
      if (!vis) return
      const dt = t - t0; t0 = t
      ctx.clearRect(0, 0, w, h)
      for (const p of ps) {
        p.y -= p.s * dt; p.a += 0.0015 * dt
        if (p.y < -0.05) { p.y = 1.05; p.x = Math.random() }
        const x = (p.x + Math.sin(p.a) * 0.015) * w, y = p.y * h
        const g = ctx.createRadialGradient(x, y, 0, x, y, p.r * 4)
        g.addColorStop(0, `rgba(255,232,170,${p.o})`); g.addColorStop(1, 'rgba(255,232,170,0)')
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, p.r * 4, 0, 6.283); ctx.fill()
      }
    }
    raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); io.disconnect(); removeEventListener('resize', size) }
  }, [count])
  return <canvas ref={ref} className="particles" />
}
