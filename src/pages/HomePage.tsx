import { Link } from 'react-router-dom'
import { agencies, awardDesigns, marketplaceProjects, newsArticles } from '../data'
import { Stars } from '../components/Layout'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">B2B Media Platform for Brands & Agencies</div>
            <h1>Agency Directory</h1>
            <p className="hero-lead">Driving Brand Discovery & Growth</p>
            <ul className="hero-points">
              <li>Showcase Your Work</li>
              <li>Build Awareness</li>
              <li>Generate Leads</li>
            </ul>
            <div className="hero-cta">
              <Link className="btn btn-primary" to="/marketplace/project-brief">
                Looking to Hire an Agency?
              </Link>
              <Link className="btn btn-outline" to="/benefits">
                List Your Agency
              </Link>
            </div>
            <div className="stat-row">
              <div className="stat">
                <strong>1,000,000+</strong>
                <span>Monthly B2B Visitors</span>
              </div>
              <div className="stat">
                <strong>150,000+</strong>
                <span>Followers on Social</span>
              </div>
              <div className="stat">
                <strong>70,000+</strong>
                <span>B2B Newsletter Subscribers</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="eyebrow">Trending Brand News</div>
            <div className="news-ticker">
              {newsArticles.slice(0, 5).map((n) => (
                <Link key={n.slug} to={`/news/${n.slug}`} className="news-card news-card-rich">
                  <img className="news-thumb-img" src={n.hero} alt={n.heroAlt} loading="lazy" />
                  <div>
                    <h3>{n.title}</h3>
                    <div className="meta">
                      {n.ago} · {n.read}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
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
                  style={{ backgroundImage: `url(${d.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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
