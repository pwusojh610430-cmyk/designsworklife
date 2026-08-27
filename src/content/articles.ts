import { moreNewsArticles } from './moreArticles'
import { extraNewsArticles } from './extraArticles'
import { expandedNewsArticles } from './expandedArticles'
import { currentNewsArticles } from './currentArticles'

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'image'; src: string; alt: string; caption: string }
  | { type: 'ul'; items: string[] }

export type NewsArticle = {
  slug: string
  title: string
  excerpt: string
  read: string
  ago: string
  published: string
  author: string
  authorBio: string
  category: string
  topics: string[]
  hero: string
  heroAlt: string
  heroCredit: string
  body: ArticleBlock[]
  keyFindings: string[]
  ourTake: string
  agencyCta: { label: string; to: string }
}

/** All images: Pixabay CDN, free under Pixabay Content License */
export const newsArticles: NewsArticle[] = [
  ...currentNewsArticles,
  {
    slug: 'kfc-hot-ranch-big-dip-ishowspeed-campaign',
    title: "A Gaming Superfan Becomes the Face of KFC’s New Sauce Line",
    excerpt:
      'The chain converted years of unpaid shoutouts into a 60-second spot and a 4-ounce Hot Ranch Big Dip — a product-led proof point for its global refresh.',
    read: '5 min read',
    ago: '12 hours ago',
    published: 'Aug 26, 2026',
    author: 'Roberto Orosa',
    authorBio:
      'Roberto covers brand launches and QSR marketing. He previously wrote for trade titles on retail media and franchise growth.',
    category: 'Brands',
    topics: ['branding', 'marketing', 'advertising'],
    hero: '/designsworklife/images/pixabay/chicken-nuggets-246180_1280.jpg',
    heroAlt: 'Crispy fried chicken pieces with dipping sauce',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'KFC is mid-rebrand — new sauces, beverage platform KWENCH, refreshed restaurants — and it needed a product story that could travel faster than construction crews. Enter Hot Ranch Big Dip: a four-ounce cup built for people who treat ranch as a side dish, not a garnish.',
      },
      {
        type: 'p',
        text: 'The launch pairs with Double Crispy Hot Wings and a paid partnership with streamer IShowSpeed, who has filmed KFC runs across countries for years without a brand deal. The 60-second spot “KFC Hot Ranch” sends him to a literal ranch in red-and-white cowboy gear, then pivots into the sauce reveal — a joke that only works because audiences already believe he eats the food.',
      },
      {
        type: 'image',
        src: '/designsworklife/images/pixabay/hamburger-1238246_1280.jpg',
        alt: 'Fast-food burger meal with fries on a tray',
        caption: 'QSR launches still win when the product is the punchline, not the fine print. Image: Pixabay',
      },
      {
        type: 'h2',
        text: 'Why a sauce cup beats a logo deck',
      },
      {
        type: 'p',
        text: 'KFC’s visual reset with JKR is rolling out across more than 34,000 restaurants. That timeline is measured in years. A nationwide sauce SKU ships in weeks and gives fans something to talk about before they ever walk into a redesigned store. CMO Melissa Cash framed Hot Ranch as creamy-tangy with heat, sized “twice” a normal cup so ranch stops feeling rationed.',
      },
      {
        type: 'quote',
        text: 'Everybody knows I love KFC. Getting to make it official feels like everything came full circle.',
        cite: 'IShowSpeed, via brand release',
      },
      {
        type: 'p',
        text: 'Creator budgets in QSR keep climbing. Influencer Marketing Hub’s 2026 benchmark found most marketers expect influencer spend to jump by at least 50% this year. Speed’s YouTube reach gives KFC access to a younger male audience traditional spot buys struggle to hold. More Speed × KFC activity is planned for fall, stretching one SKU into months of content.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1280&q=80',
        alt: 'Creamy dressing being poured over a fresh salad',
        caption: 'Hot Ranch Big Dip sells abundance — more sauce, less rationing. Image: Pixabay',
      },
      {
        type: 'h2',
        text: 'What marketers can copy',
      },
      {
        type: 'ul',
        items: [
          'Hire creators who already perform unpaid loyalty — casting becomes ratification, not invention.',
          'Attach every rebrand to a tangible SKU so customers can “feel” the change before stores finish remodeling.',
          'Build the joke into the product name when the humor is honest (Hot Ranch → real ranch).',
        ],
      },
    ],
    keyFindings: [
      'KFC is using a sauce launch as a cultural proof point while a multi-year restaurant rebrand continues globally.',
      'IShowSpeed’s deal formalizes years of organic fandom rather than grafting a celebrity onto a brief.',
      'Creator-led QSR campaigns are expanding budgets and timelines beyond one-off limited offers.',
    ],
    ourTake:
      'Loyalty beat casting here because Speed already did the hard work. The lesson is not “find a famous eater,” it is “notice who has been eating you on camera for free.”',
    agencyCta: { label: 'Explore top branding agencies', to: '/agency/logo-branding' },
  },
  {
    slug: 'fanta-original-monsters-horror-campaign',
    title: 'Fanta Builds Its Own Halloween Cast After Years of Rented Scares',
    excerpt:
      'After seasons of licensed spooky IP, Fanta builds its own monster mythology — keeping Halloween equity without renting someone else’s characters.',
    read: '7 min read',
    ago: '14 hours ago',
    published: 'Aug 26, 2026',
    author: 'Coral Cripps',
    authorBio: 'Coral writes about advertising creative systems and brand IP strategy.',
    category: 'Advertising',
    topics: ['advertising', 'creative', 'branding'],
    hero: 'https://cdn.stocksnap.io/img-thumbs/960w/2659B518FA.jpg',
    heroAlt: 'A carved jack-o-lantern glowing next to an old lantern at night',
    heroCredit: 'Photo via StockSnap',
    body: [
      {
        type: 'p',
        text: 'Fanta wants October the way its parent company already has December. For two Halloween cycles the brand got there by renting: licensed slasher icons on limited-edition cans delivered instant recognition, and none of it belonged to Fanta once the season closed. This year it is arriving with a cast it paid to build.',
      },
      {
        type: 'p',
        text: 'The Haunted Universe opened with a cinematic trailer ahead of the full campaign, which rolls out across roughly 50 markets. Four original monsters anchor it, each with a name, a backstory, and a role in a shared world the brand controls outright. A licensed horror cameo is still held in reserve for the same season — the one detail that muddies an otherwise clean creator story.',
      },
      {
        type: 'image',
        src: 'https://cdn.stocksnap.io/img-thumbs/960w/365A62JPZG.jpg',
        alt: 'An assortment of pumpkins and gourds in different shapes and colors',
        caption: 'Four distinct characters give packaging, retail, and social a single cast to share. Image: StockSnap',
      },
      {
        type: 'quote',
        text: 'This is the move from collaborator to creator. The trailer is only the first glimpse of what is coming.',
        cite: 'Global marketing lead, Fanta, via campaign announcement',
      },
      {
        type: 'h2',
        text: 'The Cast Is Really a Content Pipeline',
      },
      {
        type: 'p',
        text: 'The trailer runs a familiar horror setup — an ancient power that can only be claimed on Halloween night — and uses it to introduce the roster rather than tell a self-contained story. A castle, a dungeon, a glowing elixir, then the characters surface one by one.',
      },
      {
        type: 'ul',
        items: [
          'A jack-o-lantern scarecrow that pulls itself out of the ground.',
          'A vampire with a taste for vintage American muscle cars.',
          'A bionic take on Frankenstein’s monster, surfacing from water.',
          'A werewolf who moonlights as a DJ.',
        ],
      },
      {
        type: 'p',
        text: 'Each has its own abilities and personality, which matters less as storytelling than as inventory. Four characters with defined traits give the brand years of packaging variants, retail displays, AR filters, and creator prompts without a new licensing negotiation each spring. The studio behind the work describes a human-led process supported by an AI production pipeline, and the same creative leadership has worked on the parent company’s holiday output before.',
      },
      {
        type: 'image',
        src: 'https://cdn.stocksnap.io/img-thumbs/960w/BYUZOL58JC.jpg',
        alt: 'A carved pumpkin on a log with the word Halloween spelled out beneath it',
        caption: 'Owning a season means the same cast has to come back every October. Image: StockSnap',
      },
      {
        type: 'h2',
        text: 'A Record Halloween Makes the Spend Defensible',
      },
      {
        type: 'p',
        text: 'US Halloween spending hit roughly $13.1 billion last year, up from about $11.6 billion the year before, with candy alone near $3.9 billion and per-person spend at an all-time high. A season expanding at that pace is what justifies building characters instead of licensing them.',
      },
      {
        type: 'p',
        text: 'The economics are straightforward. A licensed icon costs the same or more every time it runs and delivers recognition that belongs to someone else. An owned character costs the most in year one and less in every year after, while the recognition accrues to the brand. The benchmark Fanta is implicitly citing took decades: its parent company began holiday advertising in the 1920s and commissioned the Santa illustration that fixed the association in 1931.',
      },
      {
        type: 'h2',
        text: 'What Marketers Can Take From It',
      },
      {
        type: 'ul',
        items: [
          'Anchor owned IP to demand that already exists — proven occasions carry the investment.',
          'Design characters that map cleanly to SKUs, flavors, and shelf formats.',
          'Plan for repetition; brand assets only compound if they run again unchanged.',
          'Keep licensed cameos as guest stars once you actually own the world.',
        ],
      },
      {
        type: 'p',
        text: 'The opportunity is not inventing a new occasion. It is taking one consumers already understand and staying consistent long enough that the association becomes specific to you.',
      },
    ],
    keyFindings: [
      'Fanta is replacing two seasons of borrowed Halloween IP with four proprietary monsters, launched across about 50 markets.',
      'Owned characters convert a recurring licensing cost into an asset that gets cheaper and more recognizable each October.',
      'A record $13.1 billion US Halloween market is the demand signal underwriting the investment.',
      'The creative system stays orange-led but moves from slapstick mascot toward cinematic horror.',
      'A licensed cameo still running this season undercuts the "collaborator to creator" narrative.',
    ],
    ourTake:
      'Four monsters will not make Fanta synonymous with Halloween on their own. The real test lands next year, when the same cast has to run again and be recognized without the packaging explaining who they are. Renting scares is easy; building a cast is harder, which is exactly why it becomes a moat — and why the parallel licensing deal this season reads like hedging. Owned characters only pay off when they earn merchandise, games, and licensing lines of their own.',
    agencyCta: { label: 'Find creative agencies', to: '/agency/creative-agencies' },
  },
  {
    slug: 'duolingo-owl-sick-boy-streak',
    title: "When a 301-Day Streak Was at Risk, Duolingo Dropped the Attitude",
    excerpt:
      'The brand pauses its famous menace for a softer story about learning continuity — proving the owl can still surprise when the tone flips.',
    read: '4 min read',
    ago: '16 hours ago',
    published: 'Aug 25, 2026',
    author: 'Ru Reid',
    authorBio: 'Ru covers consumer tech brands and product-led marketing.',
    category: 'Brands',
    topics: ['branding', 'tech', 'marketing'],
    hero: '/designsworklife/images/pixabay/owl-50267_1280.jpg',
    heroAlt: 'Close-up of an owl, echoing Duolingo’s mascot energy',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Duolingo’s owl built a personality empire on guilt, memes, and late-night push notifications. That voice works until the cultural room goes quiet. In a recent storyline, the brand softens the sass to help a sick boy protect a 301-day streak — turning a retention mechanic into an empathy narrative.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1280&q=80',
        alt: 'Stack of books suggesting learning and study streaks',
        caption: 'Streaks are product features. Stories make them human. Image: Pixabay',
      },
      {
        type: 'h2',
        text: 'When menace becomes a liability',
      },
      {
        type: 'p',
        text: 'Brand voice guides are often treated as permanent. Duolingo shows the opposite: a strong voice is a range. The owl can threaten your streak on Tuesday and advocate for recovery on Thursday, because audiences already trust the character. Softness only works because the menace was earned first.',
      },
      {
        type: 'p',
        text: 'Operationally, the story also reframes streak freezes and grace windows as brand theater. Instead of a buried FAQ, continuity becomes the plot. That is useful for any habit product — fitness, finance, language — where churn often starts with one missed day and a spiral of shame.',
      },
      {
        type: 'ul',
        items: [
          'Build a voice with enough range to pivot without feeling fake.',
          'Turn retention tools into public stories, not silent settings.',
          'Use empathy moments sparingly so they stay surprising.',
        ],
      },
    ],
    keyFindings: [
      'Duolingo temporarily dialed down its menacing owl persona for a streak-protection story.',
      'The campaign reframes product retention as care rather than guilt.',
      'A strong brand voice needs dynamic range, not a single setting.',
    ],
    ourTake:
      'The owl is famous for being annoying. Making it kind for one chapter is not dilution — it is proof the character is three-dimensional. Most brands never earn that permission.',
    agencyCta: { label: 'Browse digital agencies', to: '/agency/digital-agencies' },
  },
  {
    slug: 'pizza-hut-yum-brands-name-change',
    title: 'A New Name Lands Just as Pizza Hut Exits the Yum Brands Era',
    excerpt:
      'A corporate restructuring story told through brand identity, franchise optics, and what customers actually notice on the door.',
    read: '4 min read',
    ago: '16 hours ago',
    published: 'Aug 25, 2026',
    author: 'Roberto Orosa',
    authorBio: 'Roberto covers brand launches and QSR marketing.',
    category: 'Brands',
    topics: ['branding', 'business', 'marketing'],
    hero: '/designsworklife/images/pixabay/pizza-3007395_1280.jpg',
    heroAlt: 'Fresh pizza with melted cheese and toppings',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Pizza Hut’s parent-company chapter is closing with paperwork most customers will never read — and a naming conversation they will feel at the storefront. When ownership structures shift, marketers inherit a delicate brief: reassure franchisees, protect nostalgia, and avoid a rename that looks like a reboot nobody asked for.',
      },
      {
        type: 'p',
        text: 'The brand’s red-roof memory is stronger than any holding-company logo. That is both an asset and a constraint. Identity systems can modernize menus, delivery apps, and loyalty programs without pretending the pizza is new. The risk is over-communicating corporate language in consumer channels.',
      },
      {
        type: 'image',
        src: '/designsworklife/images/pixabay/hamburger-494706_1280.jpg',
        alt: 'Casual dining meal representing QSR brand familiarity',
        caption: 'Franchise brands survive ownership changes when the meal stays recognizable. Image: Pixabay',
      },
      {
        type: 'h2',
        text: 'What to say — and what to keep quiet',
      },
      {
        type: 'p',
        text: 'Franchise communications should lead with continuity of recipes, suppliers, and local operators. Customer communications should lead with product and service. Investor communications can carry the restructuring narrative. Mixing those audiences is how brands accidentally announce a “new era” that sounds like a crisis.',
      },
      {
        type: 'ul',
        items: [
          'Separate corporate rename stories from consumer creative calendars.',
          'Audit every touchpoint for holding-company language that does not help a hungry guest.',
          'Give franchisees a visual kit that feels like an upgrade, not a rebrand tax.',
        ],
      },
    ],
    keyFindings: [
      'Ownership changes force Pizza Hut to manage identity across franchise, consumer, and investor audiences.',
      'Consumer equity sits in the product and red-roof memory, not the parent-company name.',
      'Clear audience separation prevents a corporate story from sounding like a crisis rebrand.',
    ],
    ourTake:
      'Customers do not buy holding companies. They buy pizza. The smartest “name change” work often happens backstage — legal, ops, franchise kits — while the storefront stays deliciously familiar.',
    agencyCta: { label: 'See branding agencies', to: '/agency/logo-branding' },
  },
  {
    slug: 'dunkin-bark-drive-thru-dogs',
    title: "Seven Years In, Dunkin and BARK Open a Drive-Thru Lane for Dogs",
    excerpt:
      'Pet treats meet QSR loyalty as Dunkin extends its longest-running collab — turning the passenger seat into a second customer.',
    read: '4 min read',
    ago: '19 hours ago',
    published: 'Aug 25, 2026',
    author: 'Katherine Maclang',
    authorBio: 'Katherine reports on retail partnerships and loyalty programs.',
    category: 'Marketing',
    topics: ['marketing', 'branding', 'advertising'],
    hero: '/designsworklife/images/pixabay/dog-3277414_1280.jpg',
    heroAlt: 'Happy dog looking toward the camera',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Year seven is usually when brand partnerships get stale. Dunkin and BARK are doing the opposite: adding a dog-specific drive-thru moment that treats pets as passengers with purchasing power — or at least with persuasive eyes.',
      },
      {
        type: 'image',
        src: '/designsworklife/images/pixabay/coffee-4618705_1280.jpg',
        alt: 'Coffee cup on a cafe table',
        caption: 'Coffee runs already include a silent second customer in the back seat. Image: Pixabay',
      },
      {
        type: 'h2',
        text: 'Why long partnerships still invent new rituals',
      },
      {
        type: 'p',
        text: 'Most collabs launch with packaging and die with a sell-through chart. Dunkin’s BARK relationship survives because it keeps inventing rituals: seasonal treats, social challenges, and now a drive-thru behavior change. Rituals train customers to expect the brand in a life context — morning coffee with the dog — not just in an endcap.',
      },
      {
        type: 'image',
        src: '/designsworklife/images/pixabay/puppy-1903313_1280.jpg',
        alt: 'Puppy outdoors, representing pet-focused retail moments',
        caption: 'Pet retail works when it feels like hospitality, not a gimmick aisle. Image: Pixabay',
      },
      {
        type: 'ul',
        items: [
          'Extend partnerships with new behaviors, not only new SKUs.',
          'Design for the companion customer who influences the trip.',
          'Measure shareability: dogs in drive-thrus are content engines.',
        ],
      },
    ],
    keyFindings: [
      'Dunkin is expanding its multi-year BARK partnership with dog-focused drive-thru experiences.',
      'Long collabs stay fresh by inventing rituals, not repeating packaging drops.',
      'Pets function as influence in QSR trips and as organic social content.',
    ],
    ourTake:
      'The clever part is not “Dunkin likes dogs.” It is recognizing that the drive-thru already had two beings in the car — and only one was on the menu.',
    agencyCta: { label: 'Find marketing agencies', to: '/agency/digital-marketing' },
  },
  {
    slug: 'ipsy-beauty-product-testers',
    title: 'Inside IPSY’s Plan to Rent Out 16 Million Beauty Testers',
    excerpt:
      'A beauty marketplace productizes its subscriber base as a testing network — turning community into a B2B research product.',
    read: '4 min read',
    ago: '20 hours ago',
    published: 'Aug 25, 2026',
    author: 'Coral Cripps',
    authorBio: 'Coral writes about advertising creative systems and brand IP strategy.',
    category: 'Brands',
    topics: ['business', 'ecommerce', 'marketing'],
    hero: '/designsworklife/images/pixabay/woman-3083383_1280.jpg',
    heroAlt: 'Woman applying makeup, representing beauty product testing',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'IPSY spent years assembling beauty subscribers who open boxes, try products, and talk online. The next move is obvious in hindsight: sell brands structured access to that testing behavior. Sixteen million potential testers is not a mailing list — it is a living panel.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1280&q=80',
        alt: 'People collaborating, suggesting community-powered product feedback',
        caption: 'Community data becomes a product when feedback loops are operationalized. Image: Pixabay',
      },
      {
        type: 'h2',
        text: 'From subscription box to research infrastructure',
      },
      {
        type: 'p',
        text: 'Beauty brands already buy panels, influencers, and retail media. IPSY’s advantage is context: testers encounter products the way real customers do — in a curated assortment, at home, with routine friction. That produces different insight than a sterile focus room.',
      },
      {
        type: 'p',
        text: 'The commercial risk is trust. Members joined for discovery, not to become unpaid lab technicians. Positioning has to stay reciprocal: early access, honest reviews, and clear consent. Brands that treat the panel like cheap impressions will burn the asset IPSY is trying to productize.',
      },
      {
        type: 'ul',
        items: [
          'Productize community only where members still get clear value.',
          'Sell insight quality (in-context use), not just panel size.',
          'Keep review authenticity non-negotiable or the B2B pitch collapses.',
        ],
      },
    ],
    keyFindings: [
      'IPSY is packaging its subscriber base as a beauty product-testing network for brands.',
      'In-home, assortment-based testing differs from traditional research panels.',
      'Member trust is the constraint that makes the model durable — or fragile.',
    ],
    ourTake:
      'The smartest marketplace move of the decade might be selling the audience twice: once as consumers, once as researchers. It only works if the second sale still feels like a gift to the first.',
    agencyCta: { label: 'Explore eCommerce agencies', to: '/agency/ecommerce' },
  },
  {
    slug: 'starbucks-psl-martha-stewart-unicorn',
    title: "Martha Stewart Joins the PSL Return for a Unicorn Weekend Stunt",
    excerpt:
      'Seasonal nostalgia meets celebrity partnership in one launch window — maximizing calendar density without muddying the Pumpkin Spice Latte myth.',
    read: '4 min read',
    ago: '21 hours ago',
    published: 'Aug 24, 2026',
    author: 'Ru Reid',
    authorBio: 'Ru covers consumer tech brands and product-led marketing.',
    category: 'Advertising',
    topics: ['advertising', 'branding', 'marketing'],
    hero: '/designsworklife/images/pixabay/coffee-3120750_1280.jpg',
    heroAlt: 'Latte art coffee in a ceramic cup',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Pumpkin Spice Latte season is a national holiday with better PR. Starbucks knows the return cannot be subtle — and it also knows one SKU cannot carry an entire weekend of media. Stacking Martha Stewart with a Unicorn Weekend activation densifies the calendar: nostalgia for one audience, playful spectacle for another.',
      },
      {
        type: 'image',
        src: '/designsworklife/images/pixabay/cup-829527_1280.jpg',
        alt: 'Coffee cup with warm drink, seasonal cafe mood',
        caption: 'PSL works because it is ritual first, beverage second. Image: Pixabay',
      },
      {
        type: 'h2',
        text: 'How to stack without blur',
      },
      {
        type: 'p',
        text: 'The danger of stacked launches is sameness: everything becomes “Starbucks fall.” The craft is separation. PSL owns the core menu story. Martha Stewart owns homemaking credibility and older millennial / Gen X affinity. Unicorn Weekend owns color, scarcity, and youth social. Same week, different jobs.',
      },
      {
        type: 'image',
        src: 'https://cdn.stocksnap.io/img-thumbs/960w/PAO8SL0NJE.jpg',
        alt: 'Autumn flat lay with a coffee cup, felt hat, and fallen leaves',
        caption: 'The PSL trades on autumn ritual; the unicorn drop trades on novelty. Image: StockSnap',
      },
      {
        type: 'ul',
        items: [
          'Give each activation a distinct job-to-be-done.',
          'Protect sacred icons (PSL) from novelty noise.',
          'Use celebrity for trust transfer, not just reach.',
        ],
      },
    ],
    keyFindings: [
      'Starbucks is pairing the PSL return with celebrity and fantasy activations in one window.',
      'Stacked launches work when each beat serves a different audience job.',
      'Seasonal icons need protection from being diluted by side drops.',
    ],
    ourTake:
      'PSL is religion. Unicorn Weekend is carnival. Martha is the trusted neighbor who brought pie. Starbucks is throwing all three parties on the same street — and somehow that is the point.',
    agencyCta: { label: 'Hire advertising agencies', to: '/agency/ad-agencies' },
  },
  {
    slug: 'claude-watermark-ai-disclosure',
    title: "AI Disclosure Clauses Get Harder to Ignore Once Watermarks Arrive",
    excerpt:
      'As AI disclosure language spreads through contracts, visible watermarks turn vague policy into something agencies and brands can actually audit.',
    read: '5 min read',
    ago: '1 day ago',
    published: 'Aug 24, 2026',
    author: 'Coral Cripps',
    authorBio: 'Coral writes about advertising creative systems and brand IP strategy.',
    category: 'Tech',
    topics: ['tech', 'business', 'agencies'],
    hero: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1280&q=80',
    heroAlt: 'Abstract artificial intelligence visualization',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Brand contracts increasingly demand AI disclosure. The problem is enforcement: if outputs look human, disclosure becomes a pinky swear. Watermarking — technical or visible — gives legal and creative ops a handle. Claude’s watermark push is one more signal that provenance will become table stakes in agency workflows.',
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1280&q=80',
        alt: 'Code on a screen representing AI tooling in creative workflows',
        caption: 'Disclosure without detection is policy theater. Image: Pixabay',
      },
      {
        type: 'p',
        text: 'For agencies, the practical shift is documentation. Prompt libraries, model logs, and delivery notes join the brand guidelines binder. Clients will not only ask “did you use AI?” — they will ask “show me where.” Teams that treat this as compliance busywork will lose pitches to teams that treat it as a trust product.',
      },
    ],
    keyFindings: [
      'AI disclosure clauses are spreading faster than verification tools.',
      'Watermarks and provenance logs make disclosure auditable.',
      'Agencies need workflow documentation, not just policy statements.',
    ],
    ourTake:
      'The winners will not be the agencies that swear they never used AI. They will be the ones who can prove exactly how they did — and why the work still feels authored.',
    agencyCta: { label: 'Find AI companies', to: '/agency/ai-companies' },
  },
  {
    slug: 'ikea-xbox-anniversary-furniture',
    title: "A Console D-Pad Becomes Furniture in IKEA’s Xbox Anniversary Drop",
    excerpt:
      'A furniture × gaming collab that treats controllers as material culture — and living rooms as the real console war.',
    read: '4 min read',
    ago: '2 days ago',
    published: 'Aug 23, 2026',
    author: 'Ru Reid',
    authorBio: 'Ru covers consumer tech brands and product-led marketing.',
    category: 'Design',
    topics: ['design', 'creative', 'branding'],
    hero: '/designsworklife/images/pixabay/living-room-1835923_1280.jpg',
    heroAlt: 'Modern living room interior ready for gaming furniture',
    heroCredit: 'Photo via Pixabay',
    body: [
      {
        type: 'p',
        text: 'Xbox turns 25 and IKEA answers with furniture that borrows D-pad geometry and console-era nostalgia. The insight is spatial: gaming won the living room years ago, but furniture catalogs still treat controllers as clutter. This line designs storage, seating, and lighting as if play sessions were a household routine — because they are.',
      },
      {
        type: 'image',
        src: 'https://cdn.stocksnap.io/img-thumbs/960w/EDD56D3A69.jpg',
        alt: 'A game controller lit in the dark with its D-pad in view',
        caption: 'Collabs land when the object improves a daily ritual, not when it prints a logo louder. Image: StockSnap',
      },
      {
        type: 'p',
        text: 'For brand teams, the lesson is adjacency. Gaming × furniture works because both fight for the same square meters. Random logo mashups fail when the use cases never meet. Map physical overlap first, then design.',
      },
    ],
    keyFindings: [
      'IKEA and Xbox are meeting in the living room — where gaming already lives.',
      'Successful collabs solve spatial or ritual friction, not just fandom.',
      'Product design becomes marketing when the object changes a daily habit.',
    ],
    ourTake:
      'The console war was never only about hardware. It was about who owns the couch. IKEA just made that literal.',
    agencyCta: { label: 'Browse product design companies', to: '/agency/product-design' },
  },
  ...moreNewsArticles,
  ...extraNewsArticles,
  ...expandedNewsArticles,
]

