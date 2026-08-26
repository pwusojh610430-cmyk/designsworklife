import fs from 'fs'
import path from 'path'

const dir = 'public/partners'
const colors = {
  shopify: '#95BF47',
  webflow: '#4353FF',
  figma: '#F24E1E',
  adobe: '#FF0000',
  notion: '#000000',
  slack: '#4A154B',
  hubspot: '#FF7A59',
  squarespace: '#000000',
  canva: '#00C4CC',
  stripe: '#635BFF',
  wordpress: '#21759B',
  framer: '#0055FF',
}

for (const [name, color] of Object.entries(colors)) {
  const file = path.join(dir, `${name}.svg`)
  let svg = fs.readFileSync(file, 'utf8')
  svg = svg.replace(/\sfill="[^"]*"/g, '')
  svg = svg.replace('<svg', `<svg fill="${color}"`)
  fs.writeFileSync(file, svg)
  console.log('colored', name)
}
