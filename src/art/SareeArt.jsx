import { useId } from 'react'

/* Hand-built SVG fashion illustrations. Palettes per variant. */
export const PALETTES = {
  hero:    { bg: ['#1d6a4e', '#06231a'], glow: '#f0d9a0', s1: '#f6e8d4', s2: '#d6b48c', blouse: '#8c1235', zari: '#d8b56a', leaf: '#2e8a5a' },
  rose:    { bg: ['#f1c6b4', '#7a2a40'], glow: '#fff1e6', s1: '#c42a63', s2: '#6a0c2a', blouse: '#f0d9a0', zari: '#f0d9a0', leaf: '#8c3c48' },
  gold:    { bg: ['#f5dca0', '#5a3d12'], glow: '#fff6dc', s1: '#1d6a4e', s2: '#0a3326', blouse: '#8c1235', zari: '#f0d9a0', leaf: '#a67c2e' },
  cream:   { bg: ['#fff6e6', '#b8946a'], glow: '#ffffff', s1: '#2e7d5c', s2: '#14503a', blouse: '#d8b56a', zari: '#b8860b', leaf: '#8aa84a' },
  emerald: { bg: ['#2e8a5a', '#06231a'], glow: '#d8f0c0', s1: '#e8b9a0', s2: '#b8695a', blouse: '#0a3326', zari: '#f0d9a0', leaf: '#4aa26a' },
  ivory:   { bg: ['#f3e6d0', '#8a6a48'], glow: '#ffffff', s1: '#8c1235', s2: '#4d081f', blouse: '#f6e8d4', zari: '#d8b56a', leaf: '#b8a070' },
  forest:  { bg: ['#8aa84a', '#0f4a37'], glow: '#f0f5c0', s1: '#f3e3cf', s2: '#c9a97e', blouse: '#14503a', zari: '#d8b56a', leaf: '#3a8a52' },
  blush:   { bg: ['#fbe3d8', '#b8695a'], glow: '#ffffff', s1: '#14573f', s2: '#06231a', blouse: '#fbe3d8', zari: '#d8b56a', leaf: '#c88a78' },
  ruby:    { bg: ['#b01e56', '#2b0613'], glow: '#ffb8cf', s1: '#e8c37a', s2: '#a07a30', blouse: '#06231a', zari: '#fff1c0', leaf: '#6a0c2a' },
}

