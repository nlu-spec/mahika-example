import { useRef } from 'react'
import useAnims from '../useAnims.js'
import { Lines } from './Split.jsx'
const steps = [['I', 'Weave', 'Master weavers set the loom — silk, cotton and zari threads becoming cloth.'], ['II', 'Paint', 'Each motif is drawn and brushed by hand, dried under the open sky.'], ['III', 'Drape', 'Finished by hand, folded with care and sent to you with a story.']]
export default function Craft() {
  const ref = useRef(null)
  useAnims(ref)
  return (
    <section className="craft" ref={ref}>
      <div className="sec-head center">
        <p className="eyebrow fade">The Process</p>
        <h2 className="big" data-split="line"><Lines lines={['From loom to you']} /></h2>
      </div>
      <div className="craft__grid">
        <svg className="craft__line" viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true"><path className="draw" d="M0 30 C 120 0, 220 60, 340 30 S 560 0, 680 30 S 880 60, 1000 30" fill="none" stroke="#d8b56a" strokeWidth="1.4" /></svg>
        {steps.map(([n, t, d], i) => (
          <div className="craft__s fade" data-d={i * 0.15} key={t}><span className="craft__n">{n}</span><h4>{t}</h4><p>{d}</p></div>
        ))}
      </div>
    </section>
  )
}
