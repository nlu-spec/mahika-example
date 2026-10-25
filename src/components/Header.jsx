import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Mark } from './Logo.jsx'

const L = [['Home', '#home'], ['Women', '#women'], ['Kalakari', '#kalakari']]
const R = [['New Arrivals', '#arrivals'], ['Best Sellers', '#bestsellers'], ['Our Story', '#story']]

export default function Header({ lenis, show }) {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hide, setHide] = useState(false)
  const last = useRef(0)

  useEffect(() => { gsap.set(ref.current, { yPercent: -100, opacity: 0 }) }, [])
  useEffect(() => { if (show) gsap.to(ref.current, { yPercent: 0, opacity: 1, duration: 1.2, ease: 'expo.out', delay: 0.4 }) }, [show])

  useEffect(() => {
    if (!lenis) return
    const f = ({ scroll }) => { setScrolled(scroll > 60); setHide(scroll > last.current && scroll > 500); last.current = scroll }
    lenis.on('scroll', f)
    return () => lenis.off('scroll', f)
  }, [lenis])

  useEffect(() => { open ? lenis?.stop() : show && lenis?.start() }, [open])

  const go = (e, href) => {
    e.preventDefault(); setOpen(false)
    setTimeout(() => lenis?.scrollTo(href, { duration: 1.8, easing: t => 1 - Math.pow(1 - t, 4) }), open ? 400 : 0)
  }
  const Link = ([t, h]) => <a key={h} href={h} onClick={e => go(e, h)}><span data-t={t}>{t}</span></a>

  return (
    <>
      <header ref={ref} className={`header ${scrolled ? 'scrolled' : ''} ${hide && !open ? 'hide' : ''}`}>
        <button className={`burger ${open ? 'open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Menu" aria-expanded={open}><i /><i /></button>
        <nav className="nav nav--l">{L.map(Link)}</nav>
        <a href="#home" className="logo" aria-label="Mahika" onClick={e => go(e, '#home')}><Mark /><span>MAHIKA</span></a>
        <nav className="nav nav--r">{R.map(Link)}</nav>
        <div className="icons">
          <button aria-label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5L21 21" /></svg></button>
          <button aria-label="Bag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8V6a3 3 0 016 0v2" /></svg><em className="badge">2</em></button>
        </div>
      </header>
      <div className={`drawer ${open ? 'open' : ''}`}>
        {[...L, ...R].map(([t, h], i) => <a key={h} href={h} style={{ '--i': i }} onClick={e => go(e, h)}>{t}</a>)}
        <p className="drawer__f">Tradition meets tomorrow</p>
      </div>
    </>
  )
}
