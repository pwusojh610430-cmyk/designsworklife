export type Agency = {
  id: string
  name: string
  slug: string
  tagline: string
  rating: number
  reviews: number
  googleRating: number
  googleReviews: number
  city: string
  state: string
  country: string
  employees: string
  hourly: string
  budget: string
  founded: number
  verified: boolean
  badges: string[]
  services: string[]
  expertise: string[]
  industries: string[]
  clients: string[]
  overview: string
  website: string
  portfolio: { title: string; type: string; year?: number }[]
  team: { name: string; role: string }[]
}

export const categories = [
  {
    name: 'Branding & Creative',
    items: [
      { label: 'Digital Agencies', slug: 'digital-agencies' },
      { label: 'Branding Agencies', slug: 'logo-branding' },
      { label: 'Creative Agencies', slug: 'creative-agencies' },
      { label: 'Design Agencies', slug: 'design-agencies' },
      { label: 'Logo Design Companies', slug: 'logo-design' },
      { label: 'Graphic Design Companies', slug: 'graphic-design' },
      { label: 'Packaging Design Companies', slug: 'package-design' },
      { label: 'Video Production Companies', slug: 'video-production' },
      { label: 'Public Relations Firms', slug: 'public-relations' },
      { label: 'Product Design Companies', slug: 'product-design' },
      { label: 'Reputation Management Agencies', slug: 'reputation-management-companies' },
    ],
  },
  {
    name: 'Website & Interface',
    items: [
      { label: 'Web Design Companies', slug: 'website-design-development' },
      { label: 'eCommerce Development Companies', slug: 'ecommerce' },
      { label: 'Web Development Companies', slug: 'web-development-companies' },
      { label: 'WordPress Web Design Companies', slug: 'wordpress-web-design' },
      { label: 'UI/UX Design Agencies', slug: 'ui-ux-design' },
      { label: 'Shopify Development Companies', slug: 'ecommerce/shopify' },
      { label: 'Magento Development Companies', slug: 'ecommerce/magento' },
      { label: 'Small Business Website Design', slug: 'website-design-development/small-business' },
    ],
  },
  {
    name: 'Marketing',
    items: [
      { label: 'Digital Marketing Agencies', slug: 'digital-marketing' },
      { label: 'SEO Agencies', slug: 'search-engine-optimization' },
      { label: 'PPC Agencies', slug: 'paid-media-pay-per-click' },
      { label: 'Social Media Marketing Agencies', slug: 'social-media-marketing' },
      { label: 'Email Marketing Agencies', slug: 'email-marketing' },
      { label: 'Advertising Agencies', slug: 'ad-agencies' },
      { label: 'Google Ads Agencies', slug: 'paid-media-pay-per-click/google-adwords' },
      { label: 'Media Buying Agencies', slug: 'media-buying-agencies' },
    ],
  },
  {
    name: 'Software & App',
    items: [
      { label: 'Software Development Companies', slug: 'software-development' },
      { label: 'Mobile App Development Companies', slug: 'mobile-app-design-development' },
      { label: 'AI Companies', slug: 'ai-companies' },
      { label: 'Blockchain Development Companies', slug: 'blockchain-development-companies' },
      { label: 'VR & Augmented Reality Companies', slug: 'ar-vr' },
      { label: 'Software Testing Companies', slug: 'software-testing-companies' },
    ],
  },
  {
    name: 'IT Services',
    items: [
      { label: 'IT Services Companies', slug: 'it-services' },
      { label: 'Cybersecurity Companies', slug: 'cybersecurity' },
      { label: 'Cloud Consulting Companies', slug: 'cloud-consulting' },
      { label: 'Managed Service Providers', slug: 'managed-service-providers' },
      { label: 'Staff Augmentation Services', slug: 'staff-augmentation' },
      { label: 'Big Data Analytics Companies', slug: 'big-data-analytics-companies' },
    ],
  },
  {
    name: 'Business Services',
    items: [
      { label: 'Business Consulting Firms', slug: 'business-consulting' },
      { label: 'Market Research Companies', slug: 'market-research' },
      { label: 'Call Center Companies', slug: 'call-centers' },
      { label: 'BPO Companies', slug: 'bpo' },
      { label: 'Accounting Firms', slug: 'accounting' },
      { label: 'HR Outsourcing Companies', slug: 'hr-outsourcing' },
    ],
  },
]

