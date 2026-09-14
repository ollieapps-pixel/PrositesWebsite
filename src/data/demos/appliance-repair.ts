/**
 * Ridgeway Appliance Repairs — ProSites demo site.
 *
 * FICTIONAL BUSINESS. Every name, number, price, rating and review here is
 * SAMPLE content. For a real client, copy this file, change the facts, and
 * register it in ./index.ts.
 */
import type { DemoSite } from './types';
import hero from '../../assets/placeholder/hero.jpg';
import customer from '../../assets/placeholder/customer-searching.jpg';

const callout = 'R450';
const guarantee = 90;

export const applianceRepair: DemoSite = {
  slug: 'appliance-repair',
  name: 'Ridgeway Appliance Repairs',
  short: 'Ridgeway',
  tagline: 'Appliance Repairs',
  monogram: 'R',
  schemaType: 'HomeAndConstructionBusiness',
  priceRange: `From ${callout} callout`,

  region: "Cape Town's Northern Suburbs",
  city: 'Cape Town',
  province: 'Western Cape',

  // Fictional and deliberately undialable, so no real person gets called.
  phone: '021 000 0000',
  phoneHref: 'tel:+27210000000',
  phoneE164: '+27210000000',
  whatsappHref: 'https://wa.me/27000000000?text=' + encodeURIComponent('Hi Ridgeway, I need an appliance repaired.'),
  email: 'bookings@ridgeway.example',
  hours: [
    { days: 'Monday to Friday', time: '07:30 to 17:30', schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:30', closes: '17:30' },
    { days: 'Saturday', time: '08:00 to 13:00', schemaDays: ['Saturday'], opens: '08:00', closes: '13:00' },
    { days: 'Sunday', time: 'Closed' },
  ],

  rating: '4.9',
  reviewCount: 214,
  years: 12,

  theme: {
    navy: '#123a66',
    navyDeep: '#0b2545',
    accent: '#f5a524',
    accentHover: '#e3901a',
    onNavy: '#c9d6e6',
    tint: '#e9eff6',
  },

  images: {
    hero,
    heroAlt: "Ridgeway technician on a call in a customer's kitchen",
    owner: hero,
    ownerAlt: 'Sipho Dlamini, owner of Ridgeway Appliance Repairs',
    contact: customer,
    contactAlt: 'Customer booking an appliance repair on her phone',
  },

  trust: [
    { strong: '12 years', span: 'repairing in Cape Town' },
    { strong: `${callout} callout`, span: 'credited to the repair' },
    { strong: `${guarantee}-day guarantee`, span: 'parts and labour' },
  ],

  brands: {
    label: 'We repair all major brands',
    items: ['Samsung', 'LG', 'Defy', 'Bosch', 'Whirlpool', 'Smeg', 'Hisense', 'AEG'],
  },

  home: {
    h1: "Appliance Repairs in Cape Town's Northern Suburbs",
    sub: 'Fridges, washing machines, ovens and dishwashers repaired at your home. Same-week callouts, and you know the price before we start.',
    servicesHeading: 'What we fix',
    servicesLede: 'Tell us what the appliance is doing. You do not need to know what is broken.',
    reasonsHeading: 'No surprises on the bill',
    reasonsLede: 'The things people worry about before they let a repairman into the house, answered upfront.',
  },

  services: [
    {
      id: 'fridge-repair', icon: 'fridge', title: 'Fridge and freezer repairs', from: 'R650',
      short: 'Warm fridge, freezer icing up, or a fridge that clicks and never starts.',
      symptoms: ['Fridge is warm but the light still comes on', 'Freezer frosting over or not freezing', 'Clicking, and the compressor never starts', 'Water pooling under the crisper drawers'],
      fixes: ['Thermostats and temperature sensors', 'Evaporator and condenser fans', 'Defrost timers and heaters', 'Compressor relays and re-gassing'],
    },
    {
      id: 'washing-machine-repair', icon: 'washer', title: 'Washing machine repairs', from: 'R550',
      short: 'Water left in the drum, no spin, leaking, or stopping mid-cycle.',
      symptoms: ['Water left in the drum after a cycle', 'Will not spin, or spins weakly', 'Leaking from the door or underneath', 'Stops mid-cycle or shows an error code'],
      fixes: ['Drain pumps and filters', 'Drive belts and motor brushes', 'Door seals and door locks', 'Control boards and error-code faults'],
    },
    {
      id: 'oven-repair', icon: 'oven', title: 'Oven repairs', from: 'R550',
      short: 'Oven stays cold, heats unevenly or trips the power.',
      symptoms: ['Oven stays cold or heats slowly', 'Burns on one side, raw on the other', 'Trips the power when switched on', 'Fan runs but there is no heat'],
      fixes: ['Top, bottom and fan elements', 'Thermostats and selector switches', 'Fan motors', 'Wiring and connector faults'],
    },
    {
      id: 'dishwasher-repair', icon: 'dishwasher', title: 'Dishwasher repairs', from: 'R550',
      short: 'Water on the floor, dishes still dirty, or it will not drain.',
      symptoms: ['Water on the kitchen floor', 'Dishes come out dirty or gritty', 'Will not drain at the end of a cycle', 'Will not fill with water'],
      fixes: ['Door seals and hoses', 'Drain pumps and filters', 'Spray arms and circulation pumps', 'Water inlet valves'],
    },
    {
      id: 'tumble-dryer-repair', icon: 'dryer', title: 'Tumble dryer repairs', from: 'R500',
      short: 'Clothes still damp, drum not turning, or no heat.',
      symptoms: ['Clothes still damp after a full cycle', 'Drum does not turn', 'Runs but produces no heat', 'Cuts out part way through'],
      fixes: ['Heating elements and thermal fuses', 'Drive belts and drum rollers', 'Moisture sensors', 'Thermostats'],
    },
    {
      id: 'stove-repair', icon: 'stove', title: 'Electric stove repairs', from: 'R450',
      short: 'One plate dead, a plate stuck on high, or a switch that sparks.',
      symptoms: ['One plate will not heat', 'A plate stuck on high', 'A switch sparks or smells burnt', 'Warning light stays on'],
      fixes: ['Solid and radiant plates', 'Energy regulators and switches', 'Internal wiring', 'Warning lights and indicators'],
    },
  ],

  servicesPage: {
    h1: 'Appliance Repair Services',
    sub: `Every repair starts with a ${callout} callout, credited to the repair if you go ahead. We quote before we touch anything.`,
    notListed: 'Microwaves, extractor fans, chest freezers and most other household appliances too. Ask us.',
    pricingHeading: 'How our pricing works',
    pricing: [
      { title: `${callout} callout, stated upfront`, body: 'You know the fee before we arrive, and it comes off the repair if you go ahead.' },
      { title: 'A quote before any work', body: 'We diagnose the fault and tell you the full price. Nothing is done until you say yes.' },
      { title: '"From" prices include labour', body: 'They cover the most common repair for that appliance. Parts are quoted before we start.' },
      { title: 'Not worth fixing? We say so', body: 'If a repair costs more than the appliance is worth, we tell you, and you only pay the callout.' },
    ],
  },

  reasons: [
    { icon: 'tag', title: `${callout} callout, stated upfront`, body: 'You know the fee before we arrive, and it comes off the repair if you go ahead.' },
    { icon: 'shield', title: `${guarantee}-day guarantee`, body: 'Parts and labour. If the same fault comes back, so do we, at no charge.' },
    { icon: 'clock', title: 'Same-week callouts', body: 'Most repairs are booked within two working days, and many on the same day.' },
    { icon: 'card', title: 'Pay how you like', body: 'Card, EFT or SnapScan on completion. No cash needed and no deposit.' },
  ],

  steps: [
    { title: 'Tell us what is wrong', body: 'Call, WhatsApp or send the form. A photo of the model sticker helps us bring the right part.' },
    { title: 'We confirm a time', body: `We give you a two-hour window and remind you of the ${callout} callout before we come.` },
    { title: 'Fixed and guaranteed', body: `We quote before any work starts. Once it is fixed, it is guaranteed for ${guarantee} days.` },
  ],

  reviews: [
    { name: 'Thandeka M.', area: 'Bellville', text: 'Fridge died on a Friday with a full freezer. They were here Saturday morning and it was cold again by lunch.' },
    { name: 'Johan van der Merwe', area: 'Durbanville', text: 'Told me the callout price on the phone and stuck to it. Washing machine pump replaced in under an hour.' },
    { name: 'Priya Naidoo', area: 'Milnerton', text: 'Honest enough to tell me my old dishwasher was not worth fixing. That is why I will call them again.' },
    { name: 'Riaan S.', area: 'Brackenfell', text: 'Oven element gone the day before a family lunch. Sipho came the same afternoon and it was working in forty minutes.' },
    { name: 'Nadia Hendricks', area: 'Parow', text: 'Clear WhatsApp updates the whole way. Arrived in the window they gave me and left the kitchen cleaner than they found it.' },
    { name: 'Lwazi K.', area: 'Table View', text: 'Tumble dryer had been dead for a month. Fixed in one visit, and the price was exactly what they quoted.' },
  ],

  areas: ['Durbanville', 'Bellville', 'Brackenfell', 'Kraaifontein', 'Parow', 'Goodwood', 'Milnerton', 'Table View', 'Tygervalley', 'Kuils River', 'Plattekloof', 'Edgemead'],
  areasPage: {
    h1: 'Areas We Cover',
    sub: `We repair appliances at your home across ${"Cape Town's Northern Suburbs"}, and there is usually a technician working nearby.`,
  },
  areaPages: {
    durbanville: {
      name: 'Durbanville',
      nearby: ['Bellville', 'Brackenfell', 'Kraaifontein', 'Tygervalley'],
      neighbourhoods: ['Aurora', 'Sonstraal Heights', 'Vierlanden', 'Pinehurst', 'Kenridge', 'Durbanville Hills'],
    },
  },

  about: {
    h1: 'About Ridgeway Appliance Repairs',
    sub: `A small, local team repairing appliances across Cape Town's Northern Suburbs for 12 years.`,
    storyHeading: 'One technician, one bakkie, twelve years ago',
    story: [
      'Ridgeway started as one technician with a bakkie and a toolbox in Bellville. Twelve years later we are still a small team, and the person who answers the phone is usually the person who fixes your fridge.',
      'We only do appliance repairs. No installations, no sales, no extended warranties to sell you. That means we have no reason to talk you into a new machine when a replacement part will do.',
    ],
    ownerName: 'Sipho Dlamini',
    ownerRole: 'Owner and lead technician',
    promisesHeading: 'How we work in your home',
    promises: [
      { icon: 'tag', title: 'Price before work', body: 'The callout is stated when you book, and the repair is quoted before we start.' },
      { icon: 'doc', title: 'Straight advice', body: 'If it is not worth repairing, we tell you, even if that means a smaller bill for us.' },
      { icon: 'shield', title: 'Guaranteed repairs', body: `Parts and labour are guaranteed for ${guarantee} days. Same fault, we come back free.` },
      { icon: 'clock', title: 'On time, cleaned up', body: 'We arrive in the window we give you, protect your floors, and leave the kitchen as we found it.' },
    ],
    credentialsHeading: 'The details that matter',
    credentials: [
      'Registered South African business',
      'Public liability insurance',
      'Experienced with all major appliance brands',
      'Quality replacement parts, with the old part shown to you',
    ],
  },

  contact: {
    h1: 'Book an Appliance Repair',
    sub: `Send the form and we will confirm a time and the ${callout} callout. Call or WhatsApp for the fastest answer.`,
  },

  quote: {
    subjectLabel: 'Appliance',
    subjectPrompt: 'What needs fixing?',
    options: ['Fridge or freezer', 'Washing machine', 'Oven or stove', 'Dishwasher', 'Tumble dryer', 'Something else'],
    problemLabel: 'What is wrong with it?',
    problemPlaceholder: 'For example: fridge is running but not getting cold',
    fine: `Callout ${callout}, credited to the repair. No obligation until you approve the quote.`,
  },

  cta: {
    heading: 'Appliance broken? We can usually be there this week.',
    body: `Call, WhatsApp or send the form. ${callout} callout, credited to the repair.`,
  },

  faqs: [
    { q: 'How much is the callout fee?', a: `${callout}, and we tell you before we book. If you go ahead with the repair, the callout comes off the final price.`, pages: ['home', 'services', 'contact'] },
    { q: 'Do you repair my brand?', a: 'We repair all the major brands sold in South Africa, including Samsung, LG, Defy, Bosch, Whirlpool, Smeg, Hisense and AEG. Tell us the make and model when you book.', pages: ['home', 'services'] },
    { q: 'Is the repair guaranteed?', a: `Yes. Parts and labour are guaranteed for ${guarantee} days. If the same fault comes back in that time, we fix it at no charge.`, pages: ['home', 'services', 'contact'] },
    { q: 'How soon can you come out?', a: 'Most callouts are booked within two working days, and we often have same-day slots. WhatsApp is the fastest way to check.', pages: ['home', 'contact', 'areas'] },
    { q: 'Which areas do you cover?', a: "We cover Durbanville, Bellville, Brackenfell, Kraaifontein, Parow, Goodwood, Milnerton, Table View, Tygervalley, Kuils River, Plattekloof and Edgemead. Not sure if you are in our area? Ask us.", pages: ['home', 'areas'] },
    { q: 'Do you charge more for my area?', a: 'No. The callout and repair prices are the same everywhere we work.', pages: ['areas'] },
    { q: 'How do I pay?', a: 'Card, EFT or SnapScan once the job is done. We never ask for a deposit.', pages: ['home', 'contact'] },
    { q: 'Is it worth repairing an old appliance?', a: 'Often, yes. Most faults are a single part. If the repair would cost more than the appliance is worth, we tell you before any work, and you only pay the callout.', pages: ['services'] },
  ],
};
