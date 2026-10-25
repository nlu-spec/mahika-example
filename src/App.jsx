import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import Preloader from './components/Preloader.jsx'
import Header from './components/Header.jsx'
import Cursor from './components/Cursor.jsx'
import Progress from './components/Progress.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Explore from './components/Explore.jsx'
import Kalakari from './components/Kalakari.jsx'
import Lookbook from './components/Lookbook.jsx'
import Arrivals from './components/Arrivals.jsx'
import BestSellers from './components/BestSellers.jsx'
import Craft from './components/Craft.jsx'
import Story from './components/Story.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [lenis, setLenis] = useState(null)
  const [reveal, setReveal] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    history.scrollRestoration = 'manual'
    const l = new Lenis({ lerp: 0.085, wheelMultiplier: 0.95 })
    l.stop()
    l.on('scroll', ScrollTrigger.update)
    const tick = t => l.raf(t * 1000)
    gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0)
    setLenis(l)
    return () => { gsap.ticker.remove(tick); l.destroy() }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-loading', !done)
    if (done && lenis) { lenis.start(); ScrollTrigger.refresh() }
  }, [done, lenis])

  return (
    <>
      {!done && <Preloader onReveal={() => setReveal(true)} onDone={() => setDone(true)} />}
      <Cursor />
      <Progress />
      <Header lenis={lenis} show={reveal} />
      <main>
        <Hero go={reveal} lenis={lenis} />
        <Marquee />
        <Explore />
        <Kalakari />
        <Lookbook />
        <Arrivals />
        <BestSellers />
        <Craft />
        <Story />
      </main>
      <Footer lenis={lenis} />
    </>
  )
}
