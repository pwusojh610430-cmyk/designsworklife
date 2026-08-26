import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { BrandMark } from './BrandMark'

const partnerLogos = [
  { name: 'BIGHORN', accent: '#1a2748' },
  { name: 'smartsites', accent: '#3d5a80', italic: true },
  { name: 'GojiLabs', accent: '#e85d04' },
  { name: 'Bilberrry', accent: '#1a2748' },
  { name: 'Unico Connect', accent: '#2b4c7e' },
  { name: 'DESIGNLI', accent: '#4b01ff' },
  { name: 'The Bureau', accent: '#1a2748' },
  { name: 'DIGITAL SILK', accent: '#1a2748' },
  { name: 'Design in DC', accent: '#2563eb' },
  { name: 'INFINUM', accent: '#1a2748' },
  { name: 'kanda', accent: '#0f766e' },
  { name: 'intero DIGITAL', accent: '#1a2748' },
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
              <BrandMark size={40} />
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
                <span
                  className={`prefooter-logo-chip${'italic' in logo && logo.italic ? ' is-italic' : ''}`}
                  style={{ color: logo.accent }}
                >
                  {logo.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
