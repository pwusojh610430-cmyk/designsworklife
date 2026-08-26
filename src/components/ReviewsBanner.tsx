import { useState } from 'react'

const reviews = [
  {
    quote:
      'The quality of developers that were recommended by them [was] by far the best ones.',
    name: 'Sakshi Sodhi',
    role: 'EduFinance Senior Technical Assistance Advisor',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&h=160&q=80',
    company: 'EF',
    companyColor: 'linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb)',
  },
  {
    quote:
      'DesignsWorkLife helped us shortlist agencies that actually understood our brand and timeline.',
    name: 'Marcus Chen',
    role: 'VP Marketing, Northline Retail',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80',
    company: 'NR',
    companyColor: 'linear-gradient(135deg, #5f27cd, #341f97)',
  },
  {
    quote:
      'We received curated matches in days — not weeks of cold outreach. The process was refreshingly clear.',
    name: 'Elena Brooks',
    role: 'Founder, Atlas Wellness',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&h=160&q=80',
    company: 'AW',
    companyColor: 'linear-gradient(135deg, #10ac84, #01a3a4)',
  },
]

export function ReviewsBanner() {
  const [index, setIndex] = useState(0)
  const review = reviews[index]

  const prev = () => setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1))

  return (
    <section className="reviews-banner" aria-labelledby="reviews-banner-title">
      <div className="reviews-banner-inner">
        <div className="reviews-banner-brand">
          <div className="reviews-torch" aria-hidden="true">
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
              <path
                d="M16 48h16M19 52h10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="reviews-torch-stars">★★★</span>
          </div>
          <div>
            <h2 id="reviews-banner-title">DesignsWorkLife Reviews</h2>
            <p>This is why our clients trust us</p>
          </div>
        </div>

        <blockquote className="reviews-banner-quote" key={review.name}>
          <div className="stars" aria-label="5 star rating">
            ★★★★★
          </div>
          <p>&ldquo;{review.quote}&rdquo;</p>
        </blockquote>

        <div className="reviews-banner-person">
          <button type="button" className="reviews-nav" onClick={prev} aria-label="Previous review">
            ‹
          </button>
          <div className="reviews-person-stack">
            <div className="reviews-avatars">
              <img src={review.avatar} alt="" width={72} height={72} />
              <span
                className="reviews-company-mark"
                style={{ background: review.companyColor }}
                aria-hidden="true"
              >
                {review.company}
              </span>
            </div>
            <div className="reviews-person-meta">
              <strong>{review.name}</strong>
              <span>{review.role}</span>
            </div>
          </div>
          <button type="button" className="reviews-nav" onClick={next} aria-label="Next review">
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
