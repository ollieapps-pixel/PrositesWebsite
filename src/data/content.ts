/** Page copy, lifted from the ProSites copy deck. Layout lives in the pages. */

export const trustBar = [
  { icon: 'clock', label: 'Live in 14 days' },
  { icon: 'grid', label: 'Website + job app in one' },
  { icon: 'tag', label: 'Fixed pricing, no surprises' },
  { icon: 'pin', label: 'Built for South African trades' },
] as const;

export const problem = {
  h2: 'Running a Home Service Business Is Harder Than It Should Be',
  lede: 'Many home service businesses struggle with the chaos of disconnected tools and manual processes:',
  bullets: [
    'Websites that don&rsquo;t bring in enquiries',
    'Losing track of jobs and customer details',
    'Managing everything through WhatsApp or notebooks',
    'No central system for jobs and technicians',
    'Expensive or complicated software',
  ],
  close: 'That&rsquo;s why we built a simple system designed specifically for home service businesses.',
} as const;

export const solution = [
  'ProSites builds websites and job management software for home service businesses. That&rsquo;s it. Not restaurants, not fashion brands, not startups — plumbers, electricians, appliance repair technicians, geyser specialists, aircon installers and the trades around them.',
  'Because we build the same type of site every time, we already know what works: where the call button goes, what a customer needs to see before they trust you, and how to make a quote request take fifteen seconds instead of five minutes.',
  'That means we&rsquo;re faster and cheaper than a traditional agency — and because the site and the app are built together, an enquiry becomes a job on your dashboard without you retyping anything.',
] as const;

export const includedWebsite = [
  { icon: 'phone', t: 'Tap-to-Call Button', d: 'Fixed to the bottom of every mobile screen. One tap and the phone rings.' },
  { icon: 'bubble', t: 'WhatsApp Chat', d: 'Customers message you the way they already prefer to communicate.' },
  { icon: 'doc', t: 'Quote Request Form', d: 'Short, simple, and sent straight to your inbox and phone.' },
  { icon: 'pinDot', t: 'Service Area Pages', d: 'A page for each suburb you cover, so you show up in local searches.' },
  { icon: 'star', t: 'Google Business Profile Setup', d: 'Properly set up and linked, so you appear on Google Maps when someone searches nearby.' },
  { icon: 'mobile', t: 'Built Mobile-First', d: 'Designed for a customer standing in a flooded kitchen holding their phone.' },
  { icon: 'bolt', t: 'Fast Loading', d: 'A slow site loses the call. Yours won&rsquo;t be slow.' },
  { icon: 'reviews', t: 'Reviews Section', d: 'Your Google reviews displayed where new customers will see them.' },
  { icon: 'shield', t: 'Hosting, SSL &amp; Backups', d: 'We keep it online, secure and backed up. You never touch a server.' },
] as const;

export const includedApp = [
  { icon: 'list', t: 'Job Tracking', d: 'Every job in one list — booked, in progress, done. No more scrolling back through chats.' },
  { icon: 'user', t: 'Customer Database', d: 'Name, number, suburb, address and every job you have ever done for them.' },
  { icon: 'team', t: 'Technician Assignments', d: 'Assign a job to whoever is closest and see what each of your people is on today.' },
  { icon: 'history', t: 'Job History &amp; Notes', d: 'What you fixed, what it cost, what you told them. Useful the next time they call.' },
  { icon: 'inbox', t: 'Enquiries Land In The App', d: 'The quote form on your site opens as a job. Nothing gets retyped and nothing gets missed.' },
  { icon: 'mobile', t: 'Works On Your Phone', d: 'Built to be used standing next to a geyser, not sitting at a desk.' },
] as const;

export const steps = [
  { n: 1, t: 'Choose your package and pay the deposit', d: 'Pick the package that fits, pay 50% online, and we get started the same week. No sales call, no proposal document, no waiting around.' },
  { n: 2, t: 'Complete the online brief', d: 'A short form asking for your services, service areas, logo and photos. Takes about fifteen minutes. If you don&rsquo;t have photos or a logo, we&rsquo;ll tell you exactly what to do.' },
  { n: 3, t: 'Your site goes live in 14 days', d: 'We build, send you a preview link, make your revisions, and launch. Your job app login goes live the same day. Everything handled over WhatsApp and email, on your schedule — not squeezed into a meeting between jobs.' },
] as const;

export const buildsList = [
  'Up to 10 pages, written and built for you',
  'A page for each service you offer',
  'Up to 8 service area pages',
  'Mobile-first design with tap-to-call and WhatsApp',
  'Quote request form that feeds straight into the app',
  'Google Business Profile setup',
  'Basic on-page SEO and Google Analytics',
] as const;

export const runsList = [
  'The job app, for you and your technicians',
  'Job tracking, customer database and job history',
  'Hosting, domain management and SSL',
  'Weekly backups and security monitoring',
  'WordPress and plugin updates',
  'Small content changes — just WhatsApp us',
  'Uptime monitoring and support',
] as const;

