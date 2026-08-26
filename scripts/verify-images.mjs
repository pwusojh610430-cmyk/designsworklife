import fs from 'node:fs'

const files = [
  'src/data.ts',
  'src/content/articles.ts',
  'src/content/extraArticles.ts',
  'src/content/moreArticles.ts',
]

const re =
  /https:\/\/(?:cdn\.pixabay\.com\/photo\/[^'"\s]+|images\.unsplash\.com\/photo-[^'"\s]+)/g

const counts = new Map()
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8')
  for (const m of t.matchAll(re)) {
    counts.set(m[0], (counts.get(m[0]) || 0) + 1)
  }
}
const dups = [...counts].filter(([, c]) => c > 1)
console.log('unique', counts.size, 'dups', dups.length)
if (dups.length) console.log(dups.slice(0, 5))

const heroes = []
for (const f of files.slice(1)) {
  const t = fs.readFileSync(f, 'utf8')
  for (const m of t.matchAll(/hero:\s*'([^']+)'/g)) heroes.push(m[1])
}
console.log('heroes', heroes.length, 'unique heroes', new Set(heroes).size)
