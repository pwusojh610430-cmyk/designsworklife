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
            <svg viewBox="0 0 1000 420" fill="none" preserveAspectRatio="xMidYMax meet">
              {/* Outer hemisphere arc */}
              <path
                d="M40 420 C80 120 280 20 500 20 C720 20 920 120 960 420"
                stroke="#9ec4ef"
                strokeWidth="1.4"
              />
              {/* Latitude arcs */}
              <path d="M95 360 C220 210 380 145 500 145 C620 145 780 210 905 360" stroke="#b5d3f5" strokeWidth="1.1" />
              <path d="M130 300 C250 190 380 140 500 140 C620 140 750 190 870 300" stroke="#c2dcf8" strokeWidth="1" opacity="0.9" />
              <path d="M175 250 C290 175 390 140 500 140 C610 140 710 175 825 250" stroke="#c2dcf8" strokeWidth="1" opacity="0.85" />
              <path d="M230 200 C330 155 410 135 500 135 C590 135 670 155 770 200" stroke="#cfe4fa" strokeWidth="1" opacity="0.8" />
              <path d="M300 155 C380 130 440 122 500 122 C560 122 620 130 700 155" stroke="#d7e9fb" strokeWidth="1" opacity="0.75" />
              {/* Longitude curves */}
              <path d="M500 20 C500 120 500 250 500 420" stroke="#a8caf0" strokeWidth="1.15" />
              <path d="M500 20 C430 130 390 260 360 420" stroke="#b8d5f4" strokeWidth="1.05" />
              <path d="M500 20 C570 130 610 260 640 420" stroke="#b8d5f4" strokeWidth="1.05" />
              <path d="M500 20 C360 140 290 270 240 420" stroke="#c5ddf7" strokeWidth="1" />
              <path d="M500 20 C640 140 710 270 760 420" stroke="#c5ddf7" strokeWidth="1" />
              <path d="M500 20 C300 155 220 280 160 420" stroke="#d0e5f9" strokeWidth="0.95" />
              <path d="M500 20 C700 155 780 280 840 420" stroke="#d0e5f9" strokeWidth="0.95" />
              <path d="M500 20 C250 175 170 295 110 420" stroke="#daeafb" strokeWidth="0.9" />
              <path d="M500 20 C750 175 830 295 890 420" stroke="#daeafb" strokeWidth="0.9" />
              {/* Network nodes + links */}
              <g fill="#7eb0e6" stroke="#9ec4ef" strokeWidth="1">
                <circle cx="320" cy="210" r="3.2" />
                <circle cx="410" cy="165" r="2.8" />
                <circle cx="500" cy="145" r="3.4" />
                <circle cx="590" cy="168" r="2.8" />
                <circle cx="680" cy="215" r="3.2" />
                <circle cx="370" cy="280" r="2.6" />
                <circle cx="500" cy="250" r="3" />
                <circle cx="630" cy="285" r="2.6" />
                <circle cx="450" cy="330" r="2.4" />
                <circle cx="560" cy="325" r="2.4" />
                <circle cx="280" cy="340" r="2.2" />
                <circle cx="720" cy="345" r="2.2" />
              </g>
              <g stroke="#a9c8ef" strokeWidth="1" opacity="0.75">
                <path d="M320 210L410 165L500 145L590 168L680 215" />
                <path d="M410 165L370 280L500 250L630 285L590 168" />
                <path d="M320 210L370 280L450 330L560 325L630 285L680 215" />
                <path d="M500 145L500 250" />
                <path d="M370 280L280 340" />
                <path d="M630 285L720 345" />
                <path d="M450 330L500 250L560 325" />
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
