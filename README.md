# ProSites Website

Marketing site for ProSites — websites and job management software for home
service businesses in Cape Town.

Built with [Astro](https://astro.build). Ships static HTML with no client-side
framework; the only JavaScript on the page is the mobile nav toggle.

## Running it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output into dist/
npm run preview    # serve the built output
```

## Where things live

| Path | What |
|---|---|
| `src/data/site.ts` | Phone, email, WhatsApp, prices, nav, trades, testimonials |
| `src/data/content.ts` | Page copy, feature lists, FAQs, meta titles/descriptions |
| `src/styles/tokens.css` | Colour, type scale, spacing, radii — the whole design system |
| `src/components/` | Nav, Footer, Plan, Faq, CallBar, CheckList, Icon, Ph |
| `src/pages/` | One file per route |
| `src/assets/placeholder/` | Stand-in imagery — **see the README in that folder** |

Almost every real-world fact lives in `src/data/site.ts`. Change the phone
number there and it updates the header, the footer, the call bar and the
Start page at once.

## Demo client sites

`/demo/[industry]/` holds the client demo sites. Every industry gets the same
five pages from shared templates, plus a thank-you page and optional suburb
pages:

| Page | Route | Job |
|---|---|---|
| Home | `/demo/[industry]/` | The offer, trust, services, reviews, areas, quote form |
| Services | `/services/` | Every job in detail, symptoms, "from" prices, pricing rules |
| Areas | `/areas/` | Suburbs covered; links to any area pages |
| About | `/about/` | Owner, how they work, credentials, all reviews |
| Contact | `/contact/` | Quote form first, call/WhatsApp, hours, what happens next |

To add an industry:

1. Copy `src/data/demos/appliance-repair.ts` to a new file, e.g. `plumbing.ts`.
2. Change the facts: services, copy, colours (`theme`), form options (`quote`),
   FAQs. Leave out optional sections that don't fit, such as `brands`.
3. Register it in `src/data/demos/index.ts`.

Every page is generated from that one file. Industry-specific icons go in
`src/components/Icon.astro`. Only add an entry to `areaPages` when you have
genuinely local content for that suburb: near-identical suburb pages with
the name swapped are treated as doorway pages by Google.

All demo businesses are fictional, and each page carries a strip saying so.

## Before this goes live

- [ ] Replace the five watermarked iStock comps (`src/assets/placeholder/README.md`)
- [ ] Add a real logo — currently a grey `LOGO` block in the header and footer
- [ ] Fill in phone, email and WhatsApp in `src/data/site.ts`
- [ ] Replace the three placeholder testimonials with real ones
- [ ] Answer the five FAQs marked `[ANSWER NEEDED]` in `src/data/content.ts`
- [ ] Confirm the Get Found prices (`pricing.ads`, `pricing.seo`, `pricing.suggestedSpend`)
- [ ] Point `site` in `astro.config.mjs` and `public/robots.txt` at the real domain
- [ ] Supply demo screenshots and portfolio images (grey `Ph` blocks mark every slot)

Grep the built output for `[` to find any bracketed placeholder still shipping.

## The form

`/start/` posts to [Netlify Forms](https://docs.netlify.com/forms/setup/) —
`data-netlify="true"` plus a hidden `form-name` field and a honeypot. Netlify's
build bot detects it in the static HTML; nothing else to wire up. Submissions
land in the Netlify dashboard under **Forms → enquiry**, and you can add an
email notification there.

Success page: `/start/thanks/`.

## Adding Sanity later

The stack is ready for it. When you want blog posts:

```bash
npx astro add @sanity/astro @astrojs/react
```

Then:

1. Create a Sanity project (`npm create sanity@latest`) and note the project ID + dataset.
2. Add the integration to `astro.config.mjs` with `projectId`, `dataset`,
   `useCdn: true`.
3. Add a `post` schema in Sanity (title, slug, body, publishedAt, coverImage).
4. Create `src/pages/blog/index.astro` and `src/pages/blog/[slug].astro`, fetching
   with `sanityClient.fetch(groq\`*[_type == "post"]\`)`.
5. Optionally mount Sanity Studio at `/admin` via `@sanity/astro`'s Studio route.

Nothing in the current build needs to change to make that work — pages stay
static, and the blog can be statically generated at build time with a webhook
from Sanity triggering a Netlify rebuild.

## Deploying

Connect the repo in Netlify. `netlify.toml` already sets the build command,
publish directory, Node version and cache headers.
