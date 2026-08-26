import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { BrandMark } from './BrandMark'

const partnerLogos = [
  { name: 'Shopify', src: `${import.meta.env.BASE_URL}partners/shopify.svg` },
  { name: 'Webflow', src: `${import.meta.env.BASE_URL}partners/webflow.svg` },
  { name: 'Figma', src: `${import.meta.env.BASE_URL}partners/figma.svg` },
  { name: 'Adobe', src: `${import.meta.env.BASE_URL}partners/adobe.svg` },
  { name: 'Notion', src: `${import.meta.env.BASE_URL}partners/notion.svg` },
  { name: 'Slack', src: `${import.meta.env.BASE_URL}partners/slack.svg` },
  { name: 'HubSpot', src: `${import.meta.env.BASE_URL}partners/hubspot.svg` },
  { name: 'Squarespace', src: `${import.meta.env.BASE_URL}partners/squarespace.svg` },
  { name: 'Canva', src: `${import.meta.env.BASE_URL}partners/canva.svg` },
  { name: 'Stripe', src: `${import.meta.env.BASE_URL}partners/stripe.svg` },
  { name: 'WordPress', src: `${import.meta.env.BASE_URL}partners/wordpress.svg` },
  { name: 'Framer', src: `${import.meta.env.BASE_URL}partners/framer.svg` },
] as const

export function PreFooterBlock() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function onSubscribe(e: FormEvent) {
    e.preventDefault()
    setDone(true)
  }

  return (
    <section className="prefooter" aria-label="Newsletter and partner agencies">
      <div className="prefooter-top-fade" aria-hidden="true" />

      <div className="container prefooter-inner">
        <div className="prefooter-newsletter">
          <div className="prefooter-newsletter-copy">
            <span className="prefooter-mail-icon" aria-hidden="true">
              <BrandMark size={58} />
            </span>
            <div>
              <h2>
                Receive our <span>Newsletter</span>
              </h2>
              <p>
                Join over <strong>70,000 B2B</strong> decision-makers growing their brands
              </p>
            </div>
          </div>

          {done ? (
            <p className="prefooter-done">Thanks — you&apos;re on the list.</p>
          ) : (
            <form className="prefooter-form" onSubmit={onSubscribe}>
              <label className="sr-only" htmlFor="prefooter-email">
                Email
              </label>
              <div className="prefooter-field">
                <span className="prefooter-field-inner">
                  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M2 4h16v12H2V4zm1.5 1.5 6.5 5 6.5-5" />
                  </svg>
                  <input
                    id="prefooter-email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </span>
              </div>
              <button type="submit" className="prefooter-subscribe">
                <span>
                  Subscribe <span aria-hidden="true">›</span>
                </span>
              </button>
            </form>
          )}
        </div>

        <div className="prefooter-agency">
          <h3>
            Do You Represent a <span>Professional Agency?</span>
          </h3>
          <Link className="btn-skew prefooter-agency-btn" to="/benefits">
            <span className="btn-skew-inner">
              Submit Your Agency <span aria-hidden="true">›</span>
            </span>
          </Link>
        </div>

        <div className="prefooter-cloud">
          <img
            className="prefooter-globe"
            src={`${import.meta.env.BASE_URL}prefooter/representation-bg.webp`}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />

          <ul className="prefooter-logos">
            {partnerLogos.map((logo, i) => (
              <li
                key={logo.name}
                className={`prefooter-logo prefooter-logo-slot-${i + 1} prefooter-float-${(i % 4) + 1}`}
              >
                <span className="prefooter-logo-chip">
                  <img src={logo.src} alt={logo.name} width={34} height={34} loading="lazy" />
                  <span className="prefooter-logo-name">{logo.name}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
