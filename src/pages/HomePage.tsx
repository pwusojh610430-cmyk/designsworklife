import { useState } from 'react'
import { Link } from 'react-router-dom'
import { agencies, awardDesigns, marketplaceProjects, newsArticles } from '../data'
import { Stars, openNewsletter } from '../components/Layout'

const newsTabs = [
  { id: 'latest', label: 'Latest' },
  { id: 'ai', label: 'AI' },
  { id: 'creative', label: 'Creative' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'ecommerce', label: 'Ecommerce' },
  { id: 'technology', label: 'Technology' },
] as const

function filterNews(tab: string) {
  if (tab === 'latest') return newsArticles
  if (tab === 'ai') {
    return newsArticles.filter(
      (n) =>
        n.topics.includes('tech') ||
        /ai|automation|model/i.test(`${n.title} ${n.excerpt}`),
    )
  }
  if (tab === 'technology') return newsArticles.filter((n) => n.topics.includes('tech'))
  if (tab === 'ecommerce') return newsArticles.filter((n) => n.topics.includes('ecommerce'))
  return newsArticles.filter((n) => n.topics.includes(tab))
}

export function HomePage() {
  const [tab, setTab] = useState<string>('latest')
  const filtered = filterNews(tab)
  const featured = filtered[0] ?? newsArticles[0]
  const pinSlugs = ['ipsy-beauty-product-testers', 'starbucks-psl-martha-stewart-unicorn']
  const rest = (filtered.length > 1 ? filtered.slice(1) : newsArticles.slice(1)).filter(
    (n) => n.slug !== featured.slug,
  )
  const pinned = pinSlugs
    .map((slug) => rest.find((n) => n.slug === slug) ?? newsArticles.find((n) => n.slug === slug))
    .filter(Boolean) as typeof newsArticles
  const fillers = rest.filter((n) => !pinSlugs.includes(n.slug))
  const side = [...pinned, ...fillers].slice(0, 4)

  return (
    <>
      <section className="hero hero-home">
        <div className="container hero-home-inner">
          <p className="hero-kicker">B2B Media Platform for Brands & Agency Directory</p>
          <h1>Driving Brand Discovery & Growth</h1>
          <ul className="hero-pill">
            <li>Showcase Your Work</li>
            <li>Build Awareness</li>
            <li>Generate Leads</li>
          </ul>
        </div>
      </section>

      <section className="home-news">
        <div className="container">
          <div className="news-toolbar">
            <div className="news-toolbar-brand">
              <span className="news-flame" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    fill="currentColor"
                    d="M12 2c1.8 2.8 5.5 4.8 5.5 9 0 4.2-2.7 7.5-5.5 9-2.8-1.5-5.5-4.8-5.5-9C6.5 6.8 10.2 4.8 12 2z"
                  />
                </svg>
              </span>
              <span>Trending Brand News</span>
            </div>
            <div className="news-tabs" role="tablist">
              {newsTabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={tab === t.id}
                  className={tab === t.id ? 'active' : ''}
                  onClick={() => setTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <button type="button" className="btn btn-subscribe" onClick={openNewsletter}>
              Subscribe <span aria-hidden="true">›</span>
            </button>
          </div>

          <div className="news-home-grid">
            <article className="news-featured">
              <Link to={`/news/${featured.slug}`} className="news-featured-link">
                <img src={featured.hero} alt={featured.heroAlt} />
                <h2>{featured.title}</h2>
              </Link>
              <Link to="/news" className="news-more-link">
                View more latest news <span aria-hidden="true">›</span>
              </Link>
            </article>

            <div className="news-home-side">
              {side.map((n) => (
                <Link key={n.slug} to={`/news/${n.slug}`} className="news-side-card">
                  <img src={n.hero} alt={n.heroAlt} loading="lazy" />
                  <h3>{n.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

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

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Featured Agencies</h2>
              <p>
                Looking for a reliable digital agency to grow your presence and revenue? We ranked
                the top-rated full service digital agencies.
              </p>
            </div>
            <Link className="btn btn-outline" to="/agency">
              View Agency Directory
            </Link>
          </div>
          <div className="agency-grid">
            {agencies.slice(0, 3).map((a) => (
              <Link key={a.id} to={`/agency/profile/${a.slug}`} className="agency-card">
                <div className="agency-logo">{a.name.slice(0, 2).toUpperCase()}</div>
                <div>
                  <h3>{a.name}</h3>
                  <div className="meta">
                    <Stars value={a.rating} /> {a.rating}
                  </div>
                </div>
                <p>{a.tagline}</p>
                <div className="meta">
                  {a.city}, {a.state || a.country}
                </div>
                <div className="chip-row">
                  {a.expertise.slice(0, 3).map((e) => (
                    <span className="chip" key={e}>
                      {e}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="hire-panel">
            <div>
              <h2>Looking to Hire an Agency?</h2>
              <p>
                Receive quotes from vetted service providers. Our experts will curate a list of
                agencies suitable to your specific needs.
              </p>
              <Link className="btn btn-ghost" to="/marketplace/project-brief">
                Tell Us About Your Project
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
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Latest Marketplace Projects</h2>
              <p>Our Verified Agencies are Trusted by Top Brands</p>
            </div>
          </div>
          <table className="project-table">
            <thead>
              <tr>
                <th>Project type</th>
                <th>Industry</th>
                <th>Project Description</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody>
              {marketplaceProjects.map((p) => (
                <tr key={p.id}>
                  <td>
                    <strong>{p.type}</strong>
                    <div className="meta">ID {p.id}</div>
                  </td>
                  <td>{p.industry}</td>
                  <td>{p.description}</td>
                  <td>
                    <strong>{p.budget}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Discover Award-Winning Designs</h2>
              <p>
                We help businesses elevate their value through great design showcases, meaningful
                connections and great work.
              </p>
            </div>
            <Link className="btn btn-outline" to="/best-designs">
              View Best Designs
            </Link>
          </div>
          <div className="award-grid">
            {awardDesigns.slice(0, 4).map((d) => (
              <Link key={d.title} to="/best-designs" className="award-card">
                <div
                  className="award-media"
                  style={{
                    backgroundImage: `url(${d.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <span className={`badge ${d.badge === 'Winner' ? 'winner' : ''}`}>{d.badge}</span>
                </div>
                <div className="award-body">
                  <h3>{d.title}</h3>
                  <div className="meta">{d.category}</div>
                  {d.score != null && <div className="score">★ {d.score}/10</div>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
