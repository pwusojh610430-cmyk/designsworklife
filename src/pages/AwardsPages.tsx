import { Link, useParams } from 'react-router-dom'
import {
  awardDesigns,
  bestDesignCategories,
  bestDesignLinks,
  jury,
  newsArticles,
} from '../data'
import { PageHero, SubNav } from '../components/Layout'

const awardSubnav = bestDesignLinks.slice(0, 9).map((l) => ({ label: l.label, to: l.to }))

function designSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function AwardGrid({ items }: { items: typeof awardDesigns }) {
  if (!items.length) return <div className="empty">No designs in this category yet.</div>
  return (
    <div className="award-grid">
      {items.map((d) => (
        <Link className="award-card award-card-link" key={d.title} to={`/best-designs/project/${designSlug(d.title)}`}>
          <div
            className="award-media"
            style={{ backgroundImage: `url(${d.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <span className={`badge ${d.badge === 'Winner' ? 'winner' : ''}`}>{d.badge}</span>
          </div>
          <div className="award-body">
            <div className="meta">{d.category}</div>
            <h3>{d.title}</h3>
            <div className="meta">by {d.agency}</div>
            {d.score != null && (
              <>
                <div className="score">★ {d.score}/10</div>
                <div className="chip-row" style={{ marginTop: '0.5rem' }}>
                  {d.judges.map((j) => (
                    <span className="chip" key={j.initials}>
                      {j.initials} {j.score}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}

export function BestDesignsPage() {
  return (
    <>
      <PageHero
        title="Best Designs"
        subtitle="Standout creative work from 2026 — websites, logos, apps, packaging, print, and video — curated by DesignsWorkLife."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Best Designs' }]}
      />
      <SubNav items={awardSubnav} active="/best-designs" />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>Best Designs August 2026</h2>
              <p>4,200+ submitted designs · winners announced on the 10th</p>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <Link className="btn btn-primary" to="/best-designs/submit">
                Submit Your Design
              </Link>
              <Link className="btn btn-outline" to="/best-designs/how-it-works">
                See How It Works
              </Link>
            </div>
          </div>
          <AwardGrid items={awardDesigns} />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Browse by Category</h2>
          <div className="card-grid" style={{ marginTop: '1rem' }}>
            {bestDesignCategories.map((c) => (
              <Link key={c.slug} to={`/best-designs/${c.slug}`} className="card">
                <h3>{c.label}</h3>
                <p className="meta">Award-winning {c.singular.toLowerCase()} designs</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>2026 Awards Jury</h2>
          <p className="meta" style={{ marginBottom: '1.5rem' }}>
            A panel of 81 seasoned professionals. Our Jury has worked with Prada, Nike, Chanel,
            Google, and Apple.
          </p>
          <div className="card-grid">
            {jury.map((j) => (
              <div className="card" key={j.name}>
                <div className="agency-logo" style={{ marginBottom: '0.75rem' }}>
                  {j.name.slice(0, 1)}
                </div>
                <h3>{j.name}</h3>
                <div className="meta">{j.location}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.25rem' }}>
            <Link className="btn btn-outline" to="/best-designs/jury">
              Meet the full jury
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Latest Design News & Trends</h2>
          <div className="news-ticker" style={{ marginTop: '1rem' }}>
            {newsArticles.slice(0, 6).map((n) => (
              <Link key={n.slug} to={`/news/${n.slug}`} className="news-card news-card-rich">
                <img className="news-thumb-img" src={n.hero} alt={n.heroAlt} loading="lazy" />
                <div>
                  <h3>{n.title}</h3>
                  <div className="meta">{n.ago}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function BestDesignCategoryPage() {
  const { category = '' } = useParams()
  const meta = bestDesignCategories.find((c) => c.slug === category)
  const label = meta?.label ?? category
  const singular = meta?.singular ?? label
  const items = awardDesigns.filter(
    (d) => d.category.toLowerCase() === singular.toLowerCase() || d.category.toLowerCase() === label.toLowerCase(),
  )

  return (
    <>
      <PageHero
        title={`Best ${label} Designs`}
        subtitle={`Selected ${singular.toLowerCase()} work from the DesignsWorkLife awards gallery.`}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Best Designs', to: '/best-designs' },
          { label },
        ]}
      />
      <SubNav items={awardSubnav} active={`/best-designs/${category}`} />
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <h2>{label} · August 2026</h2>
              <p>Filters · Industries · Tags · Sort By</p>
            </div>
            <Link className="btn btn-primary" to="/best-designs/submit">
              Submit Your Design
            </Link>
          </div>
          <AwardGrid items={items.length ? items : awardDesigns} />
          <div className="hire-panel" style={{ marginTop: '2rem' }}>
            <div>
              <h2>Get Connected With The Right Agency Partner & Receive Proposals For FREE</h2>
              <Link className="btn btn-ghost" to="/marketplace/project-brief">
                Get Connected
              </Link>
            </div>
            <div>
              <p>Ready to elevate your designs?</p>
              <Link className="btn btn-ghost" to="/best-designs/how-it-works">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const categoryNarratives: Record<string, { challenge: string; strategy: string; execution: string }> = {
  Website: {
    challenge: 'The team needed to turn a complex offer into a clear digital journey without flattening the personality of the brand.',
    strategy: 'A modular visual system pairs decisive typography with a restrained interface hierarchy, helping visitors understand the offer before asking them to act.',
    execution: 'Responsive page templates, repeatable content blocks, accessible contrast, and focused conversion paths keep the experience coherent across desktop and mobile.',
  },
  Logo: {
    challenge: 'The identity had to feel distinctive at campaign scale while remaining legible on small digital surfaces and practical everyday applications.',
    strategy: 'The concept reduces the organization’s character to a recognizable silhouette, supported by a flexible typographic and color system.',
    execution: 'The final family includes primary and compact marks, monochrome variants, spacing rules, and applications designed to remain consistent across print and screens.',
  },
  App: {
    challenge: 'The product had to make a multi-step task feel simple for first-time users without removing the depth expected by experienced users.',
    strategy: 'The interface prioritizes progressive disclosure, plain-language navigation, and strong visual feedback at every important decision point.',
    execution: 'Reusable components, clear states, accessible controls, and a responsive interaction model create a product that feels dependable rather than decorative.',
  },
  Packaging: {
    challenge: 'The package needed to stand out at shelf distance, communicate essential information quickly, and still feel credible when examined up close.',
    strategy: 'A bold hierarchy gives the brand one memorable visual cue while material choices and secondary details build trust and tactility.',
    execution: 'Color coding, structured labels, production-aware artwork, and scalable variants allow the system to grow across formats without losing recognition.',
  },
  Print: {
    challenge: 'The printed piece had to organize dense information while preserving rhythm, surprise, and a strong physical presence.',
    strategy: 'Editorial pacing, expressive scale changes, and deliberate white space turn each spread into part of a continuous visual narrative.',
    execution: 'A disciplined grid, calibrated typography, image sequencing, and production-conscious finishing create clarity from cover to final page.',
  },
  Video: {
    challenge: 'The film needed to communicate its idea quickly while remaining recognizable with or without sound across different placements.',
    strategy: 'A simple visual premise anchors the story, with motion, framing, and typography reinforcing the same message rather than competing for attention.',
    execution: 'The sequence was designed around clear beats, adaptable edits, readable supers, and a final brand moment that works across long and short formats.',
  },
}

export function BestDesignDetailPage() {
  const { slug = '' } = useParams()
  const design = awardDesigns.find((item) => designSlug(item.title) === slug) ?? awardDesigns[0]
  const narrative = categoryNarratives[design.category] ?? categoryNarratives.Website
  const related = awardDesigns.filter((item) => item.title !== design.title && item.category === design.category).slice(0, 3)

  return (
    <>
      <PageHero
        title={design.title}
        subtitle={`${design.category} design by ${design.agency}`}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Best Designs', to: '/best-designs' }, { label: design.title }]}
      />
      <SubNav items={awardSubnav} />
      <main className="section">
        <div className="container design-detail">
          <div className="design-detail-main">
            <figure className="design-detail-hero"><img src={design.image} alt={`${design.title} by ${design.agency}`} /></figure>
            <section className="design-detail-copy">
              <p className="design-detail-lead">{design.title} is a {design.badge.toLowerCase()} {design.category.toLowerCase()} project recognized for turning a practical communication problem into a focused, memorable design system.</p>
              <h2>Project Overview</h2>
              <p>Created by {design.agency}, the work balances a clear central idea with the details required for real-world use. The result feels specific to its audience and category while remaining flexible enough to support future content, formats, and campaigns.</p>
              <h2>The Design Challenge</h2><p>{narrative.challenge}</p>
              <h2>Creative Strategy</h2><p>{narrative.strategy}</p>
              <h2>Execution</h2><p>{narrative.execution}</p>
              <h2>Why It Stood Out</h2>
              <p>The jury recognized the project for clarity, consistency, and the way its visual choices support the underlying idea. Rather than relying on decoration, the design builds distinction through hierarchy, pacing, and disciplined use of its core elements.</p>
            </section>
          </div>
          <aside className="design-detail-side">
            <div className="side-card"><span className={`badge ${design.badge === 'Winner' ? 'winner' : ''}`}>{design.badge}</span><h3>{design.category}</h3><p className="meta">Designed by {design.agency}</p>{design.score != null && <div className="design-detail-score">★ {design.score}/10</div>}</div>
            {design.judges.length > 0 && <div className="side-card"><h3>Jury Scores</h3>{design.judges.map((judge) => <div className="design-judge-row" key={judge.initials}><span>{judge.initials}</span><strong>{judge.score}/10</strong></div>)}</div>}
            <div className="side-card"><h3>Submit Your Work</h3><p className="meta">Enter your strongest design for consideration in the next monthly awards.</p><Link className="btn btn-primary btn-sm" to="/best-designs/submit">Submit a Design</Link></div>
          </aside>
        </div>
      </main>
      <section className="section alt"><div className="container"><h2>Related {design.category} Projects</h2><div style={{ marginTop: '1rem' }}><AwardGrid items={related.length ? related : awardDesigns.slice(0, 3)} /></div></div></section>
    </>
  )
}

export function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="Best Designs Evaluation System"
        subtitle="Independently scored by creative directors from leading brands and agencies."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Best Designs', to: '/best-designs' },
          { label: 'How It Works' },
        ]}
      />
      <SubNav items={awardSubnav} active="/best-designs/how-it-works" />
      <section className="section">
        <div className="container prose">
          <h2>Monthly Competition Cycle</h2>
          <ol>
            <li>
              <strong>Submit your Design</strong> — between the 1st and 25th of each month.
            </li>
            <li>
              <strong>Design Goes Live</strong> — within 7 days, reviewed by our team.
            </li>
            <li>
              <strong>Internal Jury Evaluation</strong> — scored out of 10 and displayed live.
            </li>
            <li>
              <strong>Finalists Shortlisted</strong> — scores 7.5+ reach external judges.
            </li>
            <li>
              <strong>Winner Announcement</strong> — announced on the 10th; monthly winners enter
              Design of the Year.
            </li>
          </ol>
          <h2>Evaluation Criteria</h2>
          <div className="kv">
            <div>
              <strong>Design</strong>30%
            </div>
            <div>
              <strong>Usability</strong>30%
            </div>
            <div>
              <strong>Creativity</strong>30%
            </div>
            <div>
              <strong>Content</strong>10%
            </div>
          </div>
          <h2>Submission Fees</h2>
          <p>
            <strong>$250 per project</strong> or <strong>$95/month</strong> annual membership with
            unlimited submissions at $25 per design.
          </p>
          <Link className="btn btn-primary" to="/best-designs/submit">
            Submit Your Design
          </Link>
        </div>
      </section>
    </>
  )
}

export function JuryPage() {
  return (
    <>
      <PageHero
        title="2026 Awards Jury"
        subtitle="81 seasoned professionals across design, branding, and product."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Best Designs', to: '/best-designs' },
          { label: 'Jury' },
        ]}
      />
      <SubNav items={awardSubnav} active="/best-designs/jury" />
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {jury.map((j) => (
              <div className="card" key={j.name}>
                <div className="agency-logo" style={{ marginBottom: '0.75rem' }}>
                  {j.name.slice(0, 1)}
                </div>
                <h3>{j.name}</h3>
                <div className="meta">{j.location} · Remote, On Site</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link className="btn btn-outline" to="/best-designs/jury/become-a-judge">
              Become a Judge
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export function BecomeJudgePage() {
  return (
    <>
      <PageHero
        title="Become a Judge"
        subtitle="Join the DesignsWorkLife awards jury and score outstanding creative work."
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Best Designs', to: '/best-designs' },
          { label: 'Jury', to: '/best-designs/jury' },
          { label: 'Become a Judge' },
        ]}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="card">
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thanks — our awards team will review your application.')
              }}
            >
              <label>
                Full Name*
                <input required />
              </label>
              <label>
                Email*
                <input type="email" required />
              </label>
              <label>
                Company / Affiliation*
                <input required />
              </label>
              <label>
                Expertise*
                <select required defaultValue="">
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Website Design</option>
                  <option>Brand / Logo</option>
                  <option>App / Product</option>
                  <option>Packaging</option>
                  <option>Print</option>
                  <option>Video / Motion</option>
                </select>
              </label>
              <label>
                Why do you want to judge?*
                <textarea required />
              </label>
              <button className="btn btn-primary" type="submit">
                Apply
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export function SubmitDesignPage() {
  return (
    <>
      <PageHero
        title="Submit Your Design"
        subtitle="$250 per project · or $95/month membership at $25 per design"
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Best Designs', to: '/best-designs' },
          { label: 'Submit' },
        ]}
      />
      <SubNav items={awardSubnav} active="/best-designs/submit" />
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="card">
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Submission received (demo).')
              }}
            >
              <label>
                Project Title*
                <input required />
              </label>
              <label>
                Category*
                <select required defaultValue="">
                  <option value="" disabled>
                    Select category
                  </option>
                  {bestDesignCategories.map((c) => (
                    <option key={c.slug}>{c.label}</option>
                  ))}
                </select>
              </label>
              <label>
                Agency / Creator*
                <input required />
              </label>
              <label>
                Live URL*
                <input required type="url" placeholder="https://" />
              </label>
              <label>
                Project Description*
                <textarea required />
              </label>
              <button className="btn btn-primary" type="submit">
                Submit Design
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
