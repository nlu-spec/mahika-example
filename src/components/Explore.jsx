import { useRef } from 'react'
import useAnims from '../useAnims.js'
import Media from './Media.jsx'
import Tilt from './Tilt.jsx'
import { Lines } from './Split.jsx'
import { Btn } from './Magnetic.jsx'

export default function Explore() {
  const ref = useRef(null)
  useAnims(ref)
  return (
    <section className="explore" id="women" ref={ref}>
      <div className="explore__bg"><Media variant="emerald" type="fabric" seed={2} src="explore-bg.jpg" className="fill" /></div>
      <div className="explore__inner">
        <div className="sec-head center">
          <p className="eyebrow fade">Discover</p>
          <h2 className="big" data-split="line"><Lines lines={['Explore the Collection']} /></h2>
          <p className="sub fade" data-d=".2"><em>Timeless traditions, modern spirit</em></p>
        </div>
        <div className="explore__grid">
          <Tilt className="tile" data-cursor="Explore">
            <Media variant="rose" src="women.jpg" className="tile__img clip" />
            <div className="tile__txt"><h3>Women</h3><p><em>Elegance in every drape</em></p><Btn small>Explore</Btn></div>
            <span className="tile__no">01</span>
          </Tilt>
          <Tilt className="tile tile--b" data-cursor="Explore">
            <Media variant="gold" flip src="kalakari.jpg" className="tile__img clip" data-d=".15" />
            <div className="tile__txt"><h3>Kalakari</h3><p><em>Art you can wear</em></p><Btn small>Explore</Btn></div>
            <span className="tile__no">02</span>
          </Tilt>
        </div>
      </div>
    </section>
  )
}
