import { Link, useParams } from 'react-router-dom'
import { newsArticles } from '../data'
import { PageHero } from '../components/Layout'

export function NewsIndexPage() {
  return (
    <>
      <PageHero
        title="Trending Brand News"
        subtitle="Daily B2B and marketing news covering technology, branding, advertising, and design."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'News' }]}
      />
      <section className="section">
        <div className="container">
          <h2>Latest News & Trends</h2>
          <div className="news-ticker" style={{ marginTop: '1rem' }}>
            {newsArticles.map((n) => (
              <Link key={n.slug} to={`/news/${n.slug}`} className="news-card">
                <div className="news-thumb" />
                <div>
                  <div className="meta">
                    {n.category} · {n.ago} · {n.read}
                  </div>
                  <h3>{n.title}</h3>
                  <p>{n.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          <h2 style={{ marginTop: '2.5rem' }}>Partner Content</h2>
          <div className="card-grid" style={{ marginTop: '1rem' }}>
            <div className="card">
              <h3>3 Ways Campari America Builds Brand Loyalty With Live Experiences</h3>
              <p className="meta">Partner Content</p>
            </div>
            <div className="card">
              <h3>3% Bounce Rates and Broken Technical Infrastructure Are Killing B2B Sales Pipelines</h3>
              <p className="meta">Partner Content</p>
            </div>
            <div className="card">
              <h3>How Live Nation Designed Its New Venues for Local Music Culture</h3>
              <p className="meta">Partner Content</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function NewsArticlePage() {
  const { slug = '' } = useParams()
  const article = newsArticles.find((n) => n.slug === slug) ?? newsArticles[0]

  return (
    <>
      <PageHero
        title={article.title}
        subtitle={`${article.read} · by ${article.author}`}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'News', to: '/news' },
          { label: article.title.slice(0, 28) + '…' },
        ]}
      />
      <article className="section">
        <div className="container prose">
          <p className="meta">
            {article.category} · Share · watch video
          </p>
          <p>{article.excerpt}</p>
          <p>
            Brands keep turning cultural momentum into product launches. This story follows how the
            campaign was framed, what assets went live, and what marketers can borrow for their own
            pipeline — from creator casting to proof points after a rebrand.
          </p>
          <h2>Key Findings</h2>
          <ul>
            <li>Fandom can outperform cold casting when the creator already loves the product.</li>
            <li>Rebrands need a tangible product proof point, not just new visual systems.</li>
            <li>Humor travels farther than polished brand messaging alone.</li>
          </ul>
          <h2>Our Take</h2>
          <p>
            The strongest refreshes usually start with something people already feel when they use
            the product. Look at who is already saying your message before you hire a celebrity to
            invent one.
          </p>
          <p>
            Explore these top branding agencies in our{' '}
            <Link to="/agency/logo-branding">directory</Link>.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '1.25rem' }}>
            <button className="icon-btn">👍</button>
            <button className="icon-btn">👎</button>
            <button className="icon-btn">💗</button>
            <button className="icon-btn">🤯</button>
          </div>
          <h3 style={{ marginTop: '2rem' }}>Latest Brands News</h3>
          <div className="news-ticker">
            {newsArticles
              .filter((n) => n.slug !== article.slug)
              .slice(0, 4)
              .map((n) => (
                <Link key={n.slug} to={`/news/${n.slug}`} className="news-card">
                  <div className="news-thumb" />
                  <div>
                    <h3>{n.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </>
  )
}
