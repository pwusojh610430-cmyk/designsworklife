import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { categories, team } from '../data'
import { PageHero } from '../components/Layout'

export function AboutPage() {
  return (
    <>
      <PageHero
        title="DesignsWorkLife Is A B2B Marketplace Connecting Businesses With Agencies"
        subtitle="The leading B2B Marketplace connecting businesses with agencies"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />
      <section className="section">
        <div className="container prose">
          <h2>What is DesignsWorkLife?</h2>
          <p>
            We analyze and rank thousands of service providers to help brands connect with the best
            agencies in marketing, web design, branding, software, & tech.
          </p>
          <h2>Why us?</h2>
          <p>
            Since launching in 2017, DesignsWorkLife — directed by digital agency expert Gianluca
            Ferruggia — has evolved into a global network of over 30,000 professional agencies
            spanning at least 50 countries.
          </p>
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
            Reach out to <strong>jobs@designsworklife.example</strong>.
          </p>
          <h2>Verified Agencies by Service Categories</h2>
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
        title="How Agencies Are Ranked To Optimize User-Agency Fit"
        subtitle="Organic Rankings Research Methodology"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Methodology' }]}
      />
      <section className="section">
        <div className="container prose">
          <p>
            Our Agency Ranking Methodology is established on a Base Score. The five most important
            factors:
          </p>
          <ul>
            <li>
              <strong>Reviews</strong> — Bayesian smoothing with a 3.5-star baseline
            </li>
            <li>
              <strong>Portfolio</strong> — completed projects with samples and case studies
            </li>
            <li>
              <strong>Awards / Press</strong> — reputation signals
            </li>
            <li>
              <strong>Team bios</strong> — expertise on display
            </li>
            <li>
              <strong>Top Services</strong> — up to 10 services; order affects specialization
            </li>
          </ul>
          <h2>Agency badges</h2>
          <div className="chip-row">
            <span className="badge verified">Verified</span>
            <span className="badge">AI Leader</span>
            <span className="badge winner">Award Winner</span>
            <span className="badge">Thought Leader</span>
          </div>
          <p style={{ marginTop: '1rem' }}>
            Example: 1 five-star review → Bayesian 4.3 stars. 29 five-star reviews → 5 stars.
          </p>
          <Link className="btn btn-primary" to="/benefits">
            Add top services now
          </Link>
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
