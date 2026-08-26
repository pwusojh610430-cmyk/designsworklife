import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/Layout'

export function ProjectBriefPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        title="Get Connected With The Right Agency Partner"
        subtitle="Receive proposals from selected verified US and Global agencies"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Marketplace' },
          { label: 'Project Brief' },
        ]}
      />
      <section className="section">
        <div className="container" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: '1.1fr 0.9fr' }}>
          <div className="card">
            <h2>Tell Us About Your Project</h2>
            <p className="meta">We&apos;ll Find The Best Agencies For You</p>
            {sent ? (
              <p style={{ color: 'var(--ok)', fontWeight: 600 }}>
                Thanks — a DesignsWorkLife advisor will follow up within 1 business day.
              </p>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <div className="form-row">
                  <label>
                    First Name*
                    <input required name="first" />
                  </label>
                  <label>
                    Last Name*
                    <input required name="last" />
                  </label>
                </div>
                <label>
                  Work Email*
                  <input required type="email" name="email" />
                </label>
                <label>
                  Phone
                  <input name="phone" />
                </label>
                <label>
                  Select Budget*
                  <select required defaultValue="">
                    <option value="" disabled>
                      Select Budget
                    </option>
                    <option>Under $15,000</option>
                    <option>$15,001 - $25,000</option>
                    <option>$25,001 - $50,000</option>
                    <option>$50,001 - $100,000</option>
                    <option>$100,001 - $250,000</option>
                    <option>$250,001 - $500,000</option>
                    <option>$500,001 - $1,000,000</option>
                    <option>$1,000,000 and up</option>
                  </select>
                </label>
                <label>
                  Services Needed*
                  <select required defaultValue="">
                    <option value="" disabled>
                      Services Needed
                    </option>
                    <option>Web Design</option>
                    <option>Software Development</option>
                    <option>Digital Marketing</option>
                    <option>Branding</option>
                    <option>App Development</option>
                    <option>Business Services</option>
                    <option>eCommerce</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  Project Description*
                  <textarea required placeholder="Timeline, goals, must-haves…" />
                </label>
                <label style={{ fontWeight: 500 }}>
                  <span style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <input type="checkbox" /> I&apos;d like to receive occasional insights from DesignsWorkLife.
                  </span>
                </label>
                <p className="meta">
                  By submitting this form, I agree to Terms of Use and Privacy Policy.
                </p>
                <button className="btn btn-primary" type="submit">
                  SUBMIT
                </button>
              </form>
            )}
          </div>
          <div>
            <div className="hire-steps" style={{ marginBottom: '1.5rem' }}>
              <div className="hire-step">
                <div className="step-num" style={{ background: 'var(--purple-soft)', color: 'var(--purple)' }}>
                  1
                </div>
                <div>Specify your budget, timeline and project requirements</div>
              </div>
              <div className="hire-step">
                <div className="step-num" style={{ background: 'var(--purple-soft)', color: 'var(--purple)' }}>
                  2
                </div>
                <div>Our experts curate a list of up to 5 most qualified candidate agencies</div>
              </div>
              <div className="hire-step">
                <div className="step-num" style={{ background: 'var(--purple-soft)', color: 'var(--purple)' }}>
                  3
                </div>
                <div>We connect you with them so you can choose the most suitable partner</div>
              </div>
            </div>
            <div className="card">
              <h3>Common Questions</h3>
              <div className="faq">
                <details open>
                  <summary>Are there any hidden costs?</summary>
                  <p>Marketplace matching is free for brands. You only sign an Agreement Form.</p>
                </details>
                <details>
                  <summary>When will I meet agencies?</summary>
                  <p>After the advisor call and agreement, introductions typically take 7–10 business days.</p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function MembershipPage() {
  return (
    <>
      <PageHero
        title="Get Pre-Vetted Leads Delivered To Your Agency"
        subtitle="Receive up to 30 RFPs monthly for projects ranging from $10,000 to $250,000."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Marketplace' },
          { label: 'Membership' },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {[
              {
                name: 'Basic',
                price: '$200',
                features: ['Bid on exclusive Marketplace projects', 'Live feed of US Gov & Edu projects'],
              },
              {
                name: 'Advanced',
                price: '$300',
                featured: true,
                features: [
                  'Everything in Basic',
                  'Top 10 Ranking in Agency Directory*',
                  'Company Insights',
                  'Person Level Insights',
                ],
              },
              {
                name: 'Premium',
                price: '$500',
                features: [
                  'Everything in Advanced',
                  'Dedicated Relationship Manager',
                  'Priority lead matching',
                ],
              },
            ].map((tier) => (
              <div className={`price-card ${tier.featured ? 'featured' : ''}`} key={tier.name}>
                <h3>{tier.name}</h3>
                <div className="price">
                  {tier.price}
                  <span>/month</span>
                </div>
                <p className="meta">1 year minimum — secured upfront</p>
                <ul className="checklist">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link className="btn btn-primary" to="/contact-us">
                  GET STARTED NOW
                </Link>
              </div>
            ))}
          </div>
          <p className="meta" style={{ marginTop: '1rem' }}>
            * Top positions are subject to category availability.
          </p>
        </div>
      </section>
    </>
  )
}

export function BenefitsPage() {
  return (
    <>
      <PageHero
        title="The Benefits Of Listing Your Agency On DesignsWorkLife"
        subtitle="Place your agency in front of thousands of decision-makers searching for a partner every day."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Benefits' }]}
      />
      <section className="section">
        <div className="container prose">
          <h2>More Brand Visibility & Site Visits</h2>
          <p>
            We promote listed agencies across search, social, email, display, outreach, and press —
            targeting leaders who can move selection forward.
          </p>
          <h2>Personalized Assistance</h2>
          <p>
            Dedicated representatives help agencies build profiles, upload content, and track visits
            and leads from a personal dashboard. Contact agencysupport@designsworklife.example.
          </p>
          <h2>Help Brands Find The Right Fit</h2>
          <p>
            Brands compare categories, location, expertise, cost, team size, hourly rates, clients,
            and reviews — plus free concierge matching.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" to="/contact-us">
              Submit your agency
            </Link>
            <Link className="btn btn-outline" to="/marketplace/project-brief">
              Tell us about your project
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
