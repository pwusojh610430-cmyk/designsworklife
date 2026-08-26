import type { NewsArticle } from './articles'

/** Second wave of topic fill — Pixabay images only */
export const extraNewsArticles: NewsArticle[] = [
  {
    slug: 'pentagram-partner-exit-studio-culture',
    title: 'Interview: A Pentagram Partner Makes the Case Against Solo Stardom',
    excerpt:
      'A candid conversation on collaboration, client politics, and why the next decade of design will reward institutions over influencers.',
    read: '7 min read',
    ago: '5 hours ago',
    published: 'Aug 26, 2026',
    author: 'Karen Sosoban',
    authorBio: 'Karen leads editorial interviews with agency founders and creative directors.',
    category: 'Interviews',
    topics: ['interviews', 'agencies', 'design', 'creative'],
    hero: 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg',
    heroAlt: 'Designer reviewing work at a desk',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'In an industry obsessed with personal brands, one longtime network partner argues the opposite: the studio that can hold tension — between craft and commerce, ego and ensemble — will outlast the feed.',
      },
      {
        type: 'quote',
        text: 'If your best work only happens when you are in the room, you built a personality, not a practice.',
        cite: 'Anonymous network partner',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1280&q=80',
        alt: 'Creative meeting in progress',
        caption: 'Institutions scale judgment. Personal brands scale applause. Image: Pixabay',
      },
      {
        type: 'h2',
        text: 'What founders should steal from network studios',
      },
      {
        type: 'ul',
        items: [
          'Critique rituals that survive partner turnover.',
          'Client education written into the proposal, not improvised mid-project.',
          'Credit systems that make juniors visible without diluting authorship.',
        ],
      },
    ],
    keyFindings: [
      'Studio culture is being reframed as a competitive moat, not soft HR.',
      'Partners warn that influencer-led shops struggle to transfer craft.',
      'Durable practices invest in critique systems over personal mythology.',
    ],
    ourTake:
      'The industry does not need fewer stars. It needs more rooms where stars still get edited.',
    agencyCta: { label: 'Browse branding agencies', to: '/agency/logo-branding' },
  },
  {
    slug: 'cmo-podcast-retail-media-wars',
    title: 'Podcast: Is Retail Media Quietly Replacing the TV Budget?',
    excerpt:
      'Episode notes from our B2B show: three marketers on closed-loop attribution, creative constraints inside retailer ecosystems, and when to walk away.',
    read: '6 min read',
    ago: '7 hours ago',
    published: 'Aug 26, 2026',
    author: 'Nikola Djuric',
    authorBio: 'Nikola hosts agency and brand conversations for DesignsWorkLife.',
    category: 'Podcast',
    topics: ['podcast', 'marketing', 'advertising', 'ecommerce', 'business'],
    hero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Studio microphone for a podcast recording',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Retail media networks promise TV-like reach with checkout-level proof. Our guests agreed on the upside — and disagreed hard on creative freedom once you live inside a retailer’s ad stack.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1280&q=80',
        alt: 'People listening together',
        caption: 'Closed-loop metrics change the creative brief. Image: Pixabay',
      },
      {
        type: 'h2',
        text: 'Takeaways from the episode',
      },
      {
        type: 'ul',
        items: [
          'Treat retail media as a channel with house rules, not an open canvas.',
          'Negotiate creative templates early — after launch is too late.',
          'Keep a brand channel that retailers do not own, or you rent your identity.',
        ],
      },
    ],
    keyFindings: [
      'Retail media is absorbing budgets formerly reserved for linear TV.',
      'Attribution clarity comes with creative and data constraints.',
      'Smart CMOs keep an owned brand surface outside retailer walls.',
    ],
    ourTake:
      'Retail media is powerful. It is also a landlord. Act like a tenant with an exit plan.',
    agencyCta: { label: 'Find digital marketing agencies', to: '/agency/digital-marketing' },
  },
  {
    slug: 'shopify-checkout-extensibility-brands',
    title: 'DTC Brand Systems Are Being Rebuilt Around Shopify Checkout Apps',
    excerpt:
      'Custom thank-you pages and post-purchase upsells are no longer plugin hacks — they are brand theater at the moment of highest intent.',
    read: '5 min read',
    ago: '9 hours ago',
    published: 'Aug 26, 2026',
    author: 'Ru Reid',
    authorBio: 'Ru covers consumer tech brands and product-led marketing.',
    category: 'eCommerce',
    topics: ['ecommerce', 'design', 'tech', 'marketing'],
    hero: 'https://cdn.pixabay.com/photo/2016/11/22/19/25/adult-1850177_1280.jpg',
    heroAlt: 'Person shopping with a credit card',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Checkout used to be a conversion tunnel brands feared touching. Extensibility turns it into a designed chapter: loyalty enrollment, bundling, and editorial storytelling without bouncing users to a third-party upsell app.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1280&q=80',
        alt: 'Product still life suggesting premium ecommerce',
        caption: 'Post-purchase is now part of the brand system. Image: Pixabay',
      },
      {
        type: 'ul',
        items: [
          'Map brand voice into checkout microcopy, not only PDP headlines.',
          'Use thank-you pages for education, not only coupons.',
          'Measure second-order AOV, not only first-purchase conversion.',
        ],
      },
    ],
    keyFindings: [
      'Checkout is becoming a design surface, not a payment form.',
      'DTC brands are consolidating post-purchase journeys into owned UX.',
      'Extensibility reduces plugin sprawl when governed like a design system.',
    ],
    ourTake:
      'If your brand ends at “Place order,” you abandoned the customer at the altar.',
    agencyCta: { label: 'Find ecommerce agencies', to: '/agency/ecommerce' },
  },
  {
    slug: 'holding-company-ai-lab-reorg',
    title: 'The Standalone AI Lab Is Disappearing Inside Holding Companies',
    excerpt:
      'After a year of center-of-excellence theater, networks are embedding model ops inside accounts. The pitch: less demo, more delivery.',
    read: '5 min read',
    ago: '11 hours ago',
    published: 'Aug 25, 2026',
    author: 'Roberto Orosa',
    authorBio: 'Roberto covers brand launches and agency market moves.',
    category: 'Agencies',
    topics: ['agencies', 'tech', 'business', 'advertising'],
    hero: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Abstract AI visualization',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Central AI labs made great keynotes and mediocre timelines. Networks are now attaching prompt engineers and data stewards to account pods — accepting that AI work only sticks when it lives next to the brief.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1280&q=80',
        alt: 'Modern office collaboration',
        caption: 'Embedding beats showcasing. Image: Pixabay',
      },
      {
        type: 'h2',
        text: 'What independent shops should watch',
      },
      {
        type: 'ul',
        items: [
          'Clients will ask who touches the model on their account, not who owns the lab.',
          'Governance and brand safety will matter more than novelty demos.',
          'Boutiques can compete by specializing in one workflow end-to-end.',
        ],
      },
    ],
    keyFindings: [
      'Network AI strategy is shifting from central labs to embedded pods.',
      'Clients want accountable delivery, not innovation theater.',
      'Specialist independents still have room if they own a full workflow.',
    ],
    ourTake:
      'The second AI reorg always looks like the first — until someone measures shipped work.',
    agencyCta: { label: 'Explore digital agencies', to: '/agency/digital-marketing' },
  },
  {
    slug: 'museum-digital-exhibition-ux',
    title: 'Product Designers Are Quietly Redrawing the Museum Visit',
    excerpt:
      'Ticketing, wayfinding, and collection apps are merging into one visitor OS — and cultural institutions are finally budgeting like product orgs.',
    read: '5 min read',
    ago: '14 hours ago',
    published: 'Aug 25, 2026',
    author: 'Lana Beciragic',
    authorBio: 'Lana writes about design systems in public and cultural sectors.',
    category: 'Design',
    topics: ['design', 'tech', 'creative', 'business'],
    hero: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Modern architectural interior',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'A blockbuster show used to mean posters and an audio guide. Now it means a coherent product: timed entry, accessibility layers, AR labels, and membership conversion after the gift shop.',
      },
      {
        type: 'image',
        src: 'https://cdn.stocksnap.io/img-thumbs/960w/7B52AC0C5F.jpg',
        alt: 'A visitor standing alone in front of framed paintings in a gallery',
        caption: 'Culture brands are learning product roadmaps. Image: StockSnap',
      },
      {
        type: 'ul',
        items: [
          'Unify ticketing and content CMS or accept a fractured visitor journey.',
          'Design for school groups and solo tourists in the same IA.',
          'Treat post-visit email as exhibition design, not CRM leftovers.',
        ],
      },
    ],
    keyFindings: [
      'Cultural institutions are adopting product-design hiring patterns.',
      'Visitor experience is consolidating across apps and physical wayfinding.',
      'Membership growth depends on digital continuity after the visit.',
    ],
    ourTake:
      'The best museum website is not a brochure. It is the lobby that never closes.',
    agencyCta: { label: 'Find UX agencies', to: '/agency/ui-ux-design' },
  },
  {
    slug: 'independent-creative-director-interview',
    title: 'Interview: Going Independent Without Scaling Down the Ambition',
    excerpt:
      'How one creative director rebuilt a practice around fewer clients, sharper craft, and contracts that protect idea ownership.',
    read: '6 min read',
    ago: '1 day ago',
    published: 'Aug 25, 2026',
    author: 'Karen Sosoban',
    authorBio: 'Karen leads editorial interviews with agency founders and creative directors.',
    category: 'Interviews',
    topics: ['interviews', 'creative', 'agencies', 'advertising'],
    hero: 'https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_1280.jpg',
    heroAlt: 'Creative professional with phone',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Leaving a holding company is easy to romanticize. Surviving the second year — with payroll, pitches, and IP clauses — is the real story. This interview maps the unglamorous mechanics.',
      },
      {
        type: 'quote',
        text: 'I did not leave to do smaller work. I left to stop doing work that only existed to win the next pitch.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1280&q=80',
        alt: 'Small team collaboration',
        caption: 'Ambition scales with clarity, not headcount. Image: Pixabay',
      },
      {
        type: 'ul',
        items: [
          'Price for thinking days, not only production hours.',
          'Write kill fees before the mood board romance begins.',
          'Keep one speculative outlet so the portfolio stays alive.',
        ],
      },
    ],
    keyFindings: [
      'Independents are renegotiating IP and speculative pitch norms.',
      'Craft-focused shops are winning by declining misaligned RFPs.',
      'Sustainability depends on contract design as much as creative taste.',
    ],
    ourTake:
      'Freedom is a pricing model. Everything else is a vibe.',
    agencyCta: { label: 'Browse creative agencies', to: '/agency/creative' },
  },
  {
    slug: 'b2b-podcast-agency-margins',
    title: 'Podcast Recap: What AI Subscriptions Are Doing to Agency Margins',
    excerpt:
      'Software seats, training time, and client expectations are colliding. Operators share what they are cutting — and what they refuse to automate.',
    read: '5 min read',
    ago: '1 day ago',
    published: 'Aug 24, 2026',
    author: 'Nikola Djuric',
    authorBio: 'Nikola hosts agency and brand conversations for DesignsWorkLife.',
    category: 'Podcast',
    topics: ['podcast', 'agencies', 'business', 'tech'],
    hero: 'https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg',
    heroAlt: 'Laptop and notebook for business planning',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'AI promised leverage. Operators report a different spreadsheet: more seats, more review layers, and clients who want AI discounts without AI quality loss.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1280&q=80',
        alt: 'Operators in a meeting',
        caption: 'Margin is a culture decision dressed as a finance one. Image: Pixabay',
      },
      {
        type: 'ul',
        items: [
          'Track tool cost per deliverable, not per employee.',
          'Protect senior review time — that is where brand risk lives.',
          'Productize one AI-assisted offer instead of discounting everything.',
        ],
      },
    ],
    keyFindings: [
      'AI tooling is raising operating costs before it raises margins.',
      'Clients expect efficiency discounts faster than quality gains appear.',
      'Successful shops productize AI workflows rather than blanket discounting.',
    ],
    ourTake:
      'If AI only shows up as a price cut, you trained the market to undervalue you.',
    agencyCta: { label: 'List your agency', to: '/benefits' },
  },
  {
    slug: 'luxury-packaging-refill-systems',
    title: 'Refills Are Coming to Luxury — Without Cheapening the Unboxing',
    excerpt:
      'Sustainability briefs used to mean less foil. Now they mean modular vessels, membership refills, and packaging that photographs like heirloom objects.',
    read: '4 min read',
    ago: '1 day ago',
    published: 'Aug 24, 2026',
    author: 'Coral Cripps',
    authorBio: 'Coral writes about advertising creative systems and brand IP strategy.',
    category: 'Design',
    topics: ['design', 'ecommerce', 'branding', 'creative'],
    hero: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Premium product packaging aesthetic',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Refill used to signal thrift. Luxury houses are flipping the cue: the durable vessel is the status object; the consumable is the subscription. Design has to make both feel intentional.',
      },
      {
        type: 'image',
        src: 'https://cdn.stocksnap.io/img-thumbs/960w/0BZ1W3NNQK.jpg',
        alt: 'A faceted glass fragrance bottle on a soft pink surface',
        caption: 'The vessel has to survive being refilled and still read as luxury. Image: StockSnap',
      },
      {
        type: 'ul',
        items: [
          'Design the empty vessel as a display object, not a recycling chore.',
          'Write refill UX that feels concierge, not cafeteria.',
          'Photograph systems as rituals, not sustainability PSAs.',
        ],
      },
    ],
    keyFindings: [
      'Luxury sustainability is shifting from material swaps to system design.',
      'Refill memberships need brand theater to avoid feeling cheap.',
      'Packaging photography is becoming as important as unboxing for circular SKUs.',
    ],
    ourTake:
      'If refill looks like homework, luxury customers will buy the disposable version again.',
    agencyCta: { label: 'Find packaging agencies', to: '/agency/packaging-design' },
  },
  {
    slug: 'founder-story-boutique-media-agency',
    title: 'Interview: A 12-Person Media Shop That Refuses to Perform Metrics',
    excerpt:
      'A founder on saying no to vanity dashboards, hiring generalists who can write, and why smaller retainers can mean healthier growth.',
    read: '6 min read',
    ago: '2 days ago',
    published: 'Aug 24, 2026',
    author: 'Karen Sosoban',
    authorBio: 'Karen leads editorial interviews with agency founders and creative directors.',
    category: 'Interviews',
    topics: ['interviews', 'marketing', 'agencies', 'business'],
    hero: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Founder working at a laptop',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Growth agency culture often rewards louder charts. This founder built the opposite: narrative reporting, slower hiring, and clients who stay because the story of the numbers makes sense.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1280&q=80',
        alt: 'Analytics and code on a screen',
        caption: 'Clarity beats fireworks in the monthly report. Image: Pixabay',
      },
      {
        type: 'ul',
        items: [
          'Replace vanity KPIs with decision-ready metrics.',
          'Hire writers who can brief media, not only post it.',
          'Publish a public no-list so mismatched RFPs self-select out.',
        ],
      },
    ],
    keyFindings: [
      'Boutique media shops are differentiating on reporting culture.',
      'Selective growth can outperform aggressive headcount plans.',
      'Clients stay longer when they understand the narrative behind spend.',
    ],
    ourTake:
      'The bravest agency product might be a quieter dashboard.',
    agencyCta: { label: 'Find media agencies', to: '/agency/paid-media-pay-per-click' },
  },
  {
    slug: 'creator-commerce-storefront-fatigue',
    title: 'Too Many Storefronts: Creator Commerce Runs Into Its Own Sprawl',
    excerpt:
      'Too many link-in-bio shops, too little brand coherence. Platforms are collapsing checkout into content while creators demand fewer tabs.',
    read: '4 min read',
    ago: '2 days ago',
    published: 'Aug 23, 2026',
    author: 'Ru Reid',
    authorBio: 'Ru covers consumer tech brands and product-led marketing.',
    category: 'eCommerce',
    topics: ['ecommerce', 'marketing', 'tech', 'creative'],
    hero: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Shopper browsing products',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Creators are tired of being part-time ops managers. Platforms that win the next phase will hide logistics and surface identity — one coherent storefront, not seven affiliate dashboards.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1280&q=80',
        alt: 'Audience engaging with content',
        caption: 'Commerce has to feel like content again. Image: Pixabay',
      },
      {
        type: 'ul',
        items: [
          'Audit every selling link for brand consistency.',
          'Prefer platforms that unify inventory and storytelling.',
          'Measure trust signals (returns, reviews) as creatively as CTR.',
        ],
      },
    ],
    keyFindings: [
      'Creator sellers are consolidating tools after years of stack sprawl.',
      'Platforms compete on operational simplicity as much as audience size.',
      'Brand coherence is becoming a conversion variable for influencer shops.',
    ],
    ourTake:
      'If your storefront needs a tutorial, it is not a storefront — it is a second job.',
    agencyCta: { label: 'Find ecommerce agencies', to: '/agency/ecommerce' },
  },
  {
    slug: 'city-branding-tourism-boards',
    title: 'Tourism Boards Are Recruiting Brand Talent Straight From Startups',
    excerpt:
      'Place branding is no longer a logo and a tagline. Destinations want content systems, resident diplomacy, and year-round demand shaping.',
    read: '5 min read',
    ago: '2 days ago',
    published: 'Aug 23, 2026',
    author: 'Lana Beciragic',
    authorBio: 'Lana writes about design systems in public and cultural sectors.',
    category: 'Branding',
    topics: ['branding', 'marketing', 'business', 'creative'],
    hero: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'City architecture skyline',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Overtourism backlash forced a rethink: destination brands now speak to residents as hard as visitors. That means strategy roles that look suspiciously like CPG brand management.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1280&q=80',
        alt: 'Open road suggesting travel',
        caption: 'Demand shaping beats volume chasing. Image: Pixabay',
      },
      {
        type: 'ul',
        items: [
          'Build calendars for shoulder seasons, not only peak weekends.',
          'Give residents a role in the brand story to reduce backlash.',
          'Treat neighborhood identity as a product line, not a footnote.',
        ],
      },
    ],
    keyFindings: [
      'Place branding is professionalizing toward consumer-brand operating models.',
      'Resident relations are now a core tourism KPI.',
      'Year-round content systems matter more than one-off campaign films.',
    ],
    ourTake:
      'A city brand that only speaks to tourists will eventually be edited by residents.',
    agencyCta: { label: 'Find branding agencies', to: '/agency/logo-branding' },
  },
  {
    slug: 'motion-design-brand-guidelines',
    title: 'Motion Finally Earned a Chapter in the Brand Book. Now What?',
    excerpt:
      'Static PDFs cannot govern Reels. Teams are writing tempo, easing, and sound rules so social edits stop improvising the brand.',
    read: '4 min read',
    ago: '3 days ago',
    published: 'Aug 23, 2026',
    author: 'Coral Cripps',
    authorBio: 'Coral writes about advertising creative systems and brand IP strategy.',
    category: 'Creative',
    topics: ['creative', 'design', 'branding', 'advertising'],
    hero: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'People creating video content',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'If your guidelines stop at logo clearspace, social teams invent a second brand every Thursday. Motion chapters — timing, transitions, sonic cues — are becoming non-negotiable.',
      },
      {
        type: 'image',
        src: 'https://cdn.stocksnap.io/img-thumbs/960w/OQT16Q7SG7.jpg',
        alt: 'A camera operator framing a shot on location',
        caption: 'Motion is a brand asset now, and it needs written rules. Image: StockSnap',
      },
      {
        type: 'ul',
        items: [
          'Specify tempo ranges, not only hex codes.',
          'Provide editable After Effects / CapCut starters tied to the system.',
          'Review social cuts against motion rules the way you review print proofs.',
        ],
      },
    ],
    keyFindings: [
      'Motion governance is catching up to logo and type systems.',
      'Social velocity exposed gaps in static-only brand books.',
      'Sonic and tempo rules reduce off-brand improvisation at scale.',
    ],
    ourTake:
      'A brand that moves without rules is just content with a logo stuck on.',
    agencyCta: { label: 'Find motion design agencies', to: '/agency/video-production' },
  },
  {
    slug: 'saas-website-narrative-shift',
    title: 'The Feature Grid Is Losing Its Place on B2B SaaS Homepages',
    excerpt:
      'Buyers skim. The winning pattern: one sharp problem story, proof modules, and a product tour that feels editorial — not a wallpaper of icons.',
    read: '5 min read',
    ago: '3 days ago',
    published: 'Aug 22, 2026',
    author: 'Roberto Orosa',
    authorBio: 'Roberto covers brand launches and agency market moves.',
    category: 'Tech',
    topics: ['tech', 'design', 'marketing', 'business'],
    hero: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Startup workspace with laptop',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Feature grids made sense when buyers compared checklists. Now they compare conviction. Homepages that read like essays with receipts are outperforming icon walls in demo requests.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1280&q=80',
        alt: 'Code on screen',
        caption: 'Narrative first, modules second. Image: Pixabay',
      },
      {
        type: 'ul',
        items: [
          'Open with the costly problem, not the product category.',
          'Use customer language in headlines before internal jargon.',
          'Put interactive product proof above the fold on desktop.',
        ],
      },
    ],
    keyFindings: [
      'SaaS marketing sites are shifting from feature catalogs to story systems.',
      'Editorial structure correlates with higher-intent demo traffic.',
      'Product proof is moving earlier in the page hierarchy.',
    ],
    ourTake:
      'If your homepage needs a legend to explain the icons, you do not have a homepage — you have a sticker sheet.',
    agencyCta: { label: 'Find web design agencies', to: '/agency/web-design' },
  },
  {
    slug: 'agency-new-business-podcast-rfp',
    title: 'Podcast: Sorting Real Opportunities From AI-Generated RFPs',
    excerpt:
      'Procurement teams are generating longer questionnaires overnight. Agency BD leaders share triage rules that protect senior time.',
    read: '5 min read',
    ago: '3 days ago',
    published: 'Aug 22, 2026',
    author: 'Nikola Djuric',
    authorBio: 'Nikola hosts agency and brand conversations for DesignsWorkLife.',
    category: 'Podcast',
    topics: ['podcast', 'agencies', 'business', 'marketing'],
    hero: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Notebook and planning materials',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'RFPs got longer while win rates got thinner. Our guests outlined a ruthless intake: score for fit in 20 minutes, decline politely, and only staff pitches that change the firm’s trajectory.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1561070791-36c11767b26a?auto=format&fit=crop&w=1280&q=80',
        alt: 'Business development meeting',
        caption: 'Triage is a creative act. Image: Pixabay',
      },
      {
        type: 'ul',
        items: [
          'Publish qualification criteria on your site to reduce junk inbound.',
          'Cap speculative hours per quarter like a real budget.',
          'Use AI to draft declines and research — not to invent chemistry you do not have.',
        ],
      },
    ],
    keyFindings: [
      'AI-generated RFPs are increasing volume without increasing fit.',
      'Winning shops protect senior hours with explicit triage rules.',
      'Public qualification criteria can reduce mismatched pursuits.',
    ],
    ourTake:
      'Saying no faster is the new competitive advantage in agency new business.',
    agencyCta: { label: 'Get matched with agencies', to: '/marketplace/project-brief' },
  },
  {
    slug: 'print-still-matters-direct-mail',
    title: 'Dimensional Mail Made a Comeback While Nobody Was Watching',
    excerpt:
      'Inbox chaos made tactile mail feel premium again. The playbook: small lists, high craft, and QR journeys that respect the object.',
    read: '4 min read',
    ago: '4 days ago',
    published: 'Aug 22, 2026',
    author: 'Lana Beciragic',
    authorBio: 'Lana writes about design systems in public and cultural sectors.',
    category: 'Design',
    topics: ['design', 'marketing', 'ecommerce', 'creative'],
    hero: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Printed books and paper materials',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Dimensional mail is expensive per piece and cheap per memory. Brands using it well treat print as a VIP channel, not a spray-and-pray relic.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1280&q=80',
        alt: 'Premium product unboxing vibe',
        caption: 'Craft is the targeting. Image: Pixabay',
      },
      {
        type: 'ul',
        items: [
          'Start with customers who already love you, not cold lists.',
          'Design the open as a ritual with a clear next digital step.',
          'Measure assisted conversions, not only same-day QR spikes.',
        ],
      },
    ],
    keyFindings: [
      'Print is returning as a high-touch loyalty tool for DTC brands.',
      'Small, crafted drops outperform mass catalogs in brand lift.',
      'QR journeys must honor the physical object’s pacing.',
    ],
    ourTake:
      'When everything is a notification, paper becomes a luxury medium again.',
    agencyCta: { label: 'Find print design agencies', to: '/agency/print-design' },
  },
]
