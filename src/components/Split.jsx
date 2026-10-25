/* React-rendered text splitting (no DOM mutation, safe with StrictMode). */
export function Lines({ lines, className = '' }) {
  return (
    <>{lines.map((l, i) => (
      <span key={i} className={`line ${className}`}><span className="line__in" data-anim="line">{l}</span></span>
    ))}</>
  )
}
export function Words({ text, className = '' }) {
  return (
    <>{text.split(' ').map((w, i) => (
      <span key={i} className="word"><span className={`word__in ${className}`} data-anim="word">{w}&nbsp;</span></span>
    ))}</>
  )
}
export function Chars({ text }) {
  return (
    <>{[...text].map((c, i) => (
      <span key={i} className="char"><span className="char__in" data-anim="char">{c === ' ' ? ' ' : c}</span></span>
    ))}</>
  )
}
export function Scrub({ text, className = '' }) {
  return (
    <p className={`scrub ${className}`}>
      {text.split(' ').map((w, i) => <span key={i} className="scrub__w">{w} </span>)}
    </p>
  )
}
