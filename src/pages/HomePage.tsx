import { useState, type KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import { marketplaceProjects, newsArticles } from '../data'
import { AgencyDirectoryBlock } from '../components/AgencyDirectoryBlock'
import { AwardsShowcaseBlock } from '../components/AwardsShowcaseBlock'
import { BrandMark } from '../components/BrandMark'
import { ReviewsBanner } from '../components/ReviewsBanner'
import { openNewsletter } from '../components/Layout'

const newsTabs = [
  { id: 'latest', label: 'Latest', topicPath: '/news' },
  { id: 'ai', label: 'AI', topicPath: '/news/topic/tech' },
  { id: 'creative', label: 'Creative', topicPath: '/news/topic/creative' },
  { id: 'marketing', label: 'Marketing', topicPath: '/news/topic/marketing' },
  { id: 'ecommerce', label: 'Ecommerce', topicPath: '/news/topic/ecommerce' },
  { id: 'technology', label: 'Technology', topicPath: '/news/topic/tech' },
] as const

function filterNews(tab: string) {
  if (tab === 'latest') return newsArticles
  if (tab === 'ai') {
    return newsArticles.filter((n) =>
      /\bai\b|artificial intelligence|automation|machine learning|advantage\+|model ops|prompt engineer|generative/i.test(
        `${n.title} ${n.excerpt} ${n.category} ${n.topics.join(' ')}`,
      ),
    )
  }
  if (tab === 'technology') return newsArticles.filter((n) => n.topics.includes('tech'))
  if (tab === 'ecommerce') return newsArticles.filter((n) => n.topics.includes('ecommerce'))
  if (tab === 'creative') return newsArticles.filter((n) => n.topics.includes('creative'))
  if (tab === 'marketing') return newsArticles.filter((n) => n.topics.includes('marketing'))
  return newsArticles.filter((n) => n.topics.includes(tab))
}

function projectTypeIcon(type: string) {
  const t = type.toLowerCase()
  if (t.includes('marketing') || t.includes('paid') || t.includes('seo')) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3 10v4h4l5 4V6L7 10H3zm13.5 2a3.5 3.5 0 0 0-1.5-2.85v5.7A3.5 3.5 0 0 0 16.5 12zM15 6.06v1.55a5.5 5.5 0 0 1 0 8.78v1.55A7 7 0 0 0 15 6.06z" />
      </svg>
    )
  }
  if (t.includes('sales') || t.includes('brand')) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M10 2h4l1 4h5v2l-2 1.2V20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-10.8L4 8V6h5l1-4zm2 8a3 3 0 1 0 .01 0z" />
      </svg>
    )
  }
  if (t.includes('website') || t.includes('web') || t.includes('ui') || t.includes('ecommerce')) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-5v2h2v2H7v-2h2v-2H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2v8h14V7H5z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.4 5.7L20.5 9l-4.3 3.8L17.5 19 12 15.8 6.5 19l1.3-6.2L3.5 9l6.1-1.3L12 2z" />
    </svg>
  )
}

