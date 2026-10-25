import { useState } from 'react'
import SareeArt from '../art/SareeArt.jsx'

/* Photos dropped into src/assets/img/ are picked up at build time (no 404s for missing files). */
const photos = import.meta.glob('../assets/img/*.{jpg,jpeg,png,webp,avif}', { eager: true, query: '?url', import: 'default' })
const byName = Object.fromEntries(Object.entries(photos).map(([k, v]) => [k.split('/').pop().replace(/\.[^.]+$/, ''), v]))

export default function Media({ src, variant, type, flip, seed, className = '', children, ...rest }) {
  const [ok, setOk] = useState(false)
  const url = src ? byName[src.replace(/\.[^.]+$/, '')] : null
  return (
    <div className={`media ${className}`} {...rest}>
      <div className="media__in">
        {!ok && <SareeArt variant={variant} type={type} flip={flip} seed={seed} />}
        {url && <img src={url} alt="" decoding="async" onLoad={() => setOk(true)} style={{ opacity: ok ? 1 : 0 }} />}
        <span className="grain" />
      </div>
      {children}
    </div>
  )
}
