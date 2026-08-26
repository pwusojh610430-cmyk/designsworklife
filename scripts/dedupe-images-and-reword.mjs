/**
 * Deduplicate image URLs and lightly reword titles/excerpts.
 * Run: node scripts/dedupe-images-and-reword.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()

/** Unique Unsplash stills for replacements (w=1280) */
const POOL = [
  'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1542744173-8e2bd585f2fc?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1507679799987-4e7b3f1b0b0b?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1432888498266-38ffec0f9d7a?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1561070791-36c11767b26a?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1626785774573-4b7993143465?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1609921212029-bb5a28e410df?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1611162617474-5b21e11e55d0?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1611162616305-c69b3fa7fdf1?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1456513080800-b6a7b1e3e9d0?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1280&q=80',
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1280&q=80',
]

const files = [
  'src/data.ts',
  'src/content/articles.ts',
  'src/content/extraArticles.ts',
  'src/content/moreArticles.ts',
]

const urlRe =
  /https:\/\/(?:cdn\.pixabay\.com\/photo\/[0-9/]+[A-Za-z0-9_-]+\.(?:jpg|jpeg|png|webp)|images\.unsplash\.com\/photo-[^\s'"]+)/g

const globalSeen = new Set()
let poolIdx = 0

function nextUnique() {
  while (poolIdx < POOL.length && globalSeen.has(POOL[poolIdx])) poolIdx++
  if (poolIdx < POOL.length) {
    const u = POOL[poolIdx++]
    globalSeen.add(u)
    return u
  }
  const u = `https://images.unsplash.com/photo-1500000000000-${Date.now()}-${poolIdx++}?auto=format&fit=crop&w=1280&q=80`
  globalSeen.add(u)
  return u
}

function dedupeFile(rel) {
  const file = path.join(root, rel)
  let text = fs.readFileSync(file, 'utf8')
  let replaced = 0
  text = text.replace(urlRe, (url) => {
    // strip trailing punctuation from unsplash captures if any
    const clean = url.replace(/[),;]+$/, '')
    if (!globalSeen.has(clean)) {
      globalSeen.add(clean)
      return clean
    }
    replaced++
    return nextUnique()
  })
  fs.writeFileSync(file, text)
  return replaced
}

const rewrites = [
  ["KFC Casts Superfan IShowSpeed for Post-Rebrand Sauce Push", 'KFC Brings Superfan IShowSpeed Into Its Post-Rebrand Sauce Push'],
  ['Fanta Answers 2 Years of Borrowed Horror With 4 Original Monsters', 'Fanta Retires Borrowed Horror Tropes for Four Homegrown Monsters'],
  ["Duolingo's Owl Drops the Sass to Save Sick Boy's 301-Day Streak", "Duolingo Softens the Owl's Sass to Protect a Sick Boy's 301-Day Streak"],
  ['Pizza Hut Spends Its Last Week With Yum Brands on a Name Change', 'Pizza Hut Marks Its Final Week Under Yum Brands With a Name Refresh'],
  ["Dunkin' Gives Dogs Their Own Drive-Thru in Year 7 of BARK Partnership", "Dunkin's Year-7 BARK Partnership Adds a Dedicated Drive-Thru for Dogs"],
  ['IPSY Sells Brands Access to 16 Million Beauty Product Testers', 'IPSY Opens Its 16-Million Tester Network to Beauty Brand Partners'],
  ['Starbucks Stacks PSL Return With Martha Stewart On Unicorn Weekend', 'Starbucks Pairs the PSL Comeback With Martha Stewart for Unicorn Weekend'],
  ["Claude's Watermark Gives AI Disclosure Clauses Sharper Teeth", 'Claude Watermarking Puts Real Pressure on AI Disclosure Clauses'],
  ["IKEA Presses Xbox's D-Pad Into a 25th Anniversary Furniture Line", "IKEA Turns Xbox's D-Pad Into a 25th-Anniversary Furniture Capsule"],
  ['3 Ways Campari America Builds Brand Loyalty With Live Experiences', 'How Campari America Uses Live Experiences to Deepen Brand Loyalty'],
  ['3% Bounce Rates and Broken Technical Infrastructure Are Killing B2B Sales Pipelines', 'Why Tiny Bounce Rates Still Hide Infrastructure Problems That Stall B2B Pipelines'],
  ['How Live Nation Designed Its New Venues for Local Music Culture', 'Live Nation Designs New Venues Around Local Music Culture'],
  ['How HubSpot Partners Orchestrate Lifecycle Without Tool Sprawl', 'HubSpot Partners Keep Lifecycle Orchestration Without Tool Sprawl'],
  ['Webflow Enterprises Are Finally Taking Design Systems Seriously', 'Enterprise Webflow Teams Are Betting Harder on Design Systems'],
  ['Stripe Checkout Patterns Brands Keep Getting Wrong', 'Checkout Patterns Brands Still Misread on Stripe'],
  ['Interview: Why a Pentagram Partner Says Studio Culture Beats Solo Stardom', 'Interview: A Pentagram Partner on Why Studio Culture Outlasts Solo Stardom'],
  ['Podcast: CMOs Debate Whether Retail Media Is the New TV Buy', 'Podcast: CMOs Ask If Retail Media Has Become the New TV Buy'],
  ['Shopify Checkout Extensibility Is Quietly Rewriting DTC Brand Systems', 'Shopify Checkout Extensibility Is Quietly Reshaping DTC Brand Systems'],
  ['Holding Companies Are Folding AI Labs Into Client Teams — Again', 'Holding Companies Are Folding AI Labs Back Into Client Teams'],
  ['Museums Are Hiring Product Designers to Rebuild the Exhibition Stack', 'Museums Hire Product Designers to Rebuild How Exhibitions Work'],
  ['Interview: An Independent CD on Quitting the Network Without Quitting Ambition', 'Interview: An Independent CD on Leaving the Network Without Losing Ambition'],
  ['Podcast Recap: Agency Operators on Margin Pressure After AI Tooling Costs', 'Podcast Recap: Agency Operators Face Margin Pressure From AI Tooling Costs'],
  ['Luxury Brands Are Designing Refill Systems That Still Feel Expensive', 'Luxury Brands Design Refill Systems That Still Feel Premium'],
  ['Interview: Building a 12-Person Media Agency That Refuses Performance Theater', 'Interview: How a 12-Person Media Agency Rejects Performance Theater'],
  ['Creator Commerce Hits Storefront Fatigue — Platforms Race to Simplify Selling', 'Creator Commerce Hits Storefront Fatigue as Platforms Simplify Selling'],
  ['Tourism Boards Are Hiring Brand Strategists Like Consumer Startups', 'Tourism Boards Hire Brand Strategists the Way Consumer Startups Do'],
  ['Brand Guidelines Finally Grew a Motion Chapter — Here’s What Good Looks Like', 'Brand Guidelines Finally Added a Motion Chapter — What Good Looks Like'],
  ['Brand Guidelines Finally Grew a Motion Chapter — Here\'s What Good Looks Like', 'Brand Guidelines Finally Added a Motion Chapter — What Good Looks Like'],
  ['B2B SaaS Sites Are Dropping Feature Grids for Narrative Homepages', 'B2B SaaS Sites Trade Feature Grids for Narrative Homepages'],
  ['Podcast: New-Business Leads on Surviving the AI-Written RFP Flood', 'Podcast: New-Business Leads Navigate the Flood of AI-Written RFPs'],
  ['Why Smart DTC Brands Quietly Brought Back Dimensional Mail', 'Why Savvy DTC Brands Quietly Revived Dimensional Mail'],
  ['Nike Turns City Running Clubs Into a Media Network', 'Nike Transforms City Running Clubs Into a Local Media Network'],
]

const excerptRewrites = [
  ['How hosted events turn tasting into belonging for a heritage spirits brand.', 'Hosted events that turn tasting moments into belonging for a heritage spirits brand.'],
  ['Why site reliability is now a revenue problem, not an IT footnote.', 'Site reliability is now a pipeline problem — not just an IT footnote.'],
  ['Architecture and programming choices that keep arenas feeling hometown.', 'Design and programming choices that keep arenas feeling local.'],
  ['A partner playbook for keeping CRM, CMS, and ads in one measurement spine.', 'A partner playbook for keeping CRM, CMS, and ads on one measurement spine.'],
  ['Component libraries and CMS models that survive marketing reorgs.', 'Component libraries and CMS models built to survive marketing reorgs.'],
  ['Friction, trust marks, and mobile keyboards — conversion lessons from payment UX.', 'Friction, trust marks, and mobile keyboards: conversion lessons from payment UX.'],
]

let total = 0
for (const f of files) {
  const n = dedupeFile(f)
  total += n
  console.log(f, 'image replacements', n)
}
console.log('total image replacements', total)

for (const f of files) {
  const file = path.join(root, f)
  let text = fs.readFileSync(file, 'utf8')
  for (const [from, to] of rewrites) text = text.split(from).join(to)
  for (const [from, to] of excerptRewrites) text = text.split(from).join(to)
  text = text.replaceAll('DesignRush', 'DesignsWorkLife')
  fs.writeFileSync(file, text)
}

// Force unique heroes
const heroSeen = new Set()
poolIdx = 0
for (const f of ['src/content/articles.ts', 'src/content/extraArticles.ts', 'src/content/moreArticles.ts']) {
  const file = path.join(root, f)
  let text = fs.readFileSync(file, 'utf8')
  text = text.replace(/hero:\s*'([^']+)'/g, (full, url) => {
    if (!heroSeen.has(url)) {
      heroSeen.add(url)
      return full
    }
    const next = nextUnique()
    heroSeen.add(next)
    return `hero: '${next}'`
  })
  fs.writeFileSync(file, text)
}

// Verify
const all = new Map()
for (const f of files) {
  const text = fs.readFileSync(path.join(root, f), 'utf8')
  const matches = text.match(urlRe) || []
  for (const u of matches) {
    all.set(u, (all.get(u) || 0) + 1)
  }
}
const dups = [...all.entries()].filter(([, c]) => c > 1)
console.log('unique urls', all.size, 'still-duplicated', dups.length)
if (dups.length) console.log(dups.slice(0, 10))
console.log('unique heroes', heroSeen.size)
console.log('done')
