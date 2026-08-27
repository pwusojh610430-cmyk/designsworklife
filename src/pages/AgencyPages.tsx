import { Link, useParams } from 'react-router-dom'
import { agencies, getCategoryLabel } from '../data'
import { AgencyDirectoryBlock, FeaturedAgencyCard } from '../components/AgencyDirectoryBlock'
import { PageHero } from '../components/Layout'

export function AgencyIndexPage() {
  return (
    <>
      <header className="agency-index-hero">
        <div className="container agency-index-hero-inner">
          <div><span className="agency-index-kicker">AGENCY DIRECTORY</span><h1>Find the right agency for your next project</h1><p>Compare verified partners by service, expertise, location, reviews, and proven client work.</p></div>
          <form className="agency-index-search" onSubmit={(event) => event.preventDefault()}><label><span>What do you need?</span><input type="search" placeholder="Web design, branding, SEO…" /></label><label><span>Where?</span><input type="search" placeholder="City, state, or country" /></label><Link className="btn btn-green" to="/marketplace/project-brief">Find Agencies ›</Link></form>
        </div>
      </header>

      <section className="agency-trust-strip"><div className="container"><div><strong>9,300+</strong><span>Verified agencies</span></div><div><strong>35,000+</strong><span>Client reviews</span></div><div><strong>50+</strong><span>Service categories</span></div><Link to="/marketplace/project-brief">Get matched for free ›</Link></div></section>

      <AgencyDirectoryBlock agencyLimit={4} />

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="agency-index-kicker">RECOMMENDED PARTNERS</span><h2>Explore verified agencies</h2>
              <p>A focused shortlist ranked by expertise, client feedback, and relevant work.</p>
            </div>
            <Link className="btn btn-primary" to="/marketplace/project-brief">
              Receive Proposals
            </Link>
          </div>
          <div className="feat-agency-stack feat-agency-stack-wide">
            {agencies.map((a) => (
              <FeaturedAgencyCard key={a.id} agency={a} />
            ))}
          </div>
        </div>
      </section>
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
        <div className="feat-agency-stack feat-agency-stack-wide">
          {list.map((a) => (
            <FeaturedAgencyCard key={a.id} agency={a} />
          ))}
        </div>
      </div>
    </>
  )
}
