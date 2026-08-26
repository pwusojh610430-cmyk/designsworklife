import { Link, useParams } from 'react-router-dom'
import { agencies, getCategoryLabel } from '../data'
import { AgencyDirectoryBlock, FeaturedAgencyCard } from '../components/AgencyDirectoryBlock'
import { PageHero } from '../components/Layout'

export function AgencyIndexPage() {
  return (
    <>
      <section className="stats-banner">
        <div className="container stats-banner-inner">
          <div className="stats-banner-items">
            <div className="stats-banner-item">
              <strong>1,000,000+</strong>
              <span>Monthly B2B Visitors</span>
            </div>
            <div className="stats-banner-item">
              <strong>150,000+</strong>
              <span>Followers on Social</span>
            </div>
            <div className="stats-banner-item">
              <strong>70,000+</strong>
              <span>B2B Newsletter Subscribers</span>
            </div>
          </div>
          <Link to="/benefits" className="btn btn-green">
            Get Featured <span aria-hidden="true">›</span>
          </Link>
        </div>
      </section>

      <AgencyDirectoryBlock agencyLimit={3} showViewAll={false} />

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>All Verified Agencies</h2>
              <p>Browse more providers ranked by reviews, expertise, and recent client work.</p>
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
