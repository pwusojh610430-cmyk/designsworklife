import type { NewsArticle } from './articles'

const published = 'Aug 27, 2026'

function article(
  data: Pick<NewsArticle, 'slug' | 'title' | 'excerpt' | 'category' | 'topics' | 'hero' | 'heroAlt'> & {
    lead: string
    analysis: string
    lesson: string
    sources: NonNullable<NewsArticle['sources']>
  },
): NewsArticle {
  return {
    ...data,
    read: '5 min read',
    ago: '2 hours ago',
    published,
    author: 'DesignsWorkLife Editorial Desk',
    authorBio: 'The DesignsWorkLife editorial desk reviews public campaign material and industry reporting, then adds independent analysis for creative and marketing teams.',
    verificationStatus: 'source-reviewed',
    factChecked: 'Aug 27, 2026',
    sources: data.sources,
    heroCredit: 'Photo via Pixabay',
    body: [
      { type: 'p', text: data.lead },
      { type: 'p', text: data.analysis },
      { type: 'h2', text: 'Why the strategy matters' },
      { type: 'p', text: data.lesson },
      {
        type: 'ul',
        items: [
          'Start with a customer behavior the audience already recognizes.',
          'Give the campaign one visual idea that survives every channel and crop.',
          'Measure whether the idea changes consideration, not only whether it earns attention.',
        ],
      },
    ],
    keyFindings: [data.lead, data.lesson],
    ourTake: data.analysis,
    agencyCta: { label: 'Explore top marketing agencies', to: '/agency/digital-marketing' },
  }
}

