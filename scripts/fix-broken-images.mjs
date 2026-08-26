import fs from 'node:fs'
import crypto from 'node:crypto'

const files = [
  'src/data.ts',
  'src/content/articles.ts',
  'src/content/extraArticles.ts',
  'src/content/moreArticles.ts',
  'src/components/ReviewsBanner.tsx',
]

const re =
  /https:\/\/(?:cdn\.pixabay\.com\/photo\/[^'"\s]+|images\.unsplash\.com\/photo-[^'"\s]+)/g

/** Candidate replacements — verified at runtime before use */
const CANDIDATES = [
  'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a',
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12',
  'https://images.unsplash.com/photo-1587440871875-191322ee64b0',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
  'https://images.unsplash.com/photo-1517502884422-41eaead166d4',
  'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
  'https://images.unsplash.com/photo-1542751371-adc38448a05e',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216',
  'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
  'https://images.unsplash.com/photo-1493421419110-74f4e85ba126',
  'https://images.unsplash.com/photo-1502920917128-1aa500764cbd',
  'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
  'https://images.unsplash.com/photo-1526406915894-7bcd65f60845',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
  'https://images.unsplash.com/photo-1542435503-956c469947f6',
  'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6',
  'https://images.unsplash.com/photo-1522199755839-a2bacb67c546',
  'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83',
  'https://images.unsplash.com/photo-1509391366360-2e959784a276',
  'https://images.unsplash.com/photo-1550439062-609e1531270e',
  'https://images.unsplash.com/photo-1553028826-f4804a6dba3b',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86',
  'https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
]

const SUFFIX = '?auto=format&fit=crop&w=1280&q=80'

async function fetchHash(url) {
  try {
    const res = await fetch(url, { redirect: 'follow' })
    if (!res.ok) return { ok: false, status: res.status }
    const buf = Buffer.from(await res.arrayBuffer())
    return { ok: true, hash: crypto.createHash('sha1').update(buf).digest('hex') }
  } catch (e) {
    return { ok: false, status: e.message }
  }
}

// 1) collect current urls
const current = new Set()
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8')
  for (const m of t.matchAll(re)) current.add(m[0])
}

console.log('scanning', current.size, 'urls')

// 2) test them
const good = new Map() // url -> hash
const broken = []
const list = [...current]
for (let i = 0; i < list.length; i += 8) {
  const batch = list.slice(i, i + 8)
  const res = await Promise.all(batch.map(fetchHash))
  batch.forEach((u, k) => {
    if (res[k].ok) good.set(u, res[k].hash) 
    else broken.push(u)
  })
  process.stdout.write('.')
}
console.log('\nbroken:', broken.length)

if (!broken.length) {
  console.log('nothing to fix')
  process.exit(0)
}

// 3) verify candidates, skip ones matching existing content hashes
const usedHashes = new Set(good.values())
const replacements = []
for (const base of CANDIDATES) {
  if (replacements.length >= broken.length) break
  const url = base + SUFFIX
  if (current.has(url)) continue
  const r = await fetchHash(url)
  if (!r.ok) {
    console.log('  candidate dead:', r.status, base)
    continue
  }
  if (usedHashes.has(r.hash)) {
    console.log('  candidate duplicate content, skipped:', base)
    continue
  }
  usedHashes.add(r.hash)
  replacements.push(url)
}

console.log('usable replacements:', replacements.length, '/ needed', broken.length)
if (replacements.length < broken.length) {
  console.error('NOT ENOUGH replacements — aborting')
  process.exit(1)
}

// 4) apply
const map = new Map(broken.map((b, i) => [b, replacements[i]]))
for (const f of files) {
  let t = fs.readFileSync(f, 'utf8')
  for (const [from, to] of map) t = t.split(from).join(to)
  fs.writeFileSync(f, t)
}

console.log('\nreplaced:')
for (const [from, to] of map) console.log(' ', from, '\n   ->', to)
