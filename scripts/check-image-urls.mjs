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

const urls = new Set()
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8')
  for (const m of t.matchAll(re)) urls.add(m[0])
}

const list = [...urls]
console.log('checking', list.length, 'urls')

const byHash = new Map()
const bad = []

async function check(url) {
  try {
    const res = await fetch(url, { redirect: 'follow' })
    if (!res.ok) {
      bad.push([url, res.status])
      return
    }
    const buf = Buffer.from(await res.arrayBuffer())
    const hash = crypto.createHash('sha1').update(buf).digest('hex')
    if (!byHash.has(hash)) byHash.set(hash, [])
    byHash.get(hash).push(url)
  } catch (e) {
    bad.push([url, e.message])
  }
}

const chunk = 8
for (let i = 0; i < list.length; i += chunk) {
  await Promise.all(list.slice(i, i + chunk).map(check))
  process.stdout.write('.')
}
console.log('')

console.log('\nBROKEN (' + bad.length + '):')
for (const [u, s] of bad) console.log(' ', s, u)

const dupContent = [...byHash.values()].filter((v) => v.length > 1)
console.log('\nSAME-IMAGE GROUPS (' + dupContent.length + '):')
for (const group of dupContent) {
  console.log(' group of', group.length)
  for (const u of group) console.log('   ', u)
}

fs.writeFileSync(
  'scripts/.image-report.json',
  JSON.stringify({ bad, dupContent }, null, 2),
)
console.log('\nreport written')