export const currentNewsArticles: NewsArticle[] = [
  article({
    slug: 'creative-teams-ai-productivity-human-judgment',
    title: 'AI Speeds Up Creative Work, but Human Judgment Still Sets the Best Teams Apart',
    excerpt: 'New productivity gains are real, yet the strongest teams use automation to widen exploration rather than flatten every idea into the same answer.',
    category: 'AI',
    topics: ['tech', 'ai'],
    hero: '/designsworklife/images/pixabay/art-1867071_1280.jpg',
    heroAlt: 'Designer working on a colorful digital artwork at a computer',
    lead: 'Creative teams are reporting faster research, versioning, and production cycles as generative tools move into everyday workflows. The headline number is efficiency, but the more useful question is what teams do with the hours they recover.',
    analysis: 'The gap is opening between teams that use AI to produce more average options and teams that use it to test more ambitious directions. Prompting helps with volume; taste, context, and a clear decision maker still determine whether the output feels specific to the brand.',
    lesson: 'Leaders should track the quality and range of explored ideas alongside time saved. A faster workflow only creates an advantage when the team reinvests that time in sharper briefs, stronger editing, and original craft.',
    sources: [{ title: 'AI Boosts Productivity by 40%, But What Sets Creative Teams Apart?', publisher: 'DesignRush', url: 'https://news.designrush.com/ai-content-tools-boost-productivity-40-percent' }],
  }),
  article({
    slug: 'chilis-golf-course-restaurant-19th-hole',
    title: 'Chili’s Takes the 19th Hole Literally With a Golf-Course Restaurant',
    excerpt: 'The restaurant chain turns golf culture into a physical brand experience built around post-round food, drinks, and familiar rituals.',
    category: 'Marketing',
    topics: ['marketing', 'branding', 'creative'],
    hero: '/designsworklife/images/pixabay/hamburger-1238246_1280.jpg',
    heroAlt: 'Restaurant burger and fries served as a casual post-game meal',
    lead: 'Chili’s is moving beyond a conventional sponsorship by opening a restaurant designed for the golf-course crowd. The idea connects the chain’s casual dining identity with the social ritual that follows a round.',
    analysis: 'The experience works because the product and the occasion already fit. Golfers expect a relaxed meal and drinks at the clubhouse, so the brand does not need to manufacture a new behavior; it only needs to make the familiar moment more memorable.',
    lesson: 'Experiential marketing becomes more durable when it owns a natural pause in the customer journey. The restaurant is the campaign, while social content and earned media document an experience people can actually visit.',
    sources: [{ title: "Chili’s Opens a Golf Course Restaurant for the 19th Hole Crowd", publisher: 'DesignRush', url: 'https://news.designrush.com/chilis-golf-club-debell-rhoback-apparel-collab' }],
  }),
  article({
    slug: 'coca-cola-football-fan-sound-campaign',
    title: 'Coca-Cola Turns the Sound of Football Fandom Into Campaign Fuel',
    excerpt: 'A multi-stop football program treats cheers, chants, and reactions as creative material supplied by supporters themselves.',
    category: 'Creative',
    topics: ['creative', 'marketing', 'advertising'],
    hero: '/designsworklife/images/pixabay/audio-1867121_1280.jpg',
    heroAlt: 'Audio mixing controls representing recorded crowd sound and fan reactions',
    lead: 'Coca-Cola’s football activation places supporter reactions at the center of the work. Instead of treating fans as background scenery, the campaign records and reuses the sounds that make live sport emotionally legible.',
    analysis: 'The approach gives a global sponsor a way to feel local. Every stop produces distinct voices and rituals while the underlying brand system remains consistent, creating a repeatable format without forcing every market into identical creative.',
    lesson: 'Participation works best when the audience contribution changes the final asset. Recording fan sound creates visible proof that supporters helped make the campaign rather than simply appearing around it.',
    sources: [{ title: "Coca-Cola Builds Business Around Away Fans With New College Football Campaign", publisher: 'DesignRush', url: 'https://news.designrush.com/coca-cola-go-the-distance' }],
  }),
  article({
    slug: 'astral-tequila-practical-magic-microdrama',
    title: 'Astral Tequila Mixes Movie Nostalgia With a Margarita Microdrama',
    excerpt: 'A compact narrative inspired by Practical Magic turns a cocktail recipe into entertainment instead of another product demonstration.',
    category: 'Creative',
    topics: ['creative', 'advertising', 'marketing'],
    hero: '/designsworklife/images/pixabay/woman-2564660_1280.jpg',
    heroAlt: 'Woman performing in a cinematic scene suitable for a short-form drama',
    lead: 'Astral Tequila is using the renewed attention around Practical Magic to frame a margarita as part of a story world. The campaign packages the drink in a short-form narrative designed for audiences already fluent in episodic social video.',
    analysis: 'The entertainment reference supplies mood, character, and a built-in conversation, but the product still has a clear role. The margarita becomes a plot device and visual anchor rather than an interruption between scenes.',
    lesson: 'Brands borrowing entertainment equity need a product action that belongs inside the narrative. When the drink affects the scene, viewers remember more than a logo placed beside familiar talent.',
    sources: [{ title: "Astral Tequila Casts 'Practical Magic 2' Margarita in Microdrama", publisher: 'DesignRush', url: 'https://news.designrush.com/astral-tequila-practical-magic-2-microdrama' }],
  }),
  article({
    slug: 'state-farm-real-fans-football-spots',
    title: 'State Farm Builds Its NFL Comedy Around Deliberately Wrong Substitutes',
    excerpt: 'Patrick Mahomes, Meghan Trainor, Aidan Hutchinson, and Jake from State Farm turn “close enough” replacements into the campaign’s central joke.',
    category: 'Marketing',
    topics: ['marketing', 'advertising', 'branding'],
    hero: '/designsworklife/images/pixabay/people-2557396_1280.jpg',
    heroAlt: 'Group of enthusiastic people gathered together as sports supporters',
    lead: 'State Farm’s NFL campaign pairs Patrick Mahomes with intentionally unsuitable replacements: Meghan Trainor steps in for his athletic trainer, while a sea captain substitutes for Detroit Lions captain Aidan Hutchinson. Jake from State Farm connects both sketches to the insurer’s familiar campaign system.',
    analysis: 'The celebrity casting is doing more than supplying reach. Each guest makes the “close enough is not good enough” premise immediately legible, while the recurring Jake character keeps the spots recognizable as State Farm work rather than disconnected entertainment cameos.',
    lesson: 'Long-running brand characters are most useful when they can host new cultural talent without surrendering the campaign idea. The guest should sharpen the product argument, not replace it.',
    sources: [{ title: "State Farm’s NFL Push With TMA and Meghan Trainor", publisher: 'DesignRush', url: 'https://news.designrush.com/state-farm-patrick-mahomes-meghan-trainor' }],
  }),
  article({
    slug: 'betty-crocker-packaging-cake-handbags',
    title: 'Betty Crocker Turns Its Packaging Refresh Into a Limited Cake-Handbag Drop',
    excerpt: 'The baking brand translates familiar box graphics into collectible fashion, giving a packaging update a reason to travel beyond the grocery aisle.',
    category: 'Brands',
    topics: ['branding', 'creative', 'ecommerce', 'marketing'],
    hero: '/designsworklife/images/pixabay/manufacture-791202_1280.jpg',
    heroAlt: 'Colorful product packaging moving through a production environment',
    lead: 'Betty Crocker is promoting a packaging refresh through a small run of handbags styled after its cake-mix boxes. The objects turn shelf design into fashion and give loyal customers something more shareable than a before-and-after graphic.',
    analysis: 'The limited price point and playful format make the redesign feel like an event. More importantly, the bags preserve recognizable colors and visual cues, proving that a refresh can modernize a system without discarding memory structures shoppers already use.',
    lesson: 'Packaging launches need a cultural carrier beyond the shelf. A collectible object can make design details legible at social-media scale while reinforcing the assets the brand wants customers to remember.',
    sources: [{ title: "Betty Crocker Sells Its Packaging Refresh as $89 Cake Handbags", publisher: 'DesignRush', url: 'https://news.designrush.com/betty-crocker-packaging-refresh-cake-bags' }],
  }),
  article({
    slug: 'zero-click-search-seo-strategy',
    title: 'Zero-Click Search Is Growing, Forcing SEO Teams to Redefine Visibility',
    excerpt: 'As more searches end on the results page, marketers are shifting from traffic-only reporting toward citations, branded demand, and assisted discovery.',
    category: 'Technology',
    topics: ['tech', 'marketing', 'ai'],
    hero: '/designsworklife/images/pixabay/computer-768696_1280.jpg',
    heroAlt: 'Search and analytics work displayed across computer screens',
    lead: 'A growing share of searches now resolves without a click to a publisher or brand site. Featured answers, local panels, shopping modules, and AI summaries increasingly satisfy the immediate question inside the search interface.',
    analysis: 'That does not make SEO irrelevant, but it weakens sessions as a complete measure of value. Brands also need to understand whether they appear in answers, earn citations, create follow-up branded searches, and influence decisions that finish elsewhere.',
    lesson: 'The practical response is to publish material worth citing: original data, clear expert explanations, and pages built around specific customer decisions. Generic summaries are the easiest content for answer engines to replace.',
    sources: [{ title: 'Google Searches Rarely Send Clicks Anymore. Experts Say SEO Strategy Must Adapt', publisher: 'DesignRush', url: 'https://news.designrush.com/adapt-seo-strategies-zero-click-search' }],
  }),
]
