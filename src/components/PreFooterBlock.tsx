import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

const partnerLogos = [
  { name: 'BIGHORN', sub: 'Web Solutions', style: 'bighorn' },
  { name: 'smartsites', style: 'smartsites' },
  { name: 'GojiLabs', style: 'goji' },
  { name: 'Bilberrry', style: 'bilberrry' },
  { name: 'Unico Connect', style: 'unico' },
  { name: 'DESIGNLI', style: 'designli' },
  { name: 'The Bureau', sub: 'of Projects', style: 'bureau' },
  { name: 'DIGITAL SILK', style: 'silk' },
  { name: 'Design in DC', style: 'dc' },
  { name: 'INFINUM', style: 'infinum' },
  { name: 'kanda', sub: 'SOFTWARE', style: 'kanda' },
  { name: 'intero', sub: 'DIGITAL', style: 'intero' },
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
              <svg viewBox="0 0 40 40" fill="none">
                <rect x="4" y="10" width="32" height="22" rx="3" stroke="#4b01ff" strokeWidth="2" />
                <path d="M6 12l14 11L34 12" stroke="#4b01ff" strokeWidth="2" strokeLinejoin="round" />
                <circle cx="28" cy="12" r="7" fill="#4b01ff" />
                <path
                  d="M28 8c-1.8 2.4-4 3.5-4 6.2a4 4 0 1 0 8 0c0-2.7-2.2-3.8-4-6.2z"
                  fill="#fff"
                />
              </svg>
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
          <div className="prefooter-globe" aria-hidden="true">
            <svg viewBox="0 0 640 360" fill="none">
              <ellipse cx="320" cy="200" rx="220" ry="140" stroke="#b9d4f5" strokeWidth="1.5" />
              <ellipse cx="320" cy="200" rx="150" ry="140" stroke="#c7ddf8" strokeWidth="1.2" />
              <ellipse cx="320" cy="200" rx="70" ry="140" stroke="#c7ddf8" strokeWidth="1.2" />
              <path
                d="M100 200h440M115 140h410M115 260h410M145 95h350M145 305h350"
                stroke="#c7ddf8"
                strokeWidth="1.2"
              />
              <circle cx="250" cy="150" r="3.5" fill="#9ec4ef" />
              <circle cx="380" cy="170" r="3" fill="#9ec4ef" />
              <circle cx="300" cy="240" r="3.5" fill="#9ec4ef" />
              <circle cx="420" cy="230" r="2.5" fill="#9ec4ef" />
              <circle cx="220" cy="220" r="2.5" fill="#9ec4ef" />
              <path
                d="M250 150l130 20M380 170l-80 70M300 240l120-10M220 220l30-70"
                stroke="#a8caf0"
                strokeWidth="1"
                opacity="0.7"
              />
            </svg>
          </div>

          <ul className="prefooter-logos">
            {partnerLogos.map((logo, i) => (
              <li
                key={logo.name}
                className={`prefooter-logo prefooter-logo-${logo.style} prefooter-float-${(i % 6) + 1}`}
              >
                <span className="prefooter-logo-mark">
                  <strong>{logo.name}</strong>
                  {'sub' in logo && logo.sub ? <small>{logo.sub}</small> : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
