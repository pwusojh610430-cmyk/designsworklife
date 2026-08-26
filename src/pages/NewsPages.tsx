import { Link, useParams } from 'react-router-dom'
import { newsArticles, newsTopics, partnerArticles } from '../data'
import { PageHero, SubNav } from '../components/Layout'
import type { ArticleBlock } from '../content/articles'

const newsSubnav = [
  { label: 'All News', to: '/news' },
  ...newsTopics.map((t) => ({ label: t.label.replace(' News', ''), to: `/news/topic/${t.slug}` })),
]

function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === 'p') return <p key={i}>{block.text}</p>
        if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
        if (block.type === 'quote')
          return (
            <blockquote className="article-quote" key={i}>
              <p>“{block.text}”</p>
              {block.cite && <cite>— {block.cite}</cite>}
            </blockquote>
          )
        if (block.type === 'ul')
          return (
            <ul key={i}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        return (
          <figure className="article-figure" key={i}>
            <img src={block.src} alt={block.alt} loading="lazy" />
            <figcaption>{block.caption}</figcaption>
          </figure>
        )
      })}
    </>
  )
}

function NewsCard({
  slug,
  title,
  excerpt,
  meta,
  image,
  imageAlt,
}: {
  slug: string
  title: string
  excerpt?: string
  meta: string
  image: string
  imageAlt: string
}) {
  return (
    <Link to={`/news/${slug}`} className="news-card news-card-rich">
      <img className="news-thumb-img" src={image} alt={imageAlt} loading="lazy" />
      <div>
        <div className="meta">{meta}</div>
        <h3>{title}</h3>
        {excerpt && <p>{excerpt}</p>}
      </div>
    </Link>
  )
}

export function NewsIndexPage() {
  return (
    <>
      <PageHero
        title="Trending Brand News"
        subtitle="Daily B2B and marketing news covering technology, branding, advertising, and design."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'News' }]}
      />
      <SubNav items={newsSubnav} active="/news" />
      <section className="section">
        <div className="container">
          <h2>News Topics</h2>
          <div className="card-grid" style={{ margin: '1rem 0 2rem' }}>
            {newsTopics.map((t) => (
              <Link key={t.slug} to={`/news/topic/${t.slug}`} className="card">
                <h3>{t.label}</h3>
                <p className="meta">Browse {t.label.toLowerCase()}</p>
              </Link>
            ))}
          </div>

          <h2>Latest News & Trends</h2>
          <div className="news-ticker" style={{ marginTop: '1rem' }}>
            {newsArticles.map((n) => (
              <NewsCard
                key={n.slug}
                slug={n.slug}
                title={n.title}
                excerpt={n.excerpt}
                meta={`${n.category} · ${n.ago} · ${n.read}`}
                image={n.hero}
                imageAlt={n.heroAlt}
              />
            ))}
          </div>

          <h2 style={{ marginTop: '2.5rem' }}>Partner Content</h2>
          <div className="card-grid" style={{ marginTop: '1rem' }}>
            {partnerArticles.map((p) => (
              <article className="card partner-card" key={p.slug}>
                <img src={p.image} alt={p.imageAlt} loading="lazy" />
                <div className="meta">{p.category}</div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function NewsTopicPage() {
  const { topic = '' } = useParams()
  const meta = newsTopics.find((t) => t.slug === topic)
  const label = meta?.label ?? topic
  const filtered = newsArticles.filter(
    (n) =>
      n.topics.includes(topic) ||
      n.category.toLowerCase().includes(topic) ||
      topic === 'latest-news' ||
      topic === 'podcast' ||
      topic === 'interviews',
  )

  return (
    <>
      <PageHero
        title={label}
        subtitle={`Coverage and analysis in ${label.toLowerCase()}.`}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'News', to: '/news' },
          { label },
        ]}
      />
      <SubNav items={newsSubnav} active={`/news/topic/${topic}`} />
      <section className="section">
        <div className="container">
          <div className="news-ticker">
            {(filtered.length ? filtered : newsArticles).map((n) => (
              <NewsCard
                key={n.slug}
                slug={n.slug}
                title={n.title}
                excerpt={n.excerpt}
                meta={`${n.category} · ${n.ago} · ${n.read}`}
                image={n.hero}
                imageAlt={n.heroAlt}
              />
            ))}
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
        subtitle={`${article.published} · ${article.read} · by ${article.author}`}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'News', to: '/news' },
          { label: article.title.slice(0, 28) + '…' },
        ]}
      />
      <SubNav items={newsSubnav} />
      <article className="section">
        <div className="container article-layout">
          <div className="prose article-prose">
            <p className="meta">
              {article.category} · Share · {article.heroCredit}
            </p>
            <figure className="article-hero">
              <img src={article.hero} alt={article.heroAlt} />
              <figcaption>{article.heroAlt}. {article.heroCredit}</figcaption>
            </figure>
            <p className="article-deck">{article.excerpt}</p>
            <ArticleBody blocks={article.body} />
            <h2>Key Findings</h2>
            <ul>
              {article.keyFindings.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <h2>Our Take</h2>
            <p>{article.ourTake}</p>
            <p>
              <Link to={article.agencyCta.to}>{article.agencyCta.label}</Link> in our directory.
            </p>
            <div className="author-card">
              <strong>{article.author}</strong>
              <p className="meta">{article.authorBio}</p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '1.25rem' }}>
              <button className="icon-btn" type="button">
                👍
              </button>
              <button className="icon-btn" type="button">
                👎
              </button>
              <button className="icon-btn" type="button">
                💗
              </button>
              <button className="icon-btn" type="button">
                🤯
              </button>
            </div>
            <h3 style={{ marginTop: '2rem' }}>Latest Brands News</h3>
            <div className="news-ticker">
              {newsArticles
                .filter((n) => n.slug !== article.slug)
                .slice(0, 4)
                .map((n) => (
                  <NewsCard
                    key={n.slug}
                    slug={n.slug}
                    title={n.title}
                    meta={`${n.ago} · ${n.read}`}
                    image={n.hero}
                    imageAlt={n.heroAlt}
                  />
                ))}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
