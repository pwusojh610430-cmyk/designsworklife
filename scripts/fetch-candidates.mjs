import fs from 'node:fs'
import path from 'node:path'

const ids = process.argv.slice(2)
const out = 'tmp-candidates'
fs.mkdirSync(out, { recursive: true })

for (const id of ids) {
  for (const w of ['1280w', '960w']) {
    const url = `https://cdn.stocksnap.io/img-thumbs/${w}/${id}.jpg`
    const res = await fetch(url)
    if (!res.ok) {
      console.log(`${id} ${w} -> ${res.status}`)
      continue
    }
    const buf = Buffer.from(await res.arrayBuffer())
    if (w === '960w') fs.writeFileSync(path.join(out, `${id}.jpg`), buf)
    console.log(`${id} ${w} -> OK ${(buf.length / 1024).toFixed(0)}kb`)
    if (w === '1280w') break
  }
}
