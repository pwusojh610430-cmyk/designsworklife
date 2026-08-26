import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { categories } from '../data'

export function Logo() {
  return (
    <Link to="/" className="logo">
      <span className="logo-mark">DR</span>
      DesignsWorkLife
    </Link>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <button className="menu-toggle" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          ☰
        </button>
        <nav className={`nav ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          <NavLink to="/agency">Agency Directory</NavLink>
          <NavLink to="/best-designs">Best Designs</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/marketplace/project-brief">Get Quotes</NavLink>
          <NavLink to="/marketplace/membership">For Agencies</NavLink>
          <NavLink to="/about-us">About</NavLink>
        </nav>
        <div className="header-actions">
          <Link to="/marketplace/project-brief" className="btn btn-primary">
            Hire an Agency
          </Link>
          <Link to="/account/login" className="icon-btn" aria-label="Login" title="Login">
            👤
          </Link>
        </div>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
            <p style={{ marginTop: '1rem', color: '#b7b5c6' }}>
              B2B media platform connecting brands with vetted agencies across design, marketing,
              software, and tech.
            </p>
            <p style={{ color: '#8f8ea0' }}>1,000,000+ monthly B2B visitors · 70,000+ newsletter subscribers</p>
          </div>
          {categories.slice(0, 3).map((group) => (
            <div key={group.name}>
              <h4>{group.name}</h4>
              {group.items.slice(0, 6).map((item) => (
                <Link key={item.slug} to={`/agency/${item.slug}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DesignsWorkLife. Inspired by DesignRush structure.</span>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/methodology">Methodology</Link>
            <Link to="/contact-us">Contact</Link>
            <Link to="/benefits">List Your Agency</Link>
            <Link to="/best-designs/how-it-works">Awards How It Works</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function Newsletter() {
  const [open, setOpen] = useState(true)
  const [done, setDone] = useState(false)
  if (!open) return null

  return (
    <aside className="newsletter">
      <button className="newsletter-close" onClick={() => setOpen(false)} aria-label="Close">
        ×
      </button>
      <h3>Receive our Newsletter</h3>
      <p className="meta">Join over 70,000 B2B decision-makers growing their brands</p>
      {done ? (
        <p style={{ color: 'var(--ok)', fontWeight: 600 }}>Thanks — you&apos;re on the list.</p>
      ) : (
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault()
            setDone(true)
          }}
        >
          <input type="email" required placeholder="Work email" />
          <button className="btn btn-primary" type="submit">
            Subscribe
          </button>
        </form>
      )}
    </aside>
  )
}

export function Stars({ value }: { value: number }) {
  const full = Math.round(value)
  return (
    <span className="stars" aria-label={`${value} stars`}>
      {'★'.repeat(full)}
      {'☆'.repeat(Math.max(0, 5 - full))}
    </span>
  )
}

export function PageHero({
  title,
  subtitle,
  crumbs,
}: {
  title: string
  subtitle?: string
  crumbs?: { label: string; to?: string }[]
}) {
  return (
    <div className="page-hero">
      <div className="container">
        {crumbs && (
          <div className="breadcrumbs">
            {crumbs.map((c, i) => (
              <span key={c.label}>
                {i > 0 && ' / '}
                {c.to ? <Link to={c.to}>{c.label}</Link> : c.label}
              </span>
            ))}
          </div>
        )}
        <h1>{title}</h1>
        {subtitle && <p className="meta">{subtitle}</p>}
      </div>
    </div>
  )
}