export const partnerArticles = [
  {
    slug: 'campari-live-experiences',
    title: 'Campari America Turns Tasting Rooms Into Loyalty Engines',
    excerpt: 'Hosted events that turn tasting moments into belonging for a heritage spirits brand.',
    category: 'Partner Content',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1280&q=80',
    imageAlt: 'Refreshing drink in a glass with citrus',
  },
  {
    slug: 'b2b-bounce-rates-infrastructure',
    title: 'A Clean Bounce Rate Can Still Mask the Bugs Killing B2B Pipeline',
    excerpt: 'Site reliability is now a pipeline problem — not just an IT footnote.',
    category: 'Partner Content',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1280&q=80',
    imageAlt: 'Laptop workspace representing B2B web infrastructure',
  },
  {
    slug: 'live-nation-local-venues',
    title: 'Local Scenes Shape the Blueprint for Live Nation’s Newest Venues',
    excerpt: 'Design and programming choices that keep arenas feeling local.',
    category: 'Partner Content',
    image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1280&q=80',
    imageAlt: 'Architectural exterior of a large public venue',
  },
  {
    slug: 'hubspot-lifecycle-orchestration',
    title: 'Lifecycle Marketing Without the Tool Pileup: Notes From HubSpot Partners',
    excerpt: 'A partner playbook for keeping CRM, CMS, and ads on one measurement spine.',
    category: 'Partner Content',
    image: '/designsworklife/images/pixabay/meeting-2284501_1280.jpg',
    imageAlt: 'Team meeting about lifecycle marketing',
  },
  {
    slug: 'webflow-enterprise-design-systems',
    title: 'Design Systems Become the Real Investment for Enterprise Webflow Teams',
    excerpt: 'Component libraries and CMS models built to survive marketing reorgs.',
    category: 'Partner Content',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1280&q=80',
    imageAlt: 'Code and design system work on screen',
  },
  {
    slug: 'stripe-checkout-conversion-lessons',
    title: 'The Checkout Details Brands Keep Getting Backwards on Stripe',
    excerpt: 'Friction, trust marks, and mobile keyboards: conversion lessons from payment UX.',
    category: 'Partner Content',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1280&q=80',
    imageAlt: 'Product and checkout still life',
  },
]
