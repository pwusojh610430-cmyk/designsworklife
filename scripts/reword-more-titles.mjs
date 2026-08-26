import fs from 'node:fs'

const file = 'src/content/moreArticles.ts'
let t = fs.readFileSync(file, 'utf8')
const map = [
  ['Nike Turns City Running Clubs Into a Media Network', 'Nike Transforms City Running Clubs Into a Local Media Network'],
  ['Spotify Tests a Mid-Year Wrapped to Keep Cultural Ownership', 'Spotify Trials a Mid-Year Wrapped to Hold Onto Cultural Ownership'],
  ['Figma’s AI Features Force Design Systems to Grow Guardrails', 'Figma AI Features Push Design Systems to Add Stronger Guardrails'],
  ["Figma's AI Features Force Design Systems to Grow Guardrails", 'Figma AI Features Push Design Systems to Add Stronger Guardrails'],
  ['Patagonia’s Repair Tours Make Sustainability a Stage Show', 'Patagonia Repair Tours Turn Sustainability Into a Road Show'],
  ["Patagonia's Repair Tours Make Sustainability a Stage Show", 'Patagonia Repair Tours Turn Sustainability Into a Road Show'],
  ['Shopify Sidekick Pushes Merchants Toward Copilot Commerce', 'Shopify Sidekick Nudges Merchants Toward Copilot-Style Commerce'],
  ['Why Top Agencies Are Cutting Pitch Decks in Half', 'Why Leading Agencies Are Cutting Pitch Decks Nearly in Half'],
  ['Interview: What Makes a Rebrand Stick After the Launch Party', 'Interview: What Makes a Rebrand Stick Once the Launch Party Ends'],
  ['Podcast: Marketplace Leads vs Inbound — What Agencies Should Buy', 'Podcast: Marketplace Leads vs Inbound — What Agencies Should Prioritize'],
  ['Target Expands Retail Media Without Looking Like a Billboard Store', 'Target Grows Retail Media Without Turning Stores Into Billboard Walls'],
  ["Notion's Enterprise Push Is Really a Design Ops Story", "Notion's Enterprise Push Reads More Like a Design Ops Story"],
  ['Notion’s Enterprise Push Is Really a Design Ops Story', "Notion's Enterprise Push Reads More Like a Design Ops Story"],
  ["Canva's Print Push Reminds SMBs That Physical Still Converts", "Canva's Print Push Shows SMBs That Physical Still Converts"],
  ['Canva’s Print Push Reminds SMBs That Physical Still Converts', "Canva's Print Push Shows SMBs That Physical Still Converts"],
  ['OpenAI-Era Brand Safety Playbooks Get a 2026 Rewrite', 'Brand Safety Playbooks Get a Fresh 2026 Rewrite for the OpenAI Era'],
  ['Airbnb Tightens Photo Standards — and Accidentally Writes a Design Brief', 'Airbnb Tightens Photo Standards and Accidentally Drafts a Design Brief'],
  ['Babbel Bets on Adult Seriousness While Duolingo Owns Chaos', 'Babbel Doubles Down on Adult Seriousness While Duolingo Owns Chaos'],
  ['Meta Advantage+ Fatigue Is Pushing Brands Back to Creative Testing', 'Meta Advantage+ Fatigue Pushes Brands Back Toward Creative Testing'],
]
for (const [a, b] of map) t = t.split(a).join(b)
fs.writeFileSync(file, t)
console.log('ok')
