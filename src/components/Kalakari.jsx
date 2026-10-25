import { useRef } from 'react'
import gsap from 'gsap'
import useAnims from '../useAnims.js'
import Media from './Media.jsx'
import Tilt from './Tilt.jsx'
import { Words } from './Split.jsx'
import { Btn } from './Magnetic.jsx'

const cards = [
  ['Kalakari Sarees', 'Hand-painted in India', 'saree1', 'rose', 'model', 0],
  ['Kurta Sets', 'Everyday heritage', 'saree2', 'cream', 'fabric', 1],
  ['Dupattas', 'The finishing grace', 'saree3', 'emerald', 'model', 0],
]
export default function Kalakari() {
  const ref = useRef(null)
  useAnims(ref, q => {
    const mm = gsap.matchMedia()
    mm.add('(min-width:1001px)', () => {
      q('.kcard').forEach((c, i) => gsap.to(c, { y: [0, -90, 50][i], ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 1 } }))
    })
  })
  return (
    <section className="kala" id="kalakari" ref={ref}>
      <div className="kala__left">
        <p className="eyebrow fade">The Kalakari Collection</p>
        <h2 className="serif-i" data-split="word"><Words text="A canvas of tradition for today's world" /></h2>
        <p className="body fade">Hand-painted florals, block prints and age-old motifs — each piece carries the quiet signature of the artisan behind it.</p>
        <div className="fade"><Btn>Explore Kalakari</Btn></div>
        <ul className="kala__list fade">{['Art', 'People', 'Places', 'Stories'].map(t => <li key={t}>{t}</li>)}</ul>
      </div>
      <div className="kala__cards">
        {cards.map(([t, s, , v, type, seed], i) => (
          <Tilt key={t} className="card kcard" data-cursor="View">
            <Media variant={v} type={type} seed={seed} flip={i === 2} src={`kala-${i + 1}.jpg`} className="card__img clip" data-d={i * 0.12} />
            <h4>{t}</h4><p>{s}</p><span className="circ" />
          </Tilt>
        ))}
      </div>
    </section>
  )
}
