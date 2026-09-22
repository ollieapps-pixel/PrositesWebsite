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

  /** Visual identity. Colours, typeface and corner style all vary per industry. */
  theme: {
    font: DemoFont;
    radius: { btn: string; card: string; tile: string; pill: string; logo: number };
    navy: string;
    navyDeep: string;
    accent: string;
    accentHover: string;
    /** Text colour on accent buttons: dark on light accents, white on dark ones. */
    accentInk: string;
    star: string;
    onNavy: string;
    tint: string;
    /** Icon stroke. Defaults to `navy` when a demo does not set one. */
    icon?: string;
    /** Service card icon tile. Defaults to a `tint` tile with an `icon` glyph. */
    iconTile?: { bg: string; ink: string };
    /** Runs the How it works section as a dark navy band instead of plain. */
    darkSteps?: boolean;
    /**
     * Home page hero layout. 'split' (the default) puts the copy beside the
     * photo. 'overlay' runs the photo full width with a gradient over the copy
     * side, so demos for different trades do not share one layout.
     */
    heroStyle?: 'split' | 'overlay';
    neutrals?: { bg: string; surface: string; ink: string; ink2: string; muted: string; line: string };
  };

  /** One line for the footer, under the logo. */
  blurb: string;

  /** Optional urgent-help strip under the homepage hero, for trades with emergencies. */
  emergency?: { heading: string; body: string; cta: string };

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

/** Typefaces the demo layout loads. Add one here and import it in DemoLayout. */
export const demoFonts = {
  manrope: "'Manrope Variable'",
  rubik: "'Rubik Variable'",
} as const;
export type DemoFont = keyof typeof demoFonts;

export const themeStyle = (t: DemoSite['theme']) => {
  const vars: Record<string, string> = {
    '--d-font': demoFonts[t.font],
    '--d-r-btn': t.radius.btn, '--d-r-card': t.radius.card, '--d-r-tile': t.radius.tile, '--d-r-pill': t.radius.pill,
    '--d-navy': t.navy, '--d-navy-deep': t.navyDeep,
    '--d-accent': t.accent, '--d-accent-hover': t.accentHover, '--d-accent-ink': t.accentInk,
    '--d-star': t.star, '--d-on-navy': t.onNavy, '--d-tint': t.tint,
    '--d-icon': t.icon ?? t.navy,
    ...(t.iconTile ? { '--d-icon-tile-bg': t.iconTile.bg, '--d-icon-tile-ink': t.iconTile.ink } : {}),
  };
  if (t.neutrals) Object.assign(vars, {
    '--d-bg': t.neutrals.bg, '--d-surface': t.neutrals.surface, '--d-ink': t.neutrals.ink,
    '--d-ink-2': t.neutrals.ink2, '--d-muted': t.neutrals.muted, '--d-line': t.neutrals.line,
  });
  return Object.entries(vars).map(([k, v]) => `${k}:${v}`).join(';');
};

export const faqsFor = (site: DemoSite, page: 'home' | 'services' | 'areas' | 'contact') =>
  site.faqs.filter((f) => !f.pages || f.pages.includes(page));
