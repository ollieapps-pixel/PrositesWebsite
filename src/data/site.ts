/**
 * Every real-world fact the site needs, in one file.
 *
 * Anything wrapped in [SQUARE BRACKETS] is a placeholder that must be
 * replaced before launch — grep the built output for "[" to find stragglers.
 */

export const site = {
  name: 'ProSites',
  domain: 'https://prosites.co.za',
  tagline: 'Websites for home service businesses in Cape Town',
  description:
    'Websites for home service businesses in Cape Town — plumbers, electricians, appliance repair and trades. Built to turn searches into booked jobs.',
  city: 'Cape Town',
  region: 'Western Cape',
  country: 'ZA',
} as const;

export const contact = {
  phone: '[021 000 0000]',
  phoneHref: 'tel:+27210000000',
  whatsapp: '[082 000 0000]',
  whatsappHref: 'https://wa.me/27820000000',
  email: '[hello@prosites.co.za]',
  emailHref: 'mailto:hello@prosites.co.za',
} as const;

export const pricing = {
  once: 'R4,999',
  monthly: 'R499',
  onceNum: 4999,
  monthlyNum: 499,
  /** Get Found add-on prices — NOT CONFIRMED, see the design canvas. */
  ads: '[R1,500]',
  seo: '[R1,200]',
  suggestedSpend: '[R3,000]',
  addOns: [
    { label: 'Extra service area page', price: 'R350' },
    { label: 'Extra service page', price: 'R450' },
    { label: 'Logo design', price: 'R2,500' },
    { label: 'Google Business Profile optimisation', price: 'R1,500' },
    { label: 'Full brand pack — logo, style guide, cards, letterhead', price: 'R4,000' },
  ],
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Demo', href: '/demo/' },
  { label: 'Our Work', href: '/our-work/' },
  { label: 'Start', href: '/start/' },
  { label: 'Get Found', href: '/get-found/' },
] as const;

export const trades = [
  'Plumbers', 'Electricians', 'Appliance Repair', 'Geyser Specialists',
  'Aircon Installation & Repair', 'Garage Door Repair', 'Locksmiths',
  'Pest Control', 'Roofing', 'Pool Services', 'Handyman Services',
  'Painters', 'Cleaning Services', 'Solar & Inverter Installers',
] as const;

export const footerTrades = [
  'Plumbers', 'Electricians', 'Appliance Repair',
  'Geyser Repair', 'Aircon', 'Garage Doors',
] as const;

/**
 * REAL TESTIMONIALS ONLY. These are placeholders — the copy deck is
 * explicit that nothing invented goes here, and that the duplicated
 * testimonial on the current live site must be removed.
 */
export const testimonials = [
  { quote: '[REAL TESTIMONIAL — FixItt Glass, mentioning enquiries or calls]', name: '[Name]', detail: '[Business]' },
  { quote: '[REAL TESTIMONIAL — second client]', name: '[Name]', detail: '[Suburb]' },
  { quote: '[REAL TESTIMONIAL — third client]', name: '[Name]', detail: '[Suburb]' },
] as const;