export const agencies: Agency[] = [
  {
    id: '1',
    name: 'Digital Silk',
    slug: 'digital-silk',
    tagline: 'Growing Brands Online.',
    rating: 4.9,
    reviews: 37,
    googleRating: 4.8,
    googleReviews: 52,
    city: 'Miami',
    state: 'Florida',
    country: 'United States',
    employees: '100 - 249',
    hourly: '$150/hr',
    budget: 'Inquire',
    founded: 2015,
    verified: true,
    badges: ['Verified', 'Award Winner'],
    services: ['Web Design', 'eCommerce Development', 'Branding', 'Digital Marketing', 'SEO', 'Web Development'],
    expertise: ['Responsive', 'WordPress', 'WooCommerce', 'B2B', 'eCommerce'],
    industries: ['Automotive', 'eCommerce', 'Fashion', 'Food and Beverage', 'Legal', 'Real Estate'],
    clients: ['IBM', 'AT&T', 'NYU', 'NFL', 'NASA', 'XEROX', 'Sony', 'Microsoft', 'P&G'],
    overview:
      'Digital Silk creates custom websites to drive higher conversions and greater SEO value to grow brands online. From start-ups to Fortune 500, we have an outstanding track record on delivering on results. Our clients include SONY, Northwestern University, P&G, EV Universe, SNP Therapeutics, Xerox, NYU and others.',
    website: 'https://www.digitalsilk.com',
    portfolio: [
      { title: 'Dognomics', type: 'B2B Branding', year: 2025 },
      { title: 'EV Universe', type: 'Web Design', year: 2025 },
      { title: 'Northwestern University', type: 'Web Design' },
      { title: 'G2 eSports', type: 'eCommerce Development' },
      { title: 'Fly Sports (AllRecruit)', type: 'Web Design', year: 2025 },
      { title: 'SONY Rewards', type: 'Web Design' },
    ],
    team: [
      { name: 'Gabriel Shaoolian', role: 'CEO and Founder' },
      { name: 'Jamie Maloney', role: 'Client Partner' },
      { name: 'Marko Soldo', role: 'Design Director' },
    ],
  },
  {
    id: '2',
    name: 'Design In DC',
    slug: 'design-in-dc',
    tagline: 'A Digital Agency For The Future.',
    rating: 4.8,
    reviews: 28,
    googleRating: 4.9,
    googleReviews: 41,
    city: 'Washington DC',
    state: 'Washington DC',
    country: 'United States',
    employees: '50 - 99',
    hourly: '$125/hr',
    budget: '$10,000',
    founded: 2012,
    verified: true,
    badges: ['Verified', 'Thought Leader'],
    services: ['Web Design', 'UI/UX Design', '3D Animation', 'Android', 'Responsive'],
    expertise: ['Responsive', 'Android', '3D Animation', 'Interactive Design'],
    industries: ['Government', 'Nonprofit', 'Healthcare', 'Education'],
    clients: ['Smithsonian', 'NIH', 'Local DC Brands'],
    overview:
      'Design In DC builds future-ready digital experiences for organizations that need clarity, accessibility, and conversion-focused design across web and product interfaces.',
    website: '#',
    portfolio: [
      { title: 'BioAstra', type: 'Web Design', year: 2026 },
      { title: 'Civic Portal Redesign', type: 'UI/UX Design', year: 2025 },
    ],
    team: [
      { name: 'Alex Rivera', role: 'Creative Director' },
      { name: 'Sam Chen', role: 'Head of UX' },
    ],
  },
  {
    id: '3',
    name: 'Lounge Lizard',
    slug: 'lounge-lizard',
    tagline: 'Growth Marketing & Web Design Experts Since 1998.',
    rating: 4.8,
    reviews: 64,
    googleRating: 4.7,
    googleReviews: 89,
    city: 'New York City',
    state: 'New York',
    country: 'United States',
    employees: '50 - 99',
    hourly: '$140/hr',
    budget: '$25,000',
    founded: 1998,
    verified: true,
    badges: ['Verified', 'AI Leader'],
    services: ['Web Development', 'Responsive', 'WooCommerce', 'Digital Marketing', 'Branding'],
    expertise: ['Web Development', 'Responsive', 'WooCommerce', 'Growth Marketing'],
    industries: ['Retail', 'Hospitality', 'Consumer', 'Finance'],
    clients: ['Fortune 500 brands', 'National retailers'],
    overview:
      'Lounge Lizard has helped brands grow online since 1998 with web design, development, and performance marketing built around measurable business outcomes.',
    website: '#',
    portfolio: [
      { title: 'Retail Flagship Site', type: 'Web Development', year: 2025 },
      { title: 'Hospitality Rebrand', type: 'Branding', year: 2024 },
    ],
    team: [
      { name: 'Jordan Blake', role: 'Managing Partner' },
      { name: 'Taylor Brooks', role: 'Strategy Director' },
    ],
  },
  {
    id: '4',
    name: 'Clay',
    slug: 'clay',
    tagline: 'Brand & digital product studio.',
    rating: 4.9,
    reviews: 19,
    googleRating: 5.0,
    googleReviews: 12,
    city: 'New York City',
    state: 'New York',
    country: 'United States',
    employees: '50 - 99',
    hourly: '$200/hr',
    budget: '$50,000',
    founded: 2009,
    verified: true,
    badges: ['Verified', 'Award Winner'],
    services: ['Branding', 'Web Design', 'Product Design', 'UI/UX Design'],
    expertise: ['Brand Strategy', 'Digital Design', 'Product Design'],
    industries: ['Fintech', 'Crypto', 'SaaS', 'Consumer'],
    clients: ['Sky', 'MakerDAO'],
    overview: 'Clay designs brands and digital products for companies that need distinctive identity systems and high-craft web experiences.',
    website: '#',
    portfolio: [{ title: 'Sky', type: 'Web Design', year: 2025 }],
    team: [{ name: 'Studio Lead', role: 'Creative Director' }],
  },
  {
    id: '5',
    name: 'GoingClear',
    slug: 'goingclear',
    tagline: 'Enterprise SaaS websites that convert.',
    rating: 4.7,
    reviews: 15,
    googleRating: 4.8,
    googleReviews: 22,
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    employees: '10 - 49',
    hourly: '$175/hr',
    budget: '$40,000',
    founded: 2014,
    verified: true,
    badges: ['Verified'],
    services: ['Web Design', 'UI/UX Design', 'Digital Strategy'],
    expertise: ['B2B', 'SaaS', 'Enterprise Web Design'],
    industries: ['SaaS', 'Technology', 'Data'],
    clients: ['Cazena'],
    overview: 'GoingClear specializes in quiet-confidence SaaS marketing sites for technical buyers who distrust overproduced marketing.',
    website: '#',
    portfolio: [{ title: 'Cazena', type: 'Web Design', year: 2025 }],
    team: [{ name: 'Product Designer', role: 'Design Lead' }],
  },
  {
    id: '6',
    name: 'Toby Ng Design',
    slug: 'toby-ng-design',
    tagline: 'Award-winning print & packaging.',
    rating: 4.9,
    reviews: 11,
    googleRating: 4.9,
    googleReviews: 8,
    city: 'Hong Kong',
    state: '',
    country: 'Hong Kong',
    employees: '10 - 49',
    hourly: '$120/hr',
    budget: '$15,000',
    founded: 2008,
    verified: true,
    badges: ['Verified', 'Award Winner'],
    services: ['Print Design', 'Packaging Design', 'Graphic Design'],
    expertise: ['Print Design', 'Visual Communication', 'Packaging'],
    industries: ['Fashion', 'Food and Beverage', 'Culture'],
    clients: ['Pop Up Signatures'],
    overview: 'Toby Ng Design creates culturally rich print and packaging systems recognized by international design juries.',
    website: '#',
    portfolio: [{ title: 'Pop Up Signatures: Fashion Unfolded', type: 'Print Design', year: 2026 }],
    team: [{ name: 'Toby Ng', role: 'Founder' }],
  },
]

