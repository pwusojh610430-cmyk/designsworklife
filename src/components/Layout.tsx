import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { bestDesignLinks, categories, newsTopics } from '../data'

export function Logo() {
  return (
    <Link to="/" className="logo">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="26" height="26">
          <path
            fill="currentColor"
            d="M16 2c2.8 4.2 8.5 7.2 8.5 13.2C24.5 21.8 20.8 26 16 28c-4.8-2-8.5-6.2-8.5-12.8C7.5 9.2 13.2 6.2 16 2z"
          />
          <circle fill="#fff" cx="13.2" cy="14" r="1.3" />
          <circle fill="#fff" cx="16.5" cy="11.2" r="1.1" />
          <circle fill="#fff" cx="19.2" cy="14.4" r="1.15" />
        </svg>
      </span>
      <span className="logo-text">DesignsWorkLife</span>
    </Link>
  )
}

function Chevron() {
  return (
    <svg className="nav-chevron" width="8" height="5" viewBox="0 0 8 5" aria-hidden="true">
      <path
        d="M1 1l3 3 3-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<number | null>(null)

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!headerRef.current?.contains(e.target as Node)) {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  function clearCloseTimer() {
    if (closeTimer.current != null) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  function openMenuSoon(id: string) {
    clearCloseTimer()
    setOpenMenu(id)
  }

  function closeMenuSoon() {
    clearCloseTimer()
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 140)
  }

  function toggleMenu(id: string) {
    setOpenMenu((cur) => (cur === id ? null : id))
  }

  function closeAll() {
    setOpenMenu(null)
    setMobileOpen(false)
  }

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-top">
        <div className="container header-top-inner">
          <Logo />
          <div className="header-utility">
            <Link to="/benefits" className="util-link">
              List Your Agency
            </Link>
            <button
              className="menu-toggle"
              aria-label="Menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container header-main-inner">
          <nav className={`main-nav ${mobileOpen ? 'open' : ''}`}>
            <div
              className={`nav-item ${openMenu === 'news' ? 'open' : ''}`}
              onMouseEnter={() => openMenuSoon('news')}
              onMouseLeave={closeMenuSoon}
            >
              <div className="nav-trigger-row">
                <Link to="/news" className="nav-trigger" onClick={closeAll}>
                  Trending Brand News
                </Link>
                <button
                  type="button"
                  className="nav-caret"
                  aria-label="Trending Brand News menu"
                  aria-expanded={openMenu === 'news'}
                  onClick={() => toggleMenu('news')}
                >
                  <Chevron />
                </button>
              </div>
              <div className="mega-panel mega-panel-news">
                <div className="mega-inner">
                  <div className="mega-col">
                    <h4>News Topics</h4>
                    {newsTopics.slice(0, 6).map((t) => (
                      <Link key={t.slug} to={`/news/topic/${t.slug}`} onClick={closeAll}>
                        {t.label}
                      </Link>
                    ))}
                  </div>
                  <div className="mega-col">
                    <h4>More Coverage</h4>
                    {newsTopics.slice(6).map((t) => (
                      <Link key={t.slug} to={`/news/topic/${t.slug}`} onClick={closeAll}>
                        {t.label}
                      </Link>
                    ))}
                    <Link to="/news" className="mega-view-all" onClick={closeAll}>
                      View All News →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`nav-item ${openMenu === 'agency' ? 'open' : ''}`}
              onMouseEnter={() => openMenuSoon('agency')}
              onMouseLeave={closeMenuSoon}
            >
              <div className="nav-trigger-row">
                <Link to="/agency" className="nav-trigger" onClick={closeAll}>
                  Agency Directory
                </Link>
                <button
                  type="button"
                  className="nav-caret"
                  aria-label="Agency Directory menu"
                  aria-expanded={openMenu === 'agency'}
                  onClick={() => toggleMenu('agency')}
                >
                  <Chevron />
                </button>
              </div>
              <div className="mega-panel mega-panel-agency">
                <div className="mega-inner mega-agency-grid">
                  {categories.map((group) => (
                    <div className="mega-col" key={group.name}>
                      <h4>{group.name}</h4>
                      {group.items.map((item) => (
                        <Link key={item.slug} to={`/agency/${item.slug}`} onClick={closeAll}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="mega-footer">
                  <Link to="/agency" onClick={closeAll}>
                    View All Service Providers
                  </Link>
                  <Link to="/benefits" onClick={closeAll}>
                    List Your Agency
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/marketplace" className="nav-link-plain" onClick={closeAll}>
              Marketplace
            </Link>

            <div
              className={`nav-item ${openMenu === 'awards' ? 'open' : ''}`}
              onMouseEnter={() => openMenuSoon('awards')}
              onMouseLeave={closeMenuSoon}
            >
              <div className="nav-trigger-row">
                <Link to="/best-designs" className="nav-trigger" onClick={closeAll}>
                  Best Designs
                </Link>
                <button
                  type="button"
                  className="nav-caret"
                  aria-label="Best Designs menu"
                  aria-expanded={openMenu === 'awards'}
                  onClick={() => toggleMenu('awards')}
                >
                  <Chevron />
                </button>
              </div>
              <div className="mega-panel mega-panel-awards">
                <div className="mega-inner">
                  <div className="mega-col">
                    <h4>Award Categories</h4>
                    {bestDesignLinks.slice(0, 7).map((l) => (
                      <Link key={l.to} to={l.to} onClick={closeAll}>
                        {l.label}
                      </Link>
                    ))}
                  </div>
                  <div className="mega-col">
                    <h4>Participate</h4>
                    {bestDesignLinks.slice(7).map((l) => (
                      <Link key={l.to} to={l.to} onClick={closeAll}>
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/marketplace/project-brief"
              className="btn btn-green nav-mobile-find"
              onClick={closeAll}
            >
              Find an Agency
            </Link>
          </nav>

          <Link to="/marketplace/project-brief" className="btn btn-green header-find">
            Find an Agency
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
        <div className="footer-grid footer-grid-wide">
          <div>
            <Logo />
            <p style={{ marginTop: '1rem', color: '#b7b5c6' }}>
              B2B media platform connecting brands with vetted agencies across design, marketing,
              software, and tech.
            </p>
          </div>
          <div>
            <h4>Trending Brand News</h4>
            {newsTopics.slice(0, 6).map((t) => (
              <Link key={t.slug} to={`/news/topic/${t.slug}`}>
                {t.label}
              </Link>
            ))}
          </div>
          <div>
            <h4>Agency Directory</h4>
            {categories.slice(0, 4).map((g) => (
              <Link key={g.name} to={`/agency/${g.items[0].slug}`}>
                {g.name}
              </Link>
            ))}
            <Link to="/agency">View All Agencies</Link>
          </div>
          <div>
            <h4>Best Designs</h4>
            {bestDesignLinks.slice(0, 8).map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <h4>Marketplace</h4>
            <Link to="/marketplace">Marketplace Home</Link>
            <Link to="/marketplace/project-brief">Submit Project Brief</Link>
            <Link to="/marketplace/membership">Agency Membership</Link>
            <Link to="/marketplace/faqs">Marketplace FAQs</Link>
            <Link to="/benefits">List Your Agency</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DesignsWorkLife. Inspired by DesignRush structure.</span>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/about-us">About</Link>
            <Link to="/methodology">Methodology</Link>
            <Link to="/contact-us">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function openNewsletter() {
  window.dispatchEvent(new CustomEvent('dwl:open-newsletter'))
}

export function Newsletter() {
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    function onOpen() {
      setOpen(true)
      setDone(false)
    }
    window.addEventListener('dwl:open-newsletter', onOpen)
    return () => window.removeEventListener('dwl:open-newsletter', onOpen)
  }, [])

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
              <span key={`${c.label}-${i}`}>
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

export function SubNav({
  items,
  active,
}: {
  items: { label: string; to: string }[]
  active?: string
}) {
  return (
    <div className="subnav">
      <div className="container subnav-inner">
        {items.map((item) => (
          <Link key={item.to} to={item.to} className={active === item.to ? 'active' : ''}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
