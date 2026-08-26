import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { categories, team } from '../data'
import { PageHero } from '../components/Layout'

export function AboutPage() {
  return (
    <>
      <PageHero
        title="Team & Story"
        subtitle="A B2B marketplace helping brands discover agencies across software, design, and marketing."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Team & Story' }]}
      />
      <section className="section">
        <div className="container prose">
          <h2>What is DesignsWorkLife?</h2>
          <p>
            DesignsWorkLife researches and ranks service providers so brands can discover, compare,
            and shortlist the right agencies — covering digital marketing, web design, branding,
            software, and tech.
          </p>
          <h2>Our story</h2>
          <p>
            Since launching in 2018, DesignsWorkLife — led by marketplace operator Avery Lang — has
            grown into a network of more than 28,500 professional agencies across 45+ countries. We
            combine directory rankings, Marketplace matching, Best Designs awards, and daily B2B
            coverage into one discovery platform.
          </p>
          <h2>What we run</h2>
          <ul>
            <li>
              <strong>Agency Directory</strong> — category rankings grounded in a transparent Base
              Score methodology
            </li>
            <li>
              <strong>Marketplace</strong> — free brand matching with vetted agency introductions
            </li>
            <li>
              <strong>Best Designs</strong> — award showcases that elevate standout creative work
            </li>
            <li>
              <strong>News</strong> — trends and insights for decision-makers growing brands
            </li>
          </ul>
          <h2>Meet the team</h2>
          <div className="card-grid">
            {team.map((m) => (
              <div className="card" key={m.name}>
                <h3>{m.name}</h3>
                <div className="meta">{m.role}</div>
              </div>
            ))}
          </div>
          <h2>Want to work here?</h2>
          <p>
            Reach out to <strong>jobs@designsworklife.example</strong> or{' '}
            <Link to="/contact-us">Contact Us</Link>.
          </p>
          <h2>Verified agencies by service</h2>
          {categories.map((g) => (
            <div key={g.name} style={{ marginBottom: '1rem' }}>
              <h3>{g.name}</h3>
              <div className="chip-row">
                {g.items.map((i) => (
                  <Link className="chip" key={i.slug} to={`/agency/${i.slug}`}>
                    {i.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export function MethodologyPage() {
  return (
    <>
      <PageHero
        title="Agency Ranking Methodology"
        subtitle="How we optimize user–agency fit with a transparent Base Score."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Methodology' }]}
      />
      <section className="section">
        <div className="container prose">
          <p>
            Our Agency Ranking Methodology is built on a Base Score. Five signals matter most when
            brands compare partners:
          </p>
          <ul>
            <li>
              <strong>Reviews</strong> — Bayesian smoothing with a 3.5-star baseline so tiny sample
              sizes cannot dominate a category
            </li>
            <li>
              <strong>Portfolio</strong> — completed projects with samples and case studies that
              prove delivery, not just claims
            </li>
            <li>
              <strong>Awards / Press</strong> — independent reputation signals from juries and media
            </li>
            <li>
              <strong>Team bios</strong> — named expertise, leadership, and delivery capacity
            </li>
            <li>
              <strong>Top Services</strong> — up to 10 services; order communicates specialization
            </li>
          </ul>
          <h2>How scores are interpreted</h2>
          <p>
            Example: one five-star review alone does not equal a perfect listing. With Bayesian
            smoothing, a single five-star review may surface near 4.3 stars, while twenty-nine
            five-star reviews approach a full 5.0.
          </p>
          <h2>Agency badges</h2>
          <div className="chip-row">
            <span className="badge verified">Verified</span>
            <span className="badge">AI Leader</span>
            <span className="badge winner">Award Winner</span>
            <span className="badge">Thought Leader</span>
          </div>
          <p style={{ marginTop: '1rem' }}>
            Badges highlight verification status, specialty leadership, and awards — they never
            replace the Base Score, and paid placements are labeled separately from organic
            rankings.
          </p>
          <h2>Keep your profile competitive</h2>
          <p>
            Update portfolios, invite authentic reviews, and order top services carefully. Brands
            filter by category, location, expertise, and budget every day.
          </p>
          <div className="info-cta-row" style={{ marginTop: '1.5rem' }}>
            <Link className="btn btn-primary" to="/submit-agency">
              Submit your agency
            </Link>
            <Link className="btn btn-outline" to="/benefits">
              See listing benefits
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        title="What Can We Help You With?"
        subtitle="Finding an agency, listing your business, a story tip, or partnership help — we'll get back within 1 business day."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="card">
            {sent ? (
              <p style={{ color: 'var(--ok)', fontWeight: 600 }}>Message sent. Talk soon.</p>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <label>
                  Inquiry Type*
                  <select required defaultValue="">
                    <option value="" disabled>
                      Select
                    </option>
                    <option>List your business or advertise</option>
                    <option>Partnership opportunities</option>
                    <option>Find an agency or get matched</option>
                    <option>Best Designs submission</option>
                    <option>Other</option>
                  </select>
                </label>
                <div className="form-row">
                  <label>
                    First Name*
                    <input required />
                  </label>
                  <label>
                    Last Name*
                    <input required />
                  </label>
                </div>
                <label>
                  Email*
                  <input type="email" required />
                </label>
                <label>
                  Phone
                  <input />
                </label>
                <label>
                  Company Name
                  <input />
                </label>
                <label>
                  Website
                  <input />
                </label>
                <label>
                  Tell Us More*
                  <textarea required />
                </label>
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
