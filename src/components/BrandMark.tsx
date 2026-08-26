import brandLogo from '../assets/brand-logo.png'

type BrandMarkProps = {
  className?: string
  size?: number
}

/** Site brand mark — keeps native logo aspect ratio (174×148). */
export function BrandMark({ className = '', size = 28 }: BrandMarkProps) {
  const height = size
  const width = Math.round(size * (174 / 148))
  return (
    <img
      className={`brand-mark ${className}`.trim()}
      src={brandLogo}
      alt=""
      width={width}
      height={height}
      decoding="async"
      draggable={false}
    />
  )
}
