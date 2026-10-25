import { useRef, useState } from 'react'
import useAnims from '../useAnims.js'
import Media from './Media.jsx'
import { Lines } from './Split.jsx'

const looks = [
  ['Ivory Dawn', 'Chanderi · Zari', 'hero', 'model'],
  ['Ruby Evening', 'Banarasi silk', 'ruby', 'model'],
  ['Forest Whisper', 'Block print', 'forest', 'fabric'],
  ['Blush Garden', 'Organza', 'blush', 'model'],
  ['Midnight Zari', 'Kanjivaram', 'gold', 'fabric'],
]
export default function Lookbook() {
  const ref = useRef(null)
  const [on, setOn] = useState(0)
  useAnims(ref)
  return (
    <section className="look" ref={ref}>
      <div className="sec-head center">
        <p className="eyebrow fade">The Edit</p>
        <h2 className="big" data-split="line"><Lines lines={['The Lookbook']} /></h2>
      </div>
      <div className="look__row fade">
        {looks.map(([t, s, v, type], i) => (
          <article key={t} className={`look__p ${on === i ? 'on' : ''}`} onMouseEnter={() => setOn(i)} onClick={() => setOn(i)} data-cursor="Look">
            <Media variant={v} type={type} seed={i} flip={i % 2 === 1} src={`look-${i + 1}.jpg`} className="fill" />
            <div className="look__cap"><span>0{i + 1}</span><h4>{t}</h4><p>{s}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}
