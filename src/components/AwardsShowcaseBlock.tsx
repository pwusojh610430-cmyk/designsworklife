import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { awardDesigns } from '../data'
import { BrandMark } from './BrandMark'

const awardTabs = [
  {
    id: 'Website',
    label: 'Website Design',
    slug: 'websites',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="12" rx="1.5" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'Logo',
    label: 'Logo Design',
    slug: 'logo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l7 4v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" />
      </svg>
    ),
  },
  {
    id: 'Print',
    label: 'Print Design',
    slug: 'print',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 8V4h12v4M6 16h12v4H6v-4z" />
        <rect x="4" y="8" width="16" height="8" rx="1.5" />
      </svg>
    ),
  },
  {
    id: 'App',
    label: 'App Design',
    slug: 'apps',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="7" y="2.5" width="10" height="19" rx="2" />
        <path d="M11 18.5h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'Packaging',
    label: 'Packaging Design',
    slug: 'packaging',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
      </svg>
    ),
  },
  {
    id: 'Video',
    label: 'Video Design',
    slug: 'video',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="6" width="14" height="12" rx="1.5" />
        <path d="M17 10l4-2.5v9L17 14" />
      </svg>
    ),
  },
] as const

function agencyInitials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

function picksForCategory(category: string) {
  return awardDesigns.filter((d) => d.category === category).slice(0, 3)
}

export function AwardsShowcaseBlock() {
  const [tab, setTab] = useState<(typeof awardTabs)[number]['id']>('Website')
  const active = awardTabs.find((t) => t.id === tab) ?? awardTabs[0]
  const showcase = useMemo(() => picksForCategory(tab), [tab])

  return (
    <section className="awards-showcase" aria-labelledby="awards-showcase-title">
      <div className="awards-showcase-bg" aria-hidden="true" />
      <div className="container awards-showcase-inner">
        <div className="awards-showcase-head">
          <div className="awards-mark" aria-hidden="true">
            <BrandMark size={52} />
            <strong>AWARDS</strong>
            <span>★★★</span>
          </div>
          <h2 id="awards-showcase-title">Explore Award-Winning Creative Work</h2>
          <p>
            We spotlight exceptional design so brands can learn from standout work and connect with
            the teams behind it.
          </p>
        </div>

        <div className="awards-cats" role="tablist" aria-label="Award design categories">
          {awardTabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className={`awards-cat${tab === t.id ? ' is-active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              <span className="awards-cat-icon" aria-hidden="true">
                {t.icon}
              </span>
              <span className="awards-cat-label">
                {t.label.split(' ').map((word) => (
                  <span key={word}>{word}</span>
                ))}
              </span>
            </button>
          ))}
        </div>

        <div className="awards-showcase-grid" key={tab}>
          {showcase.map((d) => (
            <article key={d.title} className="awards-showcase-card">
              <Link to={`/best-designs/${active.slug}`} className="awards-showcase-media">
                <img src={d.image} alt="" loading="lazy" />
              </Link>
              <h3>
                <Link to={`/best-designs/${active.slug}`}>{d.title}</Link>
              </h3>
              <div className="awards-showcase-by">
                <span className="awards-agency-avatar" aria-hidden="true">
                  {agencyInitials(d.agency)}
                </span>
                <span>
                  Designed by{' '}
                  <Link to={`/best-designs/${active.slug}`} className="awards-agency-link">
                    {d.agency}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="awards-showcase-cta">
          <Link className="btn-skew btn-skew-light" to="/best-designs/submit">
            <span className="btn-skew-inner">
              Submit Your Design <span aria-hidden="true">›</span>
            </span>
          </Link>
          <Link className="btn-skew btn-skew-ghost" to={`/best-designs/${active.slug}`}>
            <span className="btn-skew-inner">
              View More Best Designs <span aria-hidden="true">›</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
