import { useRef } from 'react'
import useAnims from '../useAnims.js'
import Media from './Media.jsx'
import { Words } from './Split.jsx'
import { Btn } from './Magnetic.jsx'

export default function Arrivals() {
  const ref = useRef(null)
  useAnims(ref)
  return (
    <section className="split" id="arrivals" ref={ref}>
      <div className="split__img"><Media variant="cream" src="sarees.jpg" className="fill" /></div>
      <div className="split__txt">
        <p className="eyebrow fade">New Arrivals</p>
        <h2 className="serif" data-split="word"><Words text="Sarees, draped in every mood" /></h2>
        <div className="split__pair">
          <a href="#arrivals" className="mini" data-cursor="View"><Media variant="blush" src="printed.jpg" type="fabric" seed={3} className="mini__m clip" /><span>Printed Sarees</span></a>
          <a href="#arrivals" className="mini" data-cursor="View"><Media variant="ruby" src="collection.jpg" className="mini__m clip" data-d=".15" /><span>The Collection</span></a>
        </div>
        <div className="fade"><Btn>View All Sarees</Btn></div>
      </div>
    </section>
  )
}
