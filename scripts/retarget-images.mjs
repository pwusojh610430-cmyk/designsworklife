import fs from 'node:fs'

const S = (id) => `https://cdn.stocksnap.io/img-thumbs/960w/${id}.jpg`

/** Each edit swaps a full src/alt(/caption) triple so the picture matches the story. */
const edits = [
  // --- Fanta: Halloween story, not a citrus story ---
  [
    'src/content/articles.ts',
    `    hero: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg',
    heroAlt: 'Bright oranges representing Fanta’s signature color world',
    heroCredit: 'Photo via Pixabay',`,
    `    hero: '${S('2659B518FA')}',
    heroAlt: 'A carved jack-o-lantern glowing next to an old lantern at night',
    heroCredit: 'Photo via StockSnap',`,
  ],
  [
    'src/content/articles.ts',
    `        src: 'https://cdn.pixabay.com/photo/2016/07/21/11/17/drink-1532300_1280.jpg',
        alt: 'Chilled citrus soft drink with ice and orange slices',
        caption: 'Owned characters let packaging, retail, and social share a single cast. Image: Pixabay',`,
    `        src: '${S('365A62JPZG')}',
        alt: 'An assortment of pumpkins and gourds in different shapes and colors',
        caption: 'Four distinct characters give packaging, retail, and social a single cast to share. Image: StockSnap',`,
  ],
  [
    'src/content/articles.ts',
    `        src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1280&q=80',
        alt: 'Dark night sky with stars suggesting spooky seasonal mood',
        caption: 'The visual system stays orange-led but shifts toward cinematic, slightly uncanny horror. Image: Unsplash',`,
    `        src: '${S('BYUZOL58JC')}',
        alt: 'A carved pumpkin on a log with the word Halloween spelled out beneath it',
        caption: 'Owning a season means the same cast has to come back every October. Image: StockSnap',`,
  ],

  // --- Starbucks PSL: autumn, not outer space ---
  [
    'src/content/articles.ts',
    `        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1280&q=80',
        alt: 'Starry night sky suggesting unicorn-weekend fantasy energy',
        caption: 'Fantasy drops need visual escape — not another brown spice flat lay. Image: Pixabay',`,
    `        src: '${S('PAO8SL0NJE')}',
        alt: 'Autumn flat lay with a coffee cup, felt hat, and fallen leaves',
        caption: 'The PSL trades on autumn ritual; the unicorn drop trades on novelty. Image: StockSnap',`,
  ],

  // --- IKEA x Xbox: the article is literally about a D-pad ---
  [
    'src/content/articles.ts',
    `        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1280&q=80',
        alt: 'Product still life suggesting designed objects and packaging care',
        caption: 'Collabs land when the object improves a daily ritual, not when it prints a logo louder. Image: Pixabay',`,
    `        src: '${S('EDD56D3A69')}',
        alt: 'A game controller lit in the dark with its D-pad in view',
        caption: 'Collabs land when the object improves a daily ritual, not when it prints a logo louder. Image: StockSnap',`,
  ],

  // --- Spotify Wrapped: listening, not astronomy ---
  [
    'src/content/moreArticles.ts',
    `        src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1280&q=80',
        alt: 'Starry sky suggesting personal music universes',
        caption: 'Personalization theater still needs scarcity. Image: Pixabay',`,
    `        src: '${S('UXKE7VWPCY')}',
        alt: 'A listener outdoors with headphones resting around her neck',
        caption: 'Personalization theater still needs scarcity. Image: StockSnap',`,
  ],

  // --- Patagonia repair tour: mending gear, not an ocean view ---
  [
    'src/content/moreArticles.ts',
    `    hero: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
    heroAlt: 'Ocean landscape aligning with outdoor brand values',
    heroCredit: 'Photo via Pixabay',`,
    `    hero: '${S('3HY6QI9UFT')}',
    heroAlt: 'A threaded sewing machine set up for garment repairs',
    heroCredit: 'Photo via StockSnap',`,
  ],

  // --- Brand safety in generative search: a search box, not a night sky ---
  [
    'src/content/moreArticles.ts',
    `        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1280&q=80',
        alt: 'Vast night sky suggesting uncertain new media frontiers',
        caption: 'New media risks need new review rituals. Image: Pixabay',`,
    `        src: '${S('IVY2VG1MAD')}',
        alt: 'Someone typing a query into a search engine on a laptop',
        caption: 'New surfaces for discovery need new review rituals. Image: StockSnap',`,
  ],

  // --- Target retail media: a physical store, not a circuit board ---
  [
    'src/content/moreArticles.ts',
    `        src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1280&q=80',
        alt: 'Packaged consumer goods style meal context',
        caption: 'Attention is worthless if the shelf journey breaks. Image: Pixabay',`,
    `        src: '${S('I93PW8NE0F')}',
        alt: 'An open sign hanging in a shop window',
        caption: 'Attention is worthless if the shelf journey breaks. Image: StockSnap',`,
  ],

  // --- Museums: a gallery, not a stack of books ---
  [
    'src/content/extraArticles.ts',
    `        src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1280&q=80',
        alt: 'Books and cultural artifacts aesthetic',
        caption: 'Culture brands are learning product roadmaps. Image: Pixabay',`,
    `        src: '${S('7B52AC0C5F')}',
        alt: 'A visitor standing alone in front of framed paintings in a gallery',
        caption: 'Culture brands are learning product roadmaps. Image: StockSnap',`,
  ],

  // --- Motion in brand guidelines: a camera, not a microphone ---
  [
    'src/content/extraArticles.ts',
    `        src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1280&q=80',
        alt: 'Audio equipment for brand sound',
        caption: 'Sound and motion are brand assets now. Image: Pixabay',`,
    `        src: '${S('OQT16Q7SG7')}',
        alt: 'A camera operator framing a shot on location',
        caption: 'Motion is a brand asset now, and it needs written rules. Image: StockSnap',`,
  ],

  // --- Luxury refills: a premium bottle, not printed paper ---
  [
    'src/content/extraArticles.ts',
    `        src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1280&q=80',
        alt: 'Tactile printed materials',
        caption: 'Touch still sells when the story is circular. Image: Pixabay',`,
    `        src: '${S('0BZ1W3NNQK')}',
        alt: 'A faceted glass fragrance bottle on a soft pink surface',
        caption: 'The vessel has to survive being refilled and still read as luxury. Image: StockSnap',`,
  ],
]

const cache = new Map()
const missing = []
for (const [file, from, to] of edits) {
  if (!cache.has(file)) cache.set(file, fs.readFileSync(file, 'utf8'))
  const text = cache.get(file)
  if (!text.includes(from)) {
    missing.push(from.split('\n')[0].trim())
    continue
  }
  cache.set(file, text.replace(from, to))
}
for (const [file, text] of cache) fs.writeFileSync(file, text)

console.log('applied', edits.length - missing.length, 'of', edits.length)
if (missing.length) console.log('NOT FOUND:\n  ' + missing.join('\n  '))
