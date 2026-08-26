import { Resvg } from '@resvg/resvg-js'
import fs from 'fs'

const mark = fs.readFileSync('public/favicon.svg', 'utf8')
  .replace(/<\?xml[^>]*>/, '')
  .replace(/<svg[^>]*>/, '')
  .replace(/<\/svg>\s*$/, '')

function squareSvg(size) {
  const pad = Math.round(size * 0.1)
  const inner = size - pad * 2
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <svg x="${pad}" y="${pad}" width="${inner}" height="${inner}" viewBox="0 0 174 148" preserveAspectRatio="xMidYMid meet">
    ${mark}
  </svg>
</svg>`
}

for (const [size, out] of [
  [32, 'public/favicon-32.png'],
  [48, 'public/favicon-48.png'],
  [180, 'public/apple-touch-icon.png'],
]) {
  const png = new Resvg(squareSvg(size), { background: 'rgba(0,0,0,0)' }).render().asPng()
  fs.writeFileSync(out, png)
  console.log(out, png.length)
}

fs.copyFileSync('public/favicon-32.png', 'public/favicon.png')