export function HomePage() {
  const [tab, setTab] = useState<string>('latest')
  const activeTab = newsTabs.find((t) => t.id === tab) ?? newsTabs[0]
  const filtered = filterNews(tab)
  const list = filtered.length ? filtered : newsArticles
  const featured = list[0]
  const side = list.slice(1, 5)

  function onTabKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const idx = newsTabs.findIndex((t) => t.id === tab)
    if (idx < 0) return
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault()
      const next =
        e.key === 'ArrowRight'
          ? newsTabs[(idx + 1) % newsTabs.length]
          : newsTabs[(idx - 1 + newsTabs.length) % newsTabs.length]
      setTab(next.id)
      const btn = e.currentTarget.querySelector<HTMLButtonElement>(`#news-tab-${next.id}`)
      btn?.focus()
    }
  }

  return (
    <>
      <section className="hero hero-home" aria-labelledby="home-hero-title">
        <div className="container hero-home-inner">
          <p className="hero-kicker">B2B Discovery Platform for Brands & Agencies</p>
          <h1 id="home-hero-title">Helping Brands Find the Right Creative Partners</h1>
          <ul className="hero-pill">
            <li>Showcase Strong Work</li>
            <li>Grow Visibility</li>
            <li>Win Better Leads</li>
          </ul>
        </div>
      </section>

      <section className="home-news" aria-labelledby="trending-news-heading">
        <div className="container">
          <div className="news-toolbar">
            <div className="news-toolbar-brand" id="trending-news-heading">
              <span className="news-flame" aria-hidden="true">
                <BrandMark size={20} />
              </span>
              <span>Trending Brand Stories</span>
            </div>
            <div
              className="news-tabs"
              role="tablist"
              aria-label="News topics"
              onKeyDown={onTabKeyDown}
            >
              {newsTabs.map((t) => (
                <button
                  key={t.id}
                  id={`news-tab-${t.id}`}
                  type="button"
                  role="tab"
                  aria-selected={tab === t.id}
                  aria-controls="news-panel"
                  tabIndex={tab === t.id ? 0 : -1}
                  className={tab === t.id ? 'active' : ''}
                  onClick={() => setTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <button type="button" className="btn btn-subscribe" onClick={openNewsletter}>
              Subscribe <span aria-hidden="true">›</span>
            </button>
          </div>

          <div
            className="news-home-grid"
            id="news-panel"
            role="tabpanel"
            aria-labelledby={`news-tab-${tab}`}
            key={tab}
          >
            <article className="news-featured">
              <Link to={`/news/${featured.slug}`} className="news-featured-link">
                <div className="news-media">
                  <img
                    src={featured.hero}
                    alt={featured.heroAlt}
                    width={800}
                    height={500}
                    decoding="async"
                  />
                </div>
                <h2>{featured.title}</h2>
              </Link>
              <Link to={activeTab.topicPath} className="news-more-link">
                View more {activeTab.label.toLowerCase()} news <span aria-hidden="true">›</span>
              </Link>
            </article>

            <div className="news-home-side">
              {side.map((n) => (
                <Link key={n.slug} to={`/news/${n.slug}`} className="news-side-card">
                  <div className="news-media">
                    <img
                      src={n.hero}
                      alt={n.heroAlt}
                      width={480}
                      height={270}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3>{n.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="stats-banner">
        <div className="container stats-banner-inner">
          <div className="stats-banner-items">
            <div className="stats-banner-item">
              <strong>Independent</strong>
              <span>Editorial analysis</span>
            </div>
            <div className="stats-banner-item">
              <strong>Cross-sector</strong>
              <span>Creative coverage</span>
            </div>
            <div className="stats-banner-item">
              <strong>Weekly</strong>
              <span>Strategy briefings</span>
            </div>
          </div>
          <Link to="/benefits" className="btn btn-green">
            Get Featured <span aria-hidden="true">›</span>
          </Link>
        </div>
      </section>

      <AgencyDirectoryBlock />

      <ReviewsBanner />

      <section className="marketplace-section" aria-labelledby="marketplace-projects-title">
        <div className="container marketplace-section-inner">
          <h2 id="marketplace-projects-title" className="marketplace-section-title">
            Latest <span>Marketplace</span> Projects
          </h2>
          <div className="mp-card">
            <table className="mp-table">
              <thead>
                <tr>
                  <th scope="col">Project type</th>
                  <th scope="col">Industry</th>
                  <th scope="col">Project Description</th>
                  <th scope="col">Budget</th>
                </tr>
              </thead>
              <tbody>
                {marketplaceProjects.slice(0, 4).map((p) => (
                  <tr key={p.id}>
                    <td>
                      <div className="mp-type">
                        <span className="mp-type-icon" aria-hidden="true">
                          {projectTypeIcon(p.type)}
                        </span>
                        <div className="mp-type-text">
                          <strong>{p.type}</strong>
                          <span className="mp-id">ID {p.id}</span>
                        </div>
                      </div>
                    </td>
                    <td>{p.industry}</td>
                    <td>{p.description}</td>
                    <td>
                      <span className="mp-budget">{p.budget}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="marketplace-section-cta">
            <Link className="btn-skew" to="/marketplace/project-brief">
              <span className="btn-skew-inner">
                Post Your Project <span aria-hidden="true">›</span>
              </span>
            </Link>
            <Link className="btn-skew btn-skew-outline" to="/marketplace">
              <span className="btn-skew-inner">
                See All Active Projects <span aria-hidden="true">›</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <AwardsShowcaseBlock />
    </>
  )
}
