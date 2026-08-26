import fs from 'node:fs'

const files = [
  'src/content/articles.ts',
  'src/content/extraArticles.ts',
  'src/content/moreArticles.ts',
]

const phraseMap = [
  ['According to DesignsWorkLife', 'According to our editorial team'],
  ['DesignsWorkLife analysis', 'Our analysis'],
  ['game-changing', 'high-impact'],
  ['cutting-edge', 'modern'],
  ['in order to', 'to'],
]

for (const f of files) {
  let t = fs.readFileSync(f, 'utf8')
  for (const [a, b] of phraseMap) t = t.split(a).join(b)
  fs.writeFileSync(f, t)
  console.log('phrased', f)
}
console.log('done')
