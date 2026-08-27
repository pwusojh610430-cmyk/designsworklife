import { useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data'
import { PageHero } from '../components/Layout'

function LegalShell({
  title,
  subtitle,
  crumb,
  children,
}: {
  title: string
  subtitle?: string
  crumb: string
  children: ReactNode
}) {
  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        crumbs={[{ label: 'Home', to: '/' }, { label: crumb }]}
      />
      <section className="section">
        <div className="container prose legal-prose">{children}</div>
      </section>
    </>
  )
}

export function SitemapPage() {
  const siteMap = [
    {
      title: 'Discover',
      links: [
        { label: 'Home', to: '/' },
        { label: 'Agency Directory', to: '/agency' },
        { label: 'Best Designs Awards', to: '/best-designs' },
        { label: 'News & Insights', to: '/news' },
        { label: 'Marketplace', to: '/marketplace' },
      ],
    },
    {
      title: 'For Businesses',
      links: [
        { label: 'Agency Categories', to: '/agency' },
        { label: 'Ranking Methodology', to: '/methodology' },
        { label: 'Latest Trends', to: '/news' },
        { label: 'FAQs', to: '/faqs' },
        { label: 'Advertise', to: '/advertise' },
        { label: 'Get Matched', to: '/marketplace/project-brief' },
      ],
    },
    {
      title: 'For Agencies',
      links: [
        { label: 'Benefits of Listing', to: '/benefits' },
        { label: 'Submit an Agency', to: '/submit-agency' },
        { label: 'Sponsorship', to: '/sponsorship' },
        { label: 'Marketplace Membership', to: '/marketplace/membership' },
        { label: 'All Agencies', to: '/agency' },
      ],
    },
    {
      title: 'Company & Legal',
      links: [
        { label: 'Team & Story', to: '/about-us' },
        { label: 'Contact Us', to: '/contact-us' },
        { label: 'Terms of Use & IP', to: '/terms' },
        { label: 'Privacy Policy', to: '/privacy' },
        { label: 'Accessibility', to: '/accessibility' },
        { label: 'Fraud Protection', to: '/fraud-protection' },
      ],
    },
  ]

  return (
    <>
      <PageHero
        title="Sitemap"
        subtitle="Find every major DesignsWorkLife destination in one place."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Sitemap' }]}
      />
      <section className="section">
        <div className="container">
          <div className="sitemap-grid">
            {siteMap.map((col) => (
              <div className="sitemap-col" key={col.title}>
                <h2>{col.title}</h2>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.to + l.label}>
                      <Link to={l.to}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="sitemap-categories">
            <h2>Agency Categories</h2>
            <div className="sitemap-cat-list">
              {categories.flatMap((g) =>
                g.items.map((i) => (
                  <Link className="chip" key={i.slug} to={`/agency/${i.slug}`}>
                    {i.label}
                  </Link>
                )),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function TermsPage() {
  return (
    <LegalShell
      title="Terms of Use & Intellectual Property"
      subtitle="Last updated: August 26, 2026"
      crumb="Terms of Use & IP"
    >
      <p>
        By accessing DesignsWorkLife you agree to these Terms. If you do not agree, please do not use
        the site, Marketplace, awards program, or related services.
      </p>
      <h2>1. Who we are</h2>
      <p>
        DesignsWorkLife operates a B2B marketplace, agency directory, awards showcase, and editorial
        news hub. Content is provided for business decision support and does not create an
        attorney–client, fiduciary, or employment relationship.
      </p>
      <h2>2. Accounts & listings</h2>
      <p>
        Agency profiles, sponsorship placements, and Marketplace memberships must be accurate. You
        may not impersonate another firm, inflate reviews, or post misleading portfolios. We may
        edit, suspend, or remove listings that violate these Terms or our ranking methodology.
      </p>
      <h2>3. Intellectual property</h2>
      <p>
        DesignsWorkLife marks, rankings presentation, UI, and original editorial content are owned
        by DesignsWorkLife or its licensors. Agency logos, case studies, and creative work remain the
        property of the submitting agency or its clients. By uploading materials you grant us a
        worldwide, non-exclusive license to display them for directory, awards, marketing, and
        related platform purposes.
      </p>
      <h2>4. Marketplace & matching</h2>
      <p>
        Matching introductions are facilitative. Brands and agencies negotiate scope, fees, and
        contracts independently. DesignsWorkLife is not a party to those agreements unless a separate
        written contract says otherwise.
      </p>
      <h2>5. Acceptable use</h2>
      <ul>
        <li>No scraping, reverse engineering, or bulk extraction of rankings without written consent</li>
        <li>No malware, phishing, or attempts to bypass access controls</li>
        <li>No harassment, hate content, or unlawful advertising</li>
      </ul>
      <h2>6. Disclaimers</h2>
      <p>
        Rankings, reviews, and articles are informational. We do not guarantee project outcomes,
        revenue, or uninterrupted service. The platform is provided “as is” to the fullest extent
        permitted by law.
      </p>
      <h2>7. Contact</h2>
      <p>
        Legal questions: <strong>legal@designsworklife.example</strong> — or use our{' '}
        <Link to="/contact-us">Contact</Link> form.
      </p>
    </LegalShell>
  )
}

export function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information"
      crumb="Privacy Policy"
    >
      <p>
        This Privacy Policy describes how DesignsWorkLife handles personal and business data when you
        browse the site, subscribe to newsletters, submit forms, or list an agency.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li>Contact details you submit (name, email, company, phone)</li>
        <li>Agency profile content, portfolios, and review responses</li>
        <li>Usage data such as pages viewed, device type, and approximate location</li>
        <li>Cookies and similar technologies for analytics and preferences</li>
      </ul>
      <h2>How we use data</h2>
      <ul>
        <li>Operate the directory, Marketplace matching, awards, and news experiences</li>
        <li>Respond to inquiries and deliver newsletters you opt into</li>
        <li>Improve rankings quality, fraud prevention, and site performance</li>
        <li>Comply with legal obligations and enforce our Terms</li>
      </ul>
      <h2>Sharing</h2>
      <p>
        We share information with service providers (hosting, email, analytics) under contract, and
        with agencies or brands when you request an introduction. We do not sell personal
        information.
      </p>
      <h2>Your choices</h2>
      <p>
        You may unsubscribe from marketing emails, request access or deletion of profile data, or
        ask questions at <strong>privacy@designsworklife.example</strong>.
      </p>
      <h2>Security & retention</h2>
      <p>
        We use industry-standard safeguards and retain data only as long as needed for the purposes
        above or as required by law.
      </p>
    </LegalShell>
  )
}

export function AccessibilityPage() {
  return (
    <LegalShell
      title="Accessibility Statement"
      subtitle="We aim to make DesignsWorkLife usable for everyone"
      crumb="Accessibility"
    >
      <p>
        DesignsWorkLife is committed to conforming with WCAG 2.2 Level AA where practical across our
        directory, Marketplace, awards, and news surfaces.
      </p>
      <h2>What we design for</h2>
      <ul>
        <li>Keyboard navigation and visible focus states</li>
        <li>Sufficient color contrast for text and controls</li>
        <li>Descriptive link text, form labels, and alternative text for meaningful images</li>
        <li>Skip links and landmark structure for assistive technologies</li>
      </ul>
      <h2>Known limitations</h2>
      <p>
        Some third-party embeds, legacy portfolio media, or dense data tables may not yet meet every
        success criterion. We prioritize fixes as we ship updates.
      </p>
      <h2>Feedback</h2>
      <p>
        If you encounter a barrier, email <strong>accessibility@designsworklife.example</strong> or
        use the <Link to="/contact-us">Contact</Link> form. Include the page URL and a short
        description of the issue — we typically reply within 2 business days.
      </p>
    </LegalShell>
  )
}

export function FraudProtectionPage() {
  return (
    <LegalShell
      title="Fraud Protection"
      subtitle="How we keep brands, agencies, and our community safe"
      crumb="Fraud Protection"
    >
      <p>
        DesignsWorkLife actively monitors for fake reviews, impersonation, phishing, and payment
        scams related to our brand or Marketplace.
      </p>
      <h2>What we never do</h2>
      <ul>
        <li>Ask you to pay listing fees via gift cards, crypto wallets, or personal transfers</li>
        <li>Request passwords or MFA codes by email or chat</li>
        <li>Guarantee rankings in exchange for off-platform payments</li>
      </ul>
      <h2>Verify communications</h2>
      <p>
        Official messages come from <strong>@designsworklife.example</strong> domains. When in
        doubt, navigate directly to the site and use <Link to="/contact-us">Contact Us</Link>{' '}
        instead of clicking unexpected links.
      </p>
      <h2>Report suspicious activity</h2>
      <p>
        Forward screenshots and headers to <strong>trust@designsworklife.example</strong>. We
        investigate agency impersonation, review manipulation, and lead-selling abuse.
      </p>
      <h2>Marketplace safety tips</h2>
      <ul>
        <li>Keep project discussions inside documented proposals</li>
        <li>Use written scopes and milestones before large deposits</li>
        <li>Confirm agency identities against their DesignsWorkLife profile</li>
      </ul>
    </LegalShell>
  )
}

export function FaqsPage() {
  const faqs = [
    {
      q: 'Is DesignsWorkLife free for brands?',
      a: 'Browsing the directory, reading news, and Marketplace matching for brands are free. You only engage agencies on the terms you negotiate with them.',
    },
    {
      q: 'How do agency rankings work?',
      a: 'Rankings start from a Base Score using reviews, portfolio depth, awards/press, team bios, and top services. See our full Methodology page for details.',
    },
    {
      q: 'How do I list my agency?',
      a: 'Use Submit an Agency to share your firm details. Our team reviews profiles for accuracy before they appear in category rankings.',
    },
    {
      q: 'What is Marketplace membership?',
      a: 'Membership packages help agencies receive curated RFPs and optional directory boosts. Sponsorship and membership options are listed under Sponsorship.',
    },
    {
      q: 'Can I advertise on DesignsWorkLife?',
      a: 'Yes — newsletter placements, category sponsorships, and branded content are available for brands and agencies. Visit Advertise to start.',
    },
    {
      q: 'How do I report a fake review or scam?',
      a: 'See Fraud Protection for red flags, then contact trust@designsworklife.example with evidence.',
    },
  ]

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers for brands, agencies, and partners."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'FAQs' }]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="faq info-faq">
            {faqs.map((item, i) => (
              <details key={item.q} open={i === 0}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <p className="meta" style={{ marginTop: '1.5rem' }}>
            Still stuck? <Link to="/contact-us">Contact our team</Link> or read the{' '}
            <Link to="/methodology">ranking methodology</Link>.
          </p>
        </div>
      </section>
    </>
  )
}

export function AdvertisePage() {
  return (
    <>
      <PageHero
        title="Advertise With DesignsWorkLife"
        subtitle="Reach B2B decision-makers actively researching agencies, design partners, and growth teams."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Advertise' }]}
      />
      <section className="section">
        <div className="container">
          <div className="info-feature-grid">
            {[
              {
                title: 'Newsletter sponsorships',
                body: 'Place your brand alongside focused agency research and creative-industry analysis.',
              },
              {
                title: 'Category placements',
                body: 'Sponsor high-intent directory categories such as web design, branding, or software development.',
              },
              {
                title: 'Branded content',
                body: 'Partner on insight pieces, award coverage, or marketplace campaigns with editorial review.',
              },
            ].map((card) => (
              <article className="info-feature-card" key={card.title}>
                <h2>{card.title}</h2>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
          <div className="info-cta-row">
            <Link className="btn btn-primary" to="/contact-us">
              Talk to advertising
            </Link>
            <Link className="btn btn-outline" to="/sponsorship">
              See sponsorship options
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export function SponsorshipPage() {
  return (
    <>
      <PageHero
        title="Sponsorship & Featured Placements"
        subtitle="Put your agency in front of brands comparing partners across software, design, and marketing."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Sponsorship' }]}
      />
      <section className="section">
        <div className="container prose">
          <h2>Who sponsorship is for</h2>
          <p>
            Growing and enterprise agencies that want predictable visibility beyond organic ranking —
            including homepage features, category highlights, and Marketplace priority.
          </p>
          <h2>What you can sponsor</h2>
          <ul>
            <li>Featured agency modules on category pages</li>
            <li>Newsletter and social amplification packages</li>
            <li>Awards season spotlight placements</li>
            <li>Marketplace lead-priority add-ons</li>
          </ul>
          <h2>Next steps</h2>
          <p>
            Compare ongoing membership tiers on the Marketplace Membership page, or contact us for a
            custom sponsorship brief.
          </p>
          <div className="info-cta-row" style={{ marginTop: '1.5rem' }}>
            <Link className="btn btn-primary" to="/marketplace/membership">
              View membership pricing
            </Link>
            <Link className="btn btn-outline" to="/contact-us">
              Request a sponsorship kit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export function SubmitAgencyPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        title="Submit Your Agency"
        subtitle="Add your agency for review by brands searching for software, design, and marketing partners."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Submit An Agency' }]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="card">
            {sent ? (
              <p style={{ color: 'var(--ok)', fontWeight: 600 }}>
                Thanks — we received your submission and will review it shortly.
              </p>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <label>
                  Agency Name*
                  <input required placeholder="Your agency" />
                </label>
                <label>
                  Website*
                  <input required type="url" placeholder="https://" />
                </label>
                <div className="form-row">
                  <label>
                    Primary Contact*
                    <input required />
                  </label>
                  <label>
                    Work Email*
                    <input required type="email" />
                  </label>
                </div>
                <label>
                  Headquarters
                  <input placeholder="City, Country" />
                </label>
                <label>
                  Top Services*
                  <select required defaultValue="">
                    <option value="" disabled>
                      Select primary focus
                    </option>
                    <option>Web Design</option>
                    <option>Branding</option>
                    <option>Software Development</option>
                    <option>Digital Marketing</option>
                    <option>Mobile App Development</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  Short Pitch*
                  <textarea required placeholder="Team size, specialties, standout clients…" />
                </label>
                <button className="btn btn-primary" type="submit">
                  Submit agency
                </button>
              </form>
            )}
          </div>
          <p className="meta" style={{ marginTop: '1rem' }}>
            Prefer to review benefits first? See{' '}
            <Link to="/benefits">Benefits of Listing</Link>.
          </p>
        </div>
      </section>
    </>
  )
}
