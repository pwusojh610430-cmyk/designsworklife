/**
 * Search Openverse for topical, freely-licensed photos and print candidates.
 * Usage: node scripts/find-images.mjs "halloween pumpkin" "jack o lantern"
 */
const queries = process.argv.slice(2)

for (const q of queries) {
  const url =
    'https://api.openverse.org/v1/images/?' +
    new URLSearchParams({
      q,
      source: 'stocksnap',
      license_type: 'commercial',
      page_size: '6',
      aspect_ratio: 'wide',
      size: 'large',
      mature: 'false',
    })
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'designsworklife/1.0' } })
    if (!res.ok) {
      console.log(`\n### ${q} -> HTTP ${res.status}`)
      continue
    }
    const data = await res.json()
    console.log(`\n### ${q}  (${data.result_count} results)`)
    for (const r of data.results ?? []) {
      console.log(`  ${r.title?.slice(0, 60)} | ${r.provider} | ${r.license}`)
      console.log(`    ${r.url}`)
    }
  } catch (e) {
    console.log(`\n### ${q} -> ERROR ${e.message}`)
  }
}