export const newsArticles = [
  {
    slug: 'kfc-hot-ranch-big-dip-ishowspeed-campaign',
    title: "KFC Casts Superfan IShowSpeed for Post-Rebrand Sauce Push",
    excerpt: 'The chain converted years of free shoutouts into a 60-second spot and a 4-ounce Hot Ranch Big Dip.',
    read: '4 min read',
    ago: '12 hours ago',
    author: 'Roberto Orosa',
    category: 'Brands',
  },
  {
    slug: 'fanta-original-monsters-horror-campaign',
    title: 'Fanta Answers 2 Years of Borrowed Horror With 4 Original Monsters',
    excerpt: 'After licensing spooky IP, Fanta builds its own monster mythology for Halloween season.',
    read: '3 min read',
    ago: '14 hours ago',
    author: 'Coral Cripps',
    category: 'Advertising',
  },
  {
    slug: 'duolingo-owl-sick-boy-streak',
    title: "Duolingo's Owl Drops the Sass to Save Sick Boy's 301-Day Streak",
    excerpt: 'The brand pauses its usual menace for a softer campaign about learning continuity.',
    read: '4 min read',
    ago: '16 hours ago',
    author: 'Ru Reid',
    category: 'Brands',
  },
  {
    slug: 'pizza-hut-yum-brands-name-change',
    title: 'Pizza Hut Spends Its Last Week With Yum Brands on a Name Change',
    excerpt: 'A corporate restructuring story told through brand identity and franchise optics.',
    read: '3 min read',
    ago: '16 hours ago',
    author: 'Roberto Orosa',
    category: 'Brands',
  },
  {
    slug: 'dunkin-bark-drive-thru-dogs',
    title: "Dunkin' Gives Dogs Their Own Drive-Thru in Year 7 of BARK Partnership",
    excerpt: 'Pet treats meet QSR loyalty as Dunkin extends its longest-running collab.',
    read: '3 min read',
    ago: '19 hours ago',
    author: 'Katherine Maclang',
    category: 'Marketing',
  },
  {
    slug: 'ipsy-beauty-product-testers',
    title: 'IPSY Sells Brands Access to 16 Million Beauty Product Testers',
    excerpt: 'A beauty marketplace productizes its subscriber base as a testing network.',
    read: '3 min read',
    ago: '20 hours ago',
    author: 'Coral Cripps',
    category: 'Brands',
  },
  {
    slug: 'starbucks-psl-martha-stewart-unicorn',
    title: "Starbucks Stacks PSL Return With Martha Stewart On Unicorn Weekend",
    excerpt: 'Seasonal nostalgia meets celebrity partnership in a single launch window.',
    read: '3 min read',
    ago: '21 hours ago',
    author: 'Ru Reid',
    category: 'Advertising',
  },
]

