import type { NewsArticle } from './articles'

/** Extra topic coverage — Pixabay images only */
export const moreNewsArticles: NewsArticle[] = [
  {
    slug: 'nike-running-club-city-edition',
    title: 'Nike Transforms City Running Clubs Into a Local Media Network',
    excerpt:
      'Local run clubs become owned distribution: product drops, coaching content, and retail nights without buying more social reach.',
    read: '5 min read',
    ago: '6 hours ago',
    published: 'Aug 26, 2026',
    author: 'Ru Reid',
    authorBio: 'Ru covers consumer tech brands and product-led marketing.',
    category: 'Branding',
    topics: ['branding', 'marketing', 'creative'],
    hero: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Runner on an open road at sunrise',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Nike’s latest city-edition running push is less about a colorway and more about a channel. Local run clubs get early product, coach-led sessions, and night events inside Nike stores — turning community calendars into media inventory the brand already owns.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=1280&q=80',
        alt: 'Team huddle representing club culture',
        caption: 'Clubs are distribution with sweat equity. Image: Pixabay',
      },
      {
        type: 'h2',
        text: 'Why owned community beats rented attention',
      },
      {
        type: 'p',
        text: 'Paid social CPMs keep rising while feed quality falls. A Tuesday night group run cannot be skipped by an algorithm. Nike is treating clubs as both product labs and loyalty engines: feedback loops are faster, and the content looks real because it is.',
      },
      {
        type: 'ul',
        items: [
          'Map community rituals before inventing campaigns.',
          'Give clubs exclusive SKUs so attendance has a product reason.',
          'Measure store nights and repeat runs, not vanity video views alone.',
        ],
      },
    ],
    keyFindings: [
      'Nike is packaging city run clubs as an owned media network.',
      'Product exclusives and store events turn community into retail traffic.',
      'Physical rituals resist algorithm volatility better than paid feed ads.',
    ],
    ourTake:
      'The clever move is not another influencer mile. It is realizing the brand already had a distribution list — it just met on Tuesday evenings.',
    agencyCta: { label: 'Find branding agencies', to: '/agency/logo-branding' },
  },
  {
    slug: 'spotify-wrapped-midyear-brand-play',
    title: 'Spotify Trials a Mid-Year Wrapped to Hold Onto Cultural Ownership',
    excerpt:
      'Annual Wrapped made Spotify a December verb. A mid-year version asks whether nostalgia can ship twice without feeling like spam.',
    read: '4 min read',
    ago: '8 hours ago',
    published: 'Aug 26, 2026',
    author: 'Coral Cripps',
    authorBio: 'Coral writes about advertising creative systems and brand IP strategy.',
    category: 'Advertising',
    topics: ['advertising', 'creative', 'tech'],
    hero: 'https://images.unsplash.com/photo-1626785774573-4b7993143465?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'People enjoying music together',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Wrapped worked because it was rare. Spotify’s mid-year experiment risks turning a holiday into a newsletter. The bet: cultural ownership needs more than one peak, and summer listening data tells a different story than December charts.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1609921212029-bb5a28e410df?auto=format&fit=crop&w=1280&q=80',
        alt: 'Starry sky suggesting personal music universes',
        caption: 'Personalization theater still needs scarcity. Image: Pixabay',
      },
      {
        type: 'p',
        text: 'Creatively, the mid-year cut is shorter, more shareable, and skewed toward “songs that got you through heatwaves” rather than year-defining identity. Advertisers get a second inventory window; users get another reason to open the app when festival season ends.',
      },
      {
        type: 'ul',
        items: [
          'Protect annual moments with different narrative jobs for mid-year drops.',
          'Use seasonal metaphors so the second release does not copy December.',
          'Give advertisers distinct formats, not a recycled Wrapped template.',
        ],
      },
    ],
    keyFindings: [
      'Spotify is testing whether Wrapped equity can extend beyond December.',
      'Mid-year creative is shorter and season-specific to avoid fatigue.',
      'A second cultural peak creates another brand and ad inventory moment.',
    ],
    ourTake:
      'Wrapped became magic by being once a year. Shipping it twice only works if the second chapter feels like summer camp — not a rerun of New Year’s Eve.',
    agencyCta: { label: 'Browse advertising agencies', to: '/agency/ad-agencies' },
  },
  {
    slug: 'figma-ai-design-system-guardrails',
    title: 'Figma AI Features Push Design Systems to Add Stronger Guardrails',
    excerpt:
      'As generative tools draft components faster, mature teams invest in tokens, naming, and review gates — not in deleting AI from the toolbar.',
    read: '5 min read',
    ago: '9 hours ago',
    published: 'Aug 26, 2026',
    author: 'Katherine Maclang',
    authorBio: 'Katherine reports on retail partnerships and loyalty programs; also covers design tooling.',
    category: 'Design',
    topics: ['design', 'tech', 'agencies'],
    hero: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Code on screen representing design-system tooling',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'AI inside Figma does not kill design systems — it exposes weak ones. Teams with sloppy tokens and inconsistent naming generate beautiful messes at 10× speed. The response from mature product orgs is predictable: tighter libraries, clearer ownership, and human review before anything hits production.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1611162617474-5b21e11e55d0?auto=format&fit=crop&w=1280&q=80',
        alt: 'Laptop on a desk for product design work',
        caption: 'Speed without systems just ships inconsistency faster. Image: Pixabay',
      },
      {
        type: 'h2',
        text: 'What agencies should sell now',
      },
      {
        type: 'p',
        text: 'Clients still ask for “AI design.” Smart agencies sell governance: component audits, token migrations, and AI-assisted exploration that never bypasses brand rules. The deliverable is confidence, not a folder of novelty screens.',
      },
      {
        type: 'ul',
        items: [
          'Audit libraries before enabling generative features widely.',
          'Assign owners for tokens the way engineering owns packages.',
          'Document AI usage in handoff notes — clients will ask.',
        ],
      },
    ],
    keyFindings: [
      'AI tooling amplifies design-system quality — good or bad.',
      'Product teams are investing in guardrails rather than bans.',
      'Agencies can monetize governance and system cleanup alongside creative.',
    ],
    ourTake:
      'The future is not “AI replaced designers.” It is “AI made weak systems expensive.” Fix the system, then turn the generators on.',
    agencyCta: { label: 'Find UI/UX agencies', to: '/agency/ui-ux-design' },
  },
  {
    slug: 'patagonia-repair-tour-storytelling',
    title: 'Patagonia Repair Tours Turn Sustainability Into a Road Show',
    excerpt:
      'Instead of another impact PDF, Patagonia puts technicians on the road — turning mending into brand theater customers can watch.',
    read: '4 min read',
    ago: '10 hours ago',
    published: 'Aug 25, 2026',
    author: 'Roberto Orosa',
    authorBio: 'Roberto covers brand launches and QSR marketing; also follows outdoor retail.',
    category: 'Creative',
    topics: ['creative', 'branding', 'marketing'],
    hero: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
    heroAlt: 'Ocean landscape aligning with outdoor brand values',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Patagonia’s repair tours are logistics dressed as storytelling. Technicians travel, mend gear in public, and collect content that no studio shoot can fake. The message is consistency: if the brand sells durability, it should perform durability on the sidewalk.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fdf1?auto=format&fit=crop&w=1280&q=80',
        alt: 'People gathered in a collaborative setting',
        caption: 'Public repair becomes a community event, not a warranty FAQ. Image: Pixabay',
      },
      {
        type: 'p',
        text: 'For marketers chasing “purpose,” the lesson is operational. Values without a service design feel like ads. Patagonia’s tour budget is also a retention budget — repaired jackets stay in the brand universe longer.',
      },
    ],
    keyFindings: [
      'Repair tours turn sustainability claims into watchable proof.',
      'Service design and brand storytelling are the same investment here.',
      'Purpose marketing works when operations can be filmed honestly.',
    ],
    ourTake:
      'Anyone can write a climate manifesto. Fewer brands will put a sewing machine on Main Street and mean it.',
    agencyCta: { label: 'Explore creative agencies', to: '/agency/creative-agencies' },
  },
  {
    slug: 'shopify-sidekick-merchant-copilot',
    title: 'Shopify Sidekick Nudges Merchants Toward Copilot-Style Commerce',
    excerpt:
      'AI assistants inside admin dashboards change what “marketing agency” means for mid-market eCommerce brands.',
    read: '5 min read',
    ago: '11 hours ago',
    published: 'Aug 25, 2026',
    author: 'Coral Cripps',
    authorBio: 'Coral writes about advertising creative systems and brand IP strategy.',
    category: 'eCommerce',
    topics: ['ecommerce', 'tech', 'marketing', 'business'],
    hero: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Product still life suggesting commerce merchandising',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Shopify’s Sidekick-style assistants draft product descriptions, suggest promotions, and summarize store health. For merchants, that compresses tasks that used to justify retainers. For agencies, it raises the floor: basic copy and dashboard babysitting stop being a moat.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=1280&q=80',
        alt: 'Abstract AI visualization',
        caption: 'Copilot commerce automates chores, not brand strategy. Image: Pixabay',
      },
      {
        type: 'h2',
        text: 'Where agencies still win',
      },
      {
        type: 'p',
        text: 'Differentiation moves upstream: positioning, creative systems, lifecycle architecture, and experimentation programs Sidekick cannot invent from a prompt. Agencies that resell what the platform already ships will feel the squeeze first.',
      },
      {
        type: 'ul',
        items: [
          'Productize strategy and experimentation, not admin busywork.',
          'Train teams to audit AI output for brand voice and SEO quality.',
          'Build offers around migration, CRO, and creative systems.',
        ],
      },
    ],
    keyFindings: [
      'In-dashboard AI reduces demand for basic merchant marketing chores.',
      'Agency value shifts to strategy, systems, and experimentation.',
      'eCommerce brands will expect AI literacy as table stakes.',
    ],
    ourTake:
      'If your retainer is “we write product titles,” a copilot just took the meeting. If your retainer is “we grow contribution margin,” you just got a new intern.',
    agencyCta: { label: 'Find eCommerce agencies', to: '/agency/ecommerce' },
  },
  {
    slug: 'agency-pitch-decks-get-shorter',
    title: 'Why Leading Agencies Are Cutting Pitch Decks Nearly in Half',
    excerpt:
      'Procurement still wants process, but buyers increasingly reward clarity, case proof, and a point of view — not 80 slides of capability wallpaper.',
    read: '4 min read',
    ago: '13 hours ago',
    published: 'Aug 25, 2026',
    author: 'Katherine Maclang',
    authorBio: 'Katherine reports on partnerships, loyalty, and agency go-to-market trends.',
    category: 'Agencies',
    topics: ['agencies', 'business', 'marketing'],
    hero: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Business meeting around a table',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Pitch culture is compressing. Brand-side teams have less patience for capability theater. Winning shops lead with a sharp diagnosis, two relevant case studies, and a working session — then leave the org chart in the appendix.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1280&q=80',
        alt: 'Team collaborating closely',
        caption: 'Buyers remember the conversation, not slide 47. Image: Pixabay',
      },
      {
        type: 'p',
        text: 'Directories and marketplaces amplify the shift: brands arrive with shortlists already formed. The pitch is no longer an introduction — it is a differentiation test. Long decks signal insecurity more than thoroughness.',
      },
    ],
    keyFindings: [
      'Agency pitches are getting shorter and more diagnostic.',
      'Case proof and working sessions outperform capability laundry lists.',
      'Marketplace shortlists raise the bar for differentiation in the room.',
    ],
    ourTake:
      'If you need 80 slides to explain why you are the partner, you might not be. Say the hard thing early.',
    agencyCta: { label: 'Browse the agency directory', to: '/agency' },
  },
  {
    slug: 'interview-jkr-rebrands-that-stick',
    title: 'Interview: What Makes a Rebrand Stick Once the Launch Party Ends',
    excerpt:
      'A creative director walkthrough on systems, franchise training, and why the hardest week is month six — not launch week.',
    read: '7 min read',
    ago: '15 hours ago',
    published: 'Aug 25, 2026',
    author: 'Teodor Jefremovski',
    authorBio: 'Managing editor covering expert interviews and long-form brand strategy.',
    category: 'Interviews',
    topics: ['interviews', 'branding', 'creative', 'agencies'],
    hero: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Modern architecture symbolizing structural brand systems',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Launch week gets the champagne. Month six decides whether the rebrand was theater. In this interview, we ask what separates identity systems that survive franchise training, packaging suppliers, and tired social managers from those that quietly revert to old habits.',
      },
      {
        type: 'quote',
        text: 'If the store team cannot apply the system without calling the agency, you did not finish the work.',
        cite: 'Creative director, identity systems',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1280&q=80',
        alt: 'Books representing brand guidelines and documentation',
        caption: 'Guidelines are only useful if operators actually open them. Image: Pixabay',
      },
      {
        type: 'h2',
        text: 'Three habits that keep systems alive',
      },
      {
        type: 'ul',
        items: [
          'Ship templates, not just posters of the logo.',
          'Train the people who make weekly assets, not only the CMO.',
          'Budget a governance quarter after launch — or watch drift win.',
        ],
      },
      {
        type: 'p',
        text: 'The conversation also covers when not to rebrand: cultural equity that still converts, legal constraints, and markets where familiarity is the product.',
      },
    ],
    keyFindings: [
      'Rebrand success is measured in operational adoption, not launch coverage.',
      'Templates and training matter more than manifesto films.',
      'Post-launch governance prevents silent reversion to old assets.',
    ],
    ourTake:
      'A rebrand is a change-management project wearing a beautiful coat. Dress it like design, staff it like operations.',
    agencyCta: { label: 'Meet branding agencies', to: '/agency/logo-branding' },
  },
  {
    slug: 'podcast-marketplace-leads-vs-inbound',
    title: 'Podcast: Marketplace Leads vs Inbound — What Agencies Should Prioritize',
    excerpt:
      'A 28-minute conversation on bid floors, sales capacity, and when directory sponsorship beats content SEO.',
    read: '6 min read',
    ago: '18 hours ago',
    published: 'Aug 24, 2026',
    author: 'Nikola Djuric',
    authorBio: 'Marketing & Sales Director covering marketplace dynamics and agency growth.',
    category: 'Podcast',
    topics: ['podcast', 'agencies', 'business', 'marketing'],
    hero: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Professional recording or speaking context',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'This episode breaks down when marketplace bids are cheaper than content engines — and when they become an expensive distraction. Guests compare close rates, sales bandwidth, and category competition across web design, SEO, and software development.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1280&q=80',
        alt: 'Team discussing growth strategy',
        caption: 'Lead quality only matters if your sales team can absorb it. Image: Pixabay',
      },
      {
        type: 'h2',
        text: 'Episode takeaways',
      },
      {
        type: 'ul',
        items: [
          'Do not buy marketplace access before you have a qualifying script.',
          'Inbound compounds; marketplace spikes — budget for both roles.',
          'Track cost per qualified intro call, not cost per lead form.',
        ],
      },
      {
        type: 'p',
        text: 'Listen for the segment on government and education RFPs — a quieter inventory that rewards ops maturity more than creative swagger.',
      },
    ],
    keyFindings: [
      'Marketplace and inbound serve different pipeline shapes.',
      'Sales capacity is the hidden constraint on paid lead products.',
      'Ops-ready agencies extract more value from RFP-style inventory.',
    ],
    ourTake:
      'Buying leads without a sales machine is like buying traffic without a landing page. Fix the receiving end first.',
    agencyCta: { label: 'See Marketplace membership', to: '/marketplace/membership' },
  },
  {
    slug: 'target-owned-media-retail-networks',
    title: 'Target Grows Retail Media Without Turning Stores Into Billboard Walls',
    excerpt:
      'Retail media revenue is easy to chase and easy to ruin. Target’s latest kit tries to keep the aisle shoppable while brands buy attention.',
    read: '5 min read',
    ago: '22 hours ago',
    published: 'Aug 24, 2026',
    author: 'Ru Reid',
    authorBio: 'Ru covers consumer tech brands and product-led marketing.',
    category: 'Marketing',
    topics: ['marketing', 'advertising', 'business', 'ecommerce'],
    hero: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Clean retail-like interior space',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Retail media networks print money until they feel like airports. Target’s expansion emphasizes cleaner placements, better measurement hooks, and creative standards that protect the store experience — because a shopper who cannot find detergent will not forgive a beautiful ad unit.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1280&q=80',
        alt: 'Packaged consumer goods style meal context',
        caption: 'Attention is worthless if the shelf journey breaks. Image: Pixabay',
      },
      {
        type: 'p',
        text: 'Brand marketers should treat retail media like a channel with UX constraints, not a leftover TV budget. Creative that ignores wayfinding will get clipped by the retailer — or worse, by customers.',
      },
    ],
    keyFindings: [
      'Retail media growth is colliding with in-store experience standards.',
      'Measurement and creative guidelines are becoming competitive advantages for retailers.',
      'Brands need UX-aware creative for aisle and app placements.',
    ],
    ourTake:
      'The best retail media ad is the one that still lets someone buy milk. Everything else is just rent.',
    agencyCta: { label: 'Find media buying agencies', to: '/agency/media-buying-agencies' },
  },
  {
    slug: 'notion-enterprise-design-ops',
    title: "Notion's Enterprise Push Reads More Like a Design Ops Story",
    excerpt:
      'Templates, permissions, and wiki hygiene — not another feature launch — decide whether knowledge tools survive company scale.',
    read: '4 min read',
    ago: '1 day ago',
    published: 'Aug 24, 2026',
    author: 'Katherine Maclang',
    authorBio: 'Katherine reports on tooling, loyalty, and go-to-market systems.',
    category: 'Tech',
    topics: ['tech', 'design', 'business'],
    hero: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Laptop workspace for knowledge work',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Notion’s enterprise narrative sounds like security and admin controls. Underneath, it is design ops for information architecture: who can create pages, which templates are canonical, and how search stays useful after year two of chaos.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1280&q=80',
        alt: 'Structured digital work on a screen',
        caption: 'Information architecture is a product feature at enterprise scale. Image: Pixabay',
      },
      {
        type: 'p',
        text: 'Agencies advising digital transformation should price the governance work. Migrating docs is easy. Preventing a second junk drawer is the retainer.',
      },
    ],
    keyFindings: [
      'Enterprise knowledge tools win on governance, not novelty features.',
      'Design ops principles apply to wikis as much as design systems.',
      'Agencies can sell IA and template systems alongside tooling migrations.',
    ],
    ourTake:
      'Every company wants a second brain. Few want a librarian. Be the librarian.',
    agencyCta: { label: 'Find digital strategy agencies', to: '/agency/digital-strategy-agencies' },
  },
  {
    slug: 'canva-print-renaissance-smb',
    title: "Canva's Print Push Shows SMBs That Physical Still Converts",
    excerpt:
      'Menus, packaging inserts, and event signage are back in the funnel — and design platforms are chasing that spend.',
    read: '4 min read',
    ago: '1 day ago',
    published: 'Aug 23, 2026',
    author: 'Roberto Orosa',
    authorBio: 'Roberto covers brand launches and retail marketing.',
    category: 'Design',
    topics: ['design', 'creative', 'business', 'ecommerce'],
    hero: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Printed materials and books on a table',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Canva’s expanded print commerce is a bet that SMBs never fully left physical media — they just lacked an easy path from template to doorstep. Menus, inserts, and yard signs still close local loops that Instagram cannot.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1280&q=80',
        alt: 'Designed product objects',
        caption: 'Print is UX for the real world. Image: Pixabay',
      },
      {
        type: 'p',
        text: 'For print and packaging agencies, the threat is real on commodity jobs. The opportunity is craft, materials, and brand systems Canva users eventually outgrow.',
      },
    ],
    keyFindings: [
      'Design platforms are capturing SMB print budgets with convenience.',
      'Physical media remains part of local conversion funnels.',
      'Specialty agencies should climb toward materials and systems work.',
    ],
    ourTake:
      'Templates ate the flyer. They will not eat the brand that needs paper to feel expensive.',
    agencyCta: { label: 'Browse print design companies', to: '/agency/print-design-companies' },
  },
  {
    slug: 'openai-brand-safety-playbook',
    title: 'Brand Safety Playbooks Get a Fresh 2026 Rewrite for the OpenAI Era',
    excerpt:
      'Hallucinations, deepfakes, and scraped style concerns push brand safety beyond keyword blocklists into model governance.',
    read: '5 min read',
    ago: '2 days ago',
    published: 'Aug 23, 2026',
    author: 'Coral Cripps',
    authorBio: 'Coral writes about advertising creative systems and brand IP strategy.',
    category: 'Business',
    topics: ['business', 'tech', 'advertising', 'agencies'],
    hero: 'https://images.unsplash.com/photo-1456513080800-b6a7b1e3e9d0?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'AI abstract visual for brand safety governance',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Brand safety used to mean “don’t run next to bad news.” Generative media adds new failure modes: off-brand voice, invented claims, and lookalike creatives. 2026 playbooks add model allowlists, human review thresholds, and disclosure rules for synthetic talent.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1280&q=80',
        alt: 'Vast night sky suggesting uncertain new media frontiers',
        caption: 'New media risks need new review rituals. Image: Pixabay',
      },
      {
        type: 'ul',
        items: [
          'Define which models are approved for client work.',
          'Require claim verification on AI-assisted copy.',
          'Treat synthetic faces as talent with consent paperwork.',
        ],
      },
    ],
    keyFindings: [
      'Brand safety now includes generative-model governance.',
      'Agencies need disclosure and verification workflows.',
      'Synthetic talent creates legal and trust exposure.',
    ],
    ourTake:
      'Blocklists were for the banner era. This era needs a chain of custody for ideas.',
    agencyCta: { label: 'Find digital marketing agencies', to: '/agency/digital-marketing' },
  },
  {
    slug: 'airbnb-photo-standards-hosts',
    title: 'Airbnb Tightens Photo Standards and Accidentally Drafts a Design Brief',
    excerpt:
      'Hosting photography rules are becoming a taste curriculum: light, angles, and honesty as conversion features.',
    read: '4 min read',
    ago: '2 days ago',
    published: 'Aug 22, 2026',
    author: 'Ru Reid',
    authorBio: 'Ru covers consumer tech brands and product-led marketing.',
    category: 'Design',
    topics: ['design', 'ecommerce', 'creative'],
    hero: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Bright living room interior suitable for listing photography',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Airbnb’s updated photo guidance is a conversion document disguised as a tip sheet. Wide shots, accurate amenities, and daylight preferences are not aesthetic snobbery — they reduce refunds and increase trust. Marketplaces scale taste by turning it into rules.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1280&q=80',
        alt: 'Travel destination scenery',
        caption: 'Travel decisions start with belief in the picture. Image: Pixabay',
      },
      {
        type: 'p',
        text: 'Agencies working in travel and marketplace categories should study these standards as client education tools. Sometimes the platform already wrote your creative brief.',
      },
    ],
    keyFindings: [
      'Marketplace photo rules encode conversion lessons at scale.',
      'Honest imagery reduces downstream service costs.',
      'Platform standards can double as agency creative briefs.',
    ],
    ourTake:
      'The best design systems in travel might live in help-center articles hosts actually read.',
    agencyCta: { label: 'Find web design companies', to: '/agency/website-design-development' },
  },
  {
    slug: 'duolingo-vs-babbel-brand-voice',
    title: 'Babbel Doubles Down on Adult Seriousness While Duolingo Owns Chaos',
    excerpt:
      'Two language apps, two brand voices — a case study in choosing a lane and refusing to borrow the competitor’s jokes.',
    read: '4 min read',
    ago: '3 days ago',
    published: 'Aug 22, 2026',
    author: 'Roberto Orosa',
    authorBio: 'Roberto covers brand launches and consumer marketing.',
    category: 'Branding',
    topics: ['branding', 'marketing', 'tech'],
    hero: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Owl representing language-learning brand mascots',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Duolingo owns chaotic owl energy. Babbel’s latest work leans into adult seriousness: career mobility, travel confidence, and fewer memes. The strategic point is not which is “better” — it is that both grow by refusing to dilute into the middle.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1280&q=80',
        alt: 'Books for language learning context',
        caption: 'Category leaders often win by sounding unlike each other. Image: Pixabay',
      },
      {
        type: 'p',
        text: 'Brand teams stuck in “friendly but professional” limbo should pick a pole. Distinctiveness compounds; beige does not.',
      },
    ],
    keyFindings: [
      'Language-learning brands are polarizing voice strategies on purpose.',
      'Category growth can support multiple tonal leaders.',
      'Middle-ground brand voices struggle to earn cultural memory.',
    ],
    ourTake:
      'If your brand voice guide could also belong to a bank and a juice cleanse, rewrite it.',
    agencyCta: { label: 'Explore branding agencies', to: '/agency/logo-branding' },
  },
  {
    slug: 'meta-advantage-plus-creative-fatigue',
    title: 'Meta Advantage+ Fatigue Pushes Brands Back Toward Creative Testing',
    excerpt:
      'Automation promised less busywork. Creative teams are rediscovering that machine allocation still needs human variation.',
    read: '5 min read',
    ago: '3 days ago',
    published: 'Aug 21, 2026',
    author: 'Coral Cripps',
    authorBio: 'Coral writes about advertising creative systems and brand IP strategy.',
    category: 'Advertising',
    topics: ['advertising', 'marketing', 'tech'],
    hero: 'https://images.unsplash.com/photo-1500000000000-1787757006349-80?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Person with phone representing social ad creative',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Advantage+ style automation reallocates spend efficiently — until every advertiser feeds it the same three hooks. Brands reporting fatigue are rebuilding creative testing cultures: more concepts, faster kills, clearer learning agendas.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1500000000000-1787757006349-81?auto=format&fit=crop&w=1280&q=80',
        alt: 'Creative team collaborating',
        caption: 'Automation needs a pipeline of difference. Image: Pixabay',
      },
      {
        type: 'ul',
        items: [
          'Separate learning budgets from scaling budgets.',
          'Brief for contrast, not minor color swaps.',
          'Review winners weekly or the algorithm will recycle leftovers.',
        ],
      },
    ],
    keyFindings: [
      'Ad automation increases the cost of creative sameness.',
      'Brands are reinvesting in structured creative testing.',
      'Human variation remains the input machines cannot invent alone.',
    ],
    ourTake:
      'The algorithm is a brilliant media buyer with no taste. Your job is taste at volume.',
    agencyCta: { label: 'Find PPC agencies', to: '/agency/paid-media-pay-per-click' },
  },
]
