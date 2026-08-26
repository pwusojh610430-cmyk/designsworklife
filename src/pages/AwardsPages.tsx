import { Link } from 'react-router-dom'
import { awardDesigns, jury, newsArticles } from '../data'
import { PageHero } from '../components/Layout'

export function BestDesignsPage() {
  return (
    <>
      <PageHero
        title="Best Designs"
        subtitle="The best design work of 2026, across websites, logos, apps, packaging, print, and video — curated by DesignsWorkLife."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Best Designs' }]}
      />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Best Designs August 2026</h2>
              <p>4,200+ submitted designs · monthly winners announced on the 10th</p>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <Link className="btn btn-primary" to="/best-designs/how-it-works">
                Submit Your Design
              </Link>
              <Link className="btn btn-outline" to="/best-designs/how-it-works">
                See How It Works
              </Link>
            </div>
          </div>
          <div className="award-grid">
            {awardDesigns.map((d) => (
              <article className="award-card" key={d.title}>
                <div className="award-media">
                  <span className={`badge ${d.badge === 'Winner' ? 'winner' : ''}`}>{d.badge}</span>
                </div>
                <div className="award-body">
                  <div className="meta">{d.category}</div>
                  <h3>{d.title}</h3>
                  <div className="meta">by {d.agency}</div>
                  {d.score != null && (
                    <>
                      <div className="score">★ {d.score}/10</div>
                      <div className="chip-row" style={{ marginTop: '0.5rem' }}>
                        {d.judges.map((j) => (
                          <span className="chip" key={j.initials}>
                            {j.initials} {j.score}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="hire-panel">
            <div>
              <h2>Get Connected With The Right Agency Partner & Receive Proposals For FREE</h2>
              <Link className="btn btn-ghost" to="/marketplace/project-brief">
                Get Connected
              </Link>
            </div>
            <div>
              <p>Ready to elevate your designs?</p>
              <Link className="btn btn-ghost" to="/best-designs/how-it-works">
                Submit Your Design
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>2026 Awards Jury</h2>
          <p className="meta" style={{ marginBottom: '1.5rem' }}>
            DesignsWorkLife Jury is a group of 81 seasoned professionals who bring years of
            experience and a deep understanding of creative excellence. Our Jury has worked with
            Prada, Nike, Chanel, Google, and Apple.
          </p>
          <div className="card-grid">
            {jury.map((j) => (
              <div className="card" key={j.name}>
                <div className="agency-logo" style={{ marginBottom: '0.75rem' }}>
                  {j.name.slice(0, 1)}
                </div>
                <h3>{j.name}</h3>
                <div className="meta">{j.location} · Remote, On Site</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Latest Design News & Trends</h2>
          <div className="news-ticker" style={{ marginTop: '1rem' }}>
            {newsArticles.slice(0, 6).map((n) => (
              <Link key={n.slug} to={`/news/${n.slug}`} className="news-card">
                <div className="news-thumb" />
                <div>
                  <h3>{n.title}</h3>
                  <div className="meta">{n.ago}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="Best Designs Evaluation System"
        subtitle="Scored independently by a panel of creative directors from TOP global BRANDS & agencies."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Best Designs', to: '/best-designs' },
          { label: 'How It Works' },
        ]}
      />
      <section className="section">
        <div className="container prose">
          <h2>Monthly Competition Cycle</h2>
          <ol>
            <li>
              <strong>Submit your Design</strong> — between the 1st and 25th of each month.
            </li>
            <li>
              <strong>Design Goes Live</strong> — within 7 days, reviewed by our team.
            </li>
            <li>
              <strong>Internal Jury Evaluation</strong> — scored out of 10 and displayed live.
            </li>
            <li>
              <strong>Finalists Shortlisted</strong> — scores 7.5+ reach external judges.
            </li>
            <li>
              <strong>Winner Announcement</strong> — announced on the 10th; monthly winners enter
              Design of the Year.
            </li>
          </ol>

          <h2>Evaluation Criteria</h2>
          <div className="kv">
            <div>
              <strong>Design</strong>30%
            </div>
            <div>
              <strong>Usability</strong>30%
            </div>
            <div>
              <strong>Creativity</strong>30%
            </div>
            <div>
              <strong>Content</strong>10%
            </div>
          </div>

          <h2>What Do Winners Get?</h2>
          <ul>
            <li>Best Designs Winner Badge</li>
            <li>Article on DesignsWorkLife</li>
            <li>Newsletter, PR & Social Media promotion</li>
          </ul>

          <h2>Submission Fees</h2>
          <p>
            Submissions cost <strong>$250 per project</strong> or <strong>$95/month</strong> for
            annual membership, which includes unlimited submissions at $25 per design.
          </p>

          <div className="faq">
            <details open>
              <summary>Who can submit?</summary>
              <p>
                Anyone who created the work — agencies, in-house teams, and freelancers are all
                welcome.
              </p>
            </details>
            <details>
              <summary>How are winners promoted?</summary>
              <p>
                Six winners receive featured placement on the Best Designs homepage every month,
                plus a shareable badge and PR/newsletter promotion.
              </p>
            </details>
          </div>

          <Link className="btn btn-primary" to="/contact-us">
            Ready to elevate your designs?
          </Link>
        </div>
      </section>
    </>
  )
}
