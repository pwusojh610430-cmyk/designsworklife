import { useEffect, useState, type FocusEvent, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { newsArticles, newsTopics, partnerArticles } from '../data'
import { PageHero, SubNav } from '../components/Layout'
import type { ArticleBlock, NewsArticle } from '../content/articles'

const newsSubnav = [
  { label: 'All News', to: '/news' },
  ...newsTopics.map((t) => ({ label: t.label.replace(' News', ''), to: `/news/topic/${t.slug}` })),
]

const newsLandingNav = [
  { label: 'Latest', to: '/news' }, { label: 'Brands', to: '/news/topic/branding' },
  { label: 'Agencies', to: '/news/topic/agencies' }, { label: 'Influencers', to: '/news/topic/interviews' },
  { label: 'AI', to: '/news/topic/tech' }, { label: 'Creative', to: '/news/topic/creative' },
  { label: 'Marketing', to: '/news/topic/marketing' }, { label: 'Ecommerce', to: '/news/topic/ecommerce' },
  { label: 'Tech', to: '/news/topic/tech' },
]

function EditableText({ as: Tag, children, editing, className, id, onSave }: {
  as: 'p' | 'h1' | 'h2' | 'li' | 'cite'
  children: ReactNode
  editing: boolean
  className?: string
  id?: string
  onSave: (value: string) => void
}) {
  return (
    <Tag
      className={className}
      id={id}
      contentEditable={editing}
      suppressContentEditableWarning
      onBlur={(event: FocusEvent<HTMLElement>) => onSave(event.currentTarget.innerText.trim())}
    >
      {children}
    </Tag>
  )
}

function ArticleBody({ blocks, editing, onChange }: { blocks: ArticleBlock[]; editing: boolean; onChange: (index: number, block: ArticleBlock) => void }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === 'p') return <EditableText as="p" key={i} editing={editing} onSave={(text) => onChange(i, { ...block, text })}>{block.text}</EditableText>
        if (block.type === 'h2')
          return (
            <EditableText as="h2" key={i} id={slugifyHeading(block.text)} editing={editing} onSave={(text) => onChange(i, { ...block, text })}>{block.text}</EditableText>
          )
        if (block.type === 'quote')
          return (
            <blockquote className="article-quote" key={i}>
              <EditableText as="p" editing={editing} onSave={(text) => onChange(i, { ...block, text: text.replace(/^“|”$/g, '') })}>“{block.text}”</EditableText>
              {block.cite && <EditableText as="cite" editing={editing} onSave={(cite) => onChange(i, { ...block, cite: cite.replace(/^—\s*/, '') })}>— {block.cite}</EditableText>}
            </blockquote>
          )
        if (block.type === 'ul')
          return (
            <ul key={i}>
              {block.items.map((item, itemIndex) => (
                <EditableText as="li" key={itemIndex} editing={editing} onSave={(text) => onChange(i, { ...block, items: block.items.map((value, index) => index === itemIndex ? text : value) })}>{item}</EditableText>
              ))}
            </ul>
          )
        return (
          <figure className="article-figure" key={i}>
            <img src={block.src} alt={block.alt} loading="lazy" />
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
  const lead = newsArticles[0]
  const featured = newsArticles.slice(1, 7)
  const latest = newsArticles.slice(7, 19)
  return (
    <>
      <SubNav items={newsLandingNav} active="/news" />
      <header className="news-index-intro"><div className="container news-index-intro-inner"><h1>Trending Brand News</h1><p>Daily reporting on the ideas, campaigns, technology, and creative decisions shaping modern brands — written for marketers, founders, and agency leaders.</p></div></header>
      <main className="news-index-main">
        <div className="container">
          <div className="news-index-crumb">TRENDING BRAND NEWS <span>›</span> LATEST NEWS AND INSIGHTS</div>
          <Link className="news-index-banner" to="/advertise"><strong>BUILD A MORE VISIBLE BRAND</strong><span>Research, refine, and grow with smarter creative intelligence</span><b>EXPLORE OPPORTUNITIES ›</b></Link>
          <section className="news-feature-matrix" aria-label="Featured news">
            <Link className="news-feature-lead" to={`/news/${lead.slug}`}><img src={lead.hero} alt={lead.heroAlt} /><span className="news-category">{lead.category}</span><h2>{lead.title}</h2><p>{lead.excerpt}</p></Link>
            <div className="news-feature-minor-grid">{featured.map((item) => <Link className="news-feature-minor" key={item.slug} to={`/news/${item.slug}`}><img src={item.hero} alt={item.heroAlt} loading="lazy" /><span className="news-category">{item.category}</span><h3>{item.title}</h3></Link>)}</div>
          </section>
          <div className="news-index-divider" />
          <section className="news-latest-layout">
            <div><h2 className="news-index-section-title">Latest News &amp; Trends</h2><div className="news-latest-list">{latest.map((item) => <Link className="news-latest-item" key={item.slug} to={`/news/${item.slug}`}><img src={item.hero} alt={item.heroAlt} loading="lazy" /><div><span className="news-category">{item.category}</span><h3>{item.title}</h3><p>{item.excerpt}</p><span className="meta">By {item.author} · {item.ago} · {item.read}</span></div></Link>)}</div></div>
            <aside className="news-index-side"><div className="side-card side-promo"><p className="side-promo-title"><strong>Promote</strong> your brand<br />&amp; generate <strong>results</strong></p><p className="side-promo-sub">On DesignsWorkLife</p><Link className="btn btn-primary btn-sm" to="/advertise">Contact us ›</Link></div><div className="side-card"><h3>Trending</h3><ul className="side-list">{newsArticles.slice(0, 6).map((item) => <li key={item.slug}><Link to={`/news/${item.slug}`}><img src={item.hero} alt="" /><span>{item.title}<span className="meta">{item.ago}</span></span></Link></li>)}</ul></div></aside>
          </section>
        </div>
      </main>
      <section className="section alt"><div className="container"><h2>Partner Content</h2><div className="card-grid" style={{ marginTop: '1rem' }}>{partnerArticles.map((p) => <article className="card partner-card" key={p.slug}><img src={p.image} alt={p.imageAlt} loading="lazy" /><div className="meta">{p.category}</div><h3>{p.title}</h3><p>{p.excerpt}</p></article>)}</div></div></section>
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
  const storageKey = `designsworklife-article-draft-${article.slug}`
  const [editorOpen, setEditorOpen] = useState(() => new URLSearchParams(window.location.search).get('article-editor') === '1')
  const [draft, setDraft] = useState<NewsArticle>(() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || '') as NewsArticle } catch { return structuredClone(article) }
  })

  useEffect(() => {
    // oxlint-disable-next-line react/set-state-in-effect -- route changes must load the matching saved draft
    try { setDraft(JSON.parse(localStorage.getItem(storageKey) || '') as NewsArticle) } catch { setDraft(structuredClone(article)) }
  }, [article, storageKey])

  useEffect(() => {
    const toggle = (event: globalThis.KeyboardEvent) => {
      if (event.altKey && event.shiftKey && event.key.toLowerCase() === 'a') {
        event.preventDefault()
        setEditorOpen((open) => !open)
      }
    }
    window.addEventListener('keydown', toggle)
    return () => window.removeEventListener('keydown', toggle)
  }, [])

  useEffect(() => { localStorage.setItem(storageKey, JSON.stringify(draft)) }, [draft, storageKey])

  const updateBlock = (index: number, block: ArticleBlock) => setDraft((current) => ({ ...current, body: current.body.map((item, i) => i === index ? block : item) }))
  const exportDraft = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(draft, null, 2)], { type: 'application/json' }))
    const link = document.createElement('a')
    link.href = url
    link.download = `${draft.slug}-article.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const sections = draft.body.filter((b) => b.type === 'h2') as { type: 'h2'; text: string }[]
  const others = newsArticles.filter((n) => n.slug !== article.slug)
  const related = others
    .filter((n) => n.topics.some((t) => article.topics.includes(t)))
    .slice(0, 3)
  const relatedReads = (related.length ? related : others.slice(0, 3))

  return (
    <>
      <SubNav items={newsSubnav} />
      <article className={`section${editorOpen ? ' article-editing' : ''}`}>
        <div className="container article-layout">
          <div className="prose article-prose">
            <header className="article-header">
              <EditableText as="h1" editing={editorOpen} onSave={(title) => setDraft((current) => ({ ...current, title }))}>{draft.title}</EditableText>
              <EditableText as="p" className="article-deck" editing={editorOpen} onSave={(excerpt) => setDraft((current) => ({ ...current, excerpt }))}>{draft.excerpt}</EditableText>
            </header>

            <div className="article-topline">
              <Link className="article-eyebrow" to="/news">
                {draft.category}
              </Link>
              <span className="meta">{draft.read}</span>
            </div>

            <figure className="article-hero">
              <img src={draft.hero} alt={draft.heroAlt} />
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

            <ArticleBody blocks={draft.body} editing={editorOpen} onChange={updateBlock} />

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
        {editorOpen && (
          <aside className="article-editor" aria-label="Article editor">
            <div className="article-editor-head"><strong>文章编辑模式</strong><button type="button" onClick={() => setEditorOpen(false)} aria-label="Close article editor">×</button></div>
            <label>主图地址<input value={draft.hero} onChange={(event) => setDraft((current) => ({ ...current, hero: event.target.value }))} /></label>
            <label>图片说明<input value={draft.heroAlt} onChange={(event) => setDraft((current) => ({ ...current, heroAlt: event.target.value }))} /></label>
            <label>分类<input value={draft.category} onChange={(event) => setDraft((current) => ({ ...current, category: event.target.value }))} /></label>
            <label>阅读时间<input value={draft.read} onChange={(event) => setDraft((current) => ({ ...current, read: event.target.value }))} /></label>
            <p>直接点击标题、摘要、正文或小标题修改，离开文本框后自动保存。</p>
            <div className="article-editor-actions"><button type="button" onClick={exportDraft}>导出文章</button><button type="button" onClick={() => setDraft(structuredClone(article))}>恢复原文</button></div>
          </aside>
        )}
      </article>
    </>
  )
}
