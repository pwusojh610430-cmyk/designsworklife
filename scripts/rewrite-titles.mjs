import fs from 'node:fs'

/** [file, oldTitle, newTitle] — meaning preserved, phrasing reworked */
const edits = [
  // ---- articles.ts ----
  [
    'src/content/articles.ts',
    "KFC Brings Superfan IShowSpeed Into Its Post-Rebrand Sauce Push",
    'A Gaming Superfan Becomes the Face of KFC’s New Sauce Line',
  ],
  [
    'src/content/articles.ts',
    'Fanta Retires Borrowed Horror Tropes for Four Homegrown Monsters',
    'Fanta Builds Its Own Halloween Cast After Years of Rented Scares',
  ],
  [
    'src/content/articles.ts',
    "Duolingo Softens the Owl's Sass to Protect a Sick Boy's 301-Day Streak",
    'When a 301-Day Streak Was at Risk, Duolingo Dropped the Attitude',
  ],
  [
    'src/content/articles.ts',
    'Pizza Hut Marks Its Final Week Under Yum Brands With a Name Refresh',
    'A New Name Lands Just as Pizza Hut Exits the Yum Brands Era',
  ],
  [
    'src/content/articles.ts',
    "Dunkin's Year-7 BARK Partnership Adds a Dedicated Drive-Thru for Dogs",
    'Seven Years In, Dunkin and BARK Open a Drive-Thru Lane for Dogs',
  ],
  [
    'src/content/articles.ts',
    'IPSY Opens Its 16-Million Tester Network to Beauty Brand Partners',
    'Inside IPSY’s Plan to Rent Out 16 Million Beauty Testers',
  ],
  [
    'src/content/articles.ts',
    "Starbucks Pairs the PSL Comeback With Martha Stewart for Unicorn Weekend",
    'Martha Stewart Joins the PSL Return for a Unicorn Weekend Stunt',
  ],
  [
    'src/content/articles.ts',
    "Claude Watermarking Puts Real Pressure on AI Disclosure Clauses",
    'AI Disclosure Clauses Get Harder to Ignore Once Watermarks Arrive',
  ],
  [
    'src/content/articles.ts',
    "IKEA Turns Xbox's D-Pad Into a 25th-Anniversary Furniture Capsule",
    'A Console D-Pad Becomes Furniture in IKEA’s Xbox Anniversary Drop',
  ],
  [
    'src/content/articles.ts',
    'How Campari America Uses Live Experiences to Deepen Brand Loyalty',
    'Campari America Turns Tasting Rooms Into Loyalty Engines',
  ],
  [
    'src/content/articles.ts',
    'Why Tiny Bounce Rates Still Hide Infrastructure Problems That Stall B2B Pipelines',
    'A Clean Bounce Rate Can Still Mask the Bugs Killing B2B Pipeline',
  ],
  [
    'src/content/articles.ts',
    'Live Nation Designs New Venues Around Local Music Culture',
    'Local Scenes Shape the Blueprint for Live Nation’s Newest Venues',
  ],
  [
    'src/content/articles.ts',
    'HubSpot Partners Keep Lifecycle Orchestration Without Tool Sprawl',
    'Lifecycle Marketing Without the Tool Pileup: Notes From HubSpot Partners',
  ],
  [
    'src/content/articles.ts',
    'Enterprise Webflow Teams Are Betting Harder on Design Systems',
    'Design Systems Become the Real Investment for Enterprise Webflow Teams',
  ],
  [
    'src/content/articles.ts',
    'Checkout Patterns Brands Still Misread on Stripe',
    'The Checkout Details Brands Keep Getting Backwards on Stripe',
  ],

  // ---- extraArticles.ts ----
  [
    'src/content/extraArticles.ts',
    'Interview: A Pentagram Partner on Why Studio Culture Outlasts Solo Stardom',
    'Interview: A Pentagram Partner Makes the Case Against Solo Stardom',
  ],
  [
    'src/content/extraArticles.ts',
    'Podcast: CMOs Ask If Retail Media Has Become the New TV Buy',
    'Podcast: Is Retail Media Quietly Replacing the TV Budget?',
  ],
  [
    'src/content/extraArticles.ts',
    'Shopify Checkout Extensibility Is Quietly Reshaping DTC Brand Systems',
    'DTC Brand Systems Are Being Rebuilt Around Shopify Checkout Apps',
  ],
  [
    'src/content/extraArticles.ts',
    'Holding Companies Are Folding AI Labs Back Into Client Teams',
    'The Standalone AI Lab Is Disappearing Inside Holding Companies',
  ],
  [
    'src/content/extraArticles.ts',
    'Museums Hire Product Designers to Rebuild How Exhibitions Work',
    'Product Designers Are Quietly Redrawing the Museum Visit',
  ],
  [
    'src/content/extraArticles.ts',
    'Interview: An Independent CD on Leaving the Network Without Losing Ambition',
    'Interview: Going Independent Without Scaling Down the Ambition',
  ],
  [
    'src/content/extraArticles.ts',
    'Podcast Recap: Agency Operators Face Margin Pressure From AI Tooling Costs',
    'Podcast Recap: What AI Subscriptions Are Doing to Agency Margins',
  ],
  [
    'src/content/extraArticles.ts',
    'Luxury Brands Design Refill Systems That Still Feel Premium',
    'Refills Are Coming to Luxury — Without Cheapening the Unboxing',
  ],
  [
    'src/content/extraArticles.ts',
    'Interview: How a 12-Person Media Agency Rejects Performance Theater',
    'Interview: A 12-Person Media Shop That Refuses to Perform Metrics',
  ],
  [
    'src/content/extraArticles.ts',
    'Creator Commerce Hits Storefront Fatigue as Platforms Simplify Selling',
    'Too Many Storefronts: Creator Commerce Runs Into Its Own Sprawl',
  ],
  [
    'src/content/extraArticles.ts',
    'Tourism Boards Hire Brand Strategists the Way Consumer Startups Do',
    'Tourism Boards Are Recruiting Brand Talent Straight From Startups',
  ],
  [
    'src/content/extraArticles.ts',
    'Brand Guidelines Finally Added a Motion Chapter — What Good Looks Like',
    'Motion Finally Earned a Chapter in the Brand Book. Now What?',
  ],
  [
    'src/content/extraArticles.ts',
    'B2B SaaS Sites Trade Feature Grids for Narrative Homepages',
    'The Feature Grid Is Losing Its Place on B2B SaaS Homepages',
  ],
  [
    'src/content/extraArticles.ts',
    'Podcast: New-Business Leads Navigate the Flood of AI-Written RFPs',
    'Podcast: Sorting Real Opportunities From AI-Generated RFPs',
  ],
  [
    'src/content/extraArticles.ts',
    'Why Savvy DTC Brands Quietly Revived Dimensional Mail',
    'Dimensional Mail Made a Comeback While Nobody Was Watching',
  ],

  // ---- moreArticles.ts ----
  [
    'src/content/moreArticles.ts',
    'Nike Transforms City Running Clubs Into a Local Media Network',
    'Nike Treats Its Run Clubs Like Owned Media Channels',
  ],
  [
    'src/content/moreArticles.ts',
    'Spotify Trials a Mid-Year Wrapped to Hold Onto Cultural Ownership',
    'Spotify Wants Wrapped Twice a Year to Keep the Culture Moment',
  ],
  [
    'src/content/moreArticles.ts',
    'Figma AI Features Push Design Systems to Add Stronger Guardrails',
    'Design Systems Need Sharper Rules Now That Figma Ships AI',
  ],
  [
    'src/content/moreArticles.ts',
    'Patagonia Repair Tours Turn Sustainability Into a Road Show',
    'Patagonia Takes Its Repair Bench on Tour',
  ],
  [
    'src/content/moreArticles.ts',
    'Shopify Sidekick Nudges Merchants Toward Copilot-Style Commerce',
    'Merchants Are Learning to Run Stores Alongside Shopify Sidekick',
  ],
  [
    'src/content/moreArticles.ts',
    'Why Leading Agencies Are Cutting Pitch Decks Nearly in Half',
    'The Shrinking Pitch Deck: Why Top Shops Cut the Page Count',
  ],
  [
    'src/content/moreArticles.ts',
    'Interview: What Makes a Rebrand Stick Once the Launch Party Ends',
    'Interview: The Unglamorous Work That Makes a Rebrand Last',
  ],
  [
    'src/content/moreArticles.ts',
    'Podcast: Marketplace Leads vs Inbound — What Agencies Should Prioritize',
    'Podcast: Where Agency Growth Budgets Should Actually Go',
  ],
  [
    'src/content/moreArticles.ts',
    'Target Grows Retail Media Without Turning Stores Into Billboard Walls',
    'Target Expands Retail Media While Keeping Its Aisles Shoppable',
  ],
  [
    'src/content/moreArticles.ts',
    "Notion's Enterprise Push Reads More Like a Design Ops Story",
    'Behind Notion’s Enterprise Play Is a Design Ops Problem',
  ],
  [
    'src/content/moreArticles.ts',
    "Canva's Print Push Shows SMBs That Physical Still Converts",
    'Small Businesses Rediscover Print, and Canva Is Selling the Paper',
  ],
  [
    'src/content/moreArticles.ts',
    'Brand Safety Playbooks Get a Fresh 2026 Rewrite for the OpenAI Era',
    'Brand Safety Rules Are Being Rewritten for Generative Search',
  ],
  [
    'src/content/moreArticles.ts',
    'Airbnb Tightens Photo Standards and Accidentally Drafts a Design Brief',
    'Airbnb’s Stricter Photo Rules Read Like a Design Brief',
  ],
  [
    'src/content/moreArticles.ts',
    'Babbel Doubles Down on Adult Seriousness While Duolingo Owns Chaos',
    'Two Language Apps, Two Personalities: Babbel Goes Grown-Up',
  ],
  [
    'src/content/moreArticles.ts',
    'Meta Advantage+ Fatigue Pushes Brands Back Toward Creative Testing',
    'Automation Plateaued, So Brands Went Back to Testing Creative',
  ],
]

const touched = new Map()
let applied = 0
const missing = []

for (const [file, from, to] of edits) {
  if (!touched.has(file)) touched.set(file, fs.readFileSync(file, 'utf8'))
  const text = touched.get(file)
  if (!text.includes(from)) {
    missing.push([file, from])
    continue
  }
  touched.set(file, text.split(from).join(to))
  applied++
}

for (const [file, text] of touched) fs.writeFileSync(file, text)

console.log('applied', applied, 'of', edits.length)
if (missing.length) {
  console.log('NOT FOUND:')
  for (const [f, t] of missing) console.log(' ', f, '|', t)
}

// sanity: no duplicate titles
const all = []
for (const file of touched.keys()) {
  const t = fs.readFileSync(file, 'utf8')
  for (const m of t.matchAll(/^\s+title: (?:'([^']+)'|"([^"]+)")/gm)) {
    all.push(m[1] ?? m[2])
  }
}
const dupes = all.filter((t, i) => all.indexOf(t) !== i)
console.log('titles', all.length, 'unique', new Set(all).size)
if (dupes.length) console.log('DUPLICATE TITLES:', dupes)
