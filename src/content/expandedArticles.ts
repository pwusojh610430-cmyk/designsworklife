import type { NewsArticle } from './articles'

type Seed = {
  slug: string
  title: string
  excerpt: string
  category: string
  topics: string[]
  image: string
  subject: string
  lesson: string
}

const seeds: Seed[] = [
  { slug: 'lego-retail-play-labs', title: 'LEGO Turns Store Visits Into Small Product Tests', excerpt: 'Playable retail zones give the brand faster feedback while making discovery feel less transactional.', category: 'Brands', topics: ['branding', 'marketing', 'business', 'design'], image: 'https://cdn.pixabay.com/photo/2016/11/22/23/49/bright-1851267_1280.jpg', subject: 'experiential retail', lesson: 'Design the visit around participation, then measure what people choose to touch, build, and share.' },
  { slug: 'adobe-ai-creative-approval', title: 'Adobe Adds Approval Rails to AI-Assisted Creative Work', excerpt: 'New review patterns focus on provenance, permissions, and what teams need before generated work can ship.', category: 'AI', topics: ['tech', 'creative', 'design', 'business'], image: 'https://cdn.pixabay.com/photo/2020/04/08/16/32/keyboard-5017973_1280.jpg', subject: 'AI governance', lesson: 'Creative velocity only matters when reviewers can understand where an asset came from and who approved it.' },
  { slug: 'nike-membership-local-runs', title: 'Nike Makes Local Run Clubs the Front Door to Membership', excerpt: 'Community programming connects product discovery with a recurring habit instead of a one-time campaign.', category: 'Marketing', topics: ['marketing', 'branding', 'creative', 'business'], image: 'https://cdn.pixabay.com/photo/2016/11/19/12/43/feet-1838767_1280.jpg', subject: 'community marketing', lesson: 'Build loyalty around a repeatable behavior, not just access to discounts.' },
  { slug: 'etsy-seller-story-pages', title: 'Etsy Gives Seller Stories More Room at the Point of Purchase', excerpt: 'A revised product page treats maker context as a trust signal rather than optional editorial copy.', category: 'Ecommerce', topics: ['ecommerce', 'design', 'branding', 'marketing'], image: 'https://cdn.pixabay.com/photo/2015/05/31/10/55/manufacture-791202_1280.jpg', subject: 'commerce storytelling', lesson: 'Put the proof of origin close to the buying decision, where it can reduce hesitation.' },
  { slug: 'spotify-podcast-discovery-cards', title: 'Spotify Reworks Podcast Discovery Around Stronger Visual Cues', excerpt: 'New cards separate show identity, episode promise, and listening commitment before the first tap.', category: 'Tech', topics: ['tech', 'design', 'podcast', 'creative'], image: 'https://cdn.pixabay.com/photo/2016/11/29/04/17/audio-1867121_1280.jpg', subject: 'content discovery', lesson: 'Help people estimate value and time before asking them to commit attention.' },
  { slug: 'unilever-refill-label-system', title: 'Unilever Tests a Label System Built for Refill Behavior', excerpt: 'Packaging hierarchy shifts from one-time persuasion toward instructions, durability, and repeat use.', category: 'Design', topics: ['design', 'branding', 'ecommerce', 'business'], image: 'https://cdn.pixabay.com/photo/2017/08/07/19/07/household-2605106_1280.jpg', subject: 'refill packaging', lesson: 'Reusable formats need service information to be as visible as the brand promise.' },
  { slug: 'independent-agencies-shared-production', title: 'Independent Agencies Pool Production Without Merging Their Brands', excerpt: 'A shared operating layer gives small studios more capacity while preserving specialist positioning.', category: 'Agencies', topics: ['agencies', 'business', 'creative', 'marketing'], image: 'https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg', subject: 'agency operations', lesson: 'Centralize repeatable delivery work while keeping client-facing expertise distinct.' },
  { slug: 'creator-contract-usage-rights', title: 'Creator Contracts Get More Specific About Reuse and AI Training', excerpt: 'Brands and talent managers are replacing broad buyouts with clearer windows, channels, and model-training terms.', category: 'Influencers', topics: ['interviews', 'advertising', 'creative', 'business'], image: 'https://cdn.pixabay.com/photo/2016/11/23/00/32/woman-1851464_1280.jpg', subject: 'creator rights', lesson: 'Treat usage as a product with scope and duration, not a vague line at the end of a contract.' },
  { slug: 'walmart-marketplace-brand-pages', title: 'Walmart Gives Marketplace Brands More Control Over Their Story', excerpt: 'Expanded storefront modules aim to improve trust without turning category pages into visual clutter.', category: 'Ecommerce', topics: ['ecommerce', 'branding', 'design', 'marketing'], image: 'https://cdn.pixabay.com/photo/2017/08/05/00/12/people-2581913_1280.jpg', subject: 'marketplace storefronts', lesson: 'Offer enough flexibility for distinction while protecting comparison and navigation patterns.' },
  { slug: 'cannes-short-form-ad-editing', title: 'Short-Form Ads Shift From Cropped TV Spots to Native Story Beats', excerpt: 'Creative teams are planning modular hooks and endings before production instead of cutting them afterward.', category: 'Advertising', topics: ['advertising', 'creative', 'marketing', 'design'], image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_1280.jpg', subject: 'short-form advertising', lesson: 'Design modular scenes at script stage so each platform gets a complete idea, not a shortened leftover.' },
  { slug: 'banking-app-confidence-states', title: 'Banking Apps Add Confidence States Before High-Stakes Actions', excerpt: 'Confirmation screens now explain timing, reversibility, and next steps instead of showing a generic success tick.', category: 'App Design', topics: ['design', 'tech', 'business', 'ecommerce'], image: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg', subject: 'financial UX', lesson: 'After an important action, answer what happened, when it completes, and what the user can still change.' },
  { slug: 'b2b-websites-proof-library', title: 'B2B Websites Replace Logo Walls With Searchable Proof Libraries', excerpt: 'Case studies are being organized by problem, role, and outcome so buyers can find relevant evidence faster.', category: 'Marketing', topics: ['marketing', 'design', 'business', 'agencies'], image: 'https://cdn.pixabay.com/photo/2015/05/15/14/47/computer-768696_1280.jpg', subject: 'B2B proof', lesson: 'Structure evidence around the buyer’s question instead of the vendor’s internal industry list.' },
  { slug: 'museum-audio-guide-personalization', title: 'Museum Audio Guides Let Visitors Choose Depth, Not Just Language', excerpt: 'Layered storytelling supports quick visits, family groups, and expert audiences within one interface.', category: 'Creative', topics: ['creative', 'design', 'tech', 'branding'], image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/art-1867071_1280.jpg', subject: 'adaptive storytelling', lesson: 'Personalization works best when people choose the level of detail without rebuilding the whole journey.' },
  { slug: 'retail-media-creative-standards', title: 'Retail Media Networks Publish Clearer Creative Standards', excerpt: 'Shared templates and measurement definitions are reducing the production tax on multichannel campaigns.', category: 'Advertising', topics: ['advertising', 'ecommerce', 'marketing', 'business'], image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg', subject: 'retail media', lesson: 'Standardize the parts buyers compare while leaving room for each retailer’s strongest context.' },
  { slug: 'design-leadership-interview-roadmaps', title: 'Design Leaders Explain Why Roadmaps Need Fewer Promises', excerpt: 'Experienced product teams are separating committed outcomes from exploratory opportunities.', category: 'Interviews', topics: ['interviews', 'design', 'agencies', 'business'], image: 'https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg', subject: 'design leadership', lesson: 'A credible roadmap makes uncertainty visible and protects room for evidence to change the plan.' },
  { slug: 'saas-pricing-page-scenarios', title: 'SaaS Pricing Pages Move From Feature Tables to Buyer Scenarios', excerpt: 'Packages are explained through team maturity and operating needs instead of increasingly long checklists.', category: 'Business', topics: ['business', 'marketing', 'design', 'tech'], image: 'https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg', subject: 'pricing communication', lesson: 'Help buyers recognize their situation before asking them to decode every feature difference.' },
  { slug: 'brand-podcast-season-planning', title: 'Brand Podcasts Plan Seasons Around One Defensible Question', excerpt: 'Teams are using tighter editorial premises to improve guest selection and make episodes easier to promote.', category: 'Podcast', topics: ['podcast', 'branding', 'marketing', 'business'], image: 'https://cdn.pixabay.com/photo/2017/08/01/00/38/microphone-2562325_1280.jpg', subject: 'editorial podcast strategy', lesson: 'A narrow recurring question creates more useful variation than an unlimited topic list.' },
  { slug: 'motion-systems-product-launches', title: 'Product Launches Turn Motion Rules Into a Shared Brand Asset', excerpt: 'Reusable transitions and timing principles are helping campaign films and interfaces feel related.', category: 'Creative', topics: ['creative', 'design', 'branding', 'tech'], image: 'https://cdn.pixabay.com/photo/2017/08/10/03/47/laptop-2619482_1280.jpg', subject: 'motion identity', lesson: 'Define how the brand moves in reusable principles, not as effects attached to one launch film.' },
]

export const expandedNewsArticles: NewsArticle[] = seeds.map((seed, index) => ({
  slug: seed.slug,
  title: seed.title,
  excerpt: seed.excerpt,
  read: `${4 + (index % 4)} min read`,
  ago: `${22 + index} hours ago`,
  published: `Aug ${25 - (index % 5)}, 2026`,
  author: ['Maya Chen', 'Jon Bell', 'Elena Park', 'Theo Martin'][index % 4],
  authorBio: 'Reports on brand systems, digital products, creative operations, and the business decisions behind them.',
  category: seed.category,
  topics: seed.topics,
  hero: seed.image,
  heroAlt: `${seed.subject} concept supporting the article`,
  heroCredit: 'Pixabay',
  body: [
    { type: 'p', text: `${seed.excerpt} The shift reflects a broader move toward ${seed.subject}: teams are connecting the visible customer experience with the operating choices required to sustain it.` },
    { type: 'h2', text: 'Why This Matters Now' },
    { type: 'p', text: `Attention is expensive and expectations are specific. The strongest response is not simply more content or more features, but a clearer system that helps people understand the value, make a decision, and know what happens next.` },
    { type: 'h2', text: 'How the Approach Works' },
    { type: 'p', text: `${seed.lesson} That means aligning the message, interface, production process, and measurement plan before launch rather than repairing inconsistencies after the campaign is live.` },
    { type: 'h2', text: 'What Teams Can Apply' },
    { type: 'ul', items: ['Start with one observable audience behavior.', 'Give every channel a clear job in the journey.', 'Measure comprehension and confidence alongside conversion.', 'Document the system so future teams can extend it consistently.'] },
  ],
  keyFindings: [seed.lesson, 'Operational consistency is part of the customer experience.', 'Clear systems create more room for useful creative variation.'],
  ourTake: `The important idea is not the tactic alone; it is the connection between ${seed.subject} and repeatable execution. Brands earn more value when the system remains understandable after the launch moment passes.`,
  agencyCta: { label: 'Find a Creative Partner', to: '/agency' },
}))
