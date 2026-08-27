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
  cover: string
  portfolio: { title: string; type: string; year?: number; image?: string }[]
  team: { name: string; role: string }[]
}

export { newsArticles, partnerArticles } from './content/articles'
export type { NewsArticle } from './content/articles'

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
    cover: '/designsworklife/images/pixabay/startup-594090_1280.jpg',
    portfolio: [
      { title: 'Dognomics', type: 'B2B Branding', year: 2025, image: '/designsworklife/images/pixabay/puppy-1903313_640.jpg' },
      { title: 'EV Universe', type: 'Web Design', year: 2025, image: '/designsworklife/images/pixabay/road-1072823_640.jpg' },
      { title: 'Northwestern University', type: 'Web Design', image: '/designsworklife/images/pixabay/architecture-1868667_640.jpg' },
      { title: 'G2 eSports', type: 'eCommerce Development', image: '/designsworklife/images/pixabay/code-1839406_640.jpg' },
      { title: 'Fly Sports (AllRecruit)', type: 'Web Design', year: 2025, image: '/designsworklife/images/pixabay/meeting-2284501_640.jpg' },
      { title: 'SONY Rewards', type: 'Web Design', image: '/designsworklife/images/pixabay/apple-1867461_640.jpg' },
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
    cover: '/designsworklife/images/pixabay/architecture-1868667_1280.jpg',
    portfolio: [
      { title: 'BioAstra', type: 'Web Design', year: 2026, image: '/designsworklife/images/pixabay/artificial-intelligence-3382507_640.jpg' },
      { title: 'Civic Portal Redesign', type: 'UI/UX Design', year: 2025, image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1280&q=80' },
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
    cover: '/designsworklife/images/pixabay/teamwork-3213924_1280.jpg',
    portfolio: [
      { title: 'Retail Flagship Site', type: 'Web Development', year: 2025, image: '/designsworklife/images/pixabay/living-room-1835923_640.jpg' },
      { title: 'Hospitality Rebrand', type: 'Branding', year: 2024, image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1280&q=80' },
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
    cover: '/designsworklife/images/pixabay/astronomy-1867616_1280.jpg',
    portfolio: [{ title: 'Sky', type: 'Web Design', year: 2025, image: '/designsworklife/images/pixabay/astronomy-1867616_640.jpg' }],
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
    cover: '/designsworklife/images/pixabay/code-1839406_1280.jpg',
    portfolio: [{ title: 'Cazena', type: 'Web Design', year: 2025, image: '/designsworklife/images/pixabay/startup-594090_640.jpg' }],
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
    cover: '/designsworklife/images/pixabay/books-2596809_1280.jpg',
    portfolio: [{ title: 'Pop Up Signatures: Fashion Unfolded', type: 'Print Design', year: 2026, image: '/designsworklife/images/pixabay/books-2596809_640.jpg' }],
    team: [{ name: 'Toby Ng', role: 'Founder' }],
  },
]

export const marketplaceProjects = [
  {
    id: '16080',
    type: 'Website Design & Branding',
    industry: 'Health, Wellness and Fitness',
    description:
      'Looking for a web partner to design a patient-facing site for a longevity clinic, with clear care pathways, accessibility, healthcare integrations, and ongoing support.',
    budget: '$15,000',
  },
  {
    id: '26024',
    type: 'Digital Marketing',
    industry: 'Marketing and Advertising',
    description:
      'A growth-stage firm is rolling out 70+ lead-gen plays and wants a long-term agency for launch support, ongoing marketing, creative, and scale.',
    budget: '$116,000',
  },
  {
    id: '26023',
    type: 'Sales & Marketing Services',
    industry: 'Recreational Facilities and Services',
    description:
      'Needs a sales and marketing partner to lift visibility, traffic, engagement, and memberships with a durable acquisition plan.',
    budget: '$48,000',
  },
  {
    id: '16079',
    type: 'Website Design & Development',
    industry: 'Financial Services',
    description:
      'Needs a modern corporate website — approachable UX, SEO, CMS, and ongoing support — to present services, leadership, careers, and local presence.',
    budget: '$15,000',
  },
  {
    id: '26030',
    type: 'Brand Strategy & Identity',
    industry: 'Consumer Goods',
    description:
      'A CPG startup needs a full brand system — naming validation, visual identity, packaging direction, and a launch site — before a national retail pilot.',
    budget: '$42,000',
  },
  {
    id: '26031',
    type: 'UI/UX & Product Design',
    industry: 'SaaS',
    description:
      'B2B SaaS company seeks a product design partner to redesign onboarding, billing, and admin workflows with a measurable activation lift in 90 days.',
    budget: '$65,000',
  },
  {
    id: '26032',
    type: 'Ecommerce Development',
    industry: 'Fashion and Apparel',
    description:
      'DTC apparel brand needs a Shopify Plus rebuild with localized storefronts, loyalty, and a content-led PDP system for seasonal drops.',
    budget: '$55,000',
  },
  {
    id: '26033',
    type: 'Video Production & Motion',
    industry: 'Technology',
    description:
      'Enterprise software firm wants a product film, motion guidelines, and social cutdowns for a major conference launch window.',
    budget: '$38,000',
  },
  {
    id: '26034',
    type: 'SEO & Content',
    industry: 'Professional Services',
    description:
      'Multi-office consultancy seeks SEO, thought-leadership editorial, and landing page redesigns to support partner-led business development.',
    budget: '$28,000',
  },
  {
    id: '26035',
    type: 'Paid Media',
    industry: 'Education',
    description:
      'Online learning platform needs paid social and search management with creative testing and enrollment attribution across cohorts.',
    budget: '$72,000',
  },
]

export const awardDesigns = [
  {
    title: 'Council of Architecture and Urbanism of Brazil Logo Design',
    category: 'Logo',
    score: 8.5,
    badge: 'Winner',
    judges: [
      { initials: 'SB', score: 8.0 },
      { initials: 'AO', score: 8.5 },
      { initials: 'LS', score: 9.0 },
    ],
    agency: 'Sato Mateus',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1280&q=80',
  },
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
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1280&q=80',
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
    image: '/designsworklife/images/pixabay/salad-2756467_1280.jpg',
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
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1280&q=80',
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
    image: '/designsworklife/images/pixabay/apple-1867461_1280.jpg',
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
    image: '/designsworklife/images/pixabay/people-2591874_1280.jpg',
  },
  {
    title: 'F-Prime Website Design',
    category: 'Website',
    score: null,
    badge: 'Featured',
    judges: [],
    agency: 'Studio',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Athena App Design',
    category: 'App',
    score: null,
    badge: 'Featured',
    judges: [],
    agency: 'Studio',
    image: '/designsworklife/images/pixabay/artificial-intelligence-3382507_1280.jpg',
  },
  {
    title: 'Transform FitAI App Design',
    category: 'App',
    score: null,
    badge: 'Featured',
    judges: [],
    agency: 'Suffescom Solutions Inc',
    image: '/designsworklife/images/pixabay/road-1072823_1280.jpg',
  },
  {
    title: 'Northwind Capital Logo System',
    category: 'Logo',
    score: 8.8,
    badge: 'Winner',
    judges: [
      { initials: 'CH', score: 9.0 },
      { initials: 'MS', score: 8.5 },
      { initials: 'KL', score: 8.9 },
    ],
    agency: 'Marka Network',
    image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Lumen Health Patient Portal Website',
    category: 'Website',
    score: 8.2,
    badge: 'Winner',
    judges: [
      { initials: 'SB', score: 8.0 },
      { initials: 'NS', score: 8.4 },
      { initials: 'IS', score: 8.2 },
    ],
    agency: 'GoingClear',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Orbit Transit Wayfinding App',
    category: 'App',
    score: 8.7,
    badge: 'Winner',
    judges: [
      { initials: 'AO', score: 8.8 },
      { initials: 'PP', score: 8.6 },
      { initials: 'JP', score: 8.7 },
    ],
    agency: 'ANML Studio',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Cedar & Co Seasonal Catalog Print',
    category: 'Print',
    score: 8.1,
    badge: 'Winner',
    judges: [
      { initials: 'GS', score: 8.0 },
      { initials: 'JD', score: 8.2 },
      { initials: 'LS', score: 8.1 },
    ],
    agency: 'Toby Ng Design',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Solara Skincare Refill Packaging',
    category: 'Packaging',
    score: 9.1,
    badge: 'Winner',
    judges: [
      { initials: 'AO', score: 9.2 },
      { initials: 'LB', score: 9.0 },
      { initials: 'CH', score: 9.1 },
    ],
    agency: 'Studio Forma',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Echo Bank Brand Film Video',
    category: 'Video',
    score: 8.9,
    badge: 'Winner',
    judges: [
      { initials: 'MS', score: 9.0 },
      { initials: 'OI', score: 8.8 },
      { initials: 'KL', score: 8.9 },
    ],
    agency: 'Frame & Field',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Harbor Museums Membership Website',
    category: 'Website',
    score: null,
    badge: 'Featured',
    judges: [],
    agency: 'Public Works Studio',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Kinetic Type Specimen Print',
    category: 'Print',
    score: null,
    badge: 'Featured',
    judges: [],
    agency: 'Type Foundry Lab',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Nova Grocery Private Label Packaging',
    category: 'Packaging',
    score: null,
    badge: 'Featured',
    judges: [],
    agency: 'Shelf Studio',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Meridian Coffee Roasters Identity',
    category: 'Logo',
    score: 8.1,
    badge: 'Winner',
    judges: [
      { initials: 'CH', score: 8.4 },
      { initials: 'MS', score: 7.8 },
      { initials: 'KL', score: 8.1 },
    ],
    agency: 'Fieldnote Studio',
    image: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Aurora Festival Title Sequence',
    category: 'Video',
    score: 8.9,
    badge: 'Winner',
    judges: [
      { initials: 'IS', score: 9.2 },
      { initials: 'NS', score: 8.6 },
      { initials: 'LS', score: 8.9 },
    ],
    agency: 'Northlight Motion',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1280&q=80',
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
  { name: 'Avery Lang', role: 'General Manager' },
  { name: 'Mariana Delgado', role: 'Marketing Director' },
  { name: 'Nikola Djuric', role: 'Marketing & Sales Director, Brand Stories' },
  { name: 'Lana Beciragic', role: 'Director of Global Operations' },
  { name: 'Andrija Savic', role: 'Director of Client Relationships' },
  { name: 'Sergio Oliviera', role: 'Director of Development' },
  { name: 'Karen Sosoban', role: 'Content Director' },
  { name: 'Robin Fishley', role: 'SEO Director' },
  { name: 'Mirjana Stevuljevic', role: 'Head of Marketplace' },
]

export const newsTopics = [
  { label: 'Branding News', slug: 'branding' },
  { label: 'Advertising News', slug: 'advertising' },
  { label: 'Design News', slug: 'design' },
  { label: 'Creative News', slug: 'creative' },
  { label: 'Marketing News', slug: 'marketing' },
  { label: 'Tech News', slug: 'tech' },
  { label: 'eCommerce News', slug: 'ecommerce' },
  { label: 'Business News', slug: 'business' },
  { label: 'Agency News', slug: 'agencies' },
  { label: 'Expert Interviews', slug: 'interviews' },
  { label: 'Latest News & Insights', slug: 'latest-news' },
  { label: 'B2B Podcast', slug: 'podcast' },
]

export const bestDesignCategories = [
  { label: 'Websites', slug: 'websites', singular: 'Website' },
  { label: 'Logos', slug: 'logo', singular: 'Logo' },
  { label: 'Apps', slug: 'apps', singular: 'App' },
  { label: 'Packaging', slug: 'packaging', singular: 'Packaging' },
  { label: 'Print', slug: 'print', singular: 'Print' },
  { label: 'Video', slug: 'video', singular: 'Video' },
]

export const bestDesignLinks = [
  { label: 'All Best Designs', to: '/best-designs' },
  ...bestDesignCategories.map((c) => ({ label: c.label, to: `/best-designs/${c.slug}` })),
  { label: 'How It Works', to: '/best-designs/how-it-works' },
  { label: 'Awards Jury', to: '/best-designs/jury' },
  { label: 'Submit Your Design', to: '/best-designs/submit' },
  { label: 'Become a Judge', to: '/best-designs/jury/become-a-judge' },
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
