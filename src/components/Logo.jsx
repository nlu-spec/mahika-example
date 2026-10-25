export const Mark = ({ className = '', ...p }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <circle className="m-ring" cx="50" cy="50" r="45" />
    <path className="m-m" d="M28 68V34l22 26 22-26v34" />
    <path className="m-leaf" d="M50 18c6 4 8 9 0 14-8-5-6-10 0-14z" />
  </svg>
)
