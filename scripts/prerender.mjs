import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { render, cityServiceAreas, BUSINESS, pageMeta, buildLocalBusinessSchema, buildFaqSchema } from '../.prerender/entry-server.js'
const template = await readFile('dist/index.html', 'utf8')
const escape = (s) => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const paths = ['/', '/commercial-cleaning', '/service-areas', ...cityServiceAreas.map(c => c.path)]
for (const path of paths) {
  const city = cityServiceAreas.find(c => c.path === path)
  const meta = city?.seo ?? pageMeta[path]
  const url = BUSINESS.url + (path === '/' ? '/' : path)
  let html = template.replace(/<title>.*?<\/title>/s, `<title>${escape(meta.title)}</title>`)
  html = html.replace(/<meta\s+(?:name="description"|property="og:[^"]+")[^>]*>/g, '').replace(/<link\s+rel="canonical"[^>]*>/g, '')
  let head = `<meta name="description" content="${escape(meta.description)}"><link rel="canonical" href="${url}">`
  for (const [key, value] of Object.entries({title:meta.title, description:meta.description, url, image:BUSINESS.ogImage, type:'website'})) head += `<meta property="og:${key}" content="${escape(value)}">`
  if (city) {
    for (const [id,data] of [['local-business',buildLocalBusinessSchema(city)],['faq-page',buildFaqSchema(city.faqs)]]) head += `<script type="application/ld+json" data-pfmb-dynamic-jsonld="true" data-pfmb-jsonld-id="${id}">${JSON.stringify(data).replaceAll('<','\\u003c')}</script>`
  }
  html = html.replace('</head>', head + '</head>').replace('<div id="root"></div>', () => `<div id="root">${render(path)}</div>`)
  const directory = path === '/' ? 'dist' : `dist${path}`
  await mkdir(directory, { recursive: true })
  await writeFile(`${directory}/index.html`, html)
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${BUSINESS.url}${p==='/'?'/':p}</loc></url>`).join('')}</urlset>`)
await rm('.prerender', {recursive:true, force:true})
console.log(`Prerendered ${paths.length} pages with full content and metadata.`)
