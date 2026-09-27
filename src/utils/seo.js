import { BUSINESS, getCityByPath } from '../data/cityServiceAreas'

const pageMeta = {
  '/': {
    title: 'PFMB Cleaning | Professional Cleaning Services in Orange County',
    description:
      'PFMB Cleaning provides reliable residential and commercial cleaning services in Orange County, CA. Request a free custom quote today.',
  },
  '/commercial-cleaning': {
    title: 'Commercial Cleaning Orange County | PFMB Cleaning',
    description:
      'Office, medical, retail, and property management cleaning in Orange County. Licensed, insured, and flexible scheduling. Request a free walkthrough.',
  },
  '/service-areas': {
    title: 'Service Areas | PFMB Cleaning Orange County',
    description:
      'PFMB Cleaning serves cities across Orange County, CA. Find house and commercial cleaning in your community and request a free quote.',
  },
}

function setMetaTag(selector, attribute, name, content) {
  if (!content) return
  let element = document.querySelector(`${selector}[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

function removeDynamicJsonLd() {
  document.querySelectorAll('[data-pfmb-dynamic-jsonld="true"]').forEach((node) => node.remove())
}

function injectJsonLd(id, data) {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-pfmb-dynamic-jsonld', 'true')
  script.setAttribute('data-pfmb-jsonld-id', id)
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

export function buildLocalBusinessSchema(city) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: '+1-424-206-8097',
    email: BUSINESS.email,
    image: BUSINESS.ogImage,
    description: `Residential and commercial cleaning services in ${city.city}, California and Orange County.`,
    areaServed: [
      {
        '@type': 'City',
        name: city.city,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Orange County',
          containedInPlace: {
            '@type': 'State',
            name: 'California',
          },
        },
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Orange County, CA',
      },
    ],
  }
}

export function buildFaqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function updatePageSeo(pathname) {
  const city = getCityByPath(pathname)
  const meta = city ? city.seo : pageMeta[pathname] ?? pageMeta['/']
  const canonicalUrl = `${BUSINESS.url}${pathname === '/' ? '/' : pathname}`

  document.title = meta.title
  setMetaTag('meta', 'name', 'description', meta.description)
  setMetaTag('meta', 'property', 'og:title', meta.title)
  setMetaTag('meta', 'property', 'og:description', meta.description)
  setMetaTag('meta', 'property', 'og:url', canonicalUrl)
  setMetaTag('meta', 'property', 'og:image', BUSINESS.ogImage)
  setMetaTag('meta', 'property', 'og:type', 'website')
  setMetaTag('meta', 'name', 'twitter:card', 'summary_large_image')
  setMetaTag('meta', 'name', 'twitter:image', BUSINESS.ogImage)
  setCanonical(canonicalUrl)

  removeDynamicJsonLd()

  if (city) {
    injectJsonLd('local-business', buildLocalBusinessSchema(city))
    injectJsonLd('faq-page', buildFaqSchema(city.faqs))
  }
}

export { pageMeta }
