import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { agencies, categories, type Agency } from '../data'
import { Stars } from './Layout'

const featuredLinks = [
  { label: 'Web Design Companies', slug: 'website-design-development' },
  { label: 'Digital Marketing Agencies', slug: 'digital-marketing' },
  { label: 'Software Development Companies', slug: 'software-development' },
  { label: 'AI Companies', slug: 'ai-companies' },
  { label: 'UI/UX Design Agencies', slug: 'ui-ux-design' },
  { label: 'SEO Agencies', slug: 'search-engine-optimization' },
  { label: 'Mobile App Development Companies', slug: 'mobile-app-design-development' },
  { label: 'eCommerce Development Companies', slug: 'ecommerce' },
  { label: 'Branding Agencies', slug: 'logo-branding' },
  { label: 'PPC Agencies', slug: 'paid-media-pay-per-click' },
]

function CatIcon({ name }: { name: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
    focusable: false as const,
  }
  switch (name) {
    case 'featured':
      return (
        <svg {...common}>
          <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.9 7.2 18l.9-5.4L4.2 8.7l5.4-.8L12 3z" />
        </svg>
      )
    case 'Branding & Creative':
      return (
        <svg {...common}>
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 4 12.5V17H8v-2.5A7 7 0 0 1 12 2z" />
        </svg>
      )
    case 'Website & Interface':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
        </svg>
      )
    case 'Marketing':
      return (
        <svg {...common}>
          <path d="M3 11v2a4 4 0 0 0 4 4h1l4 4V5L8 9H7a4 4 0 0 0-4 2zM16 9a4 4 0 0 1 0 6" />
        </svg>
      )
    case 'Software & App':
      return (
        <svg {...common}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      )
    case 'IT Services':
      return (
        <svg {...common}>
          <rect x="2" y="4" width="20" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <path d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      )
  }
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
      />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v3H2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zm0 4h4V4h-4v2zm12 7v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5h8v1h4v-1h8z"
      />
    </svg>
  )
}

const categoryFeaturedSlugs: Record<string, string[]> = {
  featured: ['digital-silk', 'design-in-dc', 'lounge-lizard'],
  'Branding & Creative': ['clay', 'toby-ng-design', 'lounge-lizard'],
  'Website & Interface': ['digital-silk', 'goingclear', 'design-in-dc'],
  Marketing: ['lounge-lizard', 'digital-silk', 'clay'],
  'Software & App': ['goingclear', 'design-in-dc', 'digital-silk'],
  'IT Services': ['goingclear', 'digital-silk', 'lounge-lizard'],
  'Business Services': ['clay', 'lounge-lizard', 'goingclear'],
}

function filterAgencies(active: string, limit: number): Agency[] {
  const preferred = categoryFeaturedSlugs[active] ?? categoryFeaturedSlugs.featured
  const bySlug = new Map(agencies.map((a) => [a.slug, a]))
  const picked: Agency[] = []

  for (const slug of preferred) {
    const hit = bySlug.get(slug)
    if (hit) picked.push(hit)
    if (picked.length >= limit) return picked
  }

  for (const agency of agencies) {
    if (picked.some((p) => p.id === agency.id)) continue
    picked.push(agency)
    if (picked.length >= limit) break
  }

  return picked
}

export function FeaturedAgencyCard({ agency }: { agency: Agency }) {
  const location = [agency.city, agency.state || agency.country].filter(Boolean).join(', ')
  const services = agency.expertise.slice(0, 3).join(', ')

  return (
    <article className="feat-agency-card">
      <div className="agency-logo" aria-hidden="true">
        {agency.name.slice(0, 2).toUpperCase()}
      </div>

      <div className="feat-agency-body">
        <div className="feat-agency-main">
          <h3>
            <Link to={`/agency/profile/${agency.slug}`}>{agency.name}</Link>
          </h3>
          <p className="feat-agency-tagline">{agency.tagline}</p>
          <ul className="feat-agency-meta">
            <li>
              <span className="feat-agency-icon">
                <PinIcon />
              </span>
              <span>{location}</span>
            </li>
            <li>
              <span className="feat-agency-icon">
                <BriefcaseIcon />
              </span>
              <span>{services}</span>
            </li>
          </ul>
        </div>

        <div className="feat-agency-side">
          <div className="feat-agency-rating" aria-label={`Rated ${agency.rating} out of 5`}>
            <Stars value={agency.rating} />
            <span>{agency.rating.toFixed(1)}</span>
          </div>
          <Link className="btn btn-profile" to={`/agency/profile/${agency.slug}`}>
            View Profile <span aria-hidden="true">›</span>
          </Link>
        </div>
      </div>
    </article>
  )
}

export function AgencyDirectoryBlock({ agencyLimit = 3 }: { agencyLimit?: number }) {
  const [active, setActive] = useState('featured')
  const activeGroup = categories.find((g) => g.name === active)
  const links = active === 'featured' ? featuredLinks : (activeGroup?.items ?? featuredLinks)
  const featured = useMemo(() => filterAgencies(active, agencyLimit), [active, agencyLimit])

  return (
    <section className="agency-directory-block" aria-labelledby="agency-directory-heading">
      <div className="container">
        <div className="dir-header">
          <h2 id="agency-directory-heading" className="dir-title">
            Agency Directory
          </h2>
          <p className="dir-header-lead">
            Looking for a <strong>reliable digital agency</strong> to grow your presence and
            revenue? We ranked the <strong>top-rated</strong> full service digital agencies.
          </p>
        </div>

        <div className="dir-layout">
          <div className="dir-browser">
            <h3 className="dir-browser-title">Verified Agencies by Service Categories</h3>
            <div className="dir-browser-inner">
              <aside className="dir-cats" aria-label="Service categories">
                <ul className="dir-cat-list">
                  <li>
                    <button
                      type="button"
                      className={active === 'featured' ? 'active' : ''}
                      aria-pressed={active === 'featured'}
                      onClick={() => setActive('featured')}
                    >
                      <span className="dir-cat-icon">
                        <CatIcon name="featured" />
                      </span>
                      Featured Services
                    </button>
                  </li>
                  {categories.map((group) => (
                    <li key={group.name}>
                      <button
                        type="button"
                        className={active === group.name ? 'active' : ''}
                        aria-pressed={active === group.name}
                        onClick={() => setActive(group.name)}
                      >
                        <span className="dir-cat-icon">
                          <CatIcon name={group.name} />
                        </span>
                        {group.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </aside>

              <nav
                className="dir-links"
                aria-label={`${active === 'featured' ? 'Featured' : active} services`}
              >
                <ul>
                  {links.map((item) => (
                    <li key={item.slug}>
                      <Link to={`/agency/${item.slug}`}>
                        <span className="dir-link-arrow" aria-hidden="true">
                          ›
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="dir-featured">
            <h3 className="dir-featured-title">Featured Agencies</h3>
            <div className="feat-agency-stack" key={active}>
              {featured.map((a) => (
                <FeaturedAgencyCard key={a.id} agency={a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