export const monthlyApp = [
  'Every job tracked from enquiry to paid',
  'Customers, addresses and job history in one place',
  'Assign work to your technicians and see who is on what',
  'Unlimited jobs, on your phone or a laptop',
] as const;

export const monthlyHosting = [
  'Hosting, domain management and SSL',
  'Weekly backups, updates and security monitoring',
  'Small content changes — just WhatsApp us',
] as const;

export const work = [
  { t: 'FixItt Glass', img: 'fixitt', note: 'Client site' },
  { t: 'Appliance Repair — Cape Town', img: 'appliance', note: 'Demo site' },
  { t: 'Plumbing — Cape Town', img: 'plumbing', note: 'Demo site' },
] as const;

export const faqs = [
  { q: 'Do I own the website?', a: 'Yes. The site and the domain are yours. If you ever stop the monthly plan, we hand over the files and help you move it.' },
  { q: 'Can I edit it myself?', a: 'Yes — it&rsquo;s built on WordPress and we&rsquo;ll send you a short video showing how to change text and images. Most clients would rather just WhatsApp us, which is included in the monthly plan.' },
  { q: 'I don&rsquo;t have a logo. Is that a problem?', a: 'No. We can work with a clean text-based version of your business name, or you can add the brand pack and we&rsquo;ll design one.' },
  { q: 'I don&rsquo;t have photos of my work.', a: 'Most trades don&rsquo;t. We&rsquo;ll use professional stock imagery to start, and you can send us photos from your phone as you take them. Real photos of your team and your work always perform better, so we&rsquo;ll nudge you.' },
  { q: 'How long does it actually take?', a: '14 days from the day we receive your completed brief and deposit. The most common delay is waiting for content from the client, so the brief is designed to be quick.' },
  { q: 'Do we need to meet?', a: 'No. Everything runs over WhatsApp and email. If you&rsquo;d genuinely prefer a call once your brief is in, we can do a short online one — but it&rsquo;s not required and most clients don&rsquo;t bother.' },
  { q: 'Will this get me to the top of Google?', a: 'Not on its own, and be sceptical of anyone who promises that. Your site is built properly for search, and we set up your Google Business Profile, which is what actually drives local calls for trades. Ranking for competitive terms takes ongoing work over months — that is what <a href="/get-found/">Get Found</a> is for, if you decide you want it.' },
  { q: 'What if I want changes after it&rsquo;s live?', a: 'Small changes are included in your monthly plan. Bigger changes — a new section, a new page — we&rsquo;ll quote a fixed price.' },
  { q: 'Is the monthly compulsory?', a: 'Yes. We don&rsquo;t hand over unmaintained sites, because a neglected site reflects on us as much as on you.' },
  { q: 'Do I need to be technical to use the job app?', a: 'No. Everything is set up for you, and it is built to be used on a phone between jobs.' },
  { q: 'Do you generate leads for my business?', a: 'The system is designed to receive and manage enquiries. Paid ads and ongoing search work can be added separately — see <a href="/get-found/">Get Found</a>.' },
  { q: 'Does the app work on my phone? [ANSWER NEEDED]', a: '[ANSWER NEEDED — confirm supported devices and whether there is an installable app or just the browser.]' },
  { q: 'How many technicians can I add? [ANSWER NEEDED]', a: '[ANSWER NEEDED — confirm whether seats are limited or unlimited on the R499 plan.]' },
  { q: 'What happens to my job data if I cancel? [ANSWER NEEDED]', a: '[ANSWER NEEDED — this is the question a wary buyer will actually ask. Confirm export format and retention period.]' },
] as const;

export const meta = {
  home: {
    title: 'Websites & Job Management for Home Service Businesses | ProSites',
    description: 'Websites for home service businesses in Cape Town. Built for plumbers, electricians and appliance repair to turn Google searches into booked jobs. R4,999 once-off plus R499/month, live in 14 days.',
  },
  pricing: {
    title: 'Pricing — One Fixed Price, Everything Included | ProSites',
    description: 'Fixed-price websites plus job management software for South African home service businesses. R4,999 once-off plus R499/month. No quotes, no meetings.',
  },
  demo: {
    title: 'See the Home Service Website in Action | ProSites',
    description: 'A live demo of the home service website — mobile-first, built to convert searches into calls for plumbers, electricians and trades.',
  },
  work: {
    title: 'Our Work | ProSites',
    description: 'Websites we have built for service businesses in Cape Town and beyond.',
  },
  start: {
    title: 'Start Your Website | ProSites',
    description: 'Tell us about your business and we will reply within one working day with your start date. No meeting, no proposal document.',
  },
  getFound: {
    title: 'Get Found — Google Ads & Search for Trades | ProSites',
    description: 'Google Ads and ongoing search work for ProSites clients whose site is already live. Fixed monthly price, cancel with 30 days.',
  },
} as const;