export const marketplaceProjects = [
  {
    id: '16080',
    type: 'Website Design & Branding',
    industry: 'Health, Wellness and Fitness',
    description:
      'Seeking a web partner to build a patient-facing website for a longevity wellness practice, with clear care pathways, accessibility, healthcare integrations, and ongoing support.',
    budget: '$15,000',
  },
  {
    id: '26024',
    type: 'Digital Marketing',
    industry: 'Marketing and Advertising',
    description:
      'The company is launching 70+ lead generation techniques and seeks a long-term agency partner to support the launch, ongoing marketing, creative work, and future growth.',
    budget: '$116,000',
  },
  {
    id: '26023',
    type: 'Sales & Marketing Services',
    industry: 'Recreational Facilities and Services',
    description:
      'The company seeks a sales and marketing partner to grow visibility, traffic, engagement, and customers, driving sustainable revenue growth and a scalable acquisition strategy.',
    budget: '$48,000',
  },
  {
    id: '16079',
    type: 'Website Design & Development',
    industry: 'Financial Services',
    description:
      'The company needs a modern corporate website with a user-friendly design, SEO, CMS, and ongoing support to showcase its services, leadership, careers, and local brand presence.',
    budget: '$15,000',
  },
]

export const awardDesigns = [
  {
    title: 'ANML Studio Website Design',
    category: 'Website',
    score: 8.5,
    badge: 'Winner',
    judges: [
      { initials: 'SB', score: 7.5 },
      { initials: 'PP', score: 10.0 },
      { initials: 'JP', score: 8.0 },
    ],
    agency: 'ANML Studio',
  },
  {
    title: 'Kitchen Stage App Design',
    category: 'App',
    score: 8.5,
    badge: 'Winner',
    judges: [
      { initials: 'AO', score: 9.0 },
      { initials: 'OI', score: 7.5 },
      { initials: 'SB', score: 9.0 },
    ],
    agency: 'Independent',
  },
  {
    title: 'Pop Up Signatures: Fashion Unfolded Print Design',
    category: 'Print',
    score: 7.6,
    badge: 'Winner',
    judges: [
      { initials: 'GS', score: 7.2 },
      { initials: 'JD', score: 7.2 },
      { initials: 'LS', score: 8.4 },
    ],
    agency: 'Toby Ng Design',
  },
  {
    title: 'Hummey Honey Packaging Design',
    category: 'Packaging',
    score: 9.53,
    badge: 'Winner',
    judges: [
      { initials: 'AO', score: 10.0 },
      { initials: 'LB', score: 9.3 },
      { initials: 'GS', score: 9.3 },
    ],
    agency: 'Studio',
  },
  {
    title: 'Roku Theater – TV Is Better Here Video Design',
    category: 'Video',
    score: 9.33,
    badge: 'Winner',
    judges: [
      { initials: 'AO', score: 9.5 },
      { initials: 'LB', score: 9.5 },
      { initials: 'OI', score: 9.0 },
    ],
    agency: 'Agency',
  },
  {
    title: 'F-Prime Website Design',
    category: 'Website',
    score: null,
    badge: 'Featured',
    judges: [],
    agency: 'Studio',
  },
  {
    title: 'Athena App Design',
    category: 'App',
    score: null,
    badge: 'Featured',
    judges: [],
    agency: 'Studio',
  },
  {
    title: 'Transform FitAI App Design',
    category: 'App',
    score: null,
    badge: 'Featured',
    judges: [],
    agency: 'Suffescom Solutions Inc',
  },
]

