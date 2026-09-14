import type { ImageMetadata } from 'astro';

/**
 * One demo client site. Every demo industry is one of these, and the shared
 * page templates under src/pages/demo/[industry]/ render it.
 *
 * The pages are the same for every industry (Home, Services, Areas, About,
 * Contact). What changes per industry lives here: copy, services, colours,
 * form options, and optional sections such as `brands`.
 */
export interface DemoSite {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  monogram: string;
  schemaType: string;
  priceRange: string;

  region: string;
  city: string;
  province: string;

  phone: string;
  phoneHref: string;
  phoneE164: string;
  whatsappHref: string;
  email: string;
  hours: { days: string; time: string; schemaDays?: string[]; opens?: string; closes?: string }[];

  rating: string;
  reviewCount: number;
  years: number;

  theme: {
    navy: string;
    navyDeep: string;
    accent: string;
    accentHover: string;
    onNavy: string;
    tint: string;
  };

  images: {
    hero: ImageMetadata;
    heroAlt: string;
    owner: ImageMetadata;
    ownerAlt: string;
    contact: ImageMetadata;
    contactAlt: string;
  };

  /** Short facts shown under every hero. The Google rating is added automatically. */
  trust: { strong: string; span: string }[];

  /** Optional strip under the homepage hero. Leave out for industries where it doesn't apply. */
  brands?: { label: string; items: string[] };

  home: { h1: string; sub: string; servicesHeading: string; servicesLede: string; reasonsHeading: string; reasonsLede: string };

  services: {
    id: string;
    icon: string;
    title: string;
    short: string;
    symptoms: string[];
    fixes: string[];
    from: string;
  }[];
  servicesPage: { h1: string; sub: string; notListed: string; pricingHeading: string; pricing: { title: string; body: string }[] };

  reasons: { icon: string; title: string; body: string }[];
  steps: { title: string; body: string }[];
  reviews: { name: string; area: string; text: string }[];

  areas: string[];
  areasPage: { h1: string; sub: string };
  /** Suburbs with their own page. Keep these genuinely local or leave them out. */
  areaPages: Record<string, { name: string; nearby: string[]; neighbourhoods: string[] }>;

  about: {
    h1: string;
    sub: string;
    storyHeading: string;
    story: string[];
    ownerName: string;
    ownerRole: string;
    promisesHeading: string;
    promises: { icon: string; title: string; body: string }[];
    credentialsHeading: string;
    credentials: string[];
  };

  contact: { h1: string; sub: string };

  quote: {
    subjectLabel: string;
    subjectPrompt: string;
    options: string[];
    problemLabel: string;
    problemPlaceholder: string;
    fine: string;
  };

  cta: { heading: string; body: string };
  faqs: { q: string; a: string; pages?: ('home' | 'services' | 'areas' | 'contact')[] }[];
}

export const areaSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export const themeStyle = (t: DemoSite['theme']) =>
  `--d-navy:${t.navy};--d-navy-deep:${t.navyDeep};--d-accent:${t.accent};--d-accent-hover:${t.accentHover};--d-on-navy:${t.onNavy};--d-tint:${t.tint}`;

export const faqsFor = (site: DemoSite, page: 'home' | 'services' | 'areas' | 'contact') =>
  site.faqs.filter((f) => !f.pages || f.pages.includes(page));
