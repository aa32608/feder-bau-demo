export function PlaceholderBox({ label, ratio = '4 / 3', className = '' }) {
  return (
    <div className={`placeholder-box ${className}`} style={{ aspectRatio: ratio }}>
      <span className="placeholder-label">{label}</span>
      <span className="placeholder-badge">Placeholder</span>
    </div>
  )
}

export function SectionEyebrow({ children }) {
  return <p className="eyebrow">{children}</p>
}

export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  )
}
