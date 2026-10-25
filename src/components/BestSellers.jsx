import { useRef, useState } from 'react'
import gsap from 'gsap'
import useAnims from '../useAnims.js'
import Media from './Media.jsx'
import Tilt from './Tilt.jsx'
import { Lines } from './Split.jsx'

const prods = [
  ['Rani Silk Saree', '12,900', 'rose', 'model'], ['Emerald Kalakari', '9,400', 'emerald', 'fabric'],
  ['Blush Organza', '7,800', 'blush', 'model'], ['Zari Banarasi', '18,500', 'gold', 'fabric'],
  ['Ivory Chanderi', '8,600', 'hero', 'model'], ['Forest Block Print', '6,900', 'forest', 'model'],
]
function Prod({ p, i }) {
  const [liked, setLiked] = useState(false)
  const [t, price, v, type] = p
  return (
    <Tilt className="prod" max={6} data-cursor="Quick view">
      <Media variant={v} type={type} seed={i} flip={i % 2 === 1} src={`p${i + 1}.jpg`} className="prod__m">
        <button className={`heart ${liked ? 'on' : ''}`} aria-label="Wishlist" aria-pressed={liked} onClick={() => setLiked(l => !l)}><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.6-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.4-7 10-7 10z" /></svg></button>
        <span className="prod__add">Add to bag</span>
      </Media>
      <h5>{t}</h5><p>₹ {price}</p>
      <span className="prod__no">0{i + 1}</span>
    </Tilt>
  )
}
export default function BestSellers() {
  const ref = useRef(null), track = useRef(null)
  useAnims(ref, () => {
    const mm = gsap.matchMedia()
    mm.add('(min-width:901px)', () => {
      const dist = () => track.current.scrollWidth - innerWidth
      gsap.to(track.current, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 } })
      gsap.fromTo('.bs__bar i', { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top top', end: () => '+=' + dist(), scrub: true } })
    })
  })
  return (
    <section className="best" id="bestsellers" ref={ref}>
      <div className="best__in">
        <div className="sec-head center">
          <p className="eyebrow fade">Most Loved</p>
          <h2 className="big" data-split="line"><Lines lines={['Best Sellers']} /></h2>
          <p className="sub fade" data-d=".2"><em>The pieces our customers reach for most</em></p>
        </div>
        <div className="best__track" ref={track}>{prods.map((p, i) => <Prod key={p[0]} p={p} i={i} />)}</div>
        <div className="bs__bar"><i /></div>
      </div>
    </section>
  )
}
