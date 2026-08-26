import { Link, useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { agencies, categories, getCategoryLabel } from '../data'
import { PageHero, Stars } from '../components/Layout'

export function AgencyIndexPage() {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (query.length > 0 && query.length < 3) return agencies
    if (!query) return agencies
    return agencies.filter(
      (a) =>
        a.name.toLowerCase().includes(query) ||
        a.services.some((s) => s.toLowerCase().includes(query)) ||
        a.city.toLowerCase().includes(query),
    )
  }, [q])

  return (
    <>
      <PageHero
        title="Agency Directory Listing & Reviews"
        subtitle="Compare Over 30,000 Top Agencies by Categories, Locations, Expertise, Clients & Reviews"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Agency Directory' }]}
      />
      <div className="container layout-2">
        <aside className="filters">
          <h3>Verified Agencies by Service Categories</h3>
          {categories.map((group) => (
            <div className="filter-group" key={group.name}>
              <strong>{group.name}</strong>
              {group.items.map((item) => (
                <Link key={item.slug} to={`/agency/${item.slug}`}>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </aside>
        <div>
          <div className="search-bar">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search agencies (min 3 characters)"
            />
            <Link className="btn btn-primary" to="/marketplace/project-brief">
              Receive Proposals
            </Link>
          </div>
          {q.trim().length > 0 && q.trim().length < 3 && (
            <p className="meta">Your search query is too short, please try typing at least 3 characters.</p>
          )}
          <div className="listing">
            {filtered.map((a) => (
              <div className="listing-card" key={a.id}>
                <div className="agency-logo">{a.name.slice(0, 2).toUpperCase()}</div>
                <div>
                  <Link to={`/agency/profile/${a.slug}`}>
                    <h3>{a.name}</h3>
                  </Link>
                  <div className="meta">
                    <Stars value={a.rating} /> {a.rating} ({a.reviews}) · {a.city}
                    {a.state ? `, ${a.state}` : ''}
                  </div>
                  <p>{a.tagline}</p>
                  <div className="chip-row">
                    {a.services.slice(0, 4).map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="profile-actions">
                  <Link className="btn btn-outline" to={`/agency/profile/${a.slug}`}>
                    View Profile
                  </Link>
                  <Link className="btn btn-primary" to="/marketplace/project-brief">
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export function AgencyCategoryPage() {
  const { '*': slug = '' } = useParams()
  const label = getCategoryLabel(slug)
  const list = agencies.filter(
    (a) =>
      a.services.some((s) => s.toLowerCase().includes(label.split(' ')[0].toLowerCase())) ||
      a.expertise.some((e) => label.toLowerCase().includes(e.toLowerCase())) ||
      true,
  )

  return (
    <>
      <PageHero
        title={`Top ${label} in 2026`}
        subtitle="Compare verified agencies by reviews, portfolios, rates, and expertise."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Agency Directory', to: '/agency' },
          { label },
        ]}
      />
      <div className="container" style={{ padding: '2rem 0 4rem' }}>
        <div className="hire-panel" style={{ marginBottom: '2rem' }}>
          <div>
            <h2>Receive Proposals For your project</h2>
            <p>Our experts curate a list of up to 5 most qualified candidate agencies.</p>
            <Link className="btn btn-ghost" to="/marketplace/project-brief">
              Get Connected
            </Link>
          </div>
          <div className="hire-steps">
            <div className="hire-step">
              <div className="step-num">1</div>
              <div>Specify your budget, timeline and project requirements</div>
            </div>
            <div className="hire-step">
              <div className="step-num">2</div>
              <div>Our experts curate a list of up to 5 most qualified candidate agencies</div>
            </div>
            <div className="hire-step">
              <div className="step-num">3</div>
              <div>We connect you with them so you can choose the most suitable partner</div>
            </div>
          </div>
        </div>
        <div className="listing">
          {list.map((a) => (
            <div className="listing-card" key={a.id}>
              <div className="agency-logo">{a.name.slice(0, 2).toUpperCase()}</div>
              <div>
                <Link to={`/agency/profile/${a.slug}`}>
                  <h3>{a.name}</h3>
                </Link>
                <div className="meta">
                  <Stars value={a.rating} /> {a.rating} · {a.hourly} · {a.employees} employees
                </div>
                <p>{a.overview.slice(0, 160)}…</p>
              </div>
              <div className="profile-actions">
                <Link className="btn btn-primary" to={`/agency/profile/${a.slug}`}>
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
