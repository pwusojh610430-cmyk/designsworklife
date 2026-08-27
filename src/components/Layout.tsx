import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { bestDesignLinks, categories } from '../data'
import { BrandMark } from './BrandMark'

export function Logo() {
  return (
    <Link to="/" className="logo">
      <span className="logo-mark" aria-hidden="true">
        <BrandMark size={30} />
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

function AgencyMenuIcon({ name }: { name: string }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      {name === 'Featured' && (
        <path {...common} d="m16 3.5 3.7 7.6 8.3 1.2-6 5.8 1.4 8.2-7.4-3.9-7.4 3.9 1.4-8.2-6-5.8 8.3-1.2L16 3.5Z" />
      )}
      {name === 'Branding & Creative' && (
        <>
          <path {...common} d="M10.2 20.4c-2.2-1.7-3.7-4.4-3.7-7.4a9.5 9.5 0 0 1 19 0c0 3-1.4 5.7-3.7 7.4-1.1.9-1.8 2.1-1.8 3.5v.6h-8v-.6c0-1.4-.7-2.7-1.8-3.5Z" />
          <path {...common} d="M12 27h8M13.2 24.5h5.6M16 7.3V18" />
        </>
      )}
      {name === 'Website & Interface' && (
        <>
          <rect {...common} x="4.5" y="6" width="23" height="15" rx="1.5" />
          <path {...common} d="M8 10h16M9 24h14M16 21v3M8.5 13h5v5h-5zM16 13h7.5M16 16h7.5" />
        </>
      )}
      {name === 'Marketing' && (
        <>
          <path {...common} d="m5 17 14-6v12L5 17Zm14-4.5c3.2 1.2 5.3 3.2 7 5.5M19 21.5c3.2-1.2 5.3-3.2 7-5.5M8.5 18.5l1.2 7h4.8l-2.1-8.7" />
        </>
      )}
      {name === 'Software & App' && (
        <>
          <rect {...common} x="3.5" y="6" width="17" height="13" rx="1.5" />
          <path {...common} d="M8 23h8M12 19v4" />
          <rect {...common} x="20.5" y="12" width="8" height="14" rx="1.5" />
          <path {...common} d="M23.5 23.5h2" />
        </>
      )}
      {name === 'IT Services' && (
        <>
          <rect {...common} x="4" y="5" width="24" height="17" rx="2" />
          <path {...common} d="M10 26h12M16 22v4M8 17h5l2-6 3 8 2-4h4" />
        </>
      )}
    </svg>
  )
}

const featuredAgencyLinks = [
  { label: 'Web Design Companies', slug: 'website-design-development' },
  { label: 'Digital Marketing Agencies', slug: 'digital-marketing' },
  { label: 'Software Development Companies', slug: 'software-development' },
  { label: 'Mobile App Development Companies', slug: 'mobile-app-design-development' },
  { label: 'Web Development Companies', slug: 'web-development-companies' },
  { label: 'SEO Agencies', slug: 'search-engine-optimization' },
  { label: 'AI Companies', slug: 'ai-companies' },
  { label: 'UI/UX Design Agencies', slug: 'ui-ux-design' },
  { label: 'PPC Agencies', slug: 'paid-media-pay-per-click' },
  { label: 'Branding Agencies', slug: 'logo-branding' },
  { label: 'IT Services Companies', slug: 'it-services' },
  { label: 'Cybersecurity Companies', slug: 'cybersecurity' },
]

const trendingMenuLinks = [
  { label: 'Latest News', to: '/news' },
  { label: 'Brand News', to: '/news/topic/branding' },
  { label: 'AI News', to: '/news/topic/ai' },
  { label: 'Creative News', to: '/news/topic/creative' },
  { label: 'Marketing News', to: '/news/topic/marketing' },
  { label: 'eCommerce News', to: '/news/topic/ecommerce' },
  { label: 'Technology News', to: '/news/topic/tech' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [agencyMenuCategory, setAgencyMenuCategory] = useState('Featured')
  const [agencyRegion, setAgencyRegion] = useState<'us' | 'global'>('us')
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

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
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

  const agencyMenuCategories = [
    { name: 'Featured', items: featuredAgencyLinks },
    ...categories.slice(0, 5),
  ]
  const activeAgencyCategory =
    agencyMenuCategories.find((group) => group.name === agencyMenuCategory) ?? agencyMenuCategories[0]
  const activeAgencyLinks =
    agencyRegion === 'global' && agencyMenuCategory === 'Featured'
      ? featuredAgencyLinks.slice().reverse()
      : activeAgencyCategory.items

  return (
    <header
      className={`site-header${scrolled ? ' is-scrolled' : ''}`}
      ref={headerRef}
      aria-label="Site"
    >
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
          <nav className={`main-nav ${mobileOpen ? 'open' : ''}`} aria-label="Primary">
            <div
              className={`nav-item ${openMenu === 'news' ? 'open' : ''}`}
              onMouseEnter={() => openMenuSoon('news')}
              onMouseLeave={closeMenuSoon}
            >
              <div className="nav-trigger-row">
                <Link to="/news" className="nav-trigger" onClick={closeAll}>
                  Trending Brand Stories
                </Link>
                <button
                  type="button"
                  className="nav-caret"
                  aria-label="Open Trending Brand Stories menu"
                  aria-expanded={openMenu === 'news'}
                  aria-controls="mega-news"
                  onClick={() => toggleMenu('news')}
                >
                  <Chevron />
                </button>
              </div>
              <div className="mega-panel mega-panel-news" id="mega-news" role="region" aria-label="Trending Brand Stories menu">
                <nav className="trending-menu-list" aria-label="News categories">
                  {trendingMenuLinks.map((item) => (
                    <Link key={item.to} to={item.to} onClick={closeAll}>
                      <span className="trending-menu-arrow" aria-hidden="true">›</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>
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
                  aria-label="Open Agency Directory menu"
                  aria-expanded={openMenu === 'agency'}
                  aria-controls="mega-agency"
                  onClick={() => toggleMenu('agency')}
                >
                  <Chevron />
                </button>
              </div>
              <div className="mega-panel mega-panel-agency" id="mega-agency" role="region" aria-label="Agency Directory menu">
                <div className="agency-mega-shell">
                  <div className="agency-mega-categories" aria-label="Agency service categories">
                    {agencyMenuCategories.map((group) => (
                      <button
                        type="button"
                        className={`agency-mega-category${agencyMenuCategory === group.name ? ' is-active' : ''}`}
                        aria-pressed={agencyMenuCategory === group.name}
                        onMouseEnter={() => setAgencyMenuCategory(group.name)}
                        onFocus={() => setAgencyMenuCategory(group.name)}
                        onClick={() => setAgencyMenuCategory(group.name)}
                        key={group.name}
                      >
                        <span className="agency-mega-icon"><AgencyMenuIcon name={group.name} /></span>
                        <span>{group.name}</span>
                      </button>
                    ))}
                  </div>
                  <div className="agency-mega-content">
                    <div className="agency-region-tabs" role="tablist" aria-label="Agency region">
                      <button
                        type="button"
                        role="tab"
                        aria-selected={agencyRegion === 'us'}
                        className={agencyRegion === 'us' ? 'is-active' : ''}
                        onClick={() => setAgencyRegion('us')}
                      >
                        <span aria-hidden="true">🇺🇸</span> US Agencies
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={agencyRegion === 'global'}
                        className={agencyRegion === 'global' ? 'is-active' : ''}
                        onClick={() => setAgencyRegion('global')}
                      >
                        Global Agencies
                      </button>
                    </div>
                    <div className="agency-mega-links" aria-live="polite">
                      {activeAgencyLinks.map((item) => (
                        <Link key={item.slug} to={`/agency/${item.slug}`} onClick={closeAll}>
                          <span aria-hidden="true">›</span>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
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
                  aria-label="Open Best Designs menu"
                  aria-expanded={openMenu === 'awards'}
                  aria-controls="mega-awards"
                  onClick={() => toggleMenu('awards')}
                >
                  <Chevron />
                </button>
              </div>
              <div className="mega-panel mega-panel-awards" id="mega-awards" role="region" aria-label="Best Designs menu">
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
              <span>Find an Agency</span>
            </Link>
          </nav>

          <Link to="/marketplace/project-brief" className="btn btn-green header-find">
            <span>Find an Agency</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="footer-watermark" aria-hidden="true">
          <BrandMark size={280} />
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <BrandMark size={36} />
              <span>DESIGNSWORKLIFE</span>
            </Link>
            <p>
              DesignsWorkLife is a trusted{' '}
              <span className="footer-accent">agency marketplace</span>,{' '}
              <span className="footer-accent">awards showcase</span>, and media hub helping brands
              find partners in <span className="footer-accent">software</span>,{' '}
              <span className="footer-accent">product design</span>,{' '}
              <span className="footer-accent">creative</span>, and{' '}
              <span className="footer-accent">growth marketing</span>. We publish vetted reviews,
              practical insights, and industry trends that support smarter hiring decisions.
            </p>
          </div>

          <div className="footer-col">
            <h4>For Businesses</h4>
            <Link to="/agency">Agency Categories</Link>
            <Link to="/methodology">Agency Ranking Methodology</Link>
            <Link to="/news">Latest Trends and Insights</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/advertise">Advertise</Link>
          </div>

          <div className="footer-col">
            <h4>For Agencies</h4>
            <Link to="/benefits">Benefits Of Listing With Us</Link>
            <Link to="/submit-agency">Submit An Agency</Link>
            <Link to="/sponsorship">Sponsorship</Link>
            <Link to="/agency">All Agencies</Link>
          </div>

          <div className="footer-col">
            <h4>About DesignsWorkLife</h4>
            <Link to="/about-us">Team &amp; Story</Link>
            <Link to="/contact-us">Contact Us</Link>

            <h4 className="footer-ai-title">Ask AI about DesignsWorkLife</h4>
            <div className="footer-ai-icons" aria-label="Ask AI shortcuts">
              <a href="https://chatgpt.com" target="_blank" rel="noreferrer" aria-label="ChatGPT">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l2.4 6.8L22 12l-7.6 3.2L12 22l-2.4-6.8L2 12l7.6-3.2L12 2z" />
                </svg>
              </a>
              <a href="https://gemini.google.com" target="_blank" rel="noreferrer" aria-label="Gemini">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 3l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z" />
                </svg>
              </a>
              <a href="https://claude.ai" target="_blank" rel="noreferrer" aria-label="Claude">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3.2a1.8 1.8 0 0 1 1.8 1.8v2.4h2.4a1.8 1.8 0 1 1 0 3.6h-2.4v2.4a1.8 1.8 0 1 1-3.6 0v-2.4H7.8a1.8 1.8 0 1 1 0-3.6h2.4V9A1.8 1.8 0 0 1 12 7.2z" />
                </svg>
              </a>
              <a href="https://www.perplexity.ai" target="_blank" rel="noreferrer" aria-label="Perplexity">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 12a8 8 0 0 1 8-8" />
                  <path d="M20 12a8 8 0 0 1-8 8" />
                  <path d="M12 4v16" />
                  <path d="M4 12h16" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <div className="footer-legal-links">
              <Link to="/sitemap">Sitemap</Link>
              <Link to="/terms">Terms of Use &amp; IP</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/accessibility">Accessibility</Link>
              <Link to="/fraud-protection">Fraud Protection</Link>
            </div>
            <p>© DesignsWorkLife {year}. All Rights Reserved</p>
          </div>

          <div className="footer-social" aria-label="Social media">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.5 8.5A2 2 0 1 1 6.5 4.5a2 2 0 0 1 0 4zM4.8 20V9.7h3.4V20H4.8zM10.2 20V9.7h3.3v1.4h.05c.46-.87 1.58-1.8 3.26-1.8 3.48 0 4.13 2.3 4.13 5.28V20h-3.4v-4.7c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48V20h-3.38z" />
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9zM12 8.2A3.8 3.8 0 1 1 12 15.8 3.8 3.8 0 0 1 12 8.2zm0 1.8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm4.7-2.7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-7.2h2.4l.36-2.8h-2.76V9.2c0-.8.22-1.35 1.38-1.35H16.5V5.35C16.2 5.3 15.2 5.2 14 5.2c-2.45 0-4.13 1.5-4.13 4.24v2.36H7.5v2.8h2.37V21h3.63z" />
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4 4h4.2l4.05 5.7L16.9 4H20l-6.15 8.2L20 20h-4.2l-4.3-6.05L7.1 20H4l6.4-8.55L4 4z" />
              </svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21.6 8.2a2.7 2.7 0 0 0-1.9-1.9C17.9 5.8 12 5.8 12 5.8s-5.9 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 10 2 12.5 2 12.5s0 2.5.4 4.3a2.7 2.7 0 0 0 1.9 1.9c1.8.5 7.7.5 7.7.5s5.9 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.8.4-4.3.4-4.3s0-2.5-.4-4.3zM10.2 15.3V9.7l5 2.8-5 2.8z" />
              </svg>
            </a>
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
      <h3>Get the DesignsWorkLife Newsletter</h3>
      <p className="meta">Join over 68,000 B2B marketers growing their brands</p>
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
