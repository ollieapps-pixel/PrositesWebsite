/**
 * Ridgeway Appliance Repairs — ProSites demo site data.
 *
 * FICTIONAL BUSINESS. Every name, number, price, rating and review below is
 * SAMPLE content for the demo. For a real client, this is the only file that
 * changes: swap the facts, keep the template.
 */

export const biz = {
  name: 'Ridgeway Appliance Repairs',
  short: 'Ridgeway',
  base: '/demo/appliance-repair',
  region: "Cape Town's Northern Suburbs",
  city: 'Cape Town',
  // Fictional, deliberately undialable — no real person answers this.
  phone: '021 000 0000',
  phoneHref: 'tel:+27210000000',
  whatsappHref:
    'https://wa.me/27000000000?text=' +
    encodeURIComponent('Hi Ridgeway, I need an appliance repaired.'),
  email: 'bookings@ridgeway.example',
  hours: [
    { days: 'Monday to Friday', time: '07:30 to 17:30' },
    { days: 'Saturday', time: '08:00 to 13:00' },
    { days: 'Sunday', time: 'Closed' },
  ],
  callout: 'R450',
  rating: '4.9',
  reviewCount: 214,
  years: 12,
  guaranteeDays: 90,
} as const;

export const brands = ['Samsung', 'LG', 'Defy', 'Bosch', 'Whirlpool', 'Smeg', 'Hisense', 'AEG'] as const;

export const services = [
  {
    icon: 'fridge',
    title: 'Fridge not cooling',
    body: 'Warm fridge, freezer icing up, or a fridge that clicks and never starts. Thermostats, fans, gas and compressors.',
    from: 'R650',
  },
  {
    icon: 'washer',
    title: 'Washing machine not draining',
    body: 'Water left in the drum, no spin, leaking, or stopping mid-cycle. Pumps, belts, door locks and control boards.',
    from: 'R550',
  },
  {
    icon: 'oven',
    title: 'Oven not heating',
    body: 'Oven stays cold, heats unevenly or trips the power. Elements, thermostats, fans and ignition.',
    from: 'R550',
  },
  {
    icon: 'dishwasher',
    title: 'Dishwasher leaking',
    body: 'Water on the floor, dishes still dirty, or it will not drain. Seals, pumps, spray arms and inlet valves.',
    from: 'R550',
  },
  {
    icon: 'dryer',
    title: 'Tumble dryer not drying',
    body: 'Clothes still damp, drum not turning or no heat. Elements, belts, sensors and thermal fuses.',
    from: 'R500',
  },
  {
    icon: 'stove',
    title: 'Stove plate not working',
    body: 'One plate dead, a plate stuck on high, or a switch that sparks. Plates, switches and wiring.',
    from: 'R450',
  },
] as const;

export const reasons = [
  { icon: 'tag', title: `${biz.callout} callout, stated upfront`, body: 'You know the fee before we arrive, and it comes off the repair if you go ahead.' },
  { icon: 'shield', title: `${biz.guaranteeDays}-day guarantee`, body: 'Parts and labour. If the same fault comes back, so do we, at no charge.' },
  { icon: 'clock', title: 'Same-week callouts', body: 'Most repairs are booked within two working days, and many on the same day.' },
  { icon: 'card', title: 'Pay how you like', body: 'Card, EFT or SnapScan on completion. No cash needed and no deposit.' },
] as const;

export const steps = [
  { title: 'Tell us what is wrong', body: 'Call, WhatsApp or send the form. A photo of the model sticker helps us bring the right part.' },
  { title: 'We confirm a time', body: `We give you a two-hour window and remind you of the ${biz.callout} callout before we come.` },
  { title: 'Fixed and guaranteed', body: `We quote before any work starts. Once it is fixed, it is guaranteed for ${biz.guaranteeDays} days.` },
] as const;

export const reviews = [
  { name: 'Thandeka M.', area: 'Bellville', text: 'Fridge died on a Friday with a full freezer. They were here Saturday morning and it was cold again by lunch.' },
  { name: 'Johan van der Merwe', area: 'Durbanville', text: 'Told me the callout price on the phone and stuck to it. Washing machine pump replaced in under an hour.' },
  { name: 'Priya Naidoo', area: 'Milnerton', text: 'Honest enough to tell me my old dishwasher was not worth fixing. That is why I will call them again.' },
] as const;

export const areas = [
  'Durbanville', 'Bellville', 'Brackenfell', 'Kraaifontein', 'Parow', 'Goodwood',
  'Milnerton', 'Table View', 'Tygervalley', 'Kuils River', 'Plattekloof', 'Edgemead',
] as const;

/** Areas that have their own page. Add a slug here to publish another. */
export const areaPages: Record<string, { name: string; nearby: string[]; neighbourhoods: string[] }> = {
  durbanville: {
    name: 'Durbanville',
    nearby: ['Bellville', 'Brackenfell', 'Kraaifontein', 'Tygervalley'],
    neighbourhoods: ['Aurora', 'Sonstraal Heights', 'Vierlanden', 'Pinehurst', 'Kenridge', 'Durbanville Hills'],
  },
};

export const areaSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export const faqs = [
  { q: 'How much is the callout fee?', a: `${biz.callout}, and we tell you before we book. If you go ahead with the repair, the callout comes off the final price.` },
  { q: 'Do you repair my brand?', a: 'We repair all the major brands sold in South Africa, including Samsung, LG, Defy, Bosch, Whirlpool, Smeg, Hisense and AEG. Tell us the make and model when you book.' },
  { q: 'Is the repair guaranteed?', a: `Yes. Parts and labour are guaranteed for ${biz.guaranteeDays} days. If the same fault comes back in that time, we fix it at no charge.` },
  { q: 'How soon can you come out?', a: 'Most callouts are booked within two working days, and we often have same-day slots. WhatsApp is the fastest way to check.' },
  { q: 'Which areas do you cover?', a: `We cover ${areas.slice(0, -1).join(', ')} and ${areas[areas.length - 1]}. Not sure if you are in our area? Ask us.` },
  { q: 'How do I pay?', a: 'Card, EFT or SnapScan once the job is done. We never ask for a deposit.' },
] as const;
