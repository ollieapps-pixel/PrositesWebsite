import type { DemoSite } from './types';

const abs = (path: string, base: URL | undefined) => new URL(path, base).href;

export const businessSchema = (site: DemoSite, base: URL | undefined, withServices = false) => ({
  '@context': 'https://schema.org',
  '@type': site.schemaType,
  name: site.name,
  url: abs(`/demo/${site.slug}/`, base),
  telephone: site.phoneE164,
  email: site.email,
  priceRange: site.priceRange,
  address: { '@type': 'PostalAddress', addressLocality: site.city, addressRegion: site.province, addressCountry: 'ZA' },
  areaServed: site.areas.map((a) => ({ '@type': 'Place', name: `${a}, ${site.city}` })),
  openingHoursSpecification: site.hours
    .filter((h) => h.schemaDays)
    .map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.schemaDays, opens: h.opens, closes: h.closes })),
  ...(withServices && {
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${site.tagline} services`,
      itemListElement: site.services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.short } })),
    },
  }),
});

export const faqSchema = (items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const breadcrumbSchema = (crumbs: { name: string; href: string }[], base: URL | undefined) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.href, base) })),
});
