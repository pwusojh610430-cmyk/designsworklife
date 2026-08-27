import { useState, type FormEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { agencies, getCategoryLabel } from '../data'
import { AgencyDirectoryBlock, FeaturedAgencyCard } from '../components/AgencyDirectoryBlock'
import { PageHero } from '../components/Layout'

export function AgencyIndexPage() {
  const [serviceQuery, setServiceQuery] = useState('')
  const [locationQuery, setLocationQuery] = useState('')
  const normalizedService = serviceQuery.trim().toLowerCase()
  const normalizedLocation = locationQuery.trim().toLowerCase()
  const filteredAgencies = agencies.filter((agency) => {
    const serviceText = [agency.name, agency.tagline, ...agency.services, ...agency.expertise, ...agency.industries]
      .join(' ')
      .toLowerCase()
    const locationText = [agency.city, agency.state, agency.country].join(' ').toLowerCase()
    return (!normalizedService || serviceText.includes(normalizedService)) &&
      (!normalizedLocation || locationText.includes(normalizedLocation))
  })

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    document.getElementById('agency-search-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function clearSearch() {
    setServiceQuery('')
    setLocationQuery('')
  }

  return (
    <>
      <header className="agency-index-hero">
        <div className="container agency-index-hero-inner">
          <div><span className="agency-index-kicker">AGENCY DIRECTORY</span><h1>Find the right agency for your next project</h1><p>Compare verified partners by service, expertise, location, reviews, and proven client work.</p></div>
          <form className="agency-index-search" role="search" onSubmit={submitSearch}>
            <label><span>What do you need?</span><input type="search" value={serviceQuery} onChange={(event) => setServiceQuery(event.target.value)} placeholder="Web design, branding, SEO…" /></label>
            <label><span>Where?</span><input type="search" value={locationQuery} onChange={(event) => setLocationQuery(event.target.value)} placeholder="City, state, or country" /></label>
            <div className="agency-search-actions">
              <button className="btn btn-green" type="submit">Find Agencies ›</button>
              {(serviceQuery || locationQuery) && <button className="agency-search-clear" type="button" onClick={clearSearch}>Clear</button>}
            </div>
          </form>
        </div>
      </header>

      <section className="agency-trust-strip"><div className="container"><div><strong>9,300+</strong><span>Verified agencies</span></div><div><strong>35,000+</strong><span>Client reviews</span></div><div><strong>50+</strong><span>Service categories</span></div><Link to="/marketplace/project-brief">Get matched for free ›</Link></div></section>

      <AgencyDirectoryBlock agencyLimit={4} />

      <section className="section alt" id="agency-search-results">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="agency-index-kicker">RECOMMENDED PARTNERS</span><h2>{normalizedService || normalizedLocation ? 'Matching agencies' : 'Explore verified agencies'}</h2>
              <p className="agency-results-count" aria-live="polite">{filteredAgencies.length} {filteredAgencies.length === 1 ? 'agency' : 'agencies'} found{normalizedService || normalizedLocation ? ' for your search.' : '.'}</p>
            </div>
            <Link className="btn btn-primary" to="/marketplace/project-brief">
              Receive Proposals
            </Link>
          </div>
          <div className="feat-agency-stack feat-agency-stack-wide">
            {filteredAgencies.map((a) => (
              <FeaturedAgencyCard key={a.id} agency={a} />
            ))}
            {filteredAgencies.length === 0 && <div className="empty agency-search-empty"><h3>No matching agencies yet</h3><p>Try a broader service or location, or send us your brief for a curated shortlist.</p><div><button className="btn btn-ghost" type="button" onClick={clearSearch}>Clear search</button><Link className="btn btn-primary" to="/marketplace/project-brief">Get matched</Link></div></div>}
          </div>
        </div>
      </section>
    </>
  )
}

export function AgencyCategoryPage() {
  const { '*': slug = '' } = useParams()
  const label = getCategoryLabel(slug)
  const categoryKeywords = label
    .toLowerCase()
    .replace(/companies|company|agencies|agency|firms|services|development/g, '')
    .split(/[^a-z0-9+]+/)
    .filter((word) => word.length >= 3 || word === 'ai' || word === 'it')
  const list = agencies.filter((agency) => {
    const agencyText = [...agency.services, ...agency.expertise, ...agency.industries].join(' ').toLowerCase()
    return categoryKeywords.some((keyword) => agencyText.includes(keyword))
  })

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
        <div className="feat-agency-stack feat-agency-stack-wide">
          {list.map((a) => (
            <FeaturedAgencyCard key={a.id} agency={a} />
          ))}
          {list.length === 0 && <div className="empty agency-search-empty"><h3>No exact matches in this category yet</h3><p>Send us your project brief and we will find a suitable specialist.</p><Link className="btn btn-primary" to="/marketplace/project-brief">Get matched</Link></div>}
        </div>
      </div>
    </>
  )
}
