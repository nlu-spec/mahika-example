import { useRef } from 'react'
import useAnims from '../useAnims.js'
import Media from './Media.jsx'
import { Words, Scrub } from './Split.jsx'
import { Mark } from './Logo.jsx'
import { useEffect } from 'react'
import gsap from 'gsap'

const stats = [[120, 'Artisan families', '+'], [40, 'Years of craft', '+'], [18, 'Weaving regions', '']]
export default function Story() {
  const ref = useRef(null)
  useAnims(ref, q => {
    q('[data-count]').forEach(el => {
      const end = +el.dataset.count, o = { v: 0 }
      gsap.to(o, { v: end, duration: 2.6, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 92%' }, onUpdate: () => { el.textContent = Math.round(o.v) } })
    })
  })
  return (
    <section className="story" id="story" ref={ref}>
      <div className="story__bg"><div data-parallax="9" className="story__par"><Media variant="forest" type="fabric" seed={1} src="story.jpg" className="fill" /></div></div>
      <div className="story__in">
        <Mark className="story__mark fade" />
        <p className="eyebrow fade">Our Story</p>
        <h2 className="serif-i big" data-split="word"><Words text="Tradition lives beautifully" /></h2>
        <Scrub className="story__p" text="Mahika was born from a simple belief — that heritage is not something to preserve behind glass, but something to wear, to live in, and to pass on. We work with artisans across India to bring you pieces that feel like home and look like art." />
        <div className="stats fade">{stats.map(([n, l, s]) => <div key={l}><b><span data-count={n}>0</span>{s}</b><span>{l}</span></div>)}</div>
      </div>
    </section>
  )
}
