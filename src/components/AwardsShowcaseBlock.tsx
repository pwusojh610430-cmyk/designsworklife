import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { awardDesigns } from '../data'

const showcase = (() => {
  const websites = awardDesigns.filter((d) => d.category === 'Website')
  const rest = awardDesigns.filter((d) => d.category !== 'Website')
  return [...websites, ...rest].slice(0, 3)
})()

function agencyInitials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export function AwardsShowcaseBlock() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function onSubscribe(e: FormEvent) {
    e.preventDefault()
    setDone(true)
  }

  return (
    <section className="awards-showcase" aria-labelledby="awards-showcase-title">
      <div className="awards-showcase-bg" aria-hidden="true" />
      <div className="container awards-showcase-inner">
        <div className="awards-showcase-head">
          <div className="awards-mark" aria-hidden="true">
            <svg viewBox="0 0 48 56" fill="none">
              <path
                d="M24 4c-6 8-14 12-14 24a14 14 0 0 0 28 0c0-12-8-16-14-24Z"
                stroke="currentColor"
                strokeWidth="2.2"
                fill="rgba(255,255,255,0.08)"
              />
              <path
                d="M24 18c-2.5 3.5-5.5 5.5-5.5 10a5.5 5.5 0 1 0 11 0c0-4.5-3-6.5-5.5-10Z"
                fill="currentColor"
              />
            </svg>
            <strong>AWARDS</strong>
            <span>★★★</span>
          </div>
          <h2 id="awards-showcase-title">Discover Award-Winning Designs</h2>
          <p>
            We help businesses elevate their value through great design showcases, meaningful
            connections and great work.
          </p>
        </div>

        <div className="awards-showcase-grid">
          {showcase.map((d) => (
            <article key={d.title} className="awards-showcase-card">
              <Link to="/best-designs" className="awards-showcase-media">
                <img src={d.image} alt="" loading="lazy" />
              </Link>
              <h3>
                <Link to="/best-designs">{d.title}</Link>
              </h3>
              <div className="awards-showcase-by">
                <span className="awards-agency-avatar" aria-hidden="true">
                  {agencyInitials(d.agency)}
                </span>
                <span>
                  Designed by{' '}
                  <Link to="/best-designs" className="awards-agency-link">
                    {d.agency}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="awards-showcase-cta">
          <Link className="btn-skew btn-skew-light" to="/best-designs/submit">
            <span className="btn-skew-inner">
              Submit Your Design <span aria-hidden="true">›</span>
            </span>
          </Link>
          <Link className="btn-skew btn-skew-ghost" to="/best-designs">
            <span className="btn-skew-inner">
              View More Best Designs <span aria-hidden="true">›</span>
            </span>
          </Link>
        </div>

        <div className="awards-newsletter">
          <div className="awards-newsletter-copy">
            <span className="awards-newsletter-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-3 4-7 6-7 12a7 7 0 0 0 14 0c0-6-4-8-7-12zm0 8c-1.2 1.7-2.6 2.7-2.6 4.8a2.6 2.6 0 1 0 5.2 0c0-2.1-1.4-3.1-2.6-4.8z" />
              </svg>
            </span>
            <div>
              <strong>Receive our Newsletter</strong>
              <p>
                Join over <b>70,000 B2B</b> decision-makers growing their brands
              </p>
            </div>
          </div>
          {done ? (
            <p className="awards-newsletter-done">Thanks — you&apos;re on the list.</p>
          ) : (
            <form className="awards-newsletter-form" onSubmit={onSubscribe}>
              <label className="sr-only" htmlFor="awards-newsletter-email">
                Email
              </label>
              <input
                id="awards-newsletter-email"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">
                Subscribe <span aria-hidden="true">›</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
