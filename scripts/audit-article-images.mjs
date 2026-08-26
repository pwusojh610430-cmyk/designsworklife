import fs from 'node:fs'

const files = [
  'src/content/articles.ts',
  'src/content/extraArticles.ts',
  'src/content/moreArticles.ts',
]

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8')
  // split on slug boundaries
  const chunks = text.split(/\n  \{\n    slug: /).slice(1)
  console.log('\n=============== ' + file + ' ===============')
  for (const chunk of chunks) {
    const slug = chunk.match(/^'([^']+)'/)?.[1] ?? '?'
    const title = chunk.match(/title: (?:'([^']*)'|"([^"]*)")/)
    const heroAlt = chunk.match(/heroAlt: (?:'([^']*)'|"([^"]*)")/)
    const hero = chunk.match(/hero: '([^']+)'/)
    console.log('\n--- ' + slug)
    console.log('  TITLE : ' + (title?.[1] ?? title?.[2] ?? '?'))
    console.log('  HERO  : ' + (heroAlt?.[1] ?? heroAlt?.[2] ?? '?'))
    console.log('        > ' + (hero?.[1] ?? '?'))
    for (const m of chunk.matchAll(/type: 'image',\s*\n\s*src: '([^']+)',\s*\n\s*alt: (?:'([^']*)'|"([^"]*)")/g)) {
      console.log('  IMG   : ' + (m[2] ?? m[3]))
      console.log('        > ' + m[1])
    }
  }
}
