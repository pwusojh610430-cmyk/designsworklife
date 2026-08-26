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

const categoryIcons: Record<string, string> = {
  featured: '★',
  'Branding & Creative': '✦',
  'Website & Interface': '▣',
  Marketing: '◎',
  'Software & App': '⬡',
  'IT Services': '⚙',
  'Business Services': '◈',
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

export function FeaturedAgencyCard({ agency }: { agency: Agency }) {
  const location = [agency.city, agency.state || agency.country].filter(Boolean).join(', ')
  const services = agency.expertise.slice(0, 3).join(', ')

  return (
    <article className="feat-agency-card">
      <div className="feat-agency-top">
        <div className="agency-logo" aria-hidden="true">
          {agency.name.slice(0, 2).toUpperCase()}
        </div>
        <div className="feat-agency-identity">
          <div className="feat-agency-title-row">
            <h3>
              <Link to={`/agency/profile/${agency.slug}`}>{agency.name}</Link>
            </h3>
            <div className="feat-agency-rating" aria-label={`Rated ${agency.rating} out of 5`}>
              <Stars value={agency.rating} />
              <span>{agency.rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="feat-agency-tagline">{agency.tagline}</p>
        </div>
      </div>

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

      <div className="feat-agency-actions">
        <Link className="btn btn-profile" to={`/agency/profile/${agency.slug}`}>
          View Profile <span aria-hidden="true">›</span>
        </Link>
      </div>
    </article>
  )
}

export function AgencyDirectoryBlock({
  showTitle = true,
  showViewAll = true,
  agencyLimit = 3,
}: {
  showTitle?: boolean
  showViewAll?: boolean
  agencyLimit?: number
}) {
  const [active, setActive] = useState('featured')
  const activeGroup = categories.find((g) => g.name === active)
  const links = active === 'featured' ? featuredLinks : activeGroup?.items ?? featuredLinks
  const featured = useMemo(() => agencies.slice(0, agencyLimit), [agencyLimit])

  return (
    <section className="agency-directory-block" aria-labelledby="agency-directory-heading">
      <div className="container">
        {showTitle && (
          <h2 id="agency-directory-heading" className="dir-title">
            <span>Agency</span> Directory
          </h2>
        )}

        <div className="dir-layout">
          <aside className="dir-cats" aria-label="Service categories">
            <h3>Verified Agencies by Service Categories</h3>
            <ul className="dir-cat-list">
              <li>
                <button
                  type="button"
                  className={active === 'featured' ? 'active' : ''}
                  aria-pressed={active === 'featured'}
                  onClick={() => setActive('featured')}
                >
                  <span className="dir-cat-icon" aria-hidden="true">
                    {categoryIcons.featured}
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
                    <span className="dir-cat-icon" aria-hidden="true">
                      {categoryIcons[group.name] ?? '•'}
                    </span>
                    {group.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <nav className="dir-links" aria-label={`${active === 'featured' ? 'Featured' : active} services`}>
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

          <div className="dir-featured">
            <p className="dir-featured-lead">
              Looking for a reliable digital agency to grow your presence and revenue? We ranked the
              top-rated full service digital agencies.
            </p>
            <div className="dir-featured-head">
              <h3>Featured Agencies</h3>
              {showViewAll && (
                <Link className="dir-view-all" to="/agency">
                  View Agency Directory
                </Link>
              )}
            </div>
            <div className="feat-agency-stack">
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
