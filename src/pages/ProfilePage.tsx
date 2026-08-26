import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { getAgency } from '../data'
import { PageHero, Stars } from '../components/Layout'

export function AgencyProfilePage() {
  const { slug = '' } = useParams()
  const agency = getAgency(slug)
  const [tab, setTab] = useState('Overview')

  if (!agency) {
    return (
      <div className="container section">
        <div className="empty">Agency not found.</div>
        <Link to="/agency">Back to directory</Link>
      </div>
    )
  }

  return (
    <>
      <PageHero
        title={agency.name}
        subtitle={agency.tagline}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Agency Directory', to: '/agency' },
          { label: agency.name },
        ]}
      />
      <div className="container">
        <div className="profile-hero">
          <div className="agency-logo" style={{ width: 84, height: 84, fontSize: '1.4rem' }}>
            {agency.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="chip-row" style={{ marginBottom: '0.6rem' }}>
              {agency.badges.map((b) => (
                <span key={b} className={`badge ${b === 'Verified' ? 'verified' : ''}`}>
                  {b}
                </span>
              ))}
            </div>
            <div className="meta">
              <Stars value={agency.rating} /> DesignRush {agency.rating} ({agency.reviews}) · Google{' '}
              {agency.googleRating} ({agency.googleReviews})
            </div>
            <p style={{ marginTop: '0.75rem' }}>
              {agency.city}
              {agency.state ? `, ${agency.state}` : ''}, {agency.country}
            </p>
          </div>
          <div className="profile-actions">
            <a className="btn btn-outline" href={agency.website} target="_blank" rel="noreferrer">
              Visit website
            </a>
            <Link className="btn btn-primary" to="/marketplace/project-brief">
              Contact
            </Link>
          </div>
        </div>

        <div className="tabs">
          {['Overview', 'Services', 'Portfolio', 'Reviews', 'Team', 'Clients'].map((t) => (
            <button key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>

        {tab === 'Overview' && (
          <div className="section" style={{ paddingTop: 0 }}>
            <div className="kv">
              <div>
                <strong>Number of Employees</strong>
                {agency.employees}
              </div>
              <div>
                <strong>Minimal Budget</strong>
                {agency.budget}
              </div>
              <div>
                <strong>Average Hourly Rate</strong>
                {agency.hourly}
              </div>
              <div>
                <strong>Year Founded</strong>
                {agency.founded}
              </div>
            </div>
            <div className="prose">
              <h2>{agency.name} Overview</h2>
              <p>{agency.overview}</p>
              <h3>Industries</h3>
              <div className="chip-row">
                {agency.industries.map((i) => (
                  <span className="chip" key={i}>
                    {i}
                  </span>
                ))}
              </div>
              <h3 style={{ marginTop: '1.25rem' }}>Areas of Expertise</h3>
              <div className="chip-row">
                {agency.expertise.map((i) => (
                  <span className="chip" key={i}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'Services' && (
          <div className="chip-row" style={{ paddingBottom: '3rem' }}>
            {agency.services.map((s) => (
              <span className="badge" key={s}>
                {s}
              </span>
            ))}
          </div>
        )}

        {tab === 'Portfolio' && (
          <div className="portfolio-grid" style={{ paddingBottom: '3rem' }}>
            {agency.portfolio.map((p) => (
              <div className="portfolio-item" key={p.title}>
                <div className="portfolio-thumb" />
                <div>
                  <div className="meta">{p.type}</div>
                  <h3>{p.title}</h3>
                  {p.year && <div className="meta">{p.year}</div>}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'Reviews' && (
          <div style={{ paddingBottom: '3rem' }}>
            <button className="btn btn-outline" style={{ marginBottom: '1rem' }}>
              Submit a review
            </button>
            <div className="review">
              <div className="meta">
                <Stars value={5} /> 5.0 · Verified by DesignsWorkLife
              </div>
              <p>
                The landing page looks great and got positive feedback. They did a great job taking
                direction, following my vision, collaborating, and suggesting alternative options.
              </p>
              <div className="meta">Work Quality · Timely Delivery · Responsiveness · Overall Costs</div>
            </div>
            <div className="review">
              <div className="meta">
                <Stars value={5} /> 5.0 · Review Source: Google
              </div>
              <p>
                Outstanding experience from start to finish. Communication was excellent and the
                quality of the design exceeded expectations.
              </p>
            </div>
          </div>
        )}

        {tab === 'Team' && (
          <div className="card-grid" style={{ paddingBottom: '3rem' }}>
            {agency.team.map((m) => (
              <div className="card" key={m.name}>
                <div className="agency-logo" style={{ marginBottom: '0.75rem' }}>
                  {m.name.slice(0, 1)}
                </div>
                <h3>{m.name}</h3>
                <div className="meta">{m.role}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 'Clients' && (
          <div className="chip-row" style={{ paddingBottom: '3rem' }}>
            {agency.clients.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