export const jury = [
  { name: 'Sebastian Samuel', location: 'United States' },
  { name: 'Andrea Owsinek-Brucker', location: 'United States' },
  { name: 'Lee Selsick', location: 'Australia' },
  { name: 'Charmilla Herath', location: 'Australia' },
  { name: 'Marc Strong', location: 'United States' },
  { name: 'Ignacio Salas', location: 'Argentina' },
  { name: 'Nicole Satterwhite', location: 'United States' },
  { name: 'Kitty Lai', location: 'United Kingdom' },
]

export const team = [
  { name: 'Gianluca Ferruggia', role: 'General Manager' },
  { name: 'Mariana Delgado', role: 'Marketing Director' },
  { name: 'Nikola Djuric', role: 'Marketing & Sales Director, Trending Brand News' },
  { name: 'Lana Beciragic', role: 'Director of Global Operations' },
  { name: 'Andrija Savic', role: 'Director of Client Relationships' },
  { name: 'Sergio Oliviera', role: 'Director of Development' },
  { name: 'Karen Sosoban', role: 'Content Director' },
  { name: 'Robin Fishley', role: 'SEO Director' },
  { name: 'Mirjana Stevuljevic', role: 'Head of Marketplace' },
]

export function getAgency(slug: string) {
  return agencies.find((a) => a.slug === slug)
}

export function getCategoryLabel(slug: string) {
  for (const group of categories) {
    const hit = group.items.find((i) => i.slug === slug || i.slug.startsWith(slug))
    if (hit) return hit.label
  }
  return slug
    .split('/')
    .pop()!
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
