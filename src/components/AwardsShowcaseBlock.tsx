import { Link } from 'react-router-dom'
import { awardDesigns } from '../data'
import { BrandMark } from './BrandMark'

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
  return (
    <section className="awards-showcase" aria-labelledby="awards-showcase-title">
      <div className="awards-showcase-bg" aria-hidden="true" />
      <div className="container awards-showcase-inner">
        <div className="awards-showcase-head">
          <div className="awards-mark" aria-hidden="true">
            <BrandMark size={52} />
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
      </div>
    </section>
  )
}
