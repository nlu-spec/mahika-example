import { useRef, useState } from 'react'
import useAnims from '../useAnims.js'
import { Lines } from './Split.jsx'
import { Btn } from './Magnetic.jsx'
const cols = { Shop: ['Women', 'Kalakari', 'New Arrivals', 'Best Sellers'], Mahika: ['Our Story', 'Artisans', 'Journal', 'Contact'], Care: ['Shipping', 'Returns', 'Saree Care', 'FAQ'], Follow: ['Instagram', 'Pinterest', 'YouTube'] }
export default function Footer({ lenis }) {
  const ref = useRef(null)
  const [done, setDone] = useState(false)
  useAnims(ref)
  return (
    <footer className="footer" ref={ref}>
      <div className="footer__top">
        <h2 className="serif-i" data-split="line"><Lines lines={['More Than Fashion']} /></h2>
        <form className="news fade" onSubmit={e => { e.preventDefault(); setDone(true) }}>
          <input type="email" required placeholder={done ? 'Thank you — welcome to Mahika' : 'Your email address'} aria-label="Email" disabled={done} />
          <button className="btn btn--sm" type="submit"><span className="btn__t">Subscribe</span><i /></button>
        </form>
      </div>
      <div className="footer__cols fade">
        {Object.entries(cols).map(([h, l]) => <div key={h}><h6>{h}</h6>{l.map(x => <a key={x} href="#home" onClick={e => e.preventDefault()}>{x}</a>)}</div>)}
      </div>
      <div className="footer__bot">
        <span>© 2026 Mahika. All rights reserved.</span>
        <button onClick={() => lenis?.scrollTo(0, { duration: 2.4 })}>Back to top ↑</button>
        <span>Tradition meets tomorrow.</span>
      </div>
    </footer>
  )
}
