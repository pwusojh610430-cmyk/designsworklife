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
          <div className="prefooter-glow" aria-hidden="true" />
          <div className="prefooter-globe" aria-hidden="true">
            <svg viewBox="0 0 480 480" fill="none">
              <circle cx="240" cy="240" r="168" stroke="#c5daf5" strokeWidth="1.25" />
              <ellipse cx="240" cy="240" rx="118" ry="168" stroke="#d0e2f8" strokeWidth="1.1" />
              <ellipse cx="240" cy="240" rx="55" ry="168" stroke="#d0e2f8" strokeWidth="1.1" />
              <ellipse cx="240" cy="240" rx="168" ry="55" stroke="#d0e2f8" strokeWidth="1.1" />
              <ellipse cx="240" cy="240" rx="168" ry="118" stroke="#d0e2f8" strokeWidth="1.1" />
              <path
                d="M72 240h336M92 175h296M92 305h296M130 120h220M130 360h220"
                stroke="#d7e7fa"
                strokeWidth="1"
              />
              <g className="prefooter-globe-nodes">
                <circle cx="180" cy="165" r="3.5" fill="#8eb6e8" />
                <circle cx="295" cy="150" r="3" fill="#8eb6e8" />
                <circle cx="320" cy="250" r="3.5" fill="#8eb6e8" />
                <circle cx="210" cy="310" r="3" fill="#8eb6e8" />
                <circle cx="155" cy="250" r="2.5" fill="#8eb6e8" />
                <path
                  d="M180 165l115-15M295 150l25 100M320 250l-110 60M210 310l-55-60"
                  stroke="#a9c8ef"
                  strokeWidth="1"
                  opacity="0.65"
                />
              </g>
            </svg>
          </div>

          <ul className="prefooter-logos">
            {partnerLogos.map((logo, i) => (
              <li
                key={logo.name}
                className={`prefooter-logo prefooter-logo-slot-${i + 1} prefooter-float-${(i % 4) + 1}`}
              >
                <span className="prefooter-logo-chip">
                  <img src={logo.src} alt={logo.name} width={28} height={28} loading="lazy" />
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
