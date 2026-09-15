/**
 * Tidewater Plumbing — ProSites demo site.
 *
 * FICTIONAL BUSINESS. Every name, number, price, rating and review here is
 * SAMPLE content. For a real client, copy this file, change the facts, and
 * register it in ./index.ts.
 */
import type { DemoSite } from './types';
import hero from '../../assets/placeholder/hero.jpg';
import customer from '../../assets/placeholder/customer-searching.jpg';

const callout = 'R550';
const afterHours = 'R950';

export const plumbing: DemoSite = {
  slug: 'plumbing',
  name: 'Tidewater Plumbing',
  short: 'Tidewater',
  tagline: 'Plumbing',
  monogram: 'T',
  schemaType: 'Plumber',
  priceRange: `From ${callout} callout`,

  region: "Cape Town's Southern Suburbs",
  city: 'Cape Town',
  province: 'Western Cape',

  // Fictional and deliberately undialable, so no real person gets called.
  phone: '021 000 0002',
  phoneHref: 'tel:+27210000002',
  phoneE164: '+27210000002',
  whatsappHref: 'https://wa.me/27000000000?text=' + encodeURIComponent('Hi Tidewater, I need a plumber.'),
  email: 'help@tidewater.example',
  hours: [
    { days: 'Monday to Friday', time: '07:00 to 18:00', schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '18:00' },
    { days: 'Saturday', time: '08:00 to 14:00', schemaDays: ['Saturday'], opens: '08:00', closes: '14:00' },
    { days: 'Emergencies', time: '24 hours, every day' },
  ],

  rating: '4.8',
  reviewCount: 187,
  years: 9,

  theme: {
    font: 'rubik',
    radius: { btn: '12px', card: '18px', tile: '14px', pill: '999px', logo: 9 },
    navy: '#2d3338',
    navyDeep: '#1a1e21',
    accent: '#d62839',
    accentHover: '#b51f2f',
    accentInk: '#ffffff',
    star: '#f3b019',
    onNavy: '#c9ced2',
    tint: '#f3efec',
    neutrals: { bg: '#f7f6f4', surface: '#ffffff', ink: '#1c2023', ink2: '#3b4146', muted: '#60676d', line: '#e4e1dd' },
  },

  images: {
    hero,
    heroAlt: 'Tidewater plumber arriving with his toolbox, on a call with the customer',
    owner: hero,
    ownerAlt: 'Deon Adams, owner of Tidewater Plumbing',
    contact: customer,
    contactAlt: 'Customer booking a plumber on her phone',
  },

  blurb: "Burst pipes, geysers, blocked drains and leaks fixed properly, across Cape Town's Southern Suburbs.",

  emergency: {
    heading: 'Burst pipe or geyser?',
    body: 'Turn off the water at the mains and call us. We answer 24 hours a day.',
    cta: 'Call 24/7',
  },

  trust: [
    { strong: '24/7', span: 'for burst pipes and geysers' },
    { strong: `${callout} callout`, span: 'credited to the repair' },
    { strong: '6-month guarantee', span: 'on all workmanship' },
  ],

  home: {
    h1: "Plumbers in Cape Town's Southern Suburbs",
    sub: 'Burst pipes, geysers, blocked drains and leaks fixed properly. Upfront callout fee, and a plumber who answers the phone.',
    servicesHeading: 'What we fix',
    servicesLede: 'From a dripping tap to water pouring through the ceiling.',
    reasonsHeading: 'Plumbing without the runaround',
    reasonsLede: 'What people want to know before a plumber walks into their home.',
  },

  services: [
    {
      id: 'burst-pipes', icon: 'drop', title: 'Burst pipes and leaks', from: 'R650',
      short: 'Water through the ceiling, a burst pipe in the wall, or a leak you can hear but not see.',
      symptoms: ['Water coming through a ceiling or wall', 'Damp patches or bubbling paint', 'Water meter running with every tap off', 'Pressure drops suddenly across the house'],
      fixes: ['Burst and cracked pipes', 'Leaking joints and fittings', 'Stopcocks and isolation valves', 'Emergency shut-off and making the leak safe'],
    },
    {
      id: 'geyser-repairs', icon: 'geyser', title: 'Geyser repairs and replacements', from: 'R950',
      short: 'No hot water, a leaking or burst geyser, or a geyser tripping the power.',
      symptoms: ['No hot water, or it runs out fast', 'Water dripping from the ceiling near the geyser', 'The geyser keeps tripping the electricity', 'Overflow pipe running constantly'],
      fixes: ['Elements and thermostats', 'Pressure valves and vacuum breakers', 'Drip trays and overflow pipes', 'Full replacements with a Certificate of Compliance'],
    },
    {
      id: 'blocked-drains', icon: 'drain', title: 'Blocked drains', from: 'R750',
      short: 'Slow sinks, a blocked toilet, or water backing up outside.',
      symptoms: ['Sink or shower draining slowly', 'Toilet blocked or overflowing', 'Gurgling or bad smells from drains', 'Water backing up from an outside gully'],
      fixes: ['Kitchen, bathroom and shower drains', 'Toilet blockages', 'Outside gullies and manholes', 'Root and grease blockages'],
    },
    {
      id: 'taps-and-toilets', icon: 'tap', title: 'Taps, toilets and cisterns', from: 'R550',
      short: 'A dripping tap, a toilet that keeps running, or a cistern that will not fill.',
      symptoms: ['Tap still drips after it is closed', 'Toilet runs long after flushing', 'Cistern slow to fill, or not filling', 'Leaking under the basin'],
      fixes: ['Tap washers, cartridges and mixers', 'Cistern valves and flush mechanisms', 'Toilet seals and connectors', 'Basin traps and waste pipes'],
    },
    {
      id: 'leak-detection', icon: 'leakSearch', title: 'Leak detection', from: 'R1,200',
      short: 'A water bill that has jumped, or damp with no obvious cause.',
      symptoms: ['Water bill much higher than usual', 'Damp on walls or floors with no visible leak', 'Running water sound when everything is off', 'Warm patches on a tiled floor'],
      fixes: ['Pressure testing the water supply', 'Pinpointing hidden leaks before opening walls', 'Repairing the leak once it is found', 'A report for your insurer if you need one'],
    },
    {
      id: 'installations', icon: 'bath', title: 'Bathroom and kitchen plumbing', from: 'R850',
      short: 'New taps, basins and showers, or connecting a dishwasher or washing machine.',
      symptoms: ['You want a new tap or mixer fitted', 'A basin or shower needs moving', 'A new dishwasher or washing machine needs connecting', 'You are renovating a kitchen or bathroom'],
      fixes: ['Taps, basins, showers and toilets', 'Washing machine and dishwasher points', 'Pipework for renovations', 'Water-saving fittings'],
    },
  ],

  servicesPage: {
    h1: 'Plumbing Services',
    sub: `Every job starts with a ${callout} callout, credited to the repair if you go ahead. Emergencies 24 hours a day.`,
    notListed: 'Water tanks, pressure pumps, outside taps and most other household plumbing too. Ask us.',
    pricingHeading: 'How our pricing works',
    pricing: [
      { title: `${callout} callout in business hours`, body: 'You know the fee before we come, and it comes off the repair if you go ahead.' },
      { title: `${afterHours} after-hours emergencies`, body: 'Nights, weekends and public holidays. We confirm the fee on the phone first.' },
      { title: 'A quote before any work', body: 'We find the problem and tell you the full price. Nothing starts until you say yes.' },
      { title: 'Help with insurance claims', body: 'For burst geysers and pipes, we give you the report and photos your insurer asks for.' },
    ],
  },

  reasons: [
    { icon: 'tag', title: `${callout} callout, stated upfront`, body: 'You hear the fee on the phone, and it comes off the repair if you go ahead.' },
    { icon: 'clock', title: '24/7 for emergencies', body: 'Burst pipe at two in the morning? Someone answers, and a plumber is on the way.' },
    { icon: 'shield', title: '6-month guarantee', body: 'If the same problem comes back within six months, we fix it at no charge.' },
    { icon: 'card', title: 'Pay how you like', body: 'Card, EFT or SnapScan when the job is done. No deposit on repairs.' },
  ],

  steps: [
    { title: 'Call, WhatsApp or send the form', body: 'For a burst pipe or geyser, call. For everything else, WhatsApp or the form works well.' },
    { title: 'We confirm and come out', body: 'Emergencies go to the next available plumber. Other jobs get a two-hour arrival window.' },
    { title: 'Quoted, fixed, guaranteed', body: 'We quote before we start, and the workmanship is guaranteed for six months.' },
  ],

  reviews: [
    { name: 'Megan T.', area: 'Claremont', text: 'Geyser burst on a Sunday night. They answered, turned up within the hour, and sorted the insurance report the next day.' },
    { name: 'Farouk A.', area: 'Wynberg', text: 'Quoted the blocked drain on the phone and the price did not change. In and out in forty minutes.' },
    { name: 'Liesl du Plessis', area: 'Constantia', text: 'Found a hidden leak two other plumbers missed. Our water bill is back to normal.' },
    { name: 'Bongani N.', area: 'Rondebosch', text: 'Deon explained exactly what was wrong with the toilet before touching anything. No upselling at all.' },
    { name: 'Chantelle R.', area: 'Plumstead', text: 'Arrived in the window they gave me and cleaned up properly afterwards. Will use them again.' },
    { name: 'Mark H.', area: 'Newlands', text: 'New kitchen tap and dishwasher point done in one visit, neatly, for the price they quoted.' },
  ],

  areas: ['Claremont', 'Rondebosch', 'Newlands', 'Kenilworth', 'Wynberg', 'Plumstead', 'Constantia', 'Bergvliet', 'Tokai', 'Rosebank', 'Observatory', 'Muizenberg'],
  areasPage: {
    h1: 'Areas We Cover',
    sub: "We work across Cape Town's Southern Suburbs, and there is usually a plumber on the road nearby.",
  },
  areaPages: {
    claremont: {
      name: 'Claremont',
      nearby: ['Newlands', 'Kenilworth', 'Rondebosch', 'Wynberg'],
      neighbourhoods: ['Harfield Village', 'Upper Claremont', 'Lower Claremont'],
    },
  },

  about: {
    h1: 'About Tidewater Plumbing',
    sub: "A local plumbing team serving Cape Town's Southern Suburbs for 9 years.",
    storyHeading: 'It started with one burst geyser',
    story: [
      'Tidewater started when Deon Adams fixed a neighbour\'s burst geyser on a Sunday and got three calls the following week. Nine years later we are a team of four plumbers, and Deon still does call-outs himself.',
      'We keep the business small on purpose. You deal with the same people each time, and the plumber who quotes the job is the one who does it.',
    ],
    ownerName: 'Deon Adams',
    ownerRole: 'Owner and qualified plumber',
    promisesHeading: 'How we work in your home',
    promises: [
      { icon: 'tag', title: 'Quote before we start', body: 'You hear the callout when you book and get the full price before any work begins.' },
      { icon: 'clock', title: 'On time, or we call', body: 'We arrive in the window we give you. If a job runs over, you hear from us first.' },
      { icon: 'shield', title: 'Guaranteed work', body: 'Workmanship is guaranteed for six months. Same problem, we come back free.' },
      { icon: 'doc', title: 'Straight answers', body: 'We tell you what is wrong and what it will cost, without talking you into extras.' },
    ],
    credentialsHeading: 'The details that matter',
    credentials: [
      'Qualified, registered plumbers',
      'Certificate of Compliance on every geyser installation',
      'Public liability insurance',
      'Reports and photos for insurance claims',
    ],
  },

  contact: {
    h1: 'Book a Plumber',
    sub: `Send the form and we will confirm a time and the ${callout} callout. For a burst pipe or geyser, call us now.`,
  },

  quote: {
    subjectLabel: 'Problem type',
    subjectPrompt: 'What do you need?',
    options: ['Burst pipe or leak', 'Geyser', 'Blocked drain', 'Taps or toilet', 'Leak detection', 'Installation or renovation', 'Something else'],
    problemLabel: 'Tell us more',
    problemPlaceholder: 'For example: water coming through the ceiling under the bathroom',
    fine: `Callout ${callout}, credited to the repair. Water pouring out right now? Call us instead.`,
  },

  cta: {
    heading: 'Leak, blockage or no hot water? We can usually come today.',
    body: `Call, WhatsApp or send the form. ${callout} callout, credited to the repair.`,
  },

  faqs: [
    { q: 'How much is the callout fee?', a: `${callout} during business hours, and we tell you before we book. If you go ahead with the repair, the callout comes off the final price.`, pages: ['home', 'services', 'contact'] },
    { q: 'Do you do emergency call-outs?', a: `Yes, 24 hours a day for burst pipes, geysers and major leaks. The after-hours callout is ${afterHours}, and we confirm it on the phone before we come.`, pages: ['home', 'services', 'contact'] },
    { q: 'Can you help with a geyser insurance claim?', a: 'Yes. We assess the damage, take photos, and give you the report most insurers ask for. Geyser replacements come with a Certificate of Compliance.', pages: ['home', 'services'] },
    { q: 'Is the work guaranteed?', a: 'Workmanship is guaranteed for six months. If the same problem comes back in that time, we fix it at no charge. Parts carry the manufacturer warranty.', pages: ['home', 'services', 'contact'] },
    { q: 'How soon can you come out?', a: 'Emergencies go to the next available plumber, usually within the hour. Other jobs are normally booked for the same or next working day.', pages: ['home', 'contact', 'areas'] },
    { q: 'Which areas do you cover?', a: 'We cover Claremont, Rondebosch, Newlands, Kenilworth, Wynberg, Plumstead, Constantia, Bergvliet, Tokai, Rosebank, Observatory and Muizenberg. Not sure if you are in our area? Ask us.', pages: ['home', 'areas'] },
    { q: 'Do you charge more for my area?', a: 'No. The callout and repair prices are the same in every suburb we cover.', pages: ['areas'] },
    { q: 'How do I pay?', a: 'Card, EFT or SnapScan once the job is done. We only ask for a deposit on larger installations.', pages: ['home', 'contact'] },
  ],
};