function Defs({ id, p }) {
  return (
    <defs>
      <linearGradient id={`${id}bg`} x1="0" y1="0" x2="0.4" y2="1"><stop offset="0" stopColor={p.bg[0]} /><stop offset="1" stopColor={p.bg[1]} /></linearGradient>
      <radialGradient id={`${id}glow`} cx="55%" cy="38%" r="55%"><stop offset="0" stopColor={p.glow} stopOpacity=".85" /><stop offset="1" stopColor={p.glow} stopOpacity="0" /></radialGradient>
      <linearGradient id={`${id}s`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={p.s1} /><stop offset="1" stopColor={p.s2} /></linearGradient>
      <linearGradient id={`${id}s2`} x1="1" y1="0" x2="0" y2="1"><stop offset="0" stopColor={p.s1} /><stop offset="1" stopColor={p.s2} /></linearGradient>
      <linearGradient id={`${id}z`} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor={p.zari} /><stop offset=".5" stopColor="#fff3c8" /><stop offset="1" stopColor={p.zari} /></linearGradient>
      <linearGradient id={`${id}skin`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e9b794" /><stop offset="1" stopColor="#b9805c" /></linearGradient>
      <linearGradient id={`${id}shade`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".55" /></linearGradient>
      <linearGradient id={`${id}leaf`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={p.leaf} /><stop offset="1" stopColor={p.bg[1]} /></linearGradient>
      <pattern id={`${id}m`} width="34" height="34" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
        <g fill="none" stroke={p.zari} strokeWidth="1.1" opacity=".75">
          <circle cx="17" cy="17" r="4.2" /><circle cx="17" cy="17" r="1.2" fill={p.zari} />
          <path d="M17 7c3 3 3 6 0 7-3-1-3-4 0-7zM17 27c3-3 3-6 0-7-3 1-3 4 0 7zM7 17c3-3 6-3 7 0-1 3-4 3-7 0zM27 17c-3-3-6-3-7 0 1 3 4 3 7 0z" />
        </g>
        <circle cx="0" cy="0" r="1.4" fill={p.zari} opacity=".6" /><circle cx="34" cy="34" r="1.4" fill={p.zari} opacity=".6" />
      </pattern>
      <pattern id={`${id}b`} width="22" height="14" patternUnits="userSpaceOnUse">
        <path d="M0 7h22" stroke="#7a5a10" strokeWidth=".6" opacity=".6" />
        <path d="M11 1l5 6-5 6-5-6z" fill="none" stroke="#7a5a10" strokeWidth=".9" opacity=".8" />
      </pattern>
      <filter id={`${id}blur`}><feGaussianBlur stdDeviation="14" /></filter>
      <filter id={`${id}soft`}><feGaussianBlur stdDeviation="2" /></filter>
    </defs>
  )
}

function Backdrop({ id, p }) {
  return (
    <g className="art-bg">
      <rect width="400" height="560" fill={`url(#${id}bg)`} />
      <rect x="70" y="30" width="260" height="560" rx="130" fill={p.glow} opacity=".13" />
      <rect x="95" y="55" width="210" height="560" rx="105" fill="none" stroke={p.zari} strokeOpacity=".35" strokeWidth="1.2" />
      <rect width="400" height="560" fill={`url(#${id}glow)`} />
      {[[30, 60, 110, -30], [370, 90, 130, 25], [20, 330, 90, 20], [385, 360, 120, -20], [60, 520, 100, 70], [350, 540, 110, 100]].map(([x, y, h, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r})`} filter={`url(#${id}soft)`} opacity=".85">
          <path d={`M0 0C${h * 0.45} ${h * 0.25} ${h * 0.45} ${h * 0.7} 0 ${h}C${-h * 0.45} ${h * 0.7} ${-h * 0.45} ${h * 0.25} 0 0z`} fill={`url(#${id}leaf)`} />
          <path d={`M0 6V${h - 6}`} stroke={p.glow} strokeOpacity=".25" />
        </g>
      ))}
      {[[90, 120, 26], [320, 190, 18], [60, 260, 14], [345, 300, 30], [150, 60, 12], [260, 40, 20]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={p.glow} opacity=".14" filter={`url(#${id}soft)`} />
      ))}
    </g>
  )
}

function Model({ id, p, flip }) {
  const pleats = Array.from({ length: 13 }, (_, i) => {
    const t = i / 12
    const x1 = 160 + t * 80
    const x2 = 105 + t * 190
    return <path key={i} d={`M${x1} 300 Q${(x1 + x2) / 2 + (t - 0.5) * 20} 430 ${x2} 548`} stroke="#000" strokeOpacity={i % 2 ? 0.12 : 0.04} strokeWidth={i % 2 ? 3 : 6} fill="none" />
  })
  return (
    <g className="art-fig" transform={flip ? 'translate(400 0) scale(-1 1)' : undefined}>
      <ellipse cx="200" cy="552" rx="150" ry="14" fill="#000" opacity=".35" filter={`url(#${id}blur)`} />
      {/* skirt / body */}
      <path d="M142 262 L262 262 Q296 400 336 556 L66 556 Q106 400 142 262z" fill={`url(#${id}s)`} />
      <path d="M142 262 L262 262 Q296 400 336 556 L66 556 Q106 400 142 262z" fill={`url(#${id}m)`} opacity=".55" />
      {pleats}
      {/* hem border */}
      <path d="M72 520 Q200 534 332 520 L338 556 L64 556z" fill={`url(#${id}z)`} />
      <path d="M72 520 Q200 534 332 520 L338 556 L64 556z" fill={`url(#${id}b)`} />
      <path d="M72 520 Q200 534 332 520" stroke="#fff3c8" strokeWidth="1.5" fill="none" />
      {/* hanging pallu */}
      <path d="M150 214 Q104 330 112 556 L172 556 Q152 400 176 262z" fill={`url(#${id}s2)`} />
      <path d="M150 214 Q104 330 112 556 L172 556 Q152 400 176 262z" fill={`url(#${id}m)`} opacity=".7" />
      <path d="M150 214 Q104 330 112 556" stroke={`url(#${id}z)`} strokeWidth="7" fill="none" />
      <path d="M176 262 Q152 400 172 556" stroke={`url(#${id}z)`} strokeWidth="5" fill="none" opacity=".9" />
      {/* left arm */}
      <path d="M146 208 Q118 262 128 338" stroke={`url(#${id}skin)`} strokeWidth="19" strokeLinecap="round" fill="none" />
      <path d="M126 326 q-3 22 8 28" stroke={`url(#${id}skin)`} strokeWidth="10" strokeLinecap="round" fill="none" />
      {[0, 1, 2, 3, 4].map(i => <circle key={i} cx={122 + (i % 2) * 2} cy={296 + i * 6} r="4.2" fill="none" stroke={p.zari} strokeWidth="1.8" />)}
      {/* blouse + shoulders */}
      <path d="M146 204 Q200 176 258 204 L268 268 Q204 288 140 268z" fill={p.blouse} />
      <path d="M146 204 Q200 176 258 204 L268 268 Q204 288 140 268z" fill={`url(#${id}shade)`} opacity=".35" />
      <path d="M168 192 Q202 214 236 190" fill="none" stroke={p.zari} strokeWidth="1.6" />
      {/* pallu over shoulder */}
      <path d="M144 206 Q186 236 270 258 L274 312 Q196 292 130 222z" fill={`url(#${id}s)`} />
      <path d="M144 206 Q186 236 270 258 L274 312 Q196 292 130 222z" fill={`url(#${id}m)`} opacity=".6" />
      <path d="M130 222 Q196 292 274 312" stroke={`url(#${id}z)`} strokeWidth="8" fill="none" />
      {/* neck + head */}
      <path d="M190 150 L190 196 Q202 208 216 196 L216 150z" fill={`url(#${id}skin)`} />
      <path d="M188 196 Q203 214 218 196 L218 206 Q203 224 188 206z" fill={p.zari} opacity=".9" />
      {[0, 1, 2, 3, 4].map(i => <circle key={i} cx={193 + i * 5} cy={210 + Math.sin(i * 0.8) * 4 + 3} r="2.4" fill="#fff3c8" />)}
      <ellipse cx="204" cy="124" rx="29" ry="37" fill={`url(#${id}skin)`} />
      <path d="M172 118 Q176 78 206 80 Q238 82 236 122 Q226 96 204 98 Q184 100 172 118z" fill="#150a08" />
      <circle cx="206" cy="66" r="21" fill="#150a08" />
      <path d="M160 110 Q158 150 176 160 Q170 128 178 112z" fill="#150a08" opacity=".0" />
      {[0, 1, 2, 3, 4, 5, 6].map(i => {
        const a = (i / 7) * Math.PI * 1.7 + 0.5
        return <circle key={i} cx={206 + Math.cos(a) * 22} cy={66 + Math.sin(a) * 20} r="4.4" fill={i % 2 ? '#fff' : '#ffd8e4'} opacity=".95" />
      })}
      <path d="M200 83 q5 6 10 0" fill="none" stroke={p.zari} strokeWidth="2" />
      <circle cx="204" cy="95" r="2" fill="#b8225a" />
      <path d="M232 128 q10 14 4 30" stroke={p.zari} strokeWidth="2" fill="none" />
      <circle cx="236" cy="160" r="3.4" fill={p.zari} />
      <path d="M190 138 q14 10 28 0" stroke="#7a2a2a" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity=".7" />
      {/* waist chain */}
      <path d="M142 266 Q204 288 264 266" stroke={p.zari} strokeWidth="2" fill="none" strokeDasharray="1 4" strokeLinecap="round" />
    </g>
  )
}

function Fabric({ id, p, seed = 0 }) {
  const folds = Array.from({ length: 9 }, (_, i) => {
    const y = 40 + i * 62 + seed * 7
    const amp = 22 + ((i + seed) % 3) * 10
    return (
      <g key={i}>
        <path d={`M-10 ${y} C 90 ${y - amp} 160 ${y + amp} 230 ${y} S 340 ${y - amp} 410 ${y + 6} L410 ${y + 90} C 340 ${y + 70} 300 ${y + 110} 230 ${y + 92} S 90 ${y + 70} -10 ${y + 96}z`} fill={`url(#${id}${i % 2 ? 's' : 's2'})`} />
        <path d={`M-10 ${y} C 90 ${y - amp} 160 ${y + amp} 230 ${y} S 340 ${y - amp} 410 ${y + 6}`} stroke="#fff" strokeOpacity=".22" strokeWidth="2" fill="none" />
        <path d={`M-10 ${y + 96} C 90 ${y + 70} 160 ${y + 110} 230 ${y + 92} S 340 ${y + 70} 410 ${y + 90}`} stroke="#000" strokeOpacity=".28" strokeWidth="6" fill="none" filter={`url(#${id}soft)`} />
      </g>
    )
  })
  return (
    <g className="art-fig">
      <rect width="400" height="560" fill={`url(#${id}s)`} />
      {folds}
      <rect width="400" height="560" fill={`url(#${id}m)`} opacity=".6" />
      {/* zari border band */}
      <g transform={`rotate(${seed % 2 ? -8 : 8} 200 280)`}>
        <rect x="-60" y="248" width="520" height="46" fill={`url(#${id}z)`} />
        <rect x="-60" y="248" width="520" height="46" fill={`url(#${id}b)`} />
        <rect x="-60" y="248" width="520" height="3" fill="#fff3c8" /><rect x="-60" y="291" width="520" height="3" fill="#fff3c8" />
      </g>
      <rect width="400" height="560" fill={`url(#${id}shade)`} opacity=".35" />
    </g>
  )
}

export default function SareeArt({ variant = 'hero', type = 'model', flip = false, seed = 0, className = '' }) {
  const id = useId().replace(/:/g, '')
  const p = PALETTES[variant] || PALETTES.hero
  return (
    <svg className={`art ${className}`} viewBox="0 0 400 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true" role="presentation">
      <Defs id={id} p={p} />
      {type === 'fabric' ? <Fabric id={id} p={p} seed={seed} /> : <><Backdrop id={id} p={p} /><Model id={id} p={p} flip={flip} /></>}
      <rect width="400" height="560" fill={`url(#${id}shade)`} opacity=".25" />
    </svg>
  )
}
