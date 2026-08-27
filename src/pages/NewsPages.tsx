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
        if (block.type === 'h2')
          return (
            <h2 key={i} id={slugifyHeading(block.text)}>
              {block.text}
            </h2>
          )
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
        title="Trending Brand Stories"
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
  const filtered =
    topic === 'latest-news'
      ? newsArticles
      : newsArticles.filter(
          (n) => n.topics.includes(topic) || n.category.toLowerCase().includes(topic),
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

function slugifyHeading(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function NewsArticlePage() {
  const { slug = '' } = useParams()
  const article = newsArticles.find((n) => n.slug === slug) ?? newsArticles[0]

  const sections = article.body.filter((b) => b.type === 'h2') as { type: 'h2'; text: string }[]
  const others = newsArticles.filter((n) => n.slug !== article.slug)
  const related = others
    .filter((n) => n.topics.some((t) => article.topics.includes(t)))
    .slice(0, 3)
  const relatedReads = (related.length ? related : others.slice(0, 3))

  return (
    <>
      <SubNav items={newsSubnav} />
      <article className="section">
        <div className="container article-layout">
          <div className="prose article-prose">
            <header className="article-header">
              <h1>{article.title}</h1>
              <p className="article-deck">{article.excerpt}</p>
            </header>

            <div className="article-topline">
              <Link className="article-eyebrow" to="/news">
                {article.category}
              </Link>
              <span className="meta">{article.read}</span>
            </div>

            <figure className="article-hero">
              <img src={article.hero} alt={article.heroAlt} />
              <figcaption>
                {article.heroAlt}. {article.heroCredit}
              </figcaption>
            </figure>

            <div className="article-byline">
              <span className="article-avatar" aria-hidden="true">
                {article.author
                  .split(' ')
                  .map((p) => p[0])
                  .join('')}
              </span>
              <div>
                <span className="meta">Article by </span>
                <strong>{article.author}</strong>
                <p className="meta">
                  Published {article.published} · Updated {article.ago}
                </p>
              </div>
              <div className="article-share">
                <span className="meta">Share</span>
                <button className="icon-btn" type="button" aria-label="Share on LinkedIn">
                  in
                </button>
                <button className="icon-btn" type="button" aria-label="Share on X">
                  X
                </button>
                <button className="icon-btn" type="button" aria-label="Copy link">
                  ↗
                </button>
              </div>
            </div>

            {sections.length > 1 && (
              <nav className="article-toc" aria-label="In this article">
                <p className="article-toc-title">In this article</p>
                <ol>
                  {sections.map((s) => (
                    <li key={s.text}>
                      <a href={`#${slugifyHeading(s.text)}`}>{s.text}</a>
                    </li>
                  ))}
                  <li>
                    <a href="#key-findings">Key Findings</a>
                  </li>
                  <li>
                    <a href="#our-take">Our Take</a>
                  </li>
                </ol>
              </nav>
            )}

            <ArticleBody blocks={article.body} />

            <div className="article-callout" id="key-findings">
              <h2>Key Findings</h2>
              <ul>
                {article.keyFindings.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <h2 id="our-take">Our Take</h2>
            <p>{article.ourTake}</p>

            <div className="article-cta">
              <div>
                <strong>Looking for a partner on work like this?</strong>
                <p className="meta">
                  Compare vetted teams by budget, industry, and proven results.
                </p>
              </div>
              <Link className="btn btn-primary" to={article.agencyCta.to}>
                {article.agencyCta.label}
              </Link>
            </div>

            <div className="article-tags">
              {article.topics.map((t) => (
                <Link key={t} to={`/news/topic/${t}`} className="tag-chip">
                  #{t}
                </Link>
              ))}
            </div>

            <div className="article-reactions">
              <span className="meta">Was this useful?</span>
              <button className="icon-btn" type="button" aria-label="Helpful">
                👍
              </button>
              <button className="icon-btn" type="button" aria-label="Not helpful">
                👎
              </button>
              <button className="icon-btn" type="button" aria-label="Love it">
                💗
              </button>
              <button className="icon-btn" type="button" aria-label="Mind blown">
                🤯
              </button>
            </div>

            <div className="author-card author-card-rich">
              <span className="article-avatar" aria-hidden="true">
                {article.author
                  .split(' ')
                  .map((p) => p[0])
                  .join('')}
              </span>
              <div>
                <strong>{article.author}</strong>
                <p className="meta">{article.authorBio}</p>
                <p className="meta">Covers {article.topics.join(', ')}.</p>
              </div>
            </div>

            <h2>Related Reads</h2>
            <div className="news-ticker">
              {relatedReads.map((n) => (
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

          <aside className="article-side">
            <div className="side-card side-promo">
              <p className="side-promo-title">
                <strong>Promote</strong> your brand
                <br />& generate <strong>results</strong>
              </p>
              <p className="side-promo-sub">On DesignsWorkLife</p>
              <Link className="btn btn-primary btn-sm" to="/advertise">
                Contact us ›
              </Link>
            </div>

            <div className="side-card side-card-gradient">
              <h3>Got a project?</h3>
              <p>Receive competing quotes from verified agencies.</p>
              <Link className="btn btn-green btn-sm" to="/marketplace">
                Get proposals ›
              </Link>
            </div>

            <div className="side-card">
              <h3>Trending</h3>
              <ul className="side-list">
                {others.slice(0, 6).map((n) => (
                  <li key={n.slug}>
                    <Link to={`/news/${n.slug}`}>
                      <img src={n.hero} alt={n.heroAlt} loading="lazy" />
                      <span>
                        {n.title}
                        <span className="meta">{n.ago}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="side-card">
              <h3>Browse Topics</h3>
              <div className="side-chips">
                {newsTopics.slice(0, 8).map((t) => (
                  <Link key={t.slug} to={`/news/topic/${t.slug}`} className="tag-chip">
                    {t.label.replace(' News', '')}
                  </Link>
                ))}
              </div>
            </div>

            <div className="side-card side-card-accent">
              <h3>Get the Newsletter</h3>
              <p className="meta">
                Weekly brand and agency intelligence, read by 68,000+ B2B decision-makers.
              </p>
              <Link className="btn btn-primary btn-sm" to="/contact-us">
                Subscribe
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </>
  )
}
