import { useEffect, useRef, useState, type CSSProperties, type FormEvent, type KeyboardEvent, type PointerEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { BrandMark } from './BrandMark'

type PartnerLogo = {
  name: string
  to: string
  mark: ReactNode
}

type LogoConfig = {
  x: number
  y: number
  scale: number
  amplitude: number
  duration: number
}

const logoEditorStorageKey = 'designsworklife-logo-layout-v1'
const defaultLogoConfig: LogoConfig[] = [
  { x: 11.15, y: 16.84, scale: 1, amplitude: 10, duration: 10 },
  { x: 30.71, y: 0, scale: 1, amplitude: 11, duration: 10 },
  { x: 51.47, y: 10.1, scale: 1, amplitude: 12, duration: 9.4 },
  { x: 23.09, y: 37.57, scale: 1, amplitude: 9, duration: 8.2 },
  { x: 44.34, y: 42.36, scale: 1.14, amplitude: 12, duration: 7.6 },
  { x: 67.46, y: 51.03, scale: 1, amplitude: 7, duration: 8.8 },
  { x: 76.96, y: 5.93, scale: 1, amplitude: 6, duration: 9.4 },
  { x: 87.88, y: 38.59, scale: 1.08, amplitude: 10, duration: 9 },
  { x: 8.42, y: 68.94, scale: 1, amplitude: 8, duration: 7.6 },
  { x: 27.52, y: 85.78, scale: 1, amplitude: 7, duration: 8.8 },
  { x: 51, y: 71.11, scale: 1.26, amplitude: 14, duration: 9.4 },
  { x: 74.87, y: 86.52, scale: 1, amplitude: 9, duration: 8.2 },
]

function loadLogoConfig() {
  try {
    const saved = localStorage.getItem(logoEditorStorageKey)
    if (!saved) return defaultLogoConfig
    const parsed = JSON.parse(saved) as LogoConfig[]
    return parsed.length === defaultLogoConfig.length ? parsed : defaultLogoConfig
  } catch {
    return defaultLogoConfig
  }
}

const partnerLogos: PartnerLogo[] = [
  {
    name: 'BIGHORN Web Solutions',
    to: '/agency',
    mark: (
      <svg viewBox="0 0 220 56" role="img" aria-label="BIGHORN Web Solutions">
        <path
          fill="#1e3a5f"
          d="M28 6c-7 8-12 16-14 26 6-4 12-6 18-6 4 8 6 16 6 24h8c0-10 3-20 10-28-10 2-18 0-28-16z"
        />
        <text x="58" y="28" fill="#1e3a5f" fontFamily="Arial Black, Arial, sans-serif" fontSize="18" fontWeight="800">
          BIGHORN
        </text>
        <text x="58" y="46" fill="#5b6b7c" fontFamily="Arial, sans-serif" fontSize="11" letterSpacing="1.2">
          WEB SOLUTIONS
        </text>
      </svg>
    ),
  },
  {
    name: 'smartsites',
    to: '/agency',
    mark: (
      <svg viewBox="0 0 200 48" role="img" aria-label="smartsites">
        <circle cx="18" cy="24" r="14" fill="#f59e0b" />
        <path fill="#fff" d="M18 12c1.5 4 2 7 2 12h-4c0-5 .5-8 2-12zm0 24c-1.5-4-2-7-2-12h4c0 5-.5 8-2 12z" />
        <text x="42" y="31" fill="#3d5a80" fontFamily="Georgia, serif" fontSize="24" fontStyle="italic" fontWeight="700">
          smartsites
        </text>
      </svg>
    ),
  },
  {
    name: 'DIGITAL SILK',
    to: '/agency/profile/digital-silk',
    mark: (
      <svg viewBox="0 0 210 48" role="img" aria-label="DIGITAL SILK">
        <path fill="#2f6bff" d="M20 8l12 8-4 14-12-4 4-18zm14 4l10 6v12l-10 6-8-10 8-14z" />
        <text x="52" y="31" fill="#4a5568" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="800" letterSpacing="1">
          DIGITAL SILK
        </text>
      </svg>
    ),
  },
  {
    name: 'GojiLabs',
    to: '/agency',
    mark: (
      <svg viewBox="0 0 180 48" role="img" aria-label="GojiLabs">
        <circle cx="18" cy="24" r="14" fill="#e85d7a" />
        <circle cx="18" cy="24" r="6" fill="#fff" opacity="0.9" />
        <text x="42" y="31" fill="#1a2748" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="800">
          GojiLabs
        </text>
      </svg>
    ),
  },
  {
    name: 'Unico Connect',
    to: '/agency',
    mark: (
      <svg viewBox="0 0 210 48" role="img" aria-label="Unico Connect">
        <circle cx="20" cy="24" r="16" fill="none" stroke="#1a2748" strokeWidth="2.5" />
        <circle cx="20" cy="10" r="3" fill="#2b6cb0" />
        <circle cx="8" cy="30" r="3" fill="#2b6cb0" />
        <circle cx="32" cy="30" r="3" fill="#2b6cb0" />
        <text x="46" y="22" fill="#1a2748" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="800">
          Unico
        </text>
        <text x="46" y="40" fill="#5b6b7c" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600">
          Connect
        </text>
      </svg>
    ),
  },
  {
    name: 'DESIGNLI',
    to: '/agency',
    mark: (
      <svg viewBox="0 0 180 48" role="img" aria-label="DESIGNLI">
        <path fill="#e11d48" d="M8 36L24 8l16 28H8zm8-6h16l-8-14-8 14z" />
        <path fill="#e11d48" d="M20 22h8v14h-8z" />
        <text x="52" y="31" fill="#1a2748" fontFamily="Arial Black, Arial, sans-serif" fontSize="20" fontWeight="900">
          DESIGNLI
        </text>
      </svg>
    ),
  },
  {
    name: 'The Bureau of Projects',
    to: '/agency',
    mark: (
      <svg viewBox="0 0 230 56" role="img" aria-label="The Bureau of Projects">
        <text x="0" y="24" fill="#1a2748" fontFamily="Georgia, serif" fontSize="22" fontStyle="italic" fontWeight="700">
          The Bureau
        </text>
        <text x="0" y="46" fill="#5b6b7c" fontFamily="Georgia, serif" fontSize="14">
          of Projects
        </text>
      </svg>
    ),
  },
  {
    name: 'Design in DC',
    to: '/agency/profile/design-in-dc',
    mark: (
      <svg viewBox="0 0 170 56" role="img" aria-label="Design in DC">
        <text x="0" y="22" fill="#1a2748" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" letterSpacing="0.5">
          Design in
        </text>
        <text x="0" y="48" fill="#1a2748" fontFamily="Arial Black, Arial, sans-serif" fontSize="28" fontWeight="900">
          DC
        </text>
      </svg>
    ),
  },
  {
    name: 'Bilberrry',
    to: '/agency',
    mark: (
      <svg viewBox="0 0 180 48" role="img" aria-label="Bilberrry">
        <circle cx="14" cy="18" r="8" fill="#1a2748" />
        <circle cx="24" cy="22" r="9" fill="#2d3748" />
        <circle cx="16" cy="28" r="7" fill="#4a5568" />
        <text x="42" y="31" fill="#1a2748" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="800">
          Bilberrry
        </text>
      </svg>
    ),
  },
  {
    name: 'kanda SOFTWARE',
    to: '/agency',
    mark: (
      <svg viewBox="0 0 180 56" role="img" aria-label="kanda SOFTWARE">
        <text x="8" y="24" fill="#14b8a6" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="800" fontStyle="italic">
          kanda
        </text>
        <rect x="4" y="32" width="120" height="18" rx="9" fill="#0f766e" />
        <text x="20" y="45" fill="#fff" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700" letterSpacing="1.5">
          SOFTWARE
        </text>
      </svg>
    ),
  },
  {
    name: 'intero DIGITAL',
    to: '/agency',
    mark: (
      <svg viewBox="0 0 200 48" role="img" aria-label="intero DIGITAL">
        <rect x="2" y="8" width="18" height="5" fill="#2563eb" />
        <rect x="2" y="16" width="18" height="5" fill="#16a34a" />
        <rect x="2" y="24" width="18" height="5" fill="#2563eb" />
        <rect x="2" y="32" width="18" height="5" fill="#16a34a" />
        <text x="30" y="24" fill="#334155" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="800">
          intero
        </text>
        <text x="30" y="42" fill="#64748b" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="600" letterSpacing="1.5">
          DIGITAL
        </text>
      </svg>
    ),
  },
  {
    name: 'INFINUM',
    to: '/agency',
    mark: (
      <svg viewBox="0 0 180 48" role="img" aria-label="INFINUM">
        <path
          fill="#e11d48"
          d="M12 24c0-8 6-14 14-14 5 0 9 2 12 6 3-4 7-6 12-6 8 0 14 6 14 14s-6 14-14 14c-5 0-9-2-12-6-3 4-7 6-12 6-8 0-14-6-14-14zm8 0c0 4 3 7 7 7s7-3 7-7-3-7-7-7-7 3-7 7zm22 0c0 4 3 7 7 7s7-3 7-7-3-7-7-7-7 3-7 7z"
        />
        <text x="68" y="31" fill="#1a2748" fontFamily="Arial Black, Arial, sans-serif" fontSize="20" fontWeight="900" letterSpacing="1">
          INFINUM
        </text>
      </svg>
    ),
  },
]

export function PreFooterBlock() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [editorOpen, setEditorOpen] = useState(() => new URLSearchParams(window.location.search).get('logo-editor') === '1')
  const [selectedLogo, setSelectedLogo] = useState(0)
  const [logoConfig, setLogoConfig] = useState<LogoConfig[]>(loadLogoConfig)
  const logoAreaRef = useRef<HTMLUListElement>(null)
  const dragRef = useRef<{ index: number; offsetX: number; offsetY: number } | null>(null)

  useEffect(() => {
    const toggleEditor = (event: globalThis.KeyboardEvent) => {
      if (event.altKey && event.shiftKey && event.key.toLowerCase() === 'e') {
        event.preventDefault()
        setEditorOpen((open) => !open)
      }
    }
    window.addEventListener('keydown', toggleEditor)
    return () => window.removeEventListener('keydown', toggleEditor)
  }, [])

  useEffect(() => {
    localStorage.setItem(logoEditorStorageKey, JSON.stringify(logoConfig))
  }, [logoConfig])

  function updateLogo(index: number, patch: Partial<LogoConfig>) {
    setLogoConfig((current) => current.map((item, i) => (i === index ? { ...item, ...patch } : item)))
  }

  function beginLogoDrag(event: PointerEvent<HTMLLIElement>, index: number) {
    if (!editorOpen || !logoAreaRef.current) return
    event.preventDefault()
    const itemRect = event.currentTarget.getBoundingClientRect()
    dragRef.current = { index, offsetX: event.clientX - itemRect.left, offsetY: event.clientY - itemRect.top }
    event.currentTarget.setPointerCapture(event.pointerId)
    setSelectedLogo(index)
  }

  function moveLogo(event: PointerEvent<HTMLLIElement>) {
    if (!editorOpen || !dragRef.current || !logoAreaRef.current) return
    const area = logoAreaRef.current.getBoundingClientRect()
    const x = ((event.clientX - area.left - dragRef.current.offsetX) / area.width) * 100
    const y = ((event.clientY - area.top - dragRef.current.offsetY) / area.height) * 100
    updateLogo(dragRef.current.index, {
      x: Math.max(0, Math.min(90, Number(x.toFixed(2)))),
      y: Math.max(0, Math.min(88, Number(y.toFixed(2)))),
    })
  }

  function nudgeLogo(event: KeyboardEvent<HTMLLIElement>, index: number) {
    if (!editorOpen || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return
    event.preventDefault()
    const amount = event.shiftKey ? 1 : 0.25
    const current = logoConfig[index]
    updateLogo(index, {
      x: Math.max(0, Math.min(90, current.x + (event.key === 'ArrowLeft' ? -amount : event.key === 'ArrowRight' ? amount : 0))),
      y: Math.max(0, Math.min(88, current.y + (event.key === 'ArrowUp' ? -amount : event.key === 'ArrowDown' ? amount : 0))),
    })
  }

  function exportLogoConfig() {
    const blob = new Blob([JSON.stringify(logoConfig, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'designsworklife-logo-layout.json'
    anchor.click()
    URL.revokeObjectURL(url)
  }

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
                Join marketers and creative leaders building <strong>clearer, stronger brands</strong>
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
            Do You Represent a <span>Creative Agency?</span>
          </h3>
          <Link className="btn-skew prefooter-agency-btn" to="/submit-agency">
            <span className="btn-skew-inner">
              Submit Your Agency <span aria-hidden="true">›</span>
            </span>
          </Link>
        </div>

        <div
          className={`prefooter-cloud${editorOpen ? ' is-editing' : ''}`}
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}prefooter/representation-bg.webp)`,
          }}
        >
          <ul className="prefooter-logos" ref={logoAreaRef}>
            {partnerLogos.map((logo, i) => (
              <li
                key={logo.name}
                className={`prefooter-logo prefooter-logo-slot-${i + 1} prefooter-float-${(i % 4) + 1}${selectedLogo === i && editorOpen ? ' is-selected' : ''}`}
                style={{
                  left: `${logoConfig[i].x}%`,
                  top: `${logoConfig[i].y}%`,
                  right: 'auto',
                  bottom: 'auto',
                  '--logo-scale': logoConfig[i].scale,
                  '--float-x': `${(i % 2 ? -1 : 1) * logoConfig[i].amplitude * 0.55}px`,
                  '--float-y': `${(i % 3 ? -1 : 1) * logoConfig[i].amplitude}px`,
                  animationDuration: `${logoConfig[i].duration}s`,
                  animationDelay: `${-(i + 1) * 0.61}s`,
                } as CSSProperties}
                tabIndex={editorOpen ? 0 : -1}
                aria-label={editorOpen ? `Edit ${logo.name} position` : undefined}
                onPointerDown={(event) => beginLogoDrag(event, i)}
                onPointerMove={moveLogo}
                onPointerUp={() => { dragRef.current = null }}
                onKeyDown={(event) => nudgeLogo(event, i)}
              >
                <Link
                  to={logo.to}
                  className="prefooter-logo-mark"
                  aria-label={logo.name}
                  onClick={(event) => {
                    if (editorOpen) {
                      event.preventDefault()
                      setSelectedLogo(i)
                    }
                  }}
                >
                  {logo.mark}
                </Link>
              </li>
            ))}
          </ul>
          {editorOpen && (
            <aside className="logo-editor" aria-label="Floating logo editor">
              <div className="logo-editor-head">
                <div>
                  <strong>Logo 编辑模式</strong>
                  <span>{partnerLogos[selectedLogo].name}</span>
                </div>
                <button type="button" onClick={() => setEditorOpen(false)} aria-label="Close logo editor">×</button>
              </div>
              {([
                ['x', '横向位置', 0, 90, 0.25],
                ['y', '纵向位置', 0, 88, 0.25],
                ['scale', 'Logo 大小', 0.6, 1.6, 0.02],
                ['amplitude', '漂浮幅度', 0, 18, 1],
                ['duration', '漂浮速度', 4, 16, 0.2],
              ] as const).map(([key, label, min, max, step]) => (
                <label className="logo-editor-control" key={key}>
                  <span>{label}<output>{logoConfig[selectedLogo][key]}</output></span>
                  <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={logoConfig[selectedLogo][key]}
                    onChange={(event) => updateLogo(selectedLogo, { [key]: Number(event.target.value) })}
                  />
                </label>
              ))}
              <p>直接拖动 Logo；方向键精调，Shift + 方向键快速移动。</p>
              <div className="logo-editor-actions">
                <button type="button" onClick={exportLogoConfig}>导出配置</button>
                <button type="button" onClick={() => setLogoConfig(defaultLogoConfig.map((item) => ({ ...item })))}>恢复默认</button>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  )
}
