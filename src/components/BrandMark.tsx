import { useId, type SVGProps } from 'react'

type BrandMarkProps = {
  className?: string
  size?: number
} & Omit<SVGProps<SVGSVGElement>, 'width' | 'height' | 'viewBox'>

/** Crisp vector brand mark — native aspect 174×148, no raster fringe. */
export function BrandMark({ className = '', size = 28, ...rest }: BrandMarkProps) {
  const height = size
  const width = Math.round(size * (174 / 148))
  const uid = useId().replace(/:/g, '')

  return (
    <svg
      className={`brand-mark ${className}`.trim()}
      width={width}
      height={height}
      viewBox="0 0 174 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <defs>
        <linearGradient
          id={`${uid}-ribbon`}
          x1="70"
          y1="10"
          x2="160"
          y2="140"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#6AD2FF" />
          <stop offset="30%" stopColor="#4E78FF" />
          <stop offset="58%" stopColor="#7B3BFF" />
          <stop offset="80%" stopColor="#C22BFF" />
          <stop offset="100%" stopColor="#E01898" />
        </linearGradient>
        <linearGradient
          id={`${uid}-fold`}
          x1="105"
          y1="105"
          x2="148"
          y2="142"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#C028E0" />
          <stop offset="100%" stopColor="#4A0878" />
        </linearGradient>
      </defs>

      {/* Left squares — D spine */}
      <rect x="28" y="24" width="32" height="32" rx="3.5" fill="#6F6CFF" />
      <rect x="22" y="68" width="16" height="16" rx="2.5" fill="#E03AA8" />
      <rect x="42" y="72" width="28" height="28" rx="3.5" fill="#8B45FF" />

      {/* Ribbon as thick open C/D curve */}
      <path
        d="M86 26c30-2 58 16 60 48 2 28-14 50-44 56"
        stroke={`url(#${uid}-ribbon)`}
        strokeWidth="30"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bottom 3D fold tip */}
      <path
        fill={`url(#${uid}-fold)`}
        d="M92 112c10 6 22 14 30 24 3 4-1 8-5 6-10-6-20-14-30-20-4-2-3-8 5-10z"
      />
    </svg>
  )
}
